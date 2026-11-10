
import Link from "next/link";
import { pilihanKategori } from "@/lib/kategori";

const kelasInput =
  "w-full bg-navy-900 border border-white/15 rounded-xl px-4 py-2.5 text-cream placeholder:text-mist/60 focus:outline-none focus:border-blush";

const kelasLabel =
  "block text-sm font-medium text-cream mb-1";

export default function FormBuku({
  aksi,
  buku,
  labelTombol,
  batalHref,
}) {
  return (
    <form action={aksi} className="space-y-4">
      {buku && (
        <input
          type="hidden"
          name="id"
          value={buku.id}
        />
      )}

      {/* Judul */}
      <div>
        <label htmlFor="judul" className={kelasLabel}>
          Judul Buku
        </label>

        <input
          id="judul"
          name="judul"
          type="text"
          required
          maxLength={150}
          defaultValue={buku?.judul}
          placeholder="Contoh: Sapiens"
          className={kelasInput}
        />
      </div>

      {/* Penulis */}
      <div>
        <label htmlFor="penulis" className={kelasLabel}>
          Penulis
        </label>

        <input
          id="penulis"
          name="penulis"
          type="text"
          required
          maxLength={100}
          defaultValue={buku?.penulis}
          placeholder="Contoh: Yuval Noah Harari"
          className={kelasInput}
        />
      </div>

      {/* Kategori, tahun, dan status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="kategori" className={kelasLabel}>
            Kategori
          </label>

          <select
            id="kategori"
            name="kategori"
            required
            defaultValue={buku?.kategori ?? ""}
            className={kelasInput}
          >
            <option value="">Pilih kategori</option>

            {pilihanKategori.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tahun" className={kelasLabel}>
            Tahun terbit
          </label>

          <input
            id="tahun"
            name="tahun"
            type="number"
            min="1000"
            max={new Date().getFullYear()}
            required
            defaultValue={buku?.tahun}
            placeholder="2024"
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="tersedia" className={kelasLabel}>
            Status
          </label>

          <select
            id="tersedia"
            name="tersedia"
            defaultValue={buku ? String(buku.tersedia) : "true"}
            className={kelasInput}
          >
            <option value="true">Tersedia</option>
            <option value="false">Sedang Dipinjam</option>
          </select>
        </div>
      </div>

      {/* Sinopsis */}
      <div>
        <label htmlFor="sinopsis" className={kelasLabel}>
          Sinopsis
        </label>

        <textarea
          id="sinopsis"
          name="sinopsis"
          rows={4}
          required
          defaultValue={buku?.sinopsis}
          placeholder="Ringkasan isi buku..."
          className={kelasInput}
        />
      </div>

      {/* Tombol */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="bg-crimson hover:bg-crimson-hover text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-crimson/30 transition"
        >
          {labelTombol}
        </button>

        {batalHref && (
          <Link
            href={batalHref}
            className="bg-white/10 hover:bg-white/15 text-cream font-semibold px-7 py-3 rounded-full transition"
          >
            Batal
          </Link>
        )}
      </div>
    </form>
  );
}
