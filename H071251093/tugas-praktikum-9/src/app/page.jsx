import Link from "next/link";
import { pool } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Beranda() {
  const { rows } = await pool.query(
    `SELECT COUNT(*)::int                             AS total,
            COUNT(*) FILTER (WHERE tersedia)::int     AS tersedia,
            COUNT(*) FILTER (WHERE NOT tersedia)::int AS dipinjam
       FROM buku`
  );
  const { total, tersedia, dipinjam } = rows[0];

  const statistik = [
    { angka: total, label: "Total Koleksi Buku" },
    { angka: tersedia, label: "Buku Tersedia" },
    { angka: dipinjam, label: "Buku Dipinjam" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="rounded-2xl bg-[linear-gradient(135deg,#fef3c7,#fed7aa)] px-8 py-16 text-center shadow-md">
        <h1 className="text-5xl font-bold text-orange-900">Pustaka Senja</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-700">
          Ruang baca nyaman untuk mahasiswa dan warga sekitar kampus. Temukan,
          simpan, dan usulkan buku favoritmu.
        </p>
        <p className="mt-6 text-stone-600">
          Dekat Kampus · Setiap hari, 08.00 – 20.00
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {statistik.map((s) => (
          <div key={s.label} className="rounded-2xl bg-white p-6 text-center shadow-md">
            <p className="text-4xl font-bold text-orange-800">{s.angka}</p>
            <p className="mt-1 text-stone-700">{s.label}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/katalog"
          className="rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white hover:bg-orange-800"
        >
          Lihat Katalog Buku
        </Link>
        <Link
          href="/usulan"
          className="rounded-lg border border-orange-700 px-6 py-3 font-semibold text-orange-800 hover:bg-orange-50"
        >
          Usulkan Buku
        </Link>
      </div>
    </main>
  );
}