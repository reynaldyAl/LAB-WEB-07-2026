import { useState } from "react";

function FormPesan({ pesananEmpty, onKirim }) {
  const [nama, setNama] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama.trim() || !nomorMeja.trim()) {
      setErrorMsg("Nama dan Nomor Meja wajib diisi!");
      return;
    }

    if (pesananEmpty && nomorMeja > 20) {
      setErrorMsg("Pesanan masih kosong dan nomor meja tidak valid!");
      return;
    } else if (pesananEmpty) {
      setErrorMsg("Pesanan masih kosong!");
      return;
    } else if (nomorMeja > 20) {
      setErrorMsg("Nomor meja tidak valid!");
      return;
    }

    setErrorMsg("");
    onKirim(nama, nomorMeja);
    setNama("");
    setNomorMeja("");
  }

  return (
    <section className="bg-white p-5 rounded-xl shadow-sm border border-stone-200">
      <h2 className="text-lg font-bold text-stone-800 mb-3 border-b pb-2">
        Data Pelanggan
      </h2>

      {errorMsg && (
        <div className="bg-rose-50 text-rose-700 text-xs p-2.5 rounded-lg mb-3 border border-rose-200">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1">
            Nama Pelanggan
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama Anda"
            className="w-full border border-stone-300 rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-600 mb-1">
            Nomor Meja
          </label>
          <input
            type="number"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            placeholder="Contoh: 05"
            className="w-full border border-stone-300 rounded-lg p-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-800"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-2.5 rounded-lg text-xs transition-colors shadow-sm"
        >
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;