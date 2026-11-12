const input =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200";
const label = "mb-1 block font-medium text-stone-800";

export default function FormBuku({ action, buku, label: teksTombol }) {
  return (
    <form action={action} className="space-y-4">
      {buku && <input type="hidden" name="id" value={buku.id} />}

      <div>
        <label className={label}>Judul</label>
        <input name="judul" defaultValue={buku?.judul} required className={input} />
      </div>
      <div>
        <label className={label}>Penulis</label>
        <input name="penulis" defaultValue={buku?.penulis} required className={input} />
      </div>
      <div>
        <label className={label}>Kategori</label>
        <input name="kategori" defaultValue={buku?.kategori} required className={input} />
      </div>
      <div>
        <label className={label}>Tahun Terbit</label>
        <input name="tahun" type="number" defaultValue={buku?.tahun} required className={input} />
      </div>
      <div>
        <label className={label}>Status</label>
        <select name="tersedia" defaultValue={String(buku?.tersedia ?? true)} className={input}>
          <option value="true">Tersedia</option>
          <option value="false">Sedang Dipinjam</option>
        </select>
      </div>
      <div>
        <label className={label}>Sinopsis</label>
        <textarea name="sinopsis" rows={4} defaultValue={buku?.sinopsis} required className={input} />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white hover:bg-orange-800"
      >
        {teksTombol}
      </button>
    </form>
  );
}