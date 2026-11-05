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
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi.", imam: "kopi" },
];

const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan", "Imam"];

function App() {
  // State utama (satu data, satu state)
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]); // [{ id, jumlah }]
  const [pesananTerkirim, setPesananTerkirim] = useState(null); // { nama, meja } atau null

  // Data turunan: dihitung dari state, tidak disimpan di state lain,
  // sehingga angka di Navbar, daftar menu, dan struk selalu sama.
  const menuTampil =
    kategoriAktif === "Semua"
      ? daftarMenu
      : daftarMenu.filter((menu) => menu.kategori === kategoriAktif);

  const itemPesanan = pesanan.map((p) => {
    const menu = daftarMenu.find((m) => m.id === p.id);
    return { id: menu.id, nama: menu.nama, harga: menu.harga, jumlah: p.jumlah };
  });
  const jumlahItem = itemPesanan.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = itemPesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );
  const jumlahPerMenu = Object.fromEntries(pesanan.map((p) => [p.id, p.jumlah]));
  const jumlahTersedia = daftarMenu.filter((m) => m.tersedia).length;

  function handleTambah(id) {
    const menu = daftarMenu.find((m) => m.id === id);
    if (!menu || !menu.tersedia) return; // menu habis tidak bisa dipesan

    setPesananTerkirim(null);
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

  function handleKurangi(id) {
    setPesanan((sebelumnya) =>
      sebelumnya
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0)
    );
  }

  function handleHapus(id) {
    setPesanan((sebelumnya) => sebelumnya.filter((p) => p.id !== id));
  }

  function handleKirim(nama, meja) {
    setPesananTerkirim({ nama, meja });
    setPesanan([]);
  }

  return (
    <div className="flex min-h-screen flex-col bg-senja-900 pb-24 text-senja-50 lg:pb-0">
      <Navbar
        daftarKategori={daftarKategori}
        kategoriAktif={kategoriAktif}
        onKategoriClick={setKategoriAktif}
        jumlahItem={jumlahItem}
        totalHarga={totalHarga}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_24rem] lg:items-start lg:gap-16">
          <section aria-label="Daftar menu">
            <div className="mb-2 border-b border-senja-700 pb-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-senja-500">
                Papan menu · {menuTampil.length} dari {daftarMenu.length}
              </p>
              <h2 className="mt-2 font-display text-5xl font-bold leading-none sm:text-6xl">
                {kategoriAktif === "Semua" ? (
                  <>
                    Semua <span className="font-normal italic text-senja-500">menu</span>
                  </>
                ) : (
                  <>
                    Menu <span className="font-normal italic text-senja-500">{kategoriAktif}</span>
                  </>
                )}
              </h2>
              <p className="mt-3 max-w-md text-sm text-senja-100/70">
                Pilih dari meja, tekan Tambah, lalu kirim pesananmu. Menu yang
                bertanda habis belum bisa dipesan.
              </p>
            </div>

            <MenuList
              daftarMenu={menuTampil}
              jumlahPerMenu={jumlahPerMenu}
              onTambah={handleTambah}
            />
          </section>

          <aside id="pesanan" className="scroll-mt-28 lg:sticky lg:top-28">
            {pesananTerkirim && (
              <div
                role="status"
                className="animate-fade-up mb-6 flex items-start gap-3 rounded-xl border border-dashed border-emerald-300/60 bg-emerald-300/10 p-4 text-emerald-100"
              >
                <div className="flex-1">
                  <p className="font-display text-lg font-bold">
                    Terima kasih, {pesananTerkirim.nama}!
                  </p>
                  <p className="text-sm text-emerald-100/80">
                    Pesanan untuk meja {pesananTerkirim.meja} sudah kami terima
                    dan segera disiapkan.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Tutup pesan"
                  onClick={() => setPesananTerkirim(null)}
                  className="h-8 w-8 rounded-full text-xl leading-none text-emerald-100 hover:bg-emerald-300/20"
                >
                  ×
                </button>
              </div>
            )}

            {/* Struk kertas: ringkasan + form dalam satu lembar */}
            <div className="tepi-sobek rounded-t-2xl bg-senja-50 text-senja-900 shadow-2xl shadow-black/40">
              <RingkasanPesanan
                itemPesanan={itemPesanan}
                jumlahItem={jumlahItem}
                totalHarga={totalHarga}
                onTambah={handleTambah}
                onKurangi={handleKurangi}
                onHapus={handleHapus}
              />
              <FormPesan jumlahItem={jumlahItem} onKirim={handleKirim} />
            </div>
          </aside>
        </div>
      </main>

      {/* Bar pesanan untuk layar kecil */}
      {jumlahItem > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-20 border-t border-senja-700 bg-senja-900/95 p-3 backdrop-blur lg:hidden">
          <a
            href="#pesanan"
            className="flex min-h-12 items-center justify-between rounded-full bg-senja-50 px-5 text-senja-900"
          >
            <span className="font-mono text-sm">{jumlahItem} item</span>
            <span className="font-mono text-sm font-semibold">
              Lihat struk · Rp {totalHarga.toLocaleString("id-ID")}
            </span>
          </a>
        </div>
      )}

      <Footer jumlahMenu={daftarMenu.length} jumlahTersedia={jumlahTersedia} />
    </div>
  );
}

export default App;
