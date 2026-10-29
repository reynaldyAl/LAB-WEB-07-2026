function Navbar({ jumlahPesanan, totalHarga }) {
  return (
    <header className="sticky top-0 z-20 border-b border-kopi-100 bg-stone backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navigasi utama">
        <a href="#beranda" className="flex items-center gap-3" aria-label="Kedai Kopi Senja">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-700 text-2xl">☕</span>
          <span>
            <span className="block text-base font-extrabold text-kopi-900">Kopi Senja</span>
            <span className="block text-xs text-stone-500">Teman cerita soremu</span>
          </span>
        </a>
        <div className="text-right">
          <p className="text-xs text-stone-500">Keranjang • {jumlahPesanan} item</p>
          <p className="text-sm font-bold text-kopi-900">Rp{totalHarga.toLocaleString("id-ID")}</p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;