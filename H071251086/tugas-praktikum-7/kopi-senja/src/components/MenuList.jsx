import MenuCard from "./MenuCard.jsx";

function MenuList({ daftarMenu, onTambah }) {
  return (
    <section aria-label="Daftar menu">
      <ul className="grid items-start gap-x-6 gap-y-4 sm:grid-cols-2">
        {/* intruksi 5 */}
        {daftarMenu.map((menu) => (
          <li key={menu.id}>
            <MenuCard
            // props
              id={menu.id}
              nama={menu.nama}
              kategori={menu.kategori}
              harga={menu.harga}
              tersedia={menu.tersedia}
              deskripsi={menu.deskripsi}
              onTambah={onTambah}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MenuList;