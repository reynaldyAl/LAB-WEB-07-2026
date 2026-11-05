import Link from "next/link";
import { dataBuku, gayaKategori } from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-3xl p-8 text-center shadow-md shadow-blue-200/60">
        <p className="text-5xl mb-3">🔍</p>
        <h1 className="text-2xl font-extrabold text-red-500 mb-2">
          Buku tidak ditemukan
        </h1>
        <p className="text-slate-500 mb-6">
          Tidak ada buku dengan ID &quot;{id}&quot; di katalog Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-2xl transition"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  const gaya = gayaKategori[buku.kategori];

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-3xl p-4 shadow-md shadow-blue-200/60">
      <div
        className={`rounded-2xl bg-linear-to-br ${gaya.sampul} p-8 sm:p-10 min-h-56 flex flex-col justify-between`}
      >
        <span className="text-5xl">{gaya.ikon}</span>
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">
            {buku.judul}
          </h1>
          <p className="text-white/90 font-medium mt-1">{buku.penulis}</p>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className="bg-blue-50 text-teal-600 text-sm font-bold px-4 py-1.5 rounded-full">
            {buku.kategori}
          </span>
          <span className="bg-slate-100 text-slate-600 text-sm font-bold px-4 py-1.5 rounded-full">
            Terbit {buku.tahun}
          </span>
          <span
            className={
              buku.tersedia
                ? "bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full"
                : "bg-red-100 text-red-600 text-sm font-bold px-4 py-1.5 rounded-full"
            }
          >
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        <h2 className="text-lg font-extrabold mb-2">Sinopsis</h2>
        <p className="text-slate-600 leading-relaxed mb-8">{buku.sinopsis}</p>

        <Link
          href="/katalog"
          className="inline-block bg-amber-300 hover:bg-amber-400 text-amber-900 font-bold px-6 py-3 rounded-2xl transition"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    </article>
  );
}