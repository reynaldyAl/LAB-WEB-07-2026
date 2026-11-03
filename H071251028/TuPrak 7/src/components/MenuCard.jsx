import { useState } from "react";

function MenuCard({ item, jumlah, onTambah, onKurangi }) {
  // State lokal untuk buka/tutup detail deskripsi per item (tidak memengaruhi item lain)
  const [tampilDetail, setTampilDetail] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border p-4 flex flex-col justify-between transition-all ${
        !item.tersedia ? "opacity-60 bg-stone-50 border-stone-200" : "border-stone-200"
      }`}
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-stone-800 text-lg">{item.nama}</h3>
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
              {item.kategori}
            </span>
          </div>
          <span className="font-semibold text-amber-900">
            Rp {item.harga.toLocaleString("id-ID")}
          </span>
        </div>

        {/* Status Ketersediaan */}
        {!item.tersedia && (
          <p className="text-xs text-rose-600 font-semibold mb-2">
            [ Habis / Tidak Tersedia ]
          </p>
        )}

        {/* Tombol Detail Deskripsi */}
        <button
          onClick={() => setTampilDetail(!tampilDetail)}
          className="text-xs text-amber-700 underline mb-2 block hover:text-amber-900"
        >
          {tampilDetail ? "Sembunyikan Detail" : "Lihat Detail"}
        </button>

        {tampilDetail && (
          <p className="text-xs text-stone-600 bg-stone-50 p-2 rounded-lg mb-3">
            {item.deskripsi}
          </p>
        )}
      </div>

      {/* Kontrol Tambah/Kurang */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between mt-2">
        <span className="text-xs font-medium text-stone-500">
          Jumlah: {jumlah}
        </span>
        <div className="flex items-center gap-2">
          {jumlah > 0 && (
            <button
              onClick={() => onKurangi(item.id)}
              className="w-8 h-8 rounded-lg bg-stone-200 text-stone-700 font-bold hover:bg-stone-300"
            >
              -
            </button>
          )}
          <button
            onClick={() => onTambah(item)}
            disabled={!item.tersedia}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              item.tersedia
                ? "bg-amber-800 text-white hover:bg-amber-900"
                : "bg-stone-300 text-stone-500 cursor-not-allowed"
            }`}
          >
            {item.tersedia ? "+ Tambah" : "Habis"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;