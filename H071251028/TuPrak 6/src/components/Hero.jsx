function Hero() {
  const handleSapaClick = () => {
    console.log("Tombol Sapa Saya diklik!");
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden border-b border-zinc-800/80">
      {/* 1. Foto Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpeg" 
          alt="Hero Background"
          className="w-full h-full object-cover blur-[2px] opacity-45 scale-100 object-center"
        />
        {/* Layer Overlay Tipis agar Teks Tetap Mudah Dibaca */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/60 via-zinc-950/70 to-zinc-950"></div>
      </div>

      {/* 2. Konten Utama Hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Teks Sebelah Kiri */}
        <div className="flex-1 text-left">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-6">
            PERSONAL PORTFOLIO
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 mb-6 leading-tight">
              Meet{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 text-transparent bg-clip-text">
              Aliyah
            </span>
          </h1>

          <p className="text-zinc-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed font-light">
            Currently exploring web development, UI/UX design, and IT management while building my skills in technology and design.
          </p>

          <button
            onClick={handleSapaClick}
            className="px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium rounded-2xl shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Say Hi to al
          </button>
        </div>

        {/* Foto Profil Utama Sebelah Kanan (Ukuran Dikecilkan Dikit) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Ambient Glow di Belakang Foto Profil */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>

            {/* Frame & Foto Profil */}
            <div className="relative rounded-3xl overflow-hidden border border-rose-500/30 bg-zinc-900/80 p-2 backdrop-blur-md shadow-2xl">
              <img
                src="/images/profile.jpg" 
                alt="Aliyah"
                className="w-52 h-60 sm:w-60 sm:h-68 md:w-64 md:h-76 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;