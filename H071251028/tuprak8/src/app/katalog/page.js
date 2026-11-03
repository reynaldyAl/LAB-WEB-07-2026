"use client";

import { useState } from "react";
import dataBuku from "@/data/dataBuku";
import BukuCard from "@/components/bukuCard";

const kategoriBuku = [
  "Semua",
  "Teknologi",
  "Fiksi",
  "Pengembangan Diri",
];

export default function Katalog() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuDitampilkan =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter(
          (buku) => buku.kategori === kategoriAktif
        );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
          Jelajahi Koleksi
        </p>

        <h1 className="mt-2 text-3xl font-bold text-pink-900 sm:text-4xl">
          Katalog Buku
        </h1>

        <p className="mt-3 text-pink-700/80">
          Temukan buku yang sesuai dengan minat dan kebutuhanmu.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-sm font-semibold text-pink-800">
          Filter berdasarkan kategori
        </h2>

        <div className="flex flex-wrap gap-3">
          {kategoriBuku.map((kategori) => (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriAktif(kategori)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                kategoriAktif === kategori
                  ? "bg-pink-500 text-white shadow-sm"
                  : "border border-pink-200 bg-white text-pink-800 hover:bg-pink-100/50"
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>
      </section>

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-pink-900">
          {kategoriAktif === "Semua"
            ? "Semua Koleksi"
            : kategoriAktif}
        </h2>

        <p className="text-sm text-pink-500 font-medium">
          {bukuDitampilkan.length} buku
        </p>
      </div>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {bukuDitampilkan.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </section>

      {bukuDitampilkan.length === 0 && (
        <p className="py-10 text-center text-pink-500">
          Tidak ada buku dalam kategori ini.
        </p>
      )}
    </div>
  );
}