import Link from "next/link";
import dataBuku, { gayaKategori } from "@/data/dataBuku";

// Judul tab & pratinjau tautan (WhatsApp, dsb.) ikut berubah per buku,
// sehingga tautan /katalog/[id] enak dibagikan.
export async function generateMetadata({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return { title: "Buku Tidak Ditemukan" };
  }

  return {
    title: buku.judul,
    description: `${buku.judul} karya ${buku.penulis}. ${buku.sinopsis}`,
    openGraph: {
      title: `${buku.judul} | Pustaka Senja`,
      description: buku.sinopsis,
    },
  };
}

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-dashed border-garis bg-white/60 px-6 py-16 text-center">
        <p className="font-serif text-6xl font-semibold text-senja-tua">404</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold">
          Buku tidak ditemukan
        </h1>
        <p className="mt-3 text-tinta-2">
          Tidak ada buku dengan ID &quot;{id}&quot; di koleksi Pustaka Senja.
          Mungkin tautannya keliru atau bukunya belum kami miliki.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/katalog"
            className="rounded-full bg-tinta px-5 py-2.5 text-sm font-semibold text-kertas transition hover:bg-ungu"
          >
            &larr; Kembali ke Katalog
          </Link>
          <Link
            href="/usulan"
            className="rounded-full border border-garis px-5 py-2.5 text-sm font-semibold transition hover:bg-kertas-tua"
          >
            Usulkan buku ini
          </Link>
        </div>
      </div>
    );
  }

  const gaya = gayaKategori[buku.kategori];

  // Buku sekategori; yang tersedia ditampilkan lebih dulu agar berguna bagi pembaca.
  const bukuSejenis = dataBuku
    .filter((item) => item.kategori === buku.kategori && item.id !== buku.id)
    .sort((a, b) => Number(b.tersedia) - Number(a.tersedia));

  return (
    <article>
      <nav aria-label="Jejak halaman" className="text-sm text-tinta-2">
        <Link href="/katalog" className="hover:text-tinta hover:underline">
          Katalog
        </Link>
        <span aria-hidden="true" className="mx-2">
          /
        </span>
        <span className="text-tinta">{buku.judul}</span>
      </nav>

      <div className="mt-6 grid gap-8 md:grid-cols-5 md:gap-12">
        {/* Sampul */}
        <div className="md:col-span-2">
          <div
            className={`relative flex aspect-[3/4] max-w-sm flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br ${gaya.sampul} p-7 text-kertas shadow-2xl shadow-malam/25 md:max-w-none`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-4 bg-black/20"
            />
            <span
              aria-hidden="true"
              className="absolute -right-10 -top-10 size-44 rounded-full bg-kertas/10"
            />
            <p className="pl-3 text-xs font-semibold uppercase tracking-[0.25em] text-kertas/75">
              {buku.kategori}
            </p>
            <div className="pl-3">
              <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                {buku.judul}
              </h2>
              <p className="mt-2 text-sm text-kertas/85">{buku.penulis}</p>
            </div>
          </div>
        </div>

        {/* Informasi */}
        <div className="md:col-span-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
              buku.tersedia
                ? "bg-emerald-50 text-emerald-800 ring-emerald-600/30"
                : "bg-red-50 text-red-700 ring-red-600/25"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                buku.tersedia ? "bg-emerald-600" : "bg-red-500"
              }`}
            />
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {buku.judul}
          </h1>
          <p className="mt-2 text-lg text-tinta-2">oleh {buku.penulis}</p>

          <dl className="mt-6 grid grid-cols-3 divide-x divide-garis overflow-hidden rounded-2xl border border-garis bg-white/70 text-sm">
            <div className="p-4">
              <dt className="text-tinta-2">Kategori</dt>
              <dd className="mt-1 flex items-center gap-2 font-semibold">
                <span
                  aria-hidden="true"
                  className={`size-2.5 shrink-0 rounded-full ${gaya.titik}`}
                />
                {buku.kategori}
              </dd>
            </div>
            <div className="p-4">
              <dt className="text-tinta-2">Tahun terbit</dt>
              <dd className="mt-1 font-semibold">{buku.tahun}</dd>
            </div>
            <div className="p-4">
              <dt className="text-tinta-2">Status</dt>
              <dd
                className={`mt-1 font-semibold ${
                  buku.tersedia ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
              </dd>
            </div>
          </dl>

          <h2 className="mt-8 font-serif text-2xl font-semibold">Sinopsis</h2>
          <p className="mt-2 max-w-prose text-lg leading-relaxed text-tinta/90">
            {buku.sinopsis}
          </p>

          <p
            className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
              buku.tersedia
                ? "border-emerald-600/25 bg-emerald-50 text-emerald-900"
                : "border-red-600/20 bg-red-50 text-red-900"
            }`}
          >
            {buku.tersedia
              ? "Buku ini ada di rak dan bisa Anda baca atau pinjam langsung saat berkunjung."
              : "Buku ini sedang dipinjam pembaca lain. Lihat buku sejenis yang tersedia di bawah, atau cek lagi nanti."}
          </p>

          <Link
            href="/katalog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-tinta px-6 py-3 text-sm font-semibold text-kertas transition hover:bg-ungu focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-senja"
          >
            <span aria-hidden="true">&larr;</span> Kembali ke Katalog
          </Link>
        </div>
      </div>

      {bukuSejenis.length > 0 && (
        <section aria-labelledby="judul-sejenis" className="mt-16">
          <h2
            id="judul-sejenis"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            Buku sejenis dalam kategori {buku.kategori}
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {bukuSejenis.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/katalog/${item.id}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-garis bg-white/70 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span>
                    <span className="block font-semibold group-hover:text-senja-tua">
                      {item.judul}
                    </span>
                    <span className="block text-sm text-tinta-2">
                      {item.penulis} &middot; {item.tahun}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.tersedia
                        ? "bg-emerald-50 text-emerald-800"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {item.tersedia ? "Tersedia" : "Dipinjam"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
