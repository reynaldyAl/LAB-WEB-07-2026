"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const daftarMenu = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
      <nav className="container-page flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuTerbuka(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-800 text-lg font-bold text-white">
            P.
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-stone-900">
              Pustaka Senja
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
              Ruang Baca Komunitas
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="rounded-lg border border-stone-200 p-2 text-stone-700 md:hidden"
          aria-label="Buka menu navigasi"
          aria-expanded={menuTerbuka}
          onClick={() => setMenuTerbuka(!menuTerbuka)}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {daftarMenu.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-green-50 text-green-800"
                      : "text-stone-600 hover:bg-stone-100 hover:text-green-800"
                  }`}
                >
                  {item.nama}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {menuTerbuka && (
        <div className="border-t border-stone-100 bg-white px-5 py-3 md:hidden">
          <ul className="container-page flex flex-col gap-1">
            {daftarMenu.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuTerbuka(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-green-50 text-green-800"
                        : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    {item.nama}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}