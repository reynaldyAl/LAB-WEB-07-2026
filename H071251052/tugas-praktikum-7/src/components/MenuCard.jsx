function MenuCard({ item, detailTerbuka, bukaDetail, tambahPesanan }) {
  return (
    <article className={`flex flex-col rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
      item.tersedia ? "border-kopi-100" : "border-stone-200 opacity-80"
    }`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-stone-50 text-4xl" aria-hidden="true">
          {item.emoji}
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
          item.tersedia ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
        }`}>
          {item.tersedia ? "Tersedia" : "Habis"}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-kopi-500">{item.kategori}</p>
      <h3 className="mt-1 text-lg font-bold text-kopi-900">{item.nama}</h3>
      <p className="mt-2 text-lg font-extrabold text-kopi-700">Rp{item.harga.toLocaleString("id-ID")}</p>

      {detailTerbuka && (
        <p className="mt-3 rounded-xl bg-stone-50 p-3 text-sm leading-6 text-stone-600">
          {item.deskripsi}
        </p>
      )}

      <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
        <button
          type="button"
          onClick={bukaDetail}
          className="rounded-xl border border-kopi-100 px-3 py-2.5 text-sm font-semibold text-kopi-700 hover:bg-stone-50"
          aria-expanded={detailTerbuka}
        >
          {detailTerbuka ? "Tutup detail" : "Detail"}
        </button>
        <button
          type="button"
          onClick={() => tambahPesanan(item)}
          disabled={!item.tersedia}
          className="rounded-xl bg-stone-900 px-3 py-2.5 text-sm font-semibold text-white hover:bg-stone-700 disabled:bg-stone-300 disabled:text-stone-500"
        >
          {item.tersedia ? "+ Tambah" : "Tidak tersedia"}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;