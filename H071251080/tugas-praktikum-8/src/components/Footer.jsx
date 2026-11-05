import Link from "next/link";

function Footer({ nama, lokasi, jamBuka, totalBuku }) {
  return (
    <footer className="mt-16 bg-malam text-kertas/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold text-kertas">
            {nama}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Ruang baca komunitas dengan {totalBuku} koleksi pilihan. Baca
            pelan-pelan, pulang membawa sesuatu.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emas">
            Kunjungi Kami
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{lokasi}</li>
            <li>{jamBuka}</li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emas">
            Jelajahi
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/katalog" className="transition hover:text-emas">
                Katalog Buku
              </Link>
            </li>
            <li>
              <Link href="/usulan" className="transition hover:text-emas">
                Usulkan Buku Baru
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-kertas/10 py-5 text-center text-xs text-kertas/60">
        &copy; {new Date().getFullYear()} {nama} &mdash; Dibangun dengan Next.js
        &amp; Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
