function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}

function RingkasanPesanan({ itemPesanan, totalJumlah, totalHarga, onKurangi }) {
  return (
    <section aria-label="Ringkasan pesanan" className="rounded-xl border border-senja-100 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold">Ringkasan Pesanan</h2>

      {itemPesanan.length === 0 ? (
        <p className="text-sm text-senja-700">Belum ada pesanan. Tekan Tambah pada menu yang Anda inginkan.</p>
      ) : (
        <ul className="divide-y divide-senja-100">
          {itemPesanan.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-2 py-2 text-sm">
              <div>
                <p className="font-medium">{item.nama}</p>
                <p className="text-senja-700">
                  {item.jumlah} &times; {formatRupiah(item.harga)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{formatRupiah(item.subtotal)}</span>
                <button
                  type="button"
                  aria-label={'Kurangi ' + item.nama}
                  onClick={() => onKurangi(item.id)}
                  className="h-7 w-7 rounded-full border border-senja-700 text-senja-700 hover:bg-senja-100"
                >
                  &minus;
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-senja-100 pt-3 font-semibold">
        <span>{totalJumlah} item</span>
        <span>{formatRupiah(totalHarga)}</span>
      </div>
    </section>
  )
}

export default RingkasanPesanan
