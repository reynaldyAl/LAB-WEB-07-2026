"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function Katalog() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((b) => b.kategori === kategoriAktif);

  return (
    <div>
      <h1 className="text-2xl font-bold text-amber-900">Katalog Buku</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKategoriAktif(k)}
            className={
              kategoriAktif === k
                ? "rounded-full bg-amber-700 px-4 py-1.5 text-sm font-medium text-white"
                : "rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
            }
          >
            {k}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTampil.map((buku) => (
          <BukuCard
            key={buku.id}
            id={buku.id}
            judul={buku.judul}
            penulis={buku.penulis}
            kategori={buku.kategori}
            tahun={buku.tahun}
            tersedia={buku.tersedia}
          />
        ))}
      </div>
    </div>
  );
}
