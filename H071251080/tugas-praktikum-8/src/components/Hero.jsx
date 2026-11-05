import Link from "next/link";

// Siluet rak buku di cakrawala senja (murni dekoratif).
const rakSiluet = [
  { id: "s1", kelas: "h-10 w-4" },
  { id: "s2", kelas: "h-16 w-5" },
  { id: "s3", kelas: "h-12 w-3" },
  { id: "s4", kelas: "h-20 w-6" },
  { id: "s5", kelas: "h-14 w-4" },
  { id: "s6", kelas: "h-24 w-5" },
  { id: "s7", kelas: "h-11 w-3" },
  { id: "s8", kelas: "h-16 w-6" },
  { id: "s9", kelas: "h-9 w-4" },
  { id: "s10", kelas: "h-20 w-4" },
  { id: "s11", kelas: "h-14 w-5" },
  { id: "s12", kelas: "h-24 w-3" },
  { id: "s13", kelas: "h-12 w-6" },
  { id: "s14", kelas: "h-18 w-4" },
  { id: "s15", kelas: "h-10 w-5" },
  { id: "s16", kelas: "h-16 w-3" },
  { id: "s17", kelas: "h-22 w-5" },
  { id: "s18", kelas: "h-12 w-4" },
];

function Hero({ nama, slogan, deskripsi, lokasi, jamBuka }) {
  const [kataPertama, ...sisaNama] = nama.split(" ");

  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-linear-to-b from-malam via-ungu to-plum-500 text-kertas shadow-xl shadow-malam/20">
      {/* matahari terbenam */}
      <div
        aria-hidden="true"
        className="absolute -bottom-28 left-1/2 -z-10 size-80 -translate-x-1/2 rounded-full bg-linear-to-t from-senja to-emas opacity-95 blur-[2px] sm:left-3/4 sm:size-[26rem]"
      />
      {/* siluet rak buku */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 flex items-end justify-center gap-1 overflow-hidden px-2"
      >
        {rakSiluet.map((batang) => (
          <span
            key={batang.id}
            className={`${batang.kelas} shrink-0 rounded-t-sm bg-malam`}
          />
        ))}
      </div>

      <div className="px-6 pb-36 pt-14 sm:px-12 sm:pb-40 sm:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-kertas/20 bg-kertas/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emas">
          <span className="size-1.5 rounded-full bg-emas" />
          Ruang baca komunitas
        </span>

        <h1 className="mt-5 max-w-2xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          {kataPertama}{" "}
          <em className="font-medium text-emas">{sisaNama.join(" ")}</em>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-kertas/90">
          {slogan}
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-kertas/70">
          {deskripsi}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-kertas/85">
          <li className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 text-emas"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            {lokasi}
          </li>
          <li className="flex items-center gap-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 text-emas"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {jamBuka}
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/katalog"
            className="rounded-full bg-senja px-6 py-3 text-sm font-semibold text-malam shadow-lg shadow-senja/30 transition hover:bg-emas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kertas"
          >
            Jelajahi Katalog
          </Link>
          <Link
            href="/usulan"
            className="rounded-full border border-kertas/40 bg-kertas/5 px-6 py-3 text-sm font-semibold text-kertas transition hover:bg-kertas/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kertas"
          >
            Usulkan Buku
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
