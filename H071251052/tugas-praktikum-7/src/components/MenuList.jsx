import { useState } from "react";
import MenuCard from "./MenuCard.jsx";

function MenuList({ menu, kategoriAktif, setKategoriAktif, tambahPesanan }) {
  const [menuDetailId, setMenuDetailId] = useState(null);
  const kategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];
  const menuTampil = kategoriAktif === "Semua"
    ? menu
    : menu.filter((item) => item.kategori === kategoriAktif);

  return (
    <section id="menu">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kopi-500">Menu kami</p>
          <h2 className="mt-1 text-2xl font-bold text-kopi-900 sm:text-3xl">Pilih favoritmu</h2>
        </div>
        <p className="text-sm text-stone-500">{menuTampil.length} menu ditampilkan</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter kategori">
        {kategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              kategoriAktif === kategori
                ? "bg-stone-900 text-white shadow"
                : "border border-kopi-100 bg-white text-kopi-700 hover:border-kopi-500"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {menuTampil.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            detailTerbuka={menuDetailId === item.id}
            bukaDetail={() => setMenuDetailId(menuDetailId === item.id ? null : item.id)}
            tambahPesanan={tambahPesanan}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuList;