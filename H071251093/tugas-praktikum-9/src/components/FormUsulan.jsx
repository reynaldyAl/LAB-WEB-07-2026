"use client";

import { useState } from "react";

const input =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200";
const label = "mb-1 block font-medium text-stone-800";

export default function FormUsulan() {
  const [daftar, setDaftar] = useState([]);
  const [error, setError] = useState("");

  function kirim(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const nama = f.nama.value.trim();
    const judul = f.judul.value.trim();
    const kategori = f.kategori.value;
    const alasan = f.alasan.value.trim();

    if (!nama || !judul || !kategori || !alasan) {
      setError("Semua kolom wajib diisi.");
      return;
    }

    setError("");
    setDaftar((lama) => [...lama, { id: Date.now(), nama, judul, kategori, alasan }]);
    f.reset();
  }

  return (
    <div>
      <form onSubmit={kirim} className="space-y-5 rounded-2xl bg-white p-6 shadow-md">
        {error && <p className="rounded-lg bg-red-100 p-3 text-red-700">{error}</p>}

        <div>
          <label className={label}>Nama Pengusul</label>
          <input name="nama" className={input} />
        </div>
        <div>
          <label className={label}>Judul Buku yang Diusulkan</label>
          <input name="judul" className={input} />
        </div>
        <div>
          <label className={label}>Kategori</label>
          <select name="kategori" defaultValue="" className={input}>
            <option value="">-- Pilih kategori --</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>
        </div>
        <div>
          <label className={label}>Alasan Usulan</label>
          <textarea name="alasan" rows={5} className={input} />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white hover:bg-orange-800"
        >
          Kirim Usulan
        </button>
      </form>

      {daftar.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-2xl font-bold text-orange-900">Usulan Terkirim</h2>
          <ul className="space-y-3">
            {daftar.map((u) => (
              <li key={u.id} className="rounded-2xl bg-white p-4 shadow-md">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  {u.kategori}
                </span>
                <p className="mt-2 font-semibold text-stone-900">{u.judul}</p>
                <p className="text-sm text-stone-600">Diusulkan oleh {u.nama}</p>
                <p className="mt-1 text-sm text-stone-700">{u.alasan}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}