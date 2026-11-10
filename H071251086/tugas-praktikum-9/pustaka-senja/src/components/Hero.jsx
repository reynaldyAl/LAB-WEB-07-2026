import Image from "next/image";
import HeroBookshelf from "@/components/HeroBookshelf";

function Hero({ label, nama, slogan, gambar, altGambar, lokasi, jamBuka, children }) {
  return (
    <section className="text-center px-4 pt-2 pb-8 sm:pt-4 sm:pb-12">
      <p className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-blush mb-5">
        {label}
      </p>
      <h1 className="font-display text-4xl sm:text-6xl leading-tight text-cream">
        Selamat datang di <em className="italic text-blush">{nama}</em>.
      </h1>
      <p className="max-w-xl mx-auto text-mist mt-5 leading-relaxed">
        {slogan}
      </p>

      <HeroBookshelf />

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <span className="bg-white/10 text-cream text-sm font-medium px-4 py-2 rounded-full">
          {lokasi}
        </span>
        <span className="bg-white/10 text-cream text-sm font-medium px-4 py-2 rounded-full">
          {jamBuka}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">{children}</div>
    </section>
  );
}

export default Hero;