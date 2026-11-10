"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import { daftarKategori } from "@/lib/kategori";


// penerima data props
export default function KatalogBuku({ daftarBuku }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? daftarBuku
      : daftarBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
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
                  ? "bg-blush text-navy-900 font-semibold text-sm px-5 py-2.5 rounded-full transition"
                  : "bg-white/10 text-blush hover:bg-white/15 font-medium text-sm px-5 py-2.5 rounded-full transition"
              }
            >
              {kategori}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-mist mb-4">Menampilkan {bukuTampil.length} buku</p>

      {bukuTampil.length === 0 ? (
        <p className="text-center text-mist py-12">
          Belum ada buku pada kategori ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bukuTampil.map((buku) => (

            // props pake kirim data ke bukucard.jsx
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
      )}
    </>
  );
}