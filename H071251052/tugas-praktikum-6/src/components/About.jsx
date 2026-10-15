const About = () => {
  const personalData = [
    { id: 1, label: "Nama", value: "Ilmi Ahmad Alfaridzi" },
    { id: 2, label: "Program Studi", value: "Sistem Informasi" },
    { id: 3, label: "Universitas", value: "Universitas Hasanuddin" },
    { id: 4, label: "Domisili", value: "Makassar, Sulawesi Selatan" },
    { id: 5, label: "Minat", value: "Web Development, UI/UX, dan desain digital" },
  ];

  return (
    <section id="about" className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-800">About Me</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Mengenal saya lebih dekat.</h2>
          <p className="mt-5 leading-8 text-slate-600">
            Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan pada dunia teknologi dan
            pengembangan aplikasi. Selama kuliah, saya mempelajari pemrograman web, basis data,
            rekayasa perangkat lunak, UI/UX, dan analisis data. Saya senang mengembangkan kemampuan
            melalui tugas kuliah, project pribadi, serta pengalaman organisasi.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {personalData.map((item) => (
            <article key={item.id} className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:-translate-y-1 hover:border-emerald-300">
              <p className="text-sm font-semibold text-slate-500">{item.label}</p>
              <p className="mt-2 font-bold leading-6 text-slate-900">{item.value}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-3xl bg-emerald-950 p-7 text-white sm:p-9">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">Pendidikan</p>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div><p className="text-sm text-emerald-300">2019 - 2022</p><h3 className="mt-1 font-bold">SMP IT Wahdah Islamiyah Sinjai</h3></div>
            <div><p className="text-sm text-emerald-300">2022 - 2025</p><h3 className="mt-1 font-bold">SMAN 5 Sinjai</h3><p className="mt-1 text-sm text-emerald-100">Ketua IT OSIS dan Ketua Rohis</p></div>
            <div><p className="text-sm text-emerald-300">2025 - Sekarang</p><h3 className="mt-1 font-bold">Universitas Hasanuddin</h3><p className="mt-1 text-sm text-emerald-100">S1 Sistem Informasi</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;