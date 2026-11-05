function Hero() {
  const handleKenalan = () => {
    console.log('Tombol "Kenalan Rong" diklik. Membuka Instagram Dylan...')
    window.open('https://www.instagram.com/dyllnnp/', '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="text-center md:max-w-xl md:text-left">
          <p className="mb-3 inline-block rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300">
            Mahasiswa Sistem Informasi
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Halo, Saya{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Dylan
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Mahasiswa Sistem Informasi Universitas Hasanuddin dengan latar
            belakang jaringan komputer. Saya tertarik pada manajemen proyek
            TI, konsultasi, dan peran bisnis atau HR di dunia teknologi.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <button
              type="button"
              onClick={handleKenalan}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-indigo-500/30 transition hover:scale-105"
            >
              Kenalan rong
            </button>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-70 blur-md" />
          <img
            src="/images/profil-dylan.jpg"
            alt="Foto profil Dylan"
            className="relative h-56 w-56 rounded-full border-4 border-slate-950 object-cover sm:h-72 sm:w-72"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
