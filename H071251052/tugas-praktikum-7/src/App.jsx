import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // Data menu ditulis satu kali sesuai ketentuan tugas.
  const [menu] = useState([
    { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren.", emoji: "☕" },
    { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.", emoji: "🖤" },
    { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal.", emoji: "🥛" },
    { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu.", emoji: "🍵" },
    { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa.", emoji: "🫖" },
    { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat.", emoji: "🍫" },
    { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju.", emoji: "🍞" },
    { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju.", emoji: "🍌" },
    { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi.", emoji: "🍳" }
  ]);

  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanError, setPesanError] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");

  const jumlahPesanan = pesanan.reduce((jumlah, item) => jumlah + item.jumlah, 0);
  const totalHarga = pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0);

  function tambahPesanan(itemMenu) {
    if (!itemMenu.tersedia) return;

    setPesanan((pesananSebelumnya) => {
      const sudahAda = pesananSebelumnya.find((item) => item.id === itemMenu.id);

      if (sudahAda) {
        return pesananSebelumnya.map((item) =>
          item.id === itemMenu.id ? { ...item, jumlah: item.jumlah + 1 } : item
        );
      }

      return [...pesananSebelumnya, { ...itemMenu, jumlah: 1 }];
    });

    setPesanError("");
    setPesanSukses("");
  }

  function ubahJumlah(idMenu, perubahan) {
    setPesanan((pesananSebelumnya) =>
      pesananSebelumnya
        .map((item) =>
          item.id === idMenu ? { ...item, jumlah: item.jumlah + perubahan } : item
        )
        .filter((item) => item.jumlah > 0)
    );
  }

  function kirimPesanan(event) {
    event.preventDefault();

    if (pesanan.length === 0) {
      setPesanError("Pesanan masih kosong. Silakan pilih menu terlebih dahulu.");
      setPesanSukses("");
      return;
    }

    if (namaPelanggan.trim() === "") {
      setPesanError("Nama pelanggan wajib diisi.");
      setPesanSukses("");
      return;
    }

    if (nomorMeja.trim() === "" || Number(nomorMeja) < 1 || !Number.isInteger(Number(nomorMeja))) {
      setPesanError("Masukkan nomor meja berupa bilangan bulat lebih dari 0.");
      setPesanSukses("");
      return;
    }

    setPesanSukses(`Terima kasih, ${namaPelanggan.trim()}! Pesanan untuk meja ${nomorMeja} berhasil dibuat.`);
    setPesanError("");
    setPesanan([]);
    setNamaPelanggan("");
    setNomorMeja("");
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar jumlahPesanan={jumlahPesanan} totalHarga={totalHarga} />

      <main id="beranda" className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        {pesanSukses && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800" role="status">
            <p className="font-semibold">Pesanan berhasil! 🎉</p>
            <p className="mt-1 text-sm">{pesanSukses}</p>
          </div>
        )}

        <section className="mb-9 overflow-hidden rounded-3xl bg-stone-900 px-6 py-9 text-white shadow-lg sm:px-10 sm:py-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-200">Hangat • Sederhana • Senja</p>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">Temukan teman terbaik untuk soremu.</h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-stone-300 sm:text-base">
                Selamat datang di Kedai Kopi Senja. Pilih menu favoritmu, lalu pesan langsung dari sini.
              </p>
            </div>
            <div className="hidden h-28 w-28 items-center justify-center rounded-full border border-amber-100/30 bg-white/10 text-6xl md:flex" aria-hidden="true">☕</div>
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2">☕ Kopi pilihan</span>
            <span className="rounded-full bg-white/10 px-4 py-2">🍵 Minuman segar</span>
            <span className="rounded-full bg-white/10 px-4 py-2">🍞 Camilan</span>
          </div>
        </section>

        <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-kopi-100 bg-white p-4">
            <p className="text-xs text-stone-500">Jumlah pesanan</p>
            <p className="mt-1 text-2xl font-bold text-kopi-900">{jumlahPesanan} <span className="text-sm font-medium">item</span></p>
          </div>
          <div className="rounded-2xl border border-kopi-100 bg-white p-4">
            <p className="text-xs text-stone-500">Total sementara</p>
            <p className="mt-1 text-xl font-bold text-kopi-900 sm:text-2xl">Rp{totalHarga.toLocaleString("id-ID")}</p>
          </div>
          <div className="col-span-2 rounded-2xl border border-kopi-100 bg-white p-4 sm:col-span-1">
            <p className="text-xs text-stone-500">Pilihan menu</p>
            <p className="mt-1 text-2xl font-bold text-kopi-900">9 <span className="text-sm font-medium">menu</span></p>
          </div>
        </section>

        <div className="space-y-2.5">
        </div>

        <div className="space-x-2.5">
          <aside className="space-y-6  lg:sticky lg:top-24">
            <MenuList
              menu={menu}
              kategoriAktif={kategoriAktif}
              setKategoriAktif={setKategoriAktif}
              tambahPesanan={tambahPesanan}
            />
            
            <RingkasanPesanan
              pesanan={pesanan}
              totalHarga={totalHarga}
              ubahJumlah={ubahJumlah}
            />
            <FormPesan
              namaPelanggan={namaPelanggan}
              setNamaPelanggan={setNamaPelanggan}
              nomorMeja={nomorMeja}
              setNomorMeja={setNomorMeja}
              kirimPesanan={kirimPesanan}
              pesanError={pesanError}
            />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;