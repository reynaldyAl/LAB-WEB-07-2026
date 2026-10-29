import { useState } from "react";

// ini props
function MenuCard({ id, nama, kategori, harga, tersedia, deskripsi, onTambah }) {
  // State milik kartu ini saja, jadi membuka detail satu menu
  // tidak memengaruhi menu lain.
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  const ikon = kategori === "Kopi" ? "☕" : kategori === "Non-Kopi" ? "🍵" : "🍽️";

  return (
    <article
      className={`relative mt-10 rounded-3xl bg-abu px-5 pb-5 pt-14 ${
        tersedia ? "" : "opacity-70"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute -top-9 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-white text-4xl shadow-lg shadow-black/15"
      >
        {ikon}
      </div>

      <h3 className="font-display text-xl leading-tight text-tinta">{nama}</h3>
      <p className="mt-1 text-xs text-tinta/70">{kategori}</p>
      <p className="mt-3 text-sm font-semibold">
        Rp {harga.toLocaleString("id-ID")}
      </p>

      {detailTerbuka && (
        <p className="mt-3 text-sm leading-relaxed text-tinta/80">{deskripsi}</p>
      )}

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          aria-expanded={detailTerbuka}
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="text-xs font-semibold text-merah underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-merah"
        >
          {detailTerbuka ? "Tutup detail" : "Lihat detail"}
        </button>

        <button
          type="button"
          disabled={!tersedia}
          onClick={() => onTambah(id)}
          className="rounded-full bg-merah px-5 py-2 text-xs font-bold tracking-widest text-white transition-colors hover:bg-merahTua focus:outline-none focus-visible:ring-2 focus-visible:ring-merah focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-tinta/30 disabled:text-white"
        >
          {tersedia ? "Tambah" : "Habis"}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;