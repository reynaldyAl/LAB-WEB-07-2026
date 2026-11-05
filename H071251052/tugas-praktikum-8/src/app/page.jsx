import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function HomePage() {
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const statistik = [
    { label: "Total koleksi", nilai: totalBuku, catatan: "Judul buku" },
    { label: "Buku tersedia", nilai: bukuTersedia, catatan: "Siap dibaca" },
    { label: "Sedang dipinjam", nilai: bukuDipinjam, catatan: "Dalam peminjaman" },
  ];

  return (
    <div className="space-y-14">
      <Hero
        nama="Pustaka Senja"
        slogan="Sebuah ruang baca sederhana untuk bertukar pengetahuan, menikmati cerita, dan menemukan inspirasi dari setiap halaman."
        lokasi="Disekitar anda"
        jamBuka="Senin – Senin, 09.00 – 17.00"
      />

      <section>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Koleksi kami
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Sedikit angka, banyak cerita.
            </h2>
          </div>
          <Link
            href="/katalog"
            className="text-sm font-semibold text-green-700 hover:text-green-950"
          >
            Lihat semua buku →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {statistik.map((item, index) => (
            <div
              key={item.label}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-stone-500">{item.label}</p>
                <span className="text-xs text-stone-400">0{index + 1}</span>
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-green-800">
                {item.nilai}
              </p>
              <p className="mt-1 text-xs text-stone-500">{item.catatan}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-green-100 bg-green-50 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
            Punya rekomendasi?
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            Bantu kami menambah cerita baru.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
            Usulkan buku yang menurutmu menarik untuk dibaca bersama komunitas Pustaka Senja.
          </p>
        </div>
        <Link
          href="/usulan"
          className="inline-flex items-center justify-center rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Buat Usulan <span className="ml-2">→</span>
        </Link>
      </section>
    </div>
  );
}