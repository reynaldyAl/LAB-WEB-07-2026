"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku, { daftarKategori } from "@/data/dataBuku";

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");
  const [hanyaTersedia, setHanyaTersedia] = useState(false);

  // Hasil filter diturunkan dari state, tidak disimpan sebagai state tersendiri.
  const kunci = kataKunci.trim().toLowerCase();
  const hasil = dataBuku.filter((buku) => {
    const cocokKategori =
      kategoriAktif === "Semua" || buku.kategori === kategoriAktif;
    const cocokStok = !hanyaTersedia || buku.tersedia;
    const cocokKunci =
      kunci === "" ||
      buku.judul.toLowerCase().includes(kunci) ||
      buku.penulis.toLowerCase().includes(kunci);
    return cocokKategori && cocokStok && cocokKunci;
  });

  function jumlahKategori(kategori) {
    return kategori === "Semua"
      ? dataBuku.length
      : dataBuku.filter((buku) => buku.kategori === kategori).length;
  }

  function resetFilter() {
    setKategoriAktif("Semua");
    setKataKunci("");
    setHanyaTersedia(false);
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-widest text-senja-tua">
        Katalog Buku
      </p>
      <h1 className="mt-1 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        Temukan bacaan berikutnya
      </h1>
      <p className="mt-3 max-w-2xl text-tinta-2">
        Telusuri seluruh koleksi Pustaka Senja. Cari berdasarkan judul atau
        penulis, saring menurut kategori, dan simpan buku yang ingin Anda baca.
      </p>

      {/* Panel filter */}
      <div className="mt-8 space-y-4 rounded-2xl border border-garis bg-white/70 p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <label htmlFor="cari-buku" className="sr-only">
              Cari judul atau penulis
            </label>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-tinta-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id="cari-buku"
              type="search"
              value={kataKunci}
              onChange={(e) => setKataKunci(e.target.value)}
              placeholder="Cari judul atau penulis…"
              className="w-full rounded-full border border-garis bg-kertas py-2.5 pl-10 pr-4 text-sm placeholder:text-tinta-2/70 focus:border-senja focus:outline-2 focus:outline-senja/30"
            />
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={hanyaTersedia}
            onClick={() => setHanyaTersedia(!hanyaTersedia)}
            className="flex items-center gap-3 rounded-full border border-garis bg-kertas px-4 py-2.5 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-senja"
          >
            <span
              aria-hidden="true"
              className={`relative h-5 w-9 rounded-full transition ${
                hanyaTersedia ? "bg-emerald-600" : "bg-tinta/25"
              }`}
            >
              <span
                className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition-all ${
                  hanyaTersedia ? "left-[1.1rem]" : "left-0.5"
                }`}
              />
            </span>
            Hanya yang tersedia
          </button>
        </div>

        <div
          role="group"
          aria-label="Filter kategori"
          className="flex flex-wrap gap-2"
        >
          {daftarKategori.map((kategori) => {
            const aktif = kategori === kategoriAktif;
            return (
              <button
                key={kategori}
                type="button"
                onClick={() => setKategoriAktif(kategori)}
                aria-pressed={aktif}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-senja ${
                  aktif
                    ? "border-tinta bg-tinta text-kertas shadow-md"
                    : "border-garis bg-kertas text-tinta hover:border-tinta/40"
                }`}
              >
                {kategori}
                <span
                  className={`rounded-full px-1.5 text-xs ${
                    aktif ? "bg-kertas/20" : "bg-kertas-tua text-tinta-2"
                  }`}
                >
                  {jumlahKategori(kategori)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mt-6 text-sm text-tinta-2"
      >
        Menampilkan{" "}
        <strong className="font-semibold text-tinta">{hasil.length}</strong>{" "}
        dari {dataBuku.length} buku
      </p>

      {hasil.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((buku) => (
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
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-garis bg-white/50 px-6 py-14 text-center">
          <p className="font-serif text-2xl font-semibold">
            Belum ada buku yang cocok
          </p>
          <p className="mx-auto mt-2 max-w-md text-tinta-2">
            Coba kata kunci lain atau longgarkan filter. Kalau memang belum ada
            di rak kami, Anda bisa mengusulkannya.
          </p>
          <button
            type="button"
            onClick={resetFilter}
            className="mt-5 rounded-full bg-tinta px-5 py-2.5 text-sm font-semibold text-kertas transition hover:bg-ungu"
          >
            Reset semua filter
          </button>
        </div>
      )}
    </section>
  );
}
