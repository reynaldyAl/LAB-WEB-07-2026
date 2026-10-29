import MenuCard from './MenuCard'

function MenuList({ menuTampil, onTambah }) {
  if (menuTampil.length === 0) {
    return <p className="text-senja-700">Tidak ada menu pada kategori ini.</p>
  }

  return (
    <section aria-label="Daftar menu" className="grid content-start gap-4 sm:grid-cols-2">
      {menuTampil.map((menu) => (
        <MenuCard
          key={menu.id}
          id={menu.id}
          nama={menu.nama}
          kategori={menu.kategori}
          harga={menu.harga}
          tersedia={menu.tersedia}
          deskripsi={menu.deskripsi}
          onTambah={onTambah}
        />
      ))}
    </section>
  )
}

export default MenuList
