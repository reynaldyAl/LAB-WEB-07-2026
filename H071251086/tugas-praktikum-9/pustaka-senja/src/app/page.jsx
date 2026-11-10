import Link from "next/link";
import Hero from "@/components/Hero";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

// disini penggunaannyami yang bakal ditampilkan ke Beranda
export default async function BerandaPage() {
const { rows } = await pool.query(
  `SELECT
     COUNT(*)::int AS total,
     COUNT(*) FILTER (WHERE tersedia)::int AS tersedia,
     COUNT(*) FILTER (WHERE NOT tersedia)::int AS dipinjam
   FROM buku`
);
const totalBuku = rows[0].total;
const bukuTersedia = rows[0].tersedia;
const bukuDipinjam = rows[0].dipinjam;

const statistik = [
  { label: "Total Koleksi Buku", nilai: totalBuku },
  { label: "Buku Tersedia", nilai: bukuTersedia },
  { label: "Buku Dipinjam", nilai: bukuDipinjam },
];

  return (
    <div className="space-y-6">
      <Hero
        label="Ruang baca komunitas"
        nama="Pustaka Senja"
        slogan="Ruang baca nyaman di dekat kampus. Pinjam, baca, dan usulkan buku favorit Anda."
        gambar="/hero-rak.png"
        altGambar="Rak buku Pustaka Senja berisi koleksi buku bersampul klasik"
        lokasi="Dekat Kampus, Makassar"
        jamBuka="Buka setiap hari, 08.00 - 21.00"
      >
        <Link
          href="/katalog"
          className="bg-crimson hover:bg-crimson-hover text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-crimson/40 transition"
        >
          Jelajahi Katalog
        </Link>
        <Link
          href="/usulan"
          className="bg-white/10 hover:bg-white/15 text-cream font-semibold px-8 py-3.5 rounded-full transition"
        >
          Usulkan Buku
        </Link>
      </Hero>

      <section>
        <h2 className="font-display text-3xl text-center mb-6">Ringkasan koleksi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {statistik.map((item) => (
            <div
              key={item.label}
              className="bg-navy-800 border border-white/10 rounded-3xl p-8 text-center"
            >
              <p className="font-display text-6xl text-blush">{item.nilai}</p>
              <p className="text-sm text-mist mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}