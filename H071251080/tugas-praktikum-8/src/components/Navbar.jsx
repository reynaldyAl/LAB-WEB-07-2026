"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-garis bg-kertas/85 backdrop-blur">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-senja"
        >
          <span
            aria-hidden="true"
            className="relative grid size-9 shrink-0 place-items-end overflow-hidden rounded-xl bg-malam"
          >
            <span className="absolute left-1/2 top-2.5 size-5 -translate-x-1/2 rounded-full bg-senja" />
            <span className="relative flex items-end gap-0.5 pb-1">
              <span className="h-3 w-1.5 rounded-t-sm bg-kertas" />
              <span className="h-4 w-1.5 rounded-t-sm bg-emas" />
              <span className="h-2.5 w-1.5 rounded-t-sm bg-kertas" />
              <span className="h-3.5 w-1.5 rounded-t-sm bg-emas" />
            </span>
          </span>
          <span className="hidden font-serif text-xl font-semibold tracking-tight min-[420px]:inline">
            Pustaka <span className="text-senja-tua italic">Senja</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {daftarMenu.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname === item.path || pathname.startsWith(`${item.path}/`);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "block border-b-2 border-senja px-2.5 py-1.5 text-sm font-semibold text-tinta sm:px-3"
                      : "block border-b-2 border-transparent px-2.5 py-1.5 text-sm font-medium text-tinta-2 transition hover:text-tinta sm:px-3"
                  }
                >
                  {item.nama}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
