function Hero({ nama, slogan, lokasi, jamBuka, children }) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 px-6 py-12 sm:px-12 shadow-lg">
      {/* dekorasi bulat */}
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
      <div className="absolute -bottom-16 right-24 w-40 h-40 rounded-full bg-amber-300/30" />

      <div className="relative max-w-2xl">
        <span className="inline-block bg-amber-300 text-amber-900 text-sm font-bold px-4 py-1.5 rounded-full mb-4 shadow">
          Ruang Baca Komunitas
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
          Selamat datang di {nama} 👋
        </h1>
        <p className="text-lg text-blue-50 mb-6">{slogan}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-white rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 shadow">
            📍 {lokasi}
          </span>
          <span className="bg-white rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 shadow">
            🕗 {jamBuka}
          </span>
        </div>

        {children}
      </div>
    </section>
  );
}

export default Hero;