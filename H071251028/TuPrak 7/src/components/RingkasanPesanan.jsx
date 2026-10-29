import React from 'react';

export default function RingkasanPesanan({ pesanan, totalItems, totalPrice, onTambah, onKurangi, onHapusItem }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 sticky top-6">
      <h3 className="text-lg font-bold text-stone-800 mb-4 flex items-center justify-between">
        <span>Ringkasan Pesanan</span>
        <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-medium">
          {totalItems} Item
        </span>
      </h3>

      {pesanan.length === 0 ? (
        <div className="text-center py-8 text-stone-400 text-sm">
          Belum ada pesanan yang dipilih. Silakan pilih menu di samping.
        </div>
      ) : (
        <div className="space-y-4">
          <div className="divide-y divide-stone-100 max-h-60 overflow-y-auto pr-1">
            {pesanan.map((item) => (
              <div key={item.id} className="py-3 flex items-center justify-between gap-2">
                <div className="flex-1">
                  <h4 className="font-medium text-stone-800 text-sm">{item.nama}</h4>
                  <p className="text-xs text-stone-500">
                    Rp {item.harga.toLocaleString('id-ID')} x {item.jumlah}
                  </p>
                </div>

                {/* Tombol Kontrol Jumlah (+, -, Hapus) tanpa ikon */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onKurangi(item.id)}
                    className="w-7 h-7 flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition text-xs font-bold"
                    title="Kurangi"
                  >
                    -
                  </button>

                  <span className="text-sm font-semibold w-5 text-center">{item.jumlah}</span>

                  <button
                    onClick={() => onTambah(item)}
                    className="w-7 h-7 flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition text-xs font-bold"
                    title="Tambah"
                  >
                    +
                  </button>

                  {/* Tombol Hapus Item */}
                  <button
                    onClick={() => onHapusItem && onHapusItem(item.id)}
                    className="px-2 py-1 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition text-xs font-medium ml-1"
                    title="Hapus menu"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-4 space-y-2">
            <div className="flex justify-between text-stone-600 text-sm">
              <span>Total Harga</span>
              <span className="font-bold text-stone-900 text-base">
                Rp {totalPrice.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}