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
    <nav className="sticky top-0 z-20 bg-teal-500 shadow-md">
      <div className="max-w-6xl mx-auto px-5 py-3 flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-full bg-amber-300 flex items-center justify-center text-2xl shadow-inner">
            🦉
          </span>
          <span className="text-xl font-extrabold text-white tracking-tight">
            Pustaka Senja
          </span>
        </Link>

        <ul className="flex items-center gap-2">
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
                      ? "block bg-white text-teal-600 font-bold text-sm px-4 py-2 rounded-xl shadow"
                      : "block text-white/90 hover:bg-white/20 font-semibold text-sm px-4 py-2 rounded-xl transition"
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