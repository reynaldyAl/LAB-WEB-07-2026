import Link from "next/link";
import dataBuku from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <section className="mx-auto max-w-xl rounded-3xl border border-stone-200 bg-white px-6 py-16 text-center shadow-sm">
        <span className="text-4xl">⌕</span>
        <h1 className="mt-4 text-2xl font-semibold text-stone-900">
          Buku tidak ditemukan
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Maaf, buku dengan ID &quot;{id}&quot; tidak tersedia di katalog Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="mt-6 inline-flex rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          ← Kembali ke Katalog
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/katalog"
        className="inline-flex text-sm font-semibold text-green-700 hover:text-green-950"
      >
        ← Kembali ke Katalog
      </Link>

      <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft">
        <div className="bg-green-950 px-7 py-12 text-white sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            {buku.kategori} · Koleksi #{buku.id}
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            {buku.judul}
          </h1>
          <p className="mt-4 text-sm text-green-100">Ditulis oleh {buku.penulis}</p>
        </div>

        <div className="grid gap-8 p-7 sm:grid-cols-[1fr_220px] sm:p-10">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">Sinopsis</h2>
            <p className="mt-3 text-sm leading-8 text-stone-600">
              {buku.sinopsis}
            </p>
          </div>

          <aside className="h-fit rounded-2xl bg-stone-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              Informasi buku
            </p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-xs text-stone-500">Tahun terbit</dt>
                <dd className="mt-1 font-semibold text-stone-800">{buku.tahun}</dd>
              </div>
              <div>
                <dt className="text-xs text-stone-500">Kategori</dt>
                <dd className="mt-1 font-semibold text-stone-800">{buku.kategori}</dd>
              </div>
              <div>
                <dt className="text-xs text-stone-500">Status</dt>
                <dd
                  className={`mt-1 font-semibold ${
                    buku.tersedia ? "text-emerald-700" : "text-rose-600"
                  }`}
                >
                  {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </article>
  );
}