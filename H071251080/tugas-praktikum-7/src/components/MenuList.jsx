import MenuCard from "./MenuCard.jsx";

function MenuList({ daftarMenu, jumlahPerMenu, onTambah }) {
  return (
    <div>
      {daftarMenu.map((menu) => (
        <MenuCard
          key={menu.id}
          id={menu.id}
          nama={menu.nama}
          kategori={menu.kategori}
          harga={menu.harga}
          tersedia={menu.tersedia}
          deskripsi={menu.deskripsi}
          jumlahDipesan={jumlahPerMenu[menu.id] || 0}
          onTambah={onTambah}
        />
      ))}
    </div>
  );
}

export default MenuList;
