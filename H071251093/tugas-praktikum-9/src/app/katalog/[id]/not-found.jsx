import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl bg-white p-8 text-center shadow-md">
        <h1 className="text-3xl font-bold text-orange-900">Buku tidak ditemukan</h1>
        <p className="mt-2 text-stone-600">
          Buku yang Anda cari tidak ada atau sudah dihapus.
        </p>
        <Link
          href="/katalog"
          className="mt-6 inline-block rounded-lg bg-orange-700 px-5 py-2 text-white hover:bg-orange-800"
        >
          Kembali ke Katalog
        </Link>
      </div>
    </main>
  );
}