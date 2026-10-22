import Profile from "../../public/profile.jpeg";

const Hero = () => {
  const showMessage = () => {
    console.log("Terima kasih sudah mengunjungi portofolio saya!");
  };

  return (
    <section id="home" className="mx-auto grid min-h-[82vh] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
          Personal Portfolio
        </p>
        <p className="mb-3 text-lg font-semibold text-emerald-800">Halo, saya Ilmi 👋</p>
        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Ilmi Ahmad <span className="text-emerald-700">Alfaridzi</span>
        </h1>
        <h2 className="mt-5 text-xl font-bold text-slate-600">Mahasiswa Sistem Informasi</h2>
        <p className="mt-5 max-w-xl leading-8 text-slate-600">
          Saya mahasiswa Sistem Informasi Universitas Hasanuddin yang tertarik pada desain digital,
          pengembangan web, dan pembuatan solusi digital yang sederhana, fungsional, serta menarik.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#gallery" className="rounded-xl bg-emerald-800 px-5 py-3 font-bold text-white transition hover:bg-emerald-700">
            Lihat Gallery <span aria-hidden="true"></span>
          </a>
          <button onClick={showMessage} className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800">
            Sapa Saya
          </button>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-slate-500">
          <a href="https://github.com/AlfaFdz" target="_blank" rel="noreferrer" className="hover:text-emerald-800">GitHub</a>
          <a href="https://www.instagram.com/_.alfaaaaa/" target="_blank" rel="noreferrer" className="hover:text-emerald-800">Instagram</a>
          <a href="https://www.youtube.com/@Wlpy" target="_blank" rel="noreferrer" className="hover:text-emerald-800">YouTube</a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-emerald-100"></div>
        <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl">
          <img src={Profile} alt="Foto profil Ilmi Ahmad Alfaridzi"/>
        </div>
        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-lg">
          <p className="text-xs text-slate-500">Fokus saat ini</p>
          <p className="font-extrabold text-slate-900">Design</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;