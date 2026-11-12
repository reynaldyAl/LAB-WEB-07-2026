import Link from "next/link";
import { pool } from "@/lib/db";
import { tambahBuku } from "./actions";
import FormBuku from "@/components/FormBuku";
import TombolHapus from "@/components/TombolHapus";
import TombolSimpan from "@/components/TombolSimpan";

export const dynamic = "force-dynamic";

export default async function KatalogPage({ searchParams }) {
  const { error, kategori } = await searchParams;

  const { rows: daftarKategori } = await pool.query(
    "SELECT DISTINCT kategori FROM buku ORDER BY kategori"
  );

  const { rows: buku } = kategori
    ? await pool.query(
        `SELECT id, judul, penulis, kategori, tahun, tersedia
           FROM buku WHERE kategori = $1 ORDER BY id`,
        [kategori]
      )
    : await pool.query(
        "SELECT id, judul, penulis, kategori, tahun, tersedia FROM buku ORDER BY id"
      );

  const pill = (aktif) =>
    `rounded-full border px-5 py-2 transition-colors ${
      aktif
        ? "border-orange-700 bg-orange-700 font-semibold text-white"
        : "border-stone-300 bg-white text-stone-700 hover:border-orange-400"
    }`;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-4xl font-bold text-orange-900">Katalog Buku</h1>

      {error && (
        <p className="mt-4 rounded-lg bg-red-100 p-3 text-red-700">{error}</p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/katalog" className={pill(!kategori)}>Semua</Link>
        {daftarKategori.map((k) => (
          <Link
            key={k.kategori}
            href={`/katalog?kategori=${encodeURIComponent(k.kategori)}`}
            className={pill(kategori === k.kategori)}
          >
            {k.kategori}
          </Link>
        ))}
      </div>

      {buku.length === 0 && (
        <p className="mt-8 text-stone-600">Belum ada buku pada kategori ini.</p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {buku.map((b) => (
          <article key={b.id} className="rounded-2xl bg-white p-5 shadow-md">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                {b.kategori}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  b.tersedia ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                }`}
              >
                {b.tersedia ? "Tersedia" : "Sedang Dipinjam"}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-stone-900">{b.judul}</h2>
            <p className="text-stone-600">{b.penulis}</p>
            <p className="text-sm text-stone-500">Terbit {b.tahun}</p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <TombolSimpan />
              <Link
                href={`/katalog/${b.id}`}
                className="rounded-lg bg-orange-700 px-4 py-2 text-white hover:bg-orange-800"
              >
                Lihat Detail
              </Link>
              <Link
                href={`/katalog/${b.id}/edit`}
                className="rounded-lg border border-stone-300 px-4 py-2 text-stone-700 hover:bg-stone-50"
              >
                Edit
              </Link>
              <TombolHapus id={b.id} judul={b.judul} />
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-orange-900">Tambah Buku</h2>
        <FormBuku action={tambahBuku} label="Simpan Buku" />
      </section>
    </main>
  );
}