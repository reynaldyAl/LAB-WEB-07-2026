function Navbar({ kategoriAktif, onPilihKategori, jumlahItem, totalHarga }) {
  const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

  return (
    <header className="relative z-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-5 sm:px-8">
      <div className="font-display text-2xl text-merah">Kedai Kopi Senja</div>

      <nav aria-label="Kategori menu">
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {daftarKategori.map((item) => (
            <li key={item}>
              <button
                type="button"
                aria-pressed={item === kategoriAktif}
                onClick={() => onPilihKategori(item)}
                className={`border-b-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-merah ${
                  item === kategoriAktif
                    ? "border-merah text-merah"
                    : "border-transparent text-tinta/70 hover:text-merah"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <p
        aria-live="polite"
        className="text-xs font-semibold tracking-wide text-tinta"
      >
        Pesanan: {jumlahItem} item &middot; Rp {totalHarga.toLocaleString("id-ID")}
      </p>
    </header>
  );
}

export default Navbar;