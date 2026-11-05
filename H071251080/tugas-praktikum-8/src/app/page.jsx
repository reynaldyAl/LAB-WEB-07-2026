import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku, { kategoriBuku, gayaKategori, infoRuangBaca } from "@/data/dataBuku";

export default function BerandaPage() {
  // Semua angka dihitung dari dataBuku, bukan ditulis manual.
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia);
  const jumlahTersedia = bukuTersedia.length;
  const jumlahDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;
  const siapDipinjam = bukuTersedia.slice(0, 4);

  const statistik = [
    {
      label: "Total Koleksi Buku",
      nilai: totalBuku,
      catatan: "judul pilihan di rak kami",
      warna: "text-tinta",
    },
    {
      label: "Buku Tersedia",
      nilai: jumlahTersedia,
      catatan: "siap dibaca atau dipinjam hari ini",
      warna: "text-emerald-700",
    },
    {
      label: "Buku Dipinjam",
      nilai: jumlahDipinjam,
      catatan: "sedang dibawa pulang pembaca lain",
      warna: "text-red-700",
    },
  ];

  return (
    <div className="space-y-14">
      <Hero
        nama={infoRuangBaca.nama}
        slogan={infoRuangBaca.slogan}
        deskripsi={infoRuangBaca.deskripsi}
        lokasi={infoRuangBaca.lokasi}
        jamBuka={infoRuangBaca.jamBuka}
      />

      {/* Ringkasan koleksi */}
      <section aria-labelledby="judul-koleksi">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-senja-tua">
              Ringkasan Koleksi
            </p>
            <h2
              id="judul-koleksi"
              className="mt-1 font-serif text-3xl font-semibold tracking-tight"
            >
              Apa yang ada di rak hari ini
            </h2>
          </div>
          <Link
            href="/katalog"
            className="text-sm font-semibold text-senja-tua hover:underline"
          >
            Lihat semua buku <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <dl className="mt-6 grid gap-4 sm:grid-cols-3">
          {statistik.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-garis bg-white/70 p-6 shadow-sm"
            >
              <dt className="text-sm font-medium text-tinta-2">{item.label}</dt>
              <dd
                className={`mt-2 font-serif text-6xl font-semibold leading-none ${item.warna}`}
              >
                {item.nilai}
              </dd>
              <dd className="mt-3 text-sm text-tinta-2">{item.catatan}</dd>
            </div>
          ))}
        </dl>

        {/* Rak visual: satu punggung buku per judul, terang = tersedia */}
        <div className="mt-4 rounded-2xl border border-garis bg-kertas-tua/60 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-tinta-2">
            <p className="font-semibold uppercase tracking-widest">
              Rak hari ini
            </p>
            <p className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm bg-senja" /> Tersedia
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm bg-tinta/25" /> Dipinjam
              </span>
            </p>
          </div>
          <ul className="mt-4 flex items-end gap-1.5 border-b-4 border-tinta/80 pb-0">
            {dataBuku.map((buku) => (
              <li key={buku.id} className="min-w-0 flex-1">
                <Link
                  href={`/katalog/${buku.id}`}
                  title={`${buku.judul} — ${
                    buku.tersedia ? "tersedia" : "sedang dipinjam"
                  }`}
                  className={`block h-24 rounded-t-md transition hover:-translate-y-1 sm:h-28 ${
                    buku.tersedia
                      ? "bg-linear-to-b from-emas to-senja"
                      : "bg-tinta/25"
                  }`}
                >
                  <span className="sr-only">{buku.judul}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Siap dipinjam + kategori */}
      <section className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-garis bg-white/70 p-6 shadow-sm lg:col-span-3">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Siap dipinjam hari ini
          </h2>
          <ul className="mt-4 divide-y divide-garis">
            {siapDipinjam.map((buku) => (
              <li key={buku.id}>
                <Link
                  href={`/katalog/${buku.id}`}
                  className="group flex items-center justify-between gap-4 py-3"
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`h-10 w-2 rounded-full ${gayaKategori[buku.kategori].titik}`}
                    />
                    <span>
                      <span className="block font-medium group-hover:text-senja-tua">
                        {buku.judul}
                      </span>
                      <span className="block text-sm text-tinta-2">
                        {buku.penulis}
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-senja-tua transition group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-garis bg-white/70 p-6 shadow-sm lg:col-span-2">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Koleksi per kategori
          </h2>
          <ul className="mt-4 space-y-3">
            {kategoriBuku.map((kategori) => {
              const jumlah = dataBuku.filter(
                (buku) => buku.kategori === kategori,
              ).length;
              return (
                <li
                  key={kategori}
                  className="flex items-center justify-between rounded-xl bg-kertas-tua/60 px-4 py-3"
                >
                  <span className="flex items-center gap-3 font-medium">
                    <span
                      aria-hidden="true"
                      className={`size-3 rounded-full ${gayaKategori[kategori].titik}`}
                    />
                    {kategori}
                  </span>
                  <span className="text-sm text-tinta-2">{jumlah} buku</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Ajakan usul buku */}
      <section className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-malam p-8 text-kertas sm:flex-row sm:items-center sm:p-10">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight">
            Belum menemukan buku yang Anda cari?
          </h2>
          <p className="mt-2 text-kertas/75">
            Koleksi Pustaka Senja tumbuh dari usulan pembacanya. Sebutkan judul
            yang ingin Anda baca berikutnya.
          </p>
        </div>
        <Link
          href="/usulan"
          className="shrink-0 rounded-full bg-senja px-6 py-3 text-sm font-semibold text-malam transition hover:bg-emas"
        >
          Usulkan Buku
        </Link>
      </section>
    </div>
  );
}
