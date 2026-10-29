import { useState } from 'react'
import Navbar from './components/Navbar'
import MenuList from './components/MenuList'
import RingkasanPesanan from './components/RingkasanPesanan'
import FormPesan from './components/FormPesan'
import Footer from './components/Footer'

const DATA_MENU = [
  { id: 1, nama: 'Kopi Susu', kategori: 'Kopi', harga: 18000, tersedia: true, deskripsi: 'Espresso dengan susu segar dan gula aren.' },
  { id: 2, nama: 'Americano', kategori: 'Kopi', harga: 15000, tersedia: true, deskripsi: 'Espresso dengan air panas, rasa kuat dan bersih.' },
  { id: 3, nama: 'Cappuccino', kategori: 'Kopi', harga: 22000, tersedia: true, deskripsi: 'Espresso, susu panas, dan busa susu tebal.' },
  { id: 4, nama: 'Matcha Latte', kategori: 'Non-Kopi', harga: 24000, tersedia: true, deskripsi: 'Teh hijau matcha dengan susu.' },
  { id: 5, nama: 'Teh Tarik', kategori: 'Non-Kopi', harga: 14000, tersedia: false, deskripsi: 'Teh susu yang ditarik hingga berbusa.' },
  { id: 6, nama: 'Cokelat Panas', kategori: 'Non-Kopi', harga: 20000, tersedia: true, deskripsi: 'Cokelat pekat dengan susu hangat.' },
  { id: 7, nama: 'Roti Bakar', kategori: 'Makanan', harga: 16000, tersedia: true, deskripsi: 'Roti tebal dengan selai cokelat dan keju.' },
  { id: 8, nama: 'Pisang Goreng', kategori: 'Makanan', harga: 12000, tersedia: false, deskripsi: 'Pisang goreng renyah dengan taburan keju.' },
  { id: 9, nama: 'Nasi Goreng', kategori: 'Makanan', harga: 25000, tersedia: true, deskripsi: 'Nasi goreng kampung dengan telur mata sapi.' },
]

const DAFTAR_KATEGORI = ['Semua', 'Kopi', 'Non-Kopi', 'Makanan']

function App() {
  const [kategoriAktif, setKategoriAktif] = useState('Semua')
  // Pesanan hanya menyimpan id dan jumlah; nama, harga, total diturunkan dari DATA_MENU.
  const [pesanan, setPesanan] = useState([])
  const [pesananTerkirim, setPesananTerkirim] = useState(null)

  const menuTampil =
    kategoriAktif === 'Semua'
      ? DATA_MENU
      : DATA_MENU.filter((menu) => menu.kategori === kategoriAktif)

  const itemPesanan = pesanan.map((p) => {
    const menu = DATA_MENU.find((m) => m.id === p.id)
    return {
      id: p.id,
      nama: menu.nama,
      harga: menu.harga,
      jumlah: p.jumlah,
      subtotal: menu.harga * p.jumlah,
    }
  })
  const totalJumlah = itemPesanan.reduce((total, item) => total + item.jumlah, 0)
  const totalHarga = itemPesanan.reduce((total, item) => total + item.subtotal, 0)

  function tambahPesanan(id) {
    const menu = DATA_MENU.find((m) => m.id === id)
    if (!menu || !menu.tersedia) return

    setPesananTerkirim(null)
    setPesanan((sebelumnya) =>
      sebelumnya.some((p) => p.id === id)
        ? sebelumnya.map((p) => (p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p))
        : [...sebelumnya, { id, jumlah: 1 }],
    )
  }

  function kurangiPesanan(id) {
    setPesanan((sebelumnya) =>
      sebelumnya
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0),
    )
  }

  function kirimPesanan(dataPemesan) {
    setPesananTerkirim(dataPemesan)
    setPesanan([])
  }

  return (
    <div className="min-h-screen bg-senja-50 text-senja-900">
      <Navbar
        totalJumlah={totalJumlah}
        totalHarga={totalHarga}
        daftarKategori={DAFTAR_KATEGORI}
        kategoriAktif={kategoriAktif}
        onPilihKategori={setKategoriAktif}
      />

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-6 lg:grid-cols-[1fr_22rem]">
        <MenuList menuTampil={menuTampil} onTambah={tambahPesanan} />

        <aside className="flex flex-col gap-6">
          {pesananTerkirim && (
            <div role="status" className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-900">
              <p className="font-semibold">Terima kasih, {pesananTerkirim.nama}!</p>
              <p className="text-sm">
                Pesanan untuk meja {pesananTerkirim.meja} sudah kami terima dan sedang disiapkan.
              </p>
            </div>
          )}
          <RingkasanPesanan
            itemPesanan={itemPesanan}
            totalJumlah={totalJumlah}
            totalHarga={totalHarga}
            onKurangi={kurangiPesanan}
          />
          <FormPesan jumlahPesanan={totalJumlah} onKirim={kirimPesanan} />
        </aside>
      </main>

      <Footer />
    </div>
  )
}

export default App
