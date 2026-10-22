const menu = [
  { id: 1, label: 'Beranda', href: '#beranda' },
  { id: 2, label: 'Tentang', href: '#tentang' },
  { id: 3, label: 'Keahlian', href: '#keahlian' },
  { id: 4, label: 'Galeri', href: '#galeri' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#beranda" className="font-display text-xl font-extrabold tracking-tight">
          imam<span className="text-brand">.dev</span>
        </a>
        <ul className="flex gap-1 overflow-x-auto text-sm font-medium sm:gap-2 sm:text-base">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => console.log(item.label)}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-brand"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;