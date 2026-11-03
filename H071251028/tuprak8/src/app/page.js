import Link from "next/link";
import dataBuku from "@/data/dataBuku";
import Hero from "@/components/Hero";

export default function Beranda() {
  const totalBuku = dataBuku.length;

  const bukuTersedia = dataBuku.filter(
    (buku) => buku.tersedia === true
  ).length;

  const bukuDipinjam = dataBuku.filter(
    (buku) => buku.tersedia === false
  ).length;

  const statistik = [
    {
      judul: "Total Koleksi Buku",
      jumlah: totalBuku,
    },
    {
      judul: "Buku Tersedia",
      jumlah: bukuTersedia,
    },
    {
      judul: "Buku Dipinjam",
      jumlah: bukuDipinjam,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-10">
      <Hero
        nama="Pustaka Senja"
        slogan="Temukan cerita, perluas wawasan, dan temukan inspirasi baru melalui koleksi buku pilihan kami."
        lokasi="Dekat kampus"
        jamBuka="Senin–Sabtu, 09.00–17.00"
      />

      <section>
        <h2 className="mb-6 text-2xl font-bold text-pink-900">
          Statistik Koleksi
        </h2>

        <div className="grid gap-5 sm:grid-cols-3">
          {statistik.map((item) => (
            <div
              key={item.judul}
              className="rounded-2xl border border-pink-200 bg-white p-6 shadow-sm transition hover:border-pink-300"
            >
              <p className="text-sm font-semibold text-pink-500">
                {item.judul}
              </p>

              <p className="mt-3 text-4xl font-extrabold text-pink-600">
                {item.jumlah}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kotak bawah diubah jadi warna pink pastel yang lembut (bg-pink-100) */}
      <section className="rounded-2xl border border-pink-200 bg-pink-100 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-pink-900">
          Mulai Perjalanan Membacamu ✨
        </h2>

        <p className="mt-3 text-pink-800">
          Jelajahi koleksi buku kami atau usulkan buku yang ingin kamu baca.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/katalog"
            className="rounded-xl bg-pink-400 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-pink-500"
          >
            Lihat Katalog
          </Link>

          <Link
            href="/usulan"
            className="rounded-xl border border-pink-400 bg-white px-5 py-3 font-semibold text-pink-700 transition hover:bg-pink-50"
          >
            Usulkan Buku
          </Link>
        </div>
      </section>
    </div>
  );
}