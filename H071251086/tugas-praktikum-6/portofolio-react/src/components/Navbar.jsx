const menuItems = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'About', href: '#about' },
  { id: 3, label: 'Skills', href: '#skills' },
  { id: 4, label: 'Work', href: '#work' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5 sm:px-4">
      <nav
        aria-label="Main navigation"
        className="flex w-full max-w-2xl items-center justify-between gap-2 rounded-full border border-slate-200 bg-white/85 py-1.5 pr-1.5 pl-4 shadow-lg shadow-blue-900/5 backdrop-blur sm:py-2 sm:pr-2 sm:pl-5"
      >
        <a href="#home" className="shrink-0 text-base font-extrabold tracking-tight text-ink sm:text-lg">
          Kiki<span className="text-brand"></span>
        </a>

        {/* instruksi 3 */}
        <ul className="flex min-w-0 items-center overflow-x-auto sm:gap-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => console.log(`Menu clicked: ${item.label}`)}
                className="block rounded-full px-2.5 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-brand sm:px-4 sm:text-sm"
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