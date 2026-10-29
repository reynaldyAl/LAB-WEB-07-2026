import { useState } from 'react'

function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}

function MenuCard({ id, nama, kategori, harga, tersedia, deskripsi, onTambah }) {
  // State detail dimiliki tiap kartu, sehingga membuka satu menu tidak memengaruhi menu lain.
  const [detailTerbuka, setDetailTerbuka] = useState(false)

  return (
    <article
      className={
        'flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm ' +
        (tersedia ? 'border-senja-100' : 'border-senja-100 opacity-60')
      }
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">{nama}</h2>
          <p className="text-sm text-senja-700">{kategori}</p>
        </div>
        <p className="font-semibold">{formatRupiah(harga)}</p>
      </div>

      {detailTerbuka && <p className="text-sm leading-relaxed">{deskripsi}</p>}

      <div className="mt-auto flex items-center justify-between gap-2">
        <button
          type="button"
          aria-expanded={detailTerbuka}
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="text-sm font-medium text-senja-700 underline underline-offset-2"
        >
          {detailTerbuka ? 'Tutup detail' : 'Lihat detail'}
        </button>
        <button
          type="button"
          disabled={!tersedia}
          onClick={() => onTambah(id)}
          className="rounded-lg bg-senja-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-senja-700 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600"
        >
          {tersedia ? 'Tambah' : 'Habis'}
        </button>
      </div>
    </article>
  )
}

export default MenuCard
