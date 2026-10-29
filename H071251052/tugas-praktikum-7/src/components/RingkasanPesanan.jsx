function RingkasanPesanan({ pesanan, totalHarga, ubahJumlah }) {
  const jumlahItem = pesanan.reduce((jumlah, item) => jumlah + item.jumlah, 0);

  return (
    <section className="rounded-2xl border border-kopi-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-kopi-900">Ringkasan pesanan</h2>
        <span className="rounded-full bg-stone-50 px-3 py-1 text-xs font-bold text-kopi-700">{jumlahItem} item</span>
      </div>

      {pesanan.length === 0 ? (
        <div className="py-8 text-center">
          <div className="text-4xl" aria-hidden="true">🛍️</div>
          <p className="mt-3 font-semibold text-stone-600">Belum ada pesanan</p>
          <p className="mt-1 text-sm text-stone-400">Tambahkan menu yang kamu suka.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {pesanan.map((item) => (
            <div key={item.id} className="flex items-start justify-between gap-3 border-b border-kopi-50 pb-4">
              <div className="min-w-0">
                <p className="font-semibold text-kopi-900">{item.nama}</p>
                <p className="mt-1 text-sm text-stone-500">Rp{item.harga.toLocaleString("id-ID")}</p>
                <div className="mt-2 flex items-center gap-3">
                  <button type="button" onClick={() => ubahJumlah(item.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-kopi-100 font-bold text-kopi-700" aria-label={`Kurangi ${item.nama}`}>−</button>
                  <span className="min-w-4 text-center text-sm font-bold">{item.jumlah}</span>
                  <button type="button" onClick={() => ubahJumlah(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-kopi-100 font-bold text-kopi-700" aria-label={`Tambah ${item.nama}`}>+</button>
                </div>
              </div>
              <p className="shrink-0 text-sm font-bold text-kopi-900">Rp{(item.harga * item.jumlah).toLocaleString("id-ID")}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-kopi-100 pt-4">
        <span className="font-semibold text-stone-600">Total harga</span>
        <span className="text-lg font-extrabold text-kopi-900">Rp{totalHarga.toLocaleString("id-ID")}</span>
      </div>
      <p className="mt-2 text-xs leading-5 text-stone-400">Harga dihitung otomatis sesuai jumlah menu yang dipilih.</p>
    </section>
  );
}

export default RingkasanPesanan;