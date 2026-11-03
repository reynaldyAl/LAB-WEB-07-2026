"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
  { nama: "Home", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan", path: "/usulan" },
];

function Navbar() {
  const pathname = usePathname();
  //usepath supaya bisa nabaca urlnya

  return (
    <nav className="sticky top-0 z-10 border-b border-pink-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold text-pink-700">
          🌸 Pustaka Senja
        </Link>

        <ul className="flex items-center gap-6">
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
                      ? "border-b-2 border-pink-500 pb-1 font-bold text-pink-600"
                      : "font-medium text-pink-800 transition hover:text-pink-500"
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