import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const initialMenuData = [
  {
    id: 1,
    nama: "Kopi Susu",
    kategori: "Kopi",
    harga: 18000,
    tersedia: true,
    deskripsi: "Espresso dengan susu segar dan gula aren.",
  },
  {
    id: 2,
    nama: "Americano",
    kategori: "Kopi",
    harga: 15000,
    tersedia: true,
    deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.",
  },
  {
    id: 3,
    nama: "Cappuccino",
    kategori: "Kopi",
    harga: 22000,
    tersedia: true,
    deskripsi: "Espresso, susu panas, dan busa susu tebal.",
  },
  {
    id: 4,
    nama: "Matcha Latte",
    kategori: "Non-Kopi",
    harga: 24000,
    tersedia: true,
    deskripsi: "Teh hijau matcha dengan susu.",
  },
  {
    id: 5,
    nama: "Teh Tarik",
    kategori: "Non-Kopi",
    harga: 14000,
    tersedia: false,
    deskripsi: "Teh susu yang ditarik hingga berbusa.",
  },
  {
    id: 6,
    nama: "Cokelat Panas",
    kategori: "Non-Kopi",
    harga: 20000,
    tersedia: true,
    deskripsi: "Cokelat pekat dengan susu hangat.",
  },
  {
    id: 7,
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 16000,
    tersedia: true,
    deskripsi: "Roti tebal dengan selai cokelat dan keju.",
  },
  {
    id: 8,
    nama: "Pisang Goreng",
    kategori: "Makanan",
    harga: 12000,
    tersedia: false,
    deskripsi: "Pisang goreng renyah dengan taburan keju.",
  },
  {
    id: 9,
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 25000,
    tersedia: true,
    deskripsi: "Nasi goreng kampung dengan telur mata sapi.",
  },
];

function App() {
  const [menuList] = useState(initialMenuData);
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [pesanSukses, setPesanSukses] = useState("");

  // Handler untuk menambah item ke pesanan
  function handleTambahPesanan(item) {
    if (!item.tersedia) return;

    setPesanan((prevPesanan) => {
      const eksis = prevPesanan.find((p) => p.id === item.id);
      if (eksis) {
        return prevPesanan.map((p) =>
          p.id === item.id ? { ...p, jumlah: p.jumlah + 1 } : p
        );
      } else {
        return [...prevPesanan, { ...item, jumlah: 1 }];
      }
    });
  }

  // Handler untuk mengurangi item dari pesanan
  function handleKurangiPesanan(id) {
    setPesanan((prevPesanan) => {
      const eksis = prevPesanan.find((p) => p.id === id);
      if (!eksis) return prevPesanan;
      if (eksis.jumlah === 1) {
        return prevPesanan.filter((p) => p.id !== id);
      }
      return prevPesanan.map((p) =>
        p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p
      );
    });
  }

  // Handler untuk menghapus item secara langsung dari keranjang
  function handleHapusItem(id) {
    setPesanan((prevPesanan) => prevPesanan.filter((p) => p.id !== id));
  }

  // Handler untuk submit form pesanan
  function handleKirimPesanan(nama, nomorMeja) {
    setPesanSukses(
      `Terima kasih, ${nama} (Meja ${nomorMeja})! Pesanan Anda sedang disiapkan.`
    );
    setPesanan([]);
  }

  // Kalkulasi total barang dan harga
  const totalItems = pesanan.reduce((acc, curr) => acc + curr.jumlah, 0);
  const totalPrice = pesanan.reduce(
    (acc, curr) => acc + curr.harga * curr.jumlah,
    0
  );

  // Filter menu berdasarkan kategori aktif
  const menuTersaring =
    kategoriAktif === "Semua"
      ? menuList
      : menuList.filter((item) => item.kategori === kategoriAktif);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex flex-col font-sans">
      <Navbar
        kategoriAktif={kategoriAktif}
        onKategoriChange={setKategoriAktif}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 space-y-6">
        {pesanSukses && (
          <div className="bg-emerald-100 border border-emerald-400 text-emerald-800 p-4 rounded-xl shadow-sm text-center font-medium">
            {pesanSukses}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MenuList
              menuList={menuTersaring}
              pesanan={pesanan}
              onTambah={handleTambahPesanan}
              onKurangi={handleKurangiPesanan}
            />
          </div>

          <div className="space-y-6">
            <RingkasanPesanan
              pesanan={pesanan}
              totalItems={totalItems}
              totalPrice={totalPrice}
              onTambah={handleTambahPesanan}
              onKurangi={handleKurangiPesanan}
              onHapusItem={handleHapusItem}
            />
            <FormPesan
              pesananEmpty={pesanan.length === 0}
              onKirim={handleKirimPesanan}
            />
          </div>
        </div>
      </main>

      <Footer kategoriAktif={kategoriAktif} />
    </div>
  );
}

export default App;