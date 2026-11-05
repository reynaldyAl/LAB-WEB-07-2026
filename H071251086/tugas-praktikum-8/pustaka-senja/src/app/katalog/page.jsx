"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import { dataBuku, daftarKategori, gayaKategori } from "@/data/dataBuku";

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Katalog Buku</h1>
        <p className="text-slate-500 mt-1">
          Pilih kategori, lalu simpan buku yang Anda sukai dengan tombol bintang.
        </p>
      </div>

      {/* Filter kategori */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {daftarKategori.map((kategori) => {
          const aktif = kategori === kategoriAktif;
          return (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriAktif(kategori)}
              aria-pressed={aktif}
              className={
                aktif
                  ? "bg-teal-500 text-white rounded-2xl py-4 px-3 shadow-lg shadow-teal-300 font-bold flex flex-col items-center gap-1 transition"
                  : "bg-white text-slate-700 rounded-2xl py-4 px-3 shadow-md shadow-blue-200/60 font-bold flex flex-col items-center gap-1 hover:bg-teal-50 transition"
              }
            >
              <span className="text-3xl">{gayaKategori[kategori].ikon}</span>
              <span className="text-sm">{kategori}</span>
            </button>
          );
        })}
      </div>

      <p className="text-sm text-slate-500 font-medium mb-4">
        Menampilkan {bukuTampil.length} buku
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
}