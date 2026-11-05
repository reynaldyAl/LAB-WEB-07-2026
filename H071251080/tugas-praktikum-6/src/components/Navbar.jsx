function Navbar() {
  const menu = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Skills', href: '#skills' },
    { id: 4, label: 'Gallery', href: '#gallery' },
  ]

  const handleClick = (namaMenu) => {
    console.log('Menu diklik:', namaMenu)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between sm:px-6">
        <h2 className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
          Dylan Tampan
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => handleClick(item.label)}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
