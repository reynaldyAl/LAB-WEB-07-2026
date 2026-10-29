function Navbar({
  daftarKategori,
  kategoriAktif,
  onKategoriClick,
  jumlahItem,
  totalHarga,
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-senja-700 bg-senja-900/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 40 24"
              className="h-7 w-11 shrink-0"
            >
              <path d="M4 22a16 16 0 0132 0z" fill="#c8742f" />
              <path d="M0 22.5h40" stroke="#f3d9b5" strokeWidth="2" />
            </svg>
            <div className="leading-none">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-senja-200/70">
                Kedai
              </p>
              <h1 className="font-display text-2xl font-bold">Kopi Senja</h1>
            </div>
          </div>

          <div aria-live="polite" className="text-right leading-tight">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-senja-200/70">
              Pesanan · {jumlahItem} item
            </p>
            <p className="font-mono text-xl font-semibold text-senja-50">
              Rp {totalHarga.toLocaleString("id-ID")}
            </p>
          </div>
        </div>

        <nav aria-label="Kategori menu" className="-mx-1 overflow-x-auto">
          <ul className="flex gap-7 px-1">
            {daftarKategori.map((kategori) => (
              <li key={kategori}>
                <button
                  type="button"
                  onClick={() => onKategoriClick(kategori)}
                  aria-pressed={kategori === kategoriAktif}
                  className={
                    kategori === kategoriAktif
                      ? "min-h-11 whitespace-nowrap font-display text-lg font-semibold text-senja-50 underline decoration-senja-500 decoration-2 underline-offset-[10px]"
                      : "min-h-11 whitespace-nowrap font-display text-lg text-senja-50/55 transition hover:text-senja-50"
                  }
                >
                  {kategori}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
