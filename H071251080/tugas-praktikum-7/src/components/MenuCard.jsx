import { useState } from "react";

function MenuCard({
  id,
  nama,
  kategori,
  harga,
  tersedia,
  deskripsi,
  jumlahDipesan,
  onTambah,
}) {
  // State detail dimiliki tiap baris, jadi membuka satu menu
  // tidak memengaruhi menu lain.
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article
      className={
        tersedia
          ? "border-b border-senja-700/70 py-5"
          : "border-b border-senja-700/70 py-5 opacity-55"
      }
    >
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <h3
              className={
                tersedia
                  ? "font-display text-xl font-semibold leading-tight sm:text-2xl"
                  : "font-display text-xl font-semibold leading-tight line-through decoration-senja-500/70 sm:text-2xl"
              }
            >
              {nama}
            </h3>
            <span
              aria-hidden="true"
              className="flex-1 -translate-y-1 border-b-2 border-dotted border-senja-500/40"
            />
            <p className="shrink-0 whitespace-nowrap font-mono text-base font-medium text-senja-200 sm:text-lg">
              Rp {harga.toLocaleString("id-ID")}
            </p>
          </div>

          <div className="mt-1.5 flex items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-senja-500">
              {kategori}
            </p>
            {!tersedia && (
              <span className="rounded-sm border border-red-300/60 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-red-200">
                Habis
              </span>
            )}
          </div>

          <div
            className={`grid transition-all duration-300 ease-out ${
              detailTerbuka ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="border-l-2 border-senja-500 pl-3 font-display text-base italic leading-relaxed text-senja-100/85">
                {deskripsi}
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={detailTerbuka}
            onClick={() => setDetailTerbuka(!detailTerbuka)}
            className="mt-2 min-h-9 text-sm text-senja-200 underline decoration-dotted underline-offset-4 transition hover:text-senja-50"
          >
            {detailTerbuka ? "Sembunyikan detail" : "Lihat detail"}
          </button>
        </div>

        <div className="relative shrink-0 pt-0.5">
          <button
            type="button"
            disabled={!tersedia}
            onClick={() => onTambah(id)}
            className="min-h-12 rounded-full bg-senja-500 px-5 font-semibold text-white transition hover:bg-senja-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-senja-700/50 disabled:text-senja-50/40 disabled:active:scale-100"
          >
            {tersedia ? "+ Tambah" : "Habis"}
          </button>
          {jumlahDipesan > 0 && (
            <span className="animate-fade-up absolute -right-2 -top-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-senja-50 px-1.5 font-mono text-xs font-bold text-senja-900 shadow">
              {jumlahDipesan}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
