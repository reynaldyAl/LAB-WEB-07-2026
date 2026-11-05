function About() {
  const dataDiri = [
    { id: 1, label: 'Nama Lengkap', nilai: 'Dylan Dwiputra' },
    { id: 2, label: 'Program Studi', nilai: 'Sistem Informasi' },
    { id: 3, label: 'Universitas', nilai: 'Universitas Hasanuddin' },
    { id: 4, label: 'Peminatan', nilai: 'Manajemen Sistem Informasi (MSI)' },
    { id: 5, label: 'Angkatan', nilai: '2025' },
    { id: 6, label: 'Asal Sekolah', nilai: 'SMK Telkom Makassar' },
  ]

  return (
    <section id="about" className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Tentang <span className="text-indigo-400">Saya</span>
        </h2>
        <div className="mx-auto mt-5 max-w-3xl space-y-4 text-center leading-relaxed text-slate-400">
          <p>
            Saya adalah mahasiswa yang antusias belajar teknologi. Di bangku
            kuliah saya mempelajari jaringan komputer, sistem informasi
            berbasis IoT, pemrograman berorientasi objek, dan analisis
            algoritma.
          </p>
          <p>
            Di luar perkuliahan, saya tertarik pada dunia esports dan senang
            mengaitkannya dengan proyek, seperti membuat aplikasi manajemen
            turnamen Mobile Legends. Bagi saya, belajar paling seru saat
            langsung membangun sesuatu yang nyata.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dataDiri.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-indigo-400/50"
            >
              <p className="text-xs uppercase tracking-widest text-cyan-300">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                {item.nilai}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
