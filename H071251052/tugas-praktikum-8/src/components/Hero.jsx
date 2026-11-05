import Link from "next/link";

export default function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="relative overflow-hidden rounded-50 bg-green-950 px-7 py-12 text-white shadow-lg sm:px-12 sm:py-16">
      <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute -right-2 -top-10 h-52 w-52 rounded-full border border-white/10" />

      <div className="relative max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium tracking-wide text-green-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Ruang baca komunitas
        </span>

        <p className="mt-7 text-sm font-medium text-green-100">
          Selamat datang di {nama}
        </p>

        <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Temukan cerita,
          <br />
          <span className="font-serif italic text-emerald-200">
            temukan perspektif.
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-sm leading-7 text-green-100/90 sm:text-base">
          {slogan}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/katalog"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-green-950 transition hover:bg-emerald-100"
          >
            Jelajahi Katalog →
          </Link>

          <Link
            href="/usulan"
            className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Usulkan Buku
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs text-green-100">
          <p>
            <span className="mb-1 block text-white/60">Lokasi</span>
            {lokasi}
          </p>

          <p>
            <span className="mb-1 block text-white/60">Jam buka</span>
            {jamBuka}
          </p>
        </div>
      </div>
    </section>
  );
}