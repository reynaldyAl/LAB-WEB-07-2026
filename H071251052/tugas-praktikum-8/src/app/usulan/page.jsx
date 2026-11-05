"use client";

import { useState } from "react";

const formAwal = {
  nama: "",
  judul: "",
  kategori: "",
  alasan: "",
};

export default function UsulanPage() {
  const [form, setForm] = useState(formAwal);
  const [pesan, setPesan] = useState("");
  const [jenisPesan, setJenisPesan] = useState("");
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((dataSebelumnya) => ({
      ...dataSebelumnya,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const semuaTerisi = Object.values(form).every(
      (nilai) => nilai.trim() !== ""
    );

    if (!semuaTerisi) {
      setJenisPesan("error");
      setPesan("Mohon lengkapi semua kolom sebelum mengirim usulan.");
      return;
    }

    const usulanBaru = {
      id: `${Date.now()}`,
      nama: form.nama.trim(),
      judul: form.judul.trim(),
      kategori: form.kategori,
      alasan: form.alasan.trim(),
    };

    setDaftarUsulan((dataSebelumnya) => [
      usulanBaru,
      ...dataSebelumnya,
    ]);

    setForm(formAwal);
    setJenisPesan("success");
    setPesan("Terima kasih! Usulan buku berhasil dikirim.");
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-4 sm:px-0">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
          Berbagi Rekomendasi
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Usulkan Buku
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-500">
          Ada buku yang ingin kamu baca di Pustaka Senja?
          Ceritakan rekomendasimu kepada kami.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-lg sm:p-9"
      >
        <div>
          <label
            htmlFor="nama"
            className="mb-2 block text-sm font-medium text-stone-700"
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
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div>
          <label
            htmlFor="judul"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Judul Buku yang Diusulkan
          </label>

          <input
            id="judul"
            name="judul"
            type="text"
            value={form.judul}
            onChange={handleChange}
            placeholder="Contoh: The Psychology of Money"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div>
          <label
            htmlFor="kategori"
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Kategori
          </label>

          <select
            id="kategori"
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
          >
            <option value="">Pilih kategori buku</option>
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
            className="mb-2 block text-sm font-medium text-stone-700"
          >
            Alasan Usulan
          </label>

          <textarea
            id="alasan"
            name="alasan"
            rows={4}
            value={form.alasan}
            onChange={handleChange}
            placeholder="Ceritakan alasan buku ini layak menjadi koleksi..."
            className="w-full resize-y rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-100"
          />
        </div>

        {pesan && (
          <p
            role="status"
            className={`rounded-xl px-4 py-3 text-sm ${
              jenisPesan === "success"
                ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            {pesan}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Kirim Usulan <span className="ml-1">→</span>
        </button>
      </form>

      {daftarUsulan.length > 0 && (
        <section className="mx-auto mt-10 w-full">
          <div className="mb-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              Tersimpan Selama Sesi Ini
            </p>

            <h2 className="mt-1 text-xl font-semibold text-stone-900">
              Usulan yang Sudah Dikirim
            </h2>
          </div>

          <div className="space-y-3">
            {daftarUsulan.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-stone-900">
                    {item.judul}
                  </h3>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    {item.kategori}
                  </span>
                </div>

                <p className="mt-1 text-xs text-stone-500">
                  Diusulkan oleh {item.nama}
                </p>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {item.alasan}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}