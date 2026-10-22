function Navbar() {
  const handleNavClick = (id, menuName) => {
    // 1. Munculkan notif di console browser
    console.log(`Notifikasi: Menu "${menuName}" pada Navbar berhasil diklik!`);
  const handleNavClick = () => {
    console.log(`Notifikasi: Menu "${menuName}" pada Navbar berhasil diklik!`);
  };
    // 2. Proses perpindahan halaman (scroll) secara halus
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Nama */}
        <button
          onClick={() => handleNavClick("home", "Logo Aliyah.id")}
          className="text-xl font-bold text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
        >
          al.
        </button>

        {/* Menu Navigasi */}
        <div className="flex gap-6 text-sm font-medium text-zinc-300">
          <button
            onClick={() => handleNavClick("home", "Home")}
            className="hover:text-rose-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about", "About")}
            className="hover:text-rose-400 transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("skills", "Skills")}
            className="hover:text-rose-400 transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick("gallery", "Gallery")}
            className="hover:text-rose-400 transition-colors cursor-pointer"
          >
            Gallery
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;