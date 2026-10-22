function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 py-8 text-center text-sm text-ink/70">
      &copy; {tahun} Imam. Hak cipta dilindungi.
    </footer>
  )
}

export default Footer;