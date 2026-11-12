"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { path: "/", label: "Beranda" },
  { path: "/katalog", label: "Katalog" },
  { path: "/usulan", label: "Usulan Buku" },
];

export default function Navbar() {
  const pathname = usePathname();

  const aktif = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-10 border-b border-amber-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-amber-800">
        Pustaka Senja
        </Link>
        <ul className="flex gap-4 text-sm sm:gap-6">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={
                  aktif(item.path)
                    ? "border-b-2 border-amber-700 pb-1 font-semibold text-amber-800"
                    : "pb-1 text-gray-600 hover:text-amber-700"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
