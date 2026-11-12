"use client";

import { useState } from "react";

export default function TombolSimpan() {
  const [tersimpan, setTersimpan] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setTersimpan(!tersimpan)}
      className={`rounded-lg border px-4 py-2 ${
        tersimpan
          ? "border-orange-700 bg-orange-50 text-orange-800"
          : "border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
      }`}
    >
      {tersimpan ? "Tersimpan" : "Simpan"}
    </button>
  );
}