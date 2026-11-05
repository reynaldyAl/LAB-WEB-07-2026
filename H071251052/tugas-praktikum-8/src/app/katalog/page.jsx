"use client";

import { useState } from "react";
import dataBuku from "@/data/dataBuku";
import BukuCard from "@/components/BukuCard";

const daftarKategori = [
  "Semua",
  "Teknologi",
  "Fiksi",
  "Pengembangan Diri",
];

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <section>
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
          Temukan bacaanmu
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Katalog Buku
            </h1>
            <p className="mt-2 text-sm text-stone-500">
              Pilih buku, simpan favorit, dan lihat informasi lengkapnya.
            </p>
          </div>
          <p className="text-sm text-stone-500">
            Menampilkan <span className="font-semibold text-stone-800">{bukuTampil.length}</span> buku
          </p>
        </div>
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              kategoriAktif === kategori
                ? "bg-green-800 text-white shadow-sm"
                : "border border-stone-200 bg-white text-stone-600 hover:border-green-300 hover:text-green-800"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      {bukuTampil.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bukuTampil.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-500">
          Belum ada buku dalam kategori ini.
        </p>
      )}
    </section>
  );
}