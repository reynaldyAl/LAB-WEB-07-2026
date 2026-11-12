"use client";

import { useState } from "react";
import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({id}) {
  const [hapus, setHapus] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setHapus(true)}
        className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
      >
        Hapus
      </button>

      {hapus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="judul-modal"
            className="w-full max-w-md animate-in rounded-3xl bg-white p-7 shadow-2xl"
          >

            <div className="mt-5 text-center">
              <h2
                id="judul-modal"
                className="text-xl font-semibold text-stone-900"
              >
                Hapus Buku?
              </h2>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-stone-500">
                Apakah kamu yakin ingin menghapus buku ini? Data yang sudah
                dihapus tidak dapat dikembalikan.
              </p>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => setHapus(false)}
                className="flex-1 rounded-full border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
              >
                Batal
              </button>

              <form action={hapusBuku} className="flex-1">
                <input type="hidden" name="id" value={id} />

                <button
                  type="submit"
                  className="w-full rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Ya, Hapus Buku
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
