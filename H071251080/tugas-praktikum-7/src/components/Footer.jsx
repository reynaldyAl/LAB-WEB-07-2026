function Footer({ jumlahMenu, jumlahTersedia }) {
  return (
    <footer className="mt-16 border-t border-senja-700">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-4 py-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-senja-200/60 sm:flex-row sm:px-6">
        <p>
          {jumlahTersedia} dari {jumlahMenu} menu tersedia hari ini
        </p>
        <p>&copy; 2026 Kedai Kopi Senja</p>
      </div>
    </footer>
  );
}

export default Footer;
