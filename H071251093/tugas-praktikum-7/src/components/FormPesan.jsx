import { useState } from 'react'

function FormPesan({ jumlahPesanan, onKirim }) {
  const [nama, setNama] = useState('')
  const [meja, setMeja] = useState('')
  const [galat, setGalat] = useState({})

  function handleSubmit(e) {
    e.preventDefault()

    const galatBaru = {}
    if (jumlahPesanan === 0) {
      galatBaru.pesanan = 'Pesanan masih kosong. Pilih minimal satu menu terlebih dahulu.'
    }
    if (nama.trim().length < 2) {
      galatBaru.nama = 'Nama wajib diisi, minimal 2 karakter.'
    }
    if (!/^\d+$/.test(meja.trim()) || Number(meja) < 1) {
      galatBaru.meja = 'Nomor meja harus berupa angka positif.'
    }

    setGalat(galatBaru)
    if (Object.keys(galatBaru).length > 0) return

    onKirim({ nama: nama.trim(), meja: meja.trim() })
    setNama('')
    setMeja('')
  }

  const kelasInput = (adaGalat) =>
    'w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-senja ' +
    (adaGalat ? 'border-red-500' : 'border-senja-700/40')

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl border border-senja-100 bg-white p-4 shadow-sm"
    >
      <h2 className="text-lg font-semibold">Data Pemesan</h2>

      <div>
        <label htmlFor="nama" className="mb-1 block text-sm font-medium">Nama</label>
        <input
          id="nama"
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          aria-invalid={galat.nama ? 'true' : 'false'}
          className={kelasInput(galat.nama)}
        />
        {galat.nama && <p className="mt-1 text-sm text-red-600">{galat.nama}</p>}
      </div>

      <div>
        <label htmlFor="meja" className="mb-1 block text-sm font-medium">Nomor meja</label>
        <input
          id="meja"
          type="text"
          inputMode="numeric"
          value={meja}
          onChange={(e) => setMeja(e.target.value)}
          aria-invalid={galat.meja ? 'true' : 'false'}
          className={kelasInput(galat.meja)}
        />
        {galat.meja && <p className="mt-1 text-sm text-red-600">{galat.meja}</p>}
      </div>

      {galat.pesanan && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{galat.pesanan}</p>
      )}

      <button
        type="submit"
        className="rounded-lg bg-amber-senja px-4 py-2.5 font-semibold text-senja-900 transition-colors hover:brightness-95"
      >
        Kirim Pesanan
      </button>
    </form>
  )
}

export default FormPesan
