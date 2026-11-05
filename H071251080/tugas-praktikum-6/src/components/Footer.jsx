function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-white/10 px-4 py-8 text-center">
      <p className="text-sm text-slate-400">
        &copy; {tahun} Dylan Dwiputra. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
