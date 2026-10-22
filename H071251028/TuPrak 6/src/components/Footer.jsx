function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-zinc-800/80 bg-zinc-950 text-center text-zinc-500 text-sm">
      <p>
        &copy; {currentYear} <span className="text-rose-400 font-medium">Aliyah Fitraturramadhani</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;