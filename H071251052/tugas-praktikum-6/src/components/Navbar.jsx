import Logo from "../assets/gallery/logo.png";

const Navbar = () => {
  const menus = [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "About", href: "#about" },
    { id: 3, label: "Skills", href: "#skills" },
    { id: 4, label: "Gallery", href: "#gallery" },
    { id: 5, label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

        <a href="#home" className="w-16">
          <img src={Logo} alt="Logo" className="w-2/3" />
        </a>

        <input type="checkbox" id="menu-toggle" className="peer hidden"/>
        <label htmlFor="menu-toggle" className="cursor-pointer text-3xl text-slate-700 md:hidden" aria-label="Buka atau tutup menu">
          ☰
        </label>

        <div className="absolute left-0 top-full hidden w-full flex-col gap-4 border-b border-stone-200 bg-stone-50 px-5 py-5 shadow-md peer-checked:flex md:static md:flex md:w-auto md:flex-row md:items-center md:justify-end md:gap-x-5 md:gap-y-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
          {menus.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                console.log(item.label);
                document.getElementById("menu-toggle").checked = false;
              }}
              className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;