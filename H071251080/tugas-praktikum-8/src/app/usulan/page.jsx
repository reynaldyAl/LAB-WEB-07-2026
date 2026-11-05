"use client";

import { useState } from "react";
import Link from "next/link";
import dataBuku, { kategoriBuku, gayaKategori } from "@/data/dataBuku";

const BATAS_ALASAN = 300;

const kelasInput =
  "w-full rounded-xl border bg-kertas px-4 py-2.5 text-sm placeholder:text-tinta-2/70 focus:outline-2 focus:outline-senja/30";

export default function UsulanPage() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");
  const [galat, setGalat] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "gagal" | "berhasil"
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  // Petunjuk (tidak memblokir): judul yang diketik ternyata sudah ada di koleksi.
  const judulBersih = judul.trim().toLowerCase();
  const sudahAda =
    judulBersih === ""
      ? undefined
      : dataBuku.find((buku) => buku.judul.toLowerCase() === judulBersih);

  function ubah(setter, namaKolom) {
    return (e) => {
      setter(e.target.value);
      if (galat[namaKolom]) {
        setGalat({ ...galat, [namaKolom]: undefined });
      }
      if (status !== "idle") setStatus("idle");
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      nama: nama.trim(),
      judul: judul.trim(),
      kategori: kategori.trim(),
      alasan: alasan.trim(),
    };

    const hasilValidasi = {};
    if (data.nama === "") hasilValidasi.nama = "Nama pengusul wajib diisi.";
    if (data.judul === "")
      hasilValidasi.judul = "Judul buku yang diusulkan wajib diisi.";
    if (data.kategori === "") hasilValidasi.kategori = "Pilih salah satu kategori.";
    if (data.alasan === "") hasilValidasi.alasan = "Alasan usulan wajib diisi.";

    setGalat(hasilValidasi);

    if (Object.keys(hasilValidasi).length > 0) {
      setStatus("gagal");
      return;
    }

    const waktu = new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setDaftarUsulan((sebelumnya) => [
      { ...data, id: `${Date.now()}-${sebelumnya.length}`, waktu },
      ...sebelumnya,
    ]);
    setNama("");
    setJudul("");
    setKategori("");
    setAlasan("");
    setStatus("berhasil");
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-widest text-senja-tua">
        Usulan Buku
      </p>
      <h1 className="mt-1 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        Buku apa yang ingin Anda baca?
      </h1>
      <p className="mt-3 max-w-2xl text-tinta-2">
        Koleksi Pustaka Senja dibentuk bersama pembacanya. Isi formulir di
        bawah untuk mengusulkan judul yang ingin kami hadirkan.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 rounded-3xl border border-garis bg-white/70 p-6 shadow-sm sm:p-8 lg:col-span-3"
        >
          {status === "gagal" && (
            <p
              role="alert"
              className="rounded-xl border border-red-600/25 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
            >
              Formulir belum lengkap. Mohon isi semua kolom yang ditandai.
            </p>
          )}
          {status === "berhasil" && (
            <p
              role="status"
              className="rounded-xl border border-emerald-600/25 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900"
            >
              Terima kasih! Usulan buku Anda berhasil dikirim.
            </p>
          )}

          <div>
            <label htmlFor="nama" className="mb-1.5 block text-sm font-semibold">
              Nama Pengusul
            </label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={ubah(setNama, "nama")}
              placeholder="Nama Anda"
              autoComplete="name"
              aria-invalid={Boolean(galat.nama)}
              aria-describedby={galat.nama ? "galat-nama" : undefined}
              className={`${kelasInput} ${galat.nama ? "border-red-500" : "border-garis"}`}
            />
            {galat.nama && (
              <p id="galat-nama" className="mt-1.5 text-sm text-red-700">
                {galat.nama}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="judul" className="mb-1.5 block text-sm font-semibold">
              Judul Buku yang Diusulkan
            </label>
            <input
              id="judul"
              type="text"
              value={judul}
              onChange={ubah(setJudul, "judul")}
              placeholder="Contoh: Sapiens"
              aria-invalid={Boolean(galat.judul)}
              aria-describedby={galat.judul ? "galat-judul" : undefined}
              className={`${kelasInput} ${galat.judul ? "border-red-500" : "border-garis"}`}
            />
            {galat.judul && (
              <p id="galat-judul" className="mt-1.5 text-sm text-red-700">
                {galat.judul}
              </p>
            )}
            {sudahAda && (
              <p className="mt-1.5 text-sm text-gading-800">
                Judul ini sudah ada di koleksi kami.{" "}
                <Link
                  href={`/katalog/${sudahAda.id}`}
                  className="font-semibold underline"
                >
                  Lihat &ldquo;{sudahAda.judul}&rdquo;
                </Link>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="kategori"
              className="mb-1.5 block text-sm font-semibold"
            >
              Kategori
            </label>
            <select
              id="kategori"
              value={kategori}
              onChange={ubah(setKategori, "kategori")}
              aria-invalid={Boolean(galat.kategori)}
              aria-describedby={galat.kategori ? "galat-kategori" : undefined}
              className={`${kelasInput} ${galat.kategori ? "border-red-500" : "border-garis"}`}
            >
              <option value="">Pilih kategori…</option>
              {kategoriBuku.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {galat.kategori && (
              <p id="galat-kategori" className="mt-1.5 text-sm text-red-700">
                {galat.kategori}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="alasan" className="mb-1.5 block text-sm font-semibold">
              Alasan Usulan
            </label>
            <textarea
              id="alasan"
              rows={5}
              maxLength={BATAS_ALASAN}
              value={alasan}
              onChange={ubah(setAlasan, "alasan")}
              placeholder="Ceritakan mengapa buku ini layak ada di Pustaka Senja…"
              aria-invalid={Boolean(galat.alasan)}
              aria-describedby={galat.alasan ? "galat-alasan" : undefined}
              className={`${kelasInput} resize-y ${galat.alasan ? "border-red-500" : "border-garis"}`}
            />
            <div className="mt-1.5 flex justify-between gap-4 text-sm">
              <p id="galat-alasan" className="text-red-700">
                {galat.alasan}
              </p>
              <p className="shrink-0 text-tinta-2">
                {alasan.length}/{BATAS_ALASAN}
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-senja px-6 py-3 text-sm font-semibold text-malam shadow-lg shadow-senja/25 transition hover:bg-emas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta sm:w-auto"
          >
            Kirim Usulan
          </button>
        </form>

        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-3xl bg-malam p-6 text-kertas">
            <h2 className="font-serif text-2xl font-semibold">
              Cek katalog dulu
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-kertas/75">
              Kami punya {dataBuku.length} judul. Siapa tahu buku yang Anda
              cari sudah ada di rak.
            </p>
            <Link
              href="/katalog"
              className="mt-4 inline-block rounded-full bg-kertas px-5 py-2 text-sm font-semibold text-malam transition hover:bg-emas"
            >
              Buka Katalog
            </Link>
          </div>

          <div className="rounded-3xl border border-garis bg-white/70 p-6">
            <h2 className="font-serif text-2xl font-semibold">
              Usulan sesi ini
            </h2>
            {daftarUsulan.length === 0 ? (
              <p className="mt-2 text-sm text-tinta-2">
                Usulan yang baru Anda kirim akan muncul di sini selama halaman
                ini terbuka.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {daftarUsulan.map((usulan) => (
                  <li
                    key={usulan.id}
                    className="rounded-2xl bg-kertas-tua/60 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold leading-snug">
                        {usulan.judul}
                      </p>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${gayaKategori[usulan.kategori].lencana}`}
                      >
                        {usulan.kategori}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-tinta-2">
                      Diusulkan {usulan.nama} &middot; {usulan.waktu}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed">
                      {usulan.alasan}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
