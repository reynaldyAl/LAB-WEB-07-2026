import Link from "next/link";
import { notFound } from "next/navigation";
import pool from "@/lib/db";
import TombolHapus from "@/components/TombolHapus";

export const dynamic = "force-dynamic";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const hasil = await pool.query(
    `SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis
     FROM buku
     WHERE id = $1`,
    [Number(id)]
  );

  const buku = hasil.rows[0];

  if (!buku) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/katalog"
        className="text-sm font-medium text-green-800 hover:underline"
      >
        ← Kembali ke Katalog
      </Link>

      <article className="mt-6 rounded-3xl border border-stone-200 bg-white p-7 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-800">
            {buku.kategori}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              buku.tersedia
                ? "bg-emerald-50 text-emerald-700"
                : "bg-rose-50 text-rose-700"
            }`}
          >
            {buku.tersedia
              ? "Tersedia"
              : "Sedang Dipinjam"}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          {buku.judul}
        </h1>

        <p className="mt-3 text-stone-500">
          {buku.penulis} · {buku.tahun}
        </p>

        <div className="my-8 border-t border-stone-100" />

        <h2 className="text-sm font-semibold uppercase tracking-wider text-green-800">
          Sinopsis
        </h2>

        <p className="mt-3 text-base leading-8 text-stone-600">
          {buku.sinopsis}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href={`/katalog/${buku.id}/edit`}
            className="rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            Edit Buku
          </Link>

          <TombolHapus id={buku.id} />
        </div>
      </article>
    </section>
  );
}