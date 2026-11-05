function Skills() {
  const keahlian = [
    'Jaringan Komputer',
    'Manajemen Proyek TI',
    'Analisis Sistem Informasi',
    'Administrasi & Koordinasi',
    'Komunikasi & Presentasi',
    'React & Tailwind CSS',
  ]

  return (
    <section id="skills" className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Keahlian <span className="text-cyan-300">Saya</span>
        </h2>
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keahlian.map((skill, index) => (
            <li
              key={index}
              className="rounded-2xl border border-indigo-400/30 bg-gradient-to-r from-indigo-500/10 to-cyan-400/10 px-5 py-4 text-center font-medium text-slate-100 transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
