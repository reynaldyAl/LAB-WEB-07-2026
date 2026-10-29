function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}

function Navbar({ totalJumlah, totalHarga, daftarKategori, kategoriAktif, onPilihKategori }) {
  return (
    <header className="sticky top-0 z-10 bg-senja-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <h1 className="font-serif text-2xl tracking-wide">Kedai Kopi Senja</h1>
        <p className="rounded-full bg-amber-senja px-4 py-1.5 text-sm font-semibold text-senja-900">
          {totalJumlah} item &middot; {formatRupiah(totalHarga)}
        </p>
      </div>
      <nav aria-label="Kategori menu" className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            aria-pressed={kategori === kategoriAktif}
            onClick={() => onPilihKategori(kategori)}
            className={
              'whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ' +
              (kategori === kategoriAktif
                ? 'bg-white text-senja-900'
                : 'bg-senja-700 text-senja-100 hover:bg-senja-700/70')
            }
          >
            {kategori}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
