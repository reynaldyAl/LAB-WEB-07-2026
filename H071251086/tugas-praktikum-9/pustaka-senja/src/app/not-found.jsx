import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto bg-navy-800 border border-white/10 rounded-3xl p-8 text-center">
      <p className="font-display text-6xl text-blush mb-2">404</p>
      <h1 className="font-display text-2xl mb-2">Halaman tidak ditemukan</h1>
      <p className="text-mist mb-6">
        Buku atau halaman yang Anda cari tidak ada di Pustaka Senja.
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