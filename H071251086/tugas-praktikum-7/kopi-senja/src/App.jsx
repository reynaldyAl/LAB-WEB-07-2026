import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

// Satu-satunya sumber data menu. Komponen anak hanya menerimanya lewat props.
const daftarMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

function App() {
  // State utama: hanya dua. Selebihnya dihitung dari keduanya.
  // instruksi 8
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]); // [{ id, jumlah }]

  function tambahMenu(id) {
    const menu = daftarMenu.find((m) => m.id === id);
    if (!menu || !menu.tersedia) return; // menu habis tidak boleh dipesan

    setPesanan((sebelumnya) => {
      const sudahAda = sebelumnya.some((p) => p.id === id);
      if (sudahAda) {
        return sebelumnya.map((p) =>
          p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p
        );
      }
      return [...sebelumnya, { id, jumlah: 1 }];
    });
  }

  function kurangiMenu(id) {
    setPesanan((sebelumnya) =>
      sebelumnya
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0)
    );
  }

  function kosongkanPesanan() {
    setPesanan([]);
  }

  // Data turunan (bukan state baru), sehingga Navbar dan Ringkasan
  // selalu menampilkan angka yang sama.
  const menuTampil =
    kategoriAktif === "Semua"
      ? daftarMenu
      : daftarMenu.filter((m) => m.kategori === kategoriAktif);

  const itemPesanan = pesanan.map((p) => {
    const menu = daftarMenu.find((m) => m.id === p.id);
    return { ...menu, jumlah: p.jumlah, subtotal: menu.harga * p.jumlah };
  });
  const jumlahItem = itemPesanan.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = itemPesanan.reduce((total, item) => total + item.subtotal, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#c41208] to-[#6f0804] px-3 py-6 font-sans text-tinta sm:px-8 sm:py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40">
        {/* lingkaran jambu di belakang judul, seperti pada referensi */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/3 h-[26rem] w-[26rem] rounded-full bg-jambu sm:left-1/2"
        />

        <Navbar
          kategoriAktif={kategoriAktif}
          onPilihKategori={setKategoriAktif}
          jumlahItem={jumlahItem}
          totalHarga={totalHarga}
        />

        <section className="relative z-10 flex flex-col gap-6 px-5 pb-6 pt-6 sm:flex-row sm:items-start sm:justify-between sm:px-8">
          <p className="max-w-[16rem] text-xs leading-relaxed tracking-wide text-tinta/70">
            <span aria-hidden="true" className="mr-1 font-display text-5xl leading-none text-merah">
              &ldquo;
            </span>
            Antrean panjang di jam makan siang? Pesan langsung dari meja Anda.
          </p>
          <h1 className="text-right font-display text-5xl leading-[1.05] text-merah sm:text-6xl lg:text-7xl">
            Nikmati senja,
            <br />
            hari ini.
          </h1>
        </section>

        <main className="relative z-10 grid items-start gap-10 px-5 pb-12 pt-4 sm:px-8 lg:grid-cols-[1fr_22rem]">
          <MenuList daftarMenu={menuTampil} onTambah={tambahMenu} />

          <aside className="flex flex-col gap-5 rounded-3xl bg-merah bg-plaid p-6 text-white shadow-xl shadow-merahTua/40 lg:sticky lg:top-6">
            <RingkasanPesanan
              itemPesanan={itemPesanan}
              jumlahItem={jumlahItem}
              totalHarga={totalHarga}
              onTambah={tambahMenu}
              onKurangi={kurangiMenu}
            />
            <FormPesan jumlahItem={jumlahItem} onKirim={kosongkanPesanan} />
          </aside>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;