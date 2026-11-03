"use client";

import { useState } from "react";

const formAwal = {
  nama: "",
  judul: "",
  kategori: "Teknologi",
  alasan: "",
};

export default function UsulanBuku() {
  const [form, setForm] = useState(formAwal);
  const [daftarUsulan, setDaftarUsulan] = useState([]);
  const [pesan, setPesan] = useState("");
  const [jenisPesan, setJenisPesan] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((formSebelumnya) => ({
      ...formSebelumnya,
      [name]: value,
    }));

    setPesan("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.nama.trim() ||
      !form.judul.trim() ||
      !form.kategori.trim() ||
      !form.alasan.trim()
    ) {
      setJenisPesan("error");
      setPesan("Semua kolom wajib diisi sebelum mengirim usulan.");
      return;
    }

    const usulanBaru = {
      id: crypto.randomUUID(),
      nama: form.nama.trim(),
      judul: form.judul.trim(),
      kategori: form.kategori,
      alasan: form.alasan.trim(),
    };

    setDaftarUsulan((usulanSebelumnya) => [
      ...usulanSebelumnya,
      usulanBaru,
    ]);

    setJenisPesan("sukses");
    setPesan("Usulan buku berhasil dikirim. Terima kasih!");

    setForm({ ...formAwal });
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <section className="mb-8 border-[5px] border-pink-200 bg-pink-50 p-6 rounded-[30px]">
        <p className="text-sm font-semibold uppercase tracking-widest text-pink-300">
          Berbagi Ide
        </p>

        <h1 className="mt-2 text-3xl font-bold text-pink-500 sm:text-4xl">
          Usulkan Buku
        </h1>

        <p className="mt-3 text-gray-600">
          Bantu Pustaka Senja menambah koleksi buku
          yang menarik dan bermanfaat.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border-[3px] border-pink-100 bg-white p-6 shadow-sm sm:p-8"
      >
        <div>
          <label
            htmlFor="nama"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Nama Pengusul
          </label>

          <input
            id="nama"
            name="nama"
            type="text"
            value={form.nama}
            onChange={handleChange}
            placeholder="Masukkan nama kamu"
            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-100"
          />
        </div>

        <div>
          <label
            htmlFor="judul"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Judul Buku yang Diusulkan
          </label>

          <input
            id="judul"
            name="judul"
            type="text"
            value={form.judul}
            onChange={handleChange}
            placeholder="Masukkan judul buku"
            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-100"
          />
        </div>

        <div>
          <label
            htmlFor="kategori"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Kategori Buku
          </label>

          <select
            id="kategori"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className="text-gray-600 w-full rounded-xl border border-gray-300 bg-white outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-100"
          >
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">
              Pengembangan Diri
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="alasan"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Alasan Usulan
          </label>

          <textarea
            id="alasan"
            name="alasan"
            value={form.alasan}
            onChange={handleChange}
            rows={4}
            placeholder="Jelaskan alasan kamu mengusulkan buku ini"
            className="text-gray-700 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-700 focus:ring-2 focus:ring-pink-100"
          />
        </div>

        {pesan && (
          <p
            role="status"
            className={`rounded-lg p-3 text-sm ${
              jenisPesan === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {pesan}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-pink-800 px-5 py-3 font-semibold text-white transition hover:bg-pink-700"
        >
          Kirim Usulan
        </button>
      </form>

      {daftarUsulan.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold text-pink-900">
            Usulan yang Telah Dikirim
          </h2>

          <div className="space-y-4">
            {daftarUsulan.map((usulan) => (
              <article
                key={usulan.id}
                className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-pink-900">
                    {usulan.judul}
                  </h3>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                    {usulan.kategori}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  Diusulkan oleh: {usulan.nama}
                </p>

                <p className="mt-3 leading-relaxed text-gray-700">
                  {usulan.alasan}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}