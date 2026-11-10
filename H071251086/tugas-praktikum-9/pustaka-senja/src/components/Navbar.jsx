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
    <nav className="sticky top-0 z-20 bg-navy-900/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex flex-col gap-0.75" aria-hidden="true">
            <span className="block h-1.25 w-6 rounded-full bg-blush" />
            <span className="block h-1.25 w-4 rounded-full bg-crimson" />
            <span className="block h-1.25 w-5 rounded-full bg-blush" />
          </span>
          <span className="text-xl font-semibold text-white tracking-tight">
            Pustaka Senja
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {daftarMenu.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={
                    isActive
                      ? "block bg-white/10 text-blush font-semibold text-sm px-4 py-2 rounded-full"
                      : "block text-mist hover:text-white hover:bg-white/5 font-medium text-sm px-4 py-2 rounded-full transition"
                  }
                >
                  {item.nama}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;