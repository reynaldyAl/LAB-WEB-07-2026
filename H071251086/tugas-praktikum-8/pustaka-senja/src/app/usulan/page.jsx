"use client";

import { useState } from "react";

const pilihanKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const kelasInput =
  "w-full bg-white border-2 border-blue-100 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:border-blue-500";

export default function UsulanPage() {
  const [pengusul, setPengusul] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("");
  const [alasan, setAlasan] = useState("");
  const [pesan, setPesan] = useState(null); // { jenis: "error" | "sukses", teks: string }
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const lengkap =
      pengusul.trim() !== "" &&
      judul.trim() !== "" &&
      kategori.trim() !== "" &&
      alasan.trim() !== "";

    if (!lengkap) {
      setPesan({
        jenis: "error",
        teks: "Semua kolom wajib diisi. Lengkapi formulir terlebih dahulu.",
      });
      return;
    }

    const usulanBaru = {
      id: Date.now(),
      pengusul: pengusul.trim(),
      judul: judul.trim(),
      kategori,
      alasan: alasan.trim(),
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPesan({
      jenis: "sukses",
      teks: `Terima kasih, ${usulanBaru.pengusul}! Usulan buku "${usulanBaru.judul}" berhasil dikirim.`,
    });
    setPengusul("");
    setJudul("");
    setKategori("");
    setAlasan("");
  }

  return (
    <section className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold">Usulan Buku</h1>
        <p className="text-slate-500 mt-1">
          Ada buku yang ingin dihadirkan di Pustaka Senja? Ceritakan di sini.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl p-6 shadow-md shadow-blue-200/60 space-y-4"
      >
        <div>
          <label
            htmlFor="pengusul"
            className="block text-sm font-bold text-slate-700 mb-1"
          >
            Nama Pengusul
          </label>
          <input
            id="pengusul"
            type="text"
            placeholder="Masukkan nama Anda"
            value={pengusul}
            onChange={(e) => setPengusul(e.target.value)}
            className={kelasInput}
          />
        </div>

        <div>
          <label
            htmlFor="judul"
            className="block text-sm font-bold text-slate-700 mb-1"
          >
            Judul Buku yang Diusulkan
          </label>
          <input
            id="judul"
            type="text"
            placeholder="Contoh: Sapiens"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className={kelasInput}
          />
        </div>

        <div>
          <label
            htmlFor="kategori"
            className="block text-sm font-bold text-slate-700 mb-1"
          >
            Kategori
          </label>
          <select
            id="kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className={kelasInput}
          >
            <option value="">Pilih kategori</option>
            {pilihanKategori.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="alasan"
            className="block text-sm font-bold text-slate-700 mb-1"
          >
            Alasan Usulan
          </label>
          <textarea
            id="alasan"
            rows={4}
            placeholder="Mengapa buku ini perlu ada di Pustaka Senja?"
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            className={kelasInput}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-2xl transition"
        >
          Kirim Usulan
        </button>
      </form>

      {pesan && (
        <p
          role="status"
          className={
            pesan.jenis === "error"
              ? "mt-4 p-4 bg-red-100 text-red-700 text-sm font-semibold rounded-2xl"
              : "mt-4 p-4 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-2xl"
          }
        >
          {pesan.teks}
        </p>
      )}

      {daftarUsulan.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-extrabold mb-3">
            Usulan Anda pada Sesi Ini
          </h2>
          <ul className="space-y-3">
            {daftarUsulan.map((usulan) => (
              <li
                key={usulan.id}
                className="bg-white rounded-2xl p-4 shadow-md shadow-blue-200/60"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-extrabold">{usulan.judul}</h3>
                  <span className="bg-blue-50 text-teal-600 text-xs font-bold px-3 py-1 rounded-full">
                    {usulan.kategori}
                  </span>
                </div>
                <p className="text-sm text-slate-500">
                  Diusulkan oleh {usulan.pengusul}
                </p>
                <p className="text-sm text-slate-600 mt-2">{usulan.alasan}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}