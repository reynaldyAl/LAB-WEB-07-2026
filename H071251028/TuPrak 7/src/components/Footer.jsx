function Footer({ kategoriAktif }) {
  return (
    <footer className="bg-stone-800 text-stone-400 py-4 text-center text-xs mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <p>Kategori Aktif: <span className="text-amber-400 font-semibold">{kategoriAktif}</span></p>
        <p className="mt-1">&copy; 2026 Kedai Kopi Senja. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;