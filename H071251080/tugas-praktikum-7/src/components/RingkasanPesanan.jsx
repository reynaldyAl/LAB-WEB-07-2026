function RingkasanPesanan({
  itemPesanan,
  jumlahItem,
  totalHarga,
  onTambah,
  onKurangi,
  onHapus,
}) {
  return (
    <section className="px-6 pb-4 pt-7">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold">Struk Pesanan</h2>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.25em] text-senja-700">
          Kedai Kopi Senja · {jumlahItem} item
        </p>
      </div>

      <div className="my-4 border-t-2 border-dashed border-senja-900/25" />

      {itemPesanan.length === 0 ? (
        <p className="py-6 text-center font-display text-base italic text-senja-700">
          Belum ada pesanan. Tekan Tambah pada menu yang kamu inginkan.
        </p>
      ) : (
        <ul className="space-y-4">
          {itemPesanan.map((item) => (
            <li key={item.id} className="animate-fade-up">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-semibold">{item.nama}</p>
                <p className="shrink-0 font-mono text-sm font-semibold">
                  Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                </p>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <div className="flex items-center gap-1 font-mono text-sm text-senja-700">
                  <button
                    type="button"
                    aria-label={`Kurangi ${item.nama}`}
                    onClick={() => onKurangi(item.id)}
                    className="h-9 w-9 rounded-full border border-senja-900/20 text-lg leading-none transition hover:bg-senja-100"
                  >
                    −
                  </button>
                  <span className="min-w-16 whitespace-nowrap text-center">
                    {item.jumlah} × {item.harga / 1000}k
                  </span>
                  <button
                    type="button"
                    aria-label={`Tambah ${item.nama}`}
                    onClick={() => onTambah(item.id)}
                    className="h-9 w-9 rounded-full border border-senja-900/20 text-lg leading-none transition hover:bg-senja-100"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  aria-label={`Hapus ${item.nama}`}
                  onClick={() => onHapus(item.id)}
                  className="min-h-9 rounded-md px-2 text-xs font-medium text-red-700 underline decoration-dotted underline-offset-4 hover:bg-red-50"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="my-4 border-t-2 border-dashed border-senja-900/25" />

      <div className="flex items-baseline justify-between">
        <span className="font-mono text-sm uppercase tracking-[0.25em]">Total</span>
        <span className="font-mono text-2xl font-semibold">
          Rp {totalHarga.toLocaleString("id-ID")}
        </span>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
