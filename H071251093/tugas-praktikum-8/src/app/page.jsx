import Link from "next/link";
import Hero from "@/components/Hero";
import dataBuku from "@/data/dataBuku";

export default function Beranda() {
  const total = dataBuku.length;
  const tersedia = dataBuku.filter((b) => b.tersedia).length;
  const dipinjam = dataBuku.filter((b) => !b.tersedia).length;

  const statistik = [
    { label: "Total Koleksi Buku", nilai: total },
    { label: "Buku Tersedia", nilai: tersedia },
    { label: "Buku Dipinjam", nilai: dipinjam },
  ];

  return (
    <div className="space-y-8">
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca nyaman untuk mahasiswa dan warga sekitar kampus. Temukan, simpan, dan usulkan buku favoritmu."
        lokasi="Dekat Kampus"
        jamBuka="Setiap hari, 08.00 – 20.00"
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {statistik.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-bold text-amber-800">{s.nilai}</p>
            <p className="mt-1 text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-wrap justify-center gap-3">
        <Link
          href="/katalog"
          className="rounded-lg bg-amber-700 px-5 py-2.5 font-medium text-white hover:bg-amber-800"
        >
          Lihat Katalog Buku
        </Link>
        <Link
          href="/usulan"
          className="rounded-lg border border-amber-700 px-5 py-2.5 font-medium text-amber-800 hover:bg-amber-100"
        >
          Usulkan Buku
        </Link>
      </section>
    </div>
  );
}
