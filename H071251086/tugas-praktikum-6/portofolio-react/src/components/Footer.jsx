const name = 'Riskia Nur Azizah Ismail'
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-10 text-center sm:px-8">
      <p className="text-base font-bold text-ink">Thanks for stopping by.</p>
      <p className="mt-2 text-sm text-slate-500">
        &copy; {year} {name}. Built with React, Vite, and Tailwind CSS.
      </p>
    </footer>
  )
}

// instruksi 8