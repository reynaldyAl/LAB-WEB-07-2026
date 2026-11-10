"use client";

import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id, judul, className = "" }) {
  return (
    <form
      action={hapusBuku}
      className={className}
      onSubmit={(e) => {
        if (!confirm(`Yakin hapus buku "${judul}"?`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="w-full bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 font-medium text-sm px-6 py-2.5 rounded-full transition"
      >
        Hapus
      </button>
    </form>
  );
}