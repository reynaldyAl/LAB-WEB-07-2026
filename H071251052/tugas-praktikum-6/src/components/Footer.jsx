const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-black">Ilmi Ahmad Alfaridzi<span className="text-emerald-400">.</span></p>
          <p className="mt-2 text-sm text-slate-400">Mahasiswa Sistem Informasi · Universitas Hasanuddin</p>
          <a href="mailto:i.aalfaridzi@gmail.com" className="mt-2 inline-block text-sm text-emerald-300 hover:text-white">i.aalfaridzi@gmail.com</a>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
          <a href="https://github.com/AlfaFdz" target="_blank" rel="noreferrer" className="hover:text-emerald-300">GitHub</a>
          <a href="https://www.instagram.com/_.alfaaaaa/" target="_blank" rel="noreferrer" className="hover:text-emerald-300">Instagram</a>
          <a href="https://www.youtube.com/@Wlpy" target="_blank" rel="noreferrer" className="hover:text-emerald-300">YouTube</a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-800 pt-5 text-center text-xs text-slate-500">
        &copy; 2026 Ilmi Ahmad Alfaridzi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;