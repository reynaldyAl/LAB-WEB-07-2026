function Navbar({ kategoriAktif, onKategoriChange, totalItems, totalPrice }) {
  const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

  return (
    <header className="bg-amber-900 text-amber-50 shadow-md sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Kedai Kopi Senja</h1>
          <p className="text-xs text-amber-200">Sistem Pemesanan Mandiri Tablet</p>
        </div>

        {/* Ringkasan Ringkas di Navbar Top */}
        <div className="bg-amber-800/80 px-4 py-2 rounded-lg border border-amber-700/50 text-right">
          <span className="text-xs block text-amber-200">Total Sementara</span>
          <span className="font-semibold text-sm">
            {totalItems} Item | Rp {totalPrice.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {/* Navigasi Kategori */}
      <nav className="bg-amber-950/40 border-t border-amber-800/40 px-4 py-2">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto">
          {daftarKategori.map((kat) => (
            <button
              key={kat}
              onClick={() => onKategoriChange(kat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                kategoriAktif === kat
                  ? "bg-amber-500 text-stone-900 shadow-sm"
                  : "bg-amber-900/40 text-amber-100 hover:bg-amber-800/60"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;