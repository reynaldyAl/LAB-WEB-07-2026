import Link from "next/link";
import { notFound } from "next/navigation";
import dataBuku from "@/data/dataBuku";

export default async function DetailBuku({ params }) {
  // Gunakan await karena params berupa Promise di Next.js versi baru
  const { id } = await params;

  // Cari data buku berdasarkan id
  const buku = dataBuku.find((b) => b.id === id);

  // Jika buku tidak ditemukan, tampilkan halaman 404
  if (!buku) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Tombol Kembali */}
      <div className="mb-6">
        <Link
          href="/katalog"
          className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-800 transition"
        >
          ← Kembali ke Katalog
        </Link>
      </div>

      <div className="rounded-2xl border border-pink-100 bg-white p-8 shadow-sm">
        {/* Header Buku */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-pink-100 pb-6">
          <div>
            <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pink-700">
              {buku.kategori}
            </span>
            <h1 className="mt-3 text-3xl font-bold text-pink-900 sm:text-4xl">
              {buku.judul}
            </h1>
            <p className="mt-1 text-lg text-pink-700/80">
              oleh <span className="font-medium text-pink-900">{buku.penulis}</span>
            </p>
          </div>

          {/* Status Ketersediaan */}
          <div>
            <span
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${
                buku.tersedia
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {buku.tersedia ? "Tersedia" : "Dipinjam"}
            </span>
          </div>
        </div>

        {/* Informasi Detail */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              Tahun Terbit
            </h2>
            <p className="mt-1 text-lg font-medium text-pink-900">{buku.tahun}</p>
          </div>
        </div>

        {/* Sinopsis */}
        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-pink-400">
            Sinopsis
          </h2>
          <p className="mt-2 leading-relaxed text-pink-800/90">
            {buku.sinopsis}
          </p>
        </div>
      </div>
    </div>
  );
}