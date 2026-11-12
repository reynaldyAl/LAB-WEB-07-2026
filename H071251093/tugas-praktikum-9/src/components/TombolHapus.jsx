"use client";

import { hapusBuku } from "@/app/katalog/actions";

// Client Component hanya untuk konfirmasi di browser.
// Tidak mengimpor pool; hanya memanggil Server Action.
export default function TombolHapus({ id, judul }) {
  function konfirmasi(e) {
    if (!window.confirm(`Hapus buku "${judul}"? Tindakan ini tidak dapat dibatalkan.`)) {
      e.preventDefault(); // batal -> action tidak dijalankan, data tetap
    }
  }

  return (
    <form action={hapusBuku} onSubmit={konfirmasi}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700">
        Hapus
      </button>
    </form>
  );
}
