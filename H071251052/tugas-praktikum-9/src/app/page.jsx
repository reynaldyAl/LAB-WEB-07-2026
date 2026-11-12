
import Link from "next/link";
import Hero from "@/components/Hero";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const hasil = await pool.query(`
    SELECT
      COUNT(*)::int AS total,
      COUNT(*) FILTER (WHERE tersedia = TRUE)::int AS tersedia,
      COUNT(*) FILTER (WHERE tersedia = FALSE)::int AS dipinjam
    FROM buku
  `);

  const statistik = hasil.rows[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Hero
        nama="Pustaka Senja"
        slogan="Sebuah ruang baca sederhana untuk bertukar pengetahuan, menikmati cerita, dan menemukan inspirasi dari setiap halaman."
        lokasi="Dekat area kampus"
        jamBuka="Senin–Sabtu, 09.00–17.00"
      />

      <section className="mt-10">
        <div className="mb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            Ringkasan Koleksi
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            Koleksi Pustaka Senja
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Total Koleksi",
              value: statistik.total,
            },
            {
              label: "Buku Tersedia",
              value: statistik.tersedia,
            },
            {
              label: "Sedang Dipinjam",
              value: statistik.dipinjam,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-semibold text-green-800">
                {item.value}
              </p>

              <p className="mt-2 text-sm text-stone-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 flex justify-center">
        <Link
          href="/katalog"
          className="rounded-full bg-green-800 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
        >
          Lihat Katalog Buku →
        </Link>
      </div>
    </main>
  );
}
