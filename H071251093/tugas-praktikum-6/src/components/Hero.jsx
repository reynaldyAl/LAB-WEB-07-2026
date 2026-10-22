import profilImg from "../assets/profil.jpeg";

function Hero() {
  const sapaan = 'Halo, saya Imam.'
  const deskripsi =
    'Mahasiswa yang suka membangun hal-hal kecil yang berjalan: dari website, basis data, sampai game kolaboratif. Saya sedang belajar merancang antarmuka yang rapi dan mudah dipakai.'

  const handleClick = () => {
    console.log('Tombol "Lihat profil saya" diklik')
  }

  return (
    <section id="beranda" className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr] md:py-24">
      <div className="order-2 md:order-1">
        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          {sapaan}
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/80">{deskripsi}</p>
        <button
          type="button"
          onClick={handleClick}
          className="mt-8 cursor-pointer rounded-full bg-brand px-7 py-3 font-bold text-white shadow-[4px_4px_0_0_var(--color-ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          Lihat profil saya
        </button>
      </div>

      <div className="order-1 mx-auto w-56 sm:w-72 md:order-2 md:w-full">
        <div className="rounded-[2.5rem] bg-sun p-2 shadow-[10px_10px_0_0_var(--color-brand)]">
          <img
            src={profilImg}
            alt="Foto profil Imam"
            className="aspect-square w-full rounded-[2rem] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;