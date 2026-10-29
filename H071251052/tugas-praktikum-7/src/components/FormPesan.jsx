function FormPesan({
  namaPelanggan,
  setNamaPelanggan,
  nomorMeja,
  setNomorMeja,
  kirimPesanan,
  pesanError
}) {
  return (
    <section className="rounded-2xl border border-kopi-100 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-kopi-900">Data pemesan</h2>
      <p className="mt-1 text-sm text-stone-500">Isi data sebelum mengirim pesanan.</p>

      <form onSubmit={kirimPesanan} className="mt-5 space-y-4" noValidate>
        <div>
          <label htmlFor="namaPelanggan" className="mb-1.5 block text-sm font-semibold text-kopi-700">Nama pelanggan</label>
          <input
            id="namaPelanggan"
            type="text"
            value={namaPelanggan}
            onChange={(event) => setNamaPelanggan(event.target.value)}
            placeholder="Contoh: Alfa"
            autoComplete="name"
            className="w-full rounded-xl border border-kopi-100 bg-stone-50/50 px-3 py-3 text-sm outline-none transition focus:border-kopi-500 focus:ring-2 focus:ring-kopi-100"
          />
        </div>

        <div>
          <label htmlFor="nomorMeja" className="mb-1.5 block text-sm font-semibold text-kopi-700">Nomor meja</label>
          <input
            id="nomorMeja"
            type="number"
            min="1"
            step="1"
            value={nomorMeja}
            onChange={(event) => setNomorMeja(event.target.value)}
            placeholder="Contoh: 5"
            className="w-full rounded-xl border border-kopi-100 bg-stone-50/50 px-3 py-3 text-sm outline-none transition focus:border-kopi-500 focus:ring-2 focus:ring-kopi-100"
          />
        </div>

        {pesanError && (
          <p role="alert" className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm leading-5 text-red-700">
            {pesanError}
          </p>
        )}

        <button type="submit" className="w-full rounded-xl bg-stone-900 px-4 py-3 font-bold text-white transition hover:bg-stone-700">
          Kirim pesanan →
        </button>
        <p className="text-center text-xs leading-5 text-stone-400">Pastikan menu dan data pemesan sudah benar.</p>
      </form>
    </section>
  );
}

export default FormPesan;