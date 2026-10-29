import MenuCard from "./MenuCard.jsx";

function MenuList({ menuList, pesanan, onTambah, onKurangi }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 text-stone-700">Daftar Menu</h2>
      {menuList.length === 0 ? (
        <p className="text-stone-500 italic bg-white p-6 rounded-xl text-center">
          Tidak ada menu dalam kategori ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuList.map((item) => {
            const itemInCart = pesanan.find((p) => p.id === item.id);
            const jumlah = itemInCart ? itemInCart.jumlah : 0;

            return (
              <MenuCard
                key={item.id}
                item={item}
                jumlah={jumlah}
                onTambah={onTambah}
                onKurangi={onKurangi}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MenuList;