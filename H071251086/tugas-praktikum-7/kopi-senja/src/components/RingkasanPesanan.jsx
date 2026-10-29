function RingkasanPesanan({ itemPesanan, jumlahItem, totalHarga, onTambah, onKurangi }) {
  return (
    <section aria-label="Ringkasan pesanan">
      <h2 className="font-display text-2xl">Pesanan Anda</h2>

      {itemPesanan.length === 0 ? (
        <p className="mt-3 text-sm text-white/85">
          Belum ada pesanan. Pilih menu lalu tekan Tambah.
        </p>
      ) : (
        <ul className="mt-3 flex flex-col gap-3">
          {itemPesanan.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-3 text-sm">
              <div>
                <p className="font-semibold">{item.nama}</p>
                <p className="text-xs text-white/80">
                  Rp {item.subtotal.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={`Kurangi ${item.nama}`}
                  onClick={() => onKurangi(item.id)}
                  className="h-7 w-7 rounded-full bg-white/20 font-bold hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  &minus;
                </button>
                <span className="w-5 text-center font-semibold">{item.jumlah}</span>
                <button
                  type="button"
                  aria-label={`Tambah ${item.nama}`}
                  onClick={() => onTambah(item.id)}
                  className="h-7 w-7 rounded-full bg-white/20 font-bold hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-baseline justify-between border-t border-white/30 pt-3">
        <p className="text-sm">Jumlah pesanan: {jumlahItem} item</p>
        <p className="font-display text-xl">
          Rp {totalHarga.toLocaleString("id-ID")}
        </p>
      </div>
    </section>
  );
}

export default RingkasanPesanan;