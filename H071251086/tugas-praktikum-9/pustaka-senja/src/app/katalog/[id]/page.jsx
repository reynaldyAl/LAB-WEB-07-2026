import Link from "next/link";
import pool from "@/lib/db";
import { parseId } from "@/lib/id";
import { gayaKategori } from "@/lib/kategori";
import TombolHapus from "@/components/TombolHapus";


export const dynamic = "force-dynamic";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const idAngka = parseId(id);
  let buku = null;
  if (idAngka !== null) {
    const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [idAngka]);
    buku = rows[0] ?? null;
  }

  if (!buku) {
    return (
      <div className="max-w-md mx-auto bg-navy-800 border border-white/10 rounded-3xl p-8 text-center">
        <p className="text-5xl mb-3">🔍</p>
        <h1 className="font-display text-3xl text-rose-300 mb-2">
          Buku tidak ditemukan
        </h1>
        <p className="text-mist mb-6">
          Tidak ada buku dengan ID &quot;{id}&quot; di katalog Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="inline-block bg-crimson hover:bg-crimson-hover text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-crimson/30 transition"
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const gaya = gayaKategori[buku.kategori];

  return (
    <article className="max-w-3xl mx-auto bg-navy-800 border border-white/10 rounded-3xl p-4">
      <div
        className={`rounded-2xl bg-linear-to-br ${gaya.sampul} p-8 sm:p-10 min-h-56 flex flex-col justify-end`}
      >
        <div>
          <h1 className="font-display text-4xl sm:text-5xl text-white drop-shadow">
            {buku.judul}
          </h1>
          <p className="text-white/90 mt-1">{buku.penulis}</p>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="bg-white/10 text-blush text-sm font-medium px-4 py-1.5 rounded-full">
            {buku.kategori}
          </span>
          <span className="bg-white/10 text-mist text-sm font-medium px-4 py-1.5 rounded-full">
            Terbit {buku.tahun}
          </span>
          <span
            className={
              buku.tersedia
                ? "bg-emerald-500/15 text-emerald-300 text-sm font-medium px-4 py-1.5 rounded-full"
                : "bg-rose-500/15 text-rose-300 text-sm font-medium px-4 py-1.5 rounded-full"
            }
          >
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        <h2 className="font-display text-2xl mb-2">Sinopsis</h2>
        <p className="text-mist leading-relaxed mb-8">{buku.sinopsis}</p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/katalog"
            className="inline-block bg-crimson hover:bg-crimson-hover text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-crimson/30 transition"
          >
            Kembali ke Katalog
          </Link>
          <Link
            href={`/katalog/${buku.id}/edit`}
            className="inline-block bg-white/10 hover:bg-white/15 text-cream font-semibold px-7 py-3 rounded-full transition"
          >
            Edit
          </Link>
          <TombolHapus id={buku.id} judul={buku.judul} />
        </div>
      </div>
    </article>
  );
}