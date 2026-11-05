import Link from "next/link";
import Hero from "@/components/Hero";
import { dataBuku } from "@/data/dataBuku";

export default function BerandaPage() {
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  const statistik = [
    {
      label: "Total Koleksi Buku",
      nilai: totalBuku,
      ikon: "📚",
      warna: "bg-blue-100 text-blue-600",
    },
    {
      label: "Buku Tersedia",
      nilai: bukuTersedia,
      ikon: "✅",
      warna: "bg-emerald-100 text-emerald-600",
    },
    {
      label: "Buku Dipinjam",
      nilai: bukuDipinjam,
      ikon: "📖",
      warna: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <div className="space-y-8">
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca nyaman di dekat kampus. Pinjam, baca, dan usulkan buku favorit Anda."
        lokasi="Dekat Kampus, Makassar"
        jamBuka="Buka setiap hari, 08.00 - 21.00"
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/katalog"
            className="bg-amber-300 hover:bg-amber-400 text-amber-900 font-bold px-6 py-3 rounded-2xl shadow transition"
          >
            Jelajahi Katalog
          </Link>
          <Link
            href="/usulan"
            className="bg-white hover:bg-blue-50 text-teal-600 font-bold px-6 py-3 rounded-2xl shadow transition"
          >
            Usulkan Buku
          </Link>
        </div>
      </Hero>

      <section>
        <h2 className="text-2xl font-extrabold mb-4">Ringkasan Koleksi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {statistik.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-3xl p-6 shadow-md shadow-blue-200/60 flex items-center gap-4"
            >
              <span
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${item.warna}`}
              >
                {item.ikon}
              </span>
              <div>
                <p className="text-3xl font-extrabold">{item.nilai}</p>
                <p className="text-sm text-slate-500 font-medium">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}