"use client";

import { useState } from "react";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const formAwal = {
  nama: "",
  judul: "",
  kategori: "",
  alasan: "",
};

export default function Usulan() {
  const [form, setForm] = useState(formAwal);
  const [pesan, setPesan] = useState(null);
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lengkap =
      form.nama.trim() &&
      form.judul.trim() &&
      form.kategori.trim() &&
      form.alasan.trim();

    if (!lengkap) {
      setPesan({ tipe: "error", teks: "Semua kolom wajib diisi sebelum mengirim usulan." });
      return;
    }

    const usulanBaru = {
      id: `${Date.now()}`,
      nama: form.nama.trim(),
      judul: form.judul.trim(),
      kategori: form.kategori,
      alasan: form.alasan.trim(),
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPesan({ tipe: "sukses", teks: "Usulan buku berhasil dikirim. Terima kasih!" });
    setForm(formAwal);
  };

  const inputClass =
    "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-amber-900">Usulan Buku</h1>
        <p className="text-gray-600">
          Punya buku yang ingin dihadirkan di Pustaka Senja? Usulkan di sini.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <label className="block text-sm font-medium text-gray-700">
          Nama Pengusul
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className={inputClass}
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Judul Buku yang Diusulkan
          <input
            type="text"
            name="judul"
            value={form.judul}
            onChange={handleChange}
            className={inputClass}
          />
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Kategori
          <select
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">-- Pilih kategori --</option>
            {daftarKategori.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-gray-700">
          Alasan Usulan
          <textarea
            name="alasan"
            rows={4}
            value={form.alasan}
            onChange={handleChange}
            className={inputClass}
          />
        </label>

        {pesan && (
          <p
            className={
              pesan.tipe === "error"
                ? "rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700"
                : "rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700"
            }
          >
            {pesan.teks}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-amber-700 px-5 py-2 font-medium text-white hover:bg-amber-800"
        >
          Kirim Usulan
        </button>
      </form>

      {daftarUsulan.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900">Usulan Terkirim</h2>
          <ul className="mt-3 space-y-3">
            {daftarUsulan.map((u) => (
              <li
                key={u.id}
                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-gray-900">
                  {u.judul}{" "}
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                    {u.kategori}
                  </span>
                </p>
                <p className="text-sm text-gray-500">Diusulkan oleh {u.nama}</p>
                <p className="mt-1 text-sm text-gray-700">{u.alasan}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
