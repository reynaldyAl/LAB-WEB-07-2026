
export default function FormBuku({
  action,
  buku = null,
  labelTombol = "Simpan Buku",
}) {
  return (
    <form
      action={action}
      className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-lg sm:p-9"
    >
      {buku && (
        <input type="hidden" name="id" value={buku.id} />
      )}

      <div>
        <label htmlFor="judul" className="mb-2 block text-sm font-medium text-stone-700">
          Judul Buku
        </label>
        <input
          id="judul"
          name="judul"
          required
          defaultValue={buku?.judul ?? ""}
          placeholder="Masukkan judul buku"
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div>
        <label htmlFor="penulis" className="mb-2 block text-sm font-medium text-stone-700">
          Penulis
        </label>
        <input
          id="penulis"
          name="penulis"
          required
          defaultValue={buku?.penulis ?? ""}
          placeholder="Masukkan nama penulis"
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="kategori" className="mb-2 block text-sm font-medium text-stone-700">
            Kategori
          </label>
          <select
            id="kategori"
            name="kategori"
            required
            defaultValue={buku?.kategori ?? ""}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
          >
            <option value="" disabled>Pilih kategori</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>
        </div>

        <div>
          <label htmlFor="tahun" className="mb-2 block text-sm font-medium text-stone-700">
            Tahun Terbit
          </label>
          <input
            id="tahun"
            name="tahun"
            type="number"
            min="1"
            max={new Date().getFullYear()}
            required
            defaultValue={buku?.tahun ?? ""}
            placeholder="Contoh: 2020"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="tersedia" className="mb-2 block text-sm font-medium text-stone-700">
          Status Ketersediaan
        </label>
        <select
          id="tersedia"
          name="tersedia"
          required
          defaultValue={String(buku?.tersedia ?? true)}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
        >
          <option value="true">Tersedia</option>
          <option value="false">Sedang Dipinjam</option>
        </select>
      </div>

      <div>
        <label htmlFor="sinopsis" className="mb-2 block text-sm font-medium text-stone-700">
          Sinopsis
        </label>
        <textarea
          id="sinopsis"
          name="sinopsis"
          rows={5}
          required
          defaultValue={buku?.sinopsis ?? ""}
          placeholder="Masukkan sinopsis buku"
          className="w-full resize-y rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 outline-none focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
      >
        {labelTombol} →
      </button>
    </form>
  );
}