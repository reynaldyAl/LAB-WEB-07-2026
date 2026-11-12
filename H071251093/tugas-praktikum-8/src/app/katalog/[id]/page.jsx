import Link from "next/link";
import dataBuku from "@/data/dataBuku";

export default async function DetailBuku({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((b) => b.id === id);

  if (!buku) {
    return (
      <div className="rounded-xl border border-red-200 bg-white p-8 text-center">
        <h1 className="text-xl font-bold text-red-700">Buku tidak ditemukan</h1>
        <p className="mt-2 text-gray-600">
          Buku dengan id &quot;{id}&quot; tidak ada di koleksi Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="mt-5 inline-block rounded-lg bg-amber-700 px-4 py-2 text-white hover:bg-amber-800"
        >
          ← Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
        {buku.kategori}
      </span>
      <h1 className="mt-3 text-3xl font-bold text-gray-900">{buku.judul}</h1>
      <p className="mt-1 text-gray-600">oleh {buku.penulis}</p>

      <dl className="mt-5 grid grid-cols-2 gap-4 text-sm sm:max-w-sm">
        <div>
          <dt className="text-gray-500">Tahun Terbit</dt>
          <dd className="font-medium">{buku.tahun}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Status</dt>
          <dd
            className={
              buku.tersedia
                ? "font-medium text-green-700"
                : "font-medium text-red-700"
            }
          >
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </dd>
        </div>
      </dl>

      <h2 className="mt-6 font-semibold text-gray-900">Sinopsis</h2>
      <p className="mt-1 leading-relaxed text-gray-700">{buku.sinopsis}</p>

      <Link
        href="/katalog"
        className="mt-6 inline-block rounded-lg bg-amber-700 px-4 py-2 text-white hover:bg-amber-800"
      >
        ← Kembali ke Katalog
      </Link>
    </article>
  );
}
