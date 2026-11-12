import Link from "next/link";
import { notFound } from "next/navigation";
import { pool } from "@/lib/db";
import { parseId } from "@/lib/validasi";

export const dynamic = "force-dynamic";

export default async function DetailBuku({ params }) {
  const { id: idRaw } = await params;
  const id = parseId(idRaw);
  if (id === null) notFound();

  const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [id]);
  if (rows.length === 0) notFound();
  const b = rows[0];

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article className="rounded-2xl bg-white p-8 shadow-md">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
            {b.kategori}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              b.tersedia ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            }`}
          >
            {b.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-orange-900">{b.judul}</h1>
        <p className="mt-1 text-lg text-stone-600">{b.penulis}</p>
        <p className="text-stone-500">Terbit {b.tahun}</p>

        <h2 className="mt-6 font-semibold text-stone-900">Sinopsis</h2>
        <p className="mt-1 leading-relaxed text-stone-700">{b.sinopsis}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/katalog/${b.id}/edit`}
            className="rounded-lg bg-orange-700 px-5 py-2 text-white hover:bg-orange-800"
          >
            Edit
          </Link>
          <Link
            href="/katalog"
            className="rounded-lg border border-orange-700 px-5 py-2 text-orange-800 hover:bg-orange-50"
          >
            Kembali ke Katalog
          </Link>
        </div>
      </article>
    </main>
  );
}