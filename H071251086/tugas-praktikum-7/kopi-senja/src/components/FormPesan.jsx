import { useState } from "react";

function FormPesan({ jumlahItem, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [galat, setGalat] = useState({});
  const [terkirim, setTerkirim] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const galatBaru = {};

    if (jumlahItem === 0) {
      galatBaru.pesanan = "Pesanan masih kosong. Tambahkan menu terlebih dahulu.";
    }

    const namaBersih = nama.trim();
    if (namaBersih === "") {
      galatBaru.nama = "Nama wajib diisi.";
    } else if (namaBersih.length < 2) {
      galatBaru.nama = "Nama minimal 2 huruf.";
    } else if (!/^[\p{L}\s'.-]+$/u.test(namaBersih)) {
      galatBaru.nama = "Nama hanya boleh berisi huruf.";
    }

    const nomorMeja = meja.trim();
    if (nomorMeja === "") {
      galatBaru.meja = "Nomor meja wajib diisi.";
    } else if (!/^\d+$/.test(nomorMeja) || Number(nomorMeja) < 1 || Number(nomorMeja) > 99) {
      galatBaru.meja = "Nomor meja harus angka 1 sampai 99.";
    }

    if (Object.keys(galatBaru).length > 0) {
      setGalat(galatBaru);
      setTerkirim(false);
      return;
    }

    onKirim(); // induk mengosongkan pesanan
    setNama("");
    setMeja("");
    setGalat({});
    setTerkirim(true);
  }

  function handleNama(e) {
    setNama(e.target.value);
    setTerkirim(false);
  }

  function handleMeja(e) {
    setMeja(e.target.value);
    setTerkirim(false);
  }

  return (
    <section aria-label="Kirim pesanan">
      <h2 className="font-display text-2xl">Kirim pesanan</h2>

      <form onSubmit={handleSubmit} noValidate className="mt-3 flex flex-col gap-3">
        <div>
          <label htmlFor="nama" className="text-xs font-semibold">
            Nama
          </label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={handleNama}
            placeholder="Nama Anda"
            aria-invalid={galat.nama ? "true" : "false"}
            className="mt-1 w-full rounded-full bg-white px-4 py-2 text-sm text-tinta placeholder:text-tinta/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          />
          {galat.nama && <p className="mt-1 text-xs font-semibold text-amber-200">{galat.nama}</p>}
        </div>

        <div>
          <label htmlFor="meja" className="text-xs font-semibold">
            Nomor meja
          </label>
          <input
            id="meja"
            type="text"
            inputMode="numeric"
            value={meja}
            onChange={handleMeja}
            placeholder="Contoh: 7"
            aria-invalid={galat.meja ? "true" : "false"}
            className="mt-1 w-full rounded-full bg-white px-4 py-2 text-sm text-tinta placeholder:text-tinta/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          />
          {galat.meja && <p className="mt-1 text-xs font-semibold text-amber-200">{galat.meja}</p>}
        </div>

        {galat.pesanan && (
          <p role="alert" className="rounded-xl bg-merahTua/70 px-3 py-2 text-xs font-semibold text-amber-200">
            {galat.pesanan}
          </p>
        )}

        <button
          type="submit"
          className="rounded-full bg-white px-5 py-3 text-xs font-bold tracking-[0.2em] text-merah transition-colors hover:bg-jambu focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
        >
          KIRIM PESANAN
        </button>
      </form>

      {terkirim && (
        <p role="status" className="mt-3 rounded-xl bg-white/15 px-3 py-2 text-sm font-semibold">
          Terima kasih! Pesanan Anda sudah terkirim dan segera disiapkan.
        </p>
      )}
    </section>
  );
}

export default FormPesan;