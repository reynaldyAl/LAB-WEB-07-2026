import { useState } from "react";

const kelasInput =
  "w-full border-0 border-b-2 bg-transparent px-0 py-2 font-mono text-base transition placeholder:text-senja-900/30 focus:outline-none focus:ring-0";
const kelasNormal = "border-senja-900/25 focus:border-senja-500";
const kelasGalat = "border-red-600 focus:border-red-600";

function FormPesan({ jumlahItem, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [galat, setGalat] = useState({ nama: "", meja: "" });
  const [cobaKirimKosong, setCobaKirimKosong] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const namaBersih = nama.trim();
    const mejaBersih = meja.trim();
    const galatBaru = { nama: "", meja: "" };

    if (namaBersih === "") {
      galatBaru.nama = "Nama wajib diisi.";
    } else if (namaBersih.length < 2) {
      galatBaru.nama = "Nama minimal 2 karakter.";
    }

    if (mejaBersih === "") {
      galatBaru.meja = "Nomor meja wajib diisi.";
    } else if (!/^\d+$/.test(mejaBersih) || Number(mejaBersih) < 1) {
      galatBaru.meja = "Nomor meja harus berupa angka lebih dari 0.";
    }

    const pesananKosong = jumlahItem === 0;
    setGalat(galatBaru);
    setCobaKirimKosong(pesananKosong);

    if (galatBaru.nama || galatBaru.meja || pesananKosong) {
      return; // tidak diam-diam menerima: pesan galat tampil di layar
    }

    onKirim(namaBersih, mejaBersih);
    setNama("");
    setMeja("");
    setGalat({ nama: "", meja: "" });
    setCobaKirimKosong(false);
  }

  return (
    <section className="px-6 pb-8">
      <div className="mb-4 border-t-2 border-dashed border-senja-900/25 pt-4">
        <h2 className="font-display text-xl font-bold">Atas nama</h2>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="nama"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-senja-700"
          >
            Nama
          </label>
          <input
            id="nama"
            type="text"
            placeholder="Nama kamu"
            autoComplete="off"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            aria-invalid={galat.nama !== ""}
            aria-describedby={galat.nama ? "galat-nama" : undefined}
            className={`${kelasInput} ${galat.nama ? kelasGalat : kelasNormal}`}
          />
          {galat.nama && (
            <p id="galat-nama" role="alert" className="mt-1.5 text-xs font-semibold text-red-700">
              {galat.nama}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="meja"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-senja-700"
          >
            Nomor meja
          </label>
          <input
            id="meja"
            type="text"
            inputMode="numeric"
            placeholder="Contoh: 5"
            autoComplete="off"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            aria-invalid={galat.meja !== ""}
            aria-describedby={galat.meja ? "galat-meja" : undefined}
            className={`${kelasInput} ${galat.meja ? kelasGalat : kelasNormal}`}
          />
          {galat.meja && (
            <p id="galat-meja" role="alert" className="mt-1.5 text-xs font-semibold text-red-700">
              {galat.meja}
            </p>
          )}
        </div>

        {cobaKirimKosong && jumlahItem === 0 && (
          <p
            role="alert"
            className="animate-fade-up rounded-lg border border-dashed border-red-600 bg-red-50 px-3.5 py-2.5 text-sm font-semibold text-red-700"
          >
            Pesanan masih kosong. Pilih minimal satu menu dulu.
          </p>
        )}

        <button
          type="submit"
          className="min-h-12 rounded-full bg-senja-900 px-5 font-semibold text-senja-50 transition hover:bg-senja-700 active:scale-[0.98]"
        >
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;
