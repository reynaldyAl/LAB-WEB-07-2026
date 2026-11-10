
import pool from "@/lib/db";
import KatalogBuku from "@/components/KatalogBuku";
import FormBuku from "@/components/FormBuku";
import { tambahBuku } from "./actions";

export const dynamic = "force-dynamic";

const pesanStatus = {
  ditambah: "Buku baru berhasil ditambahkan.",
  dihapus: "Buku berhasil dihapus.",
  diusulkan: "Terima kasih! Buku usulan Anda berhasil ditambahkan ke katalog.",
};

export default async function KatalogPage({ searchParams }) {
  const { error, status } = await searchParams;

  const pesanError =
    typeof error === "string" ? error : null;

  const pesanSukses =
    typeof status === "string" ? pesanStatus[status] : null;

  // Mengambil semua buku dari PostgreSQL
  const { rows } = await pool.query(
    "SELECT * FROM buku ORDER BY id"
  );

  return (
    <section>
      <div className="text-center mb-8">
        <h1 className="font-display text-4xl sm:text-5xl">
          Katalog <em className="italic text-blush">buku</em>
        </h1>

        <p className="text-mist mt-3">
          Pilih kategori, lalu simpan buku yang Anda sukai dengan tombol bintang.
        </p>
      </div>

      {/* Pesan error */}
      {pesanError && (
        <p className="max-w-2xl mx-auto mb-4 p-4 bg-rose-500/15 border border-rose-400/30 text-rose-300 text-sm font-medium rounded-2xl">
          {pesanError}
        </p>
      )}

      {/* Pesan berhasil */}
      {pesanSukses && (
        <p className="max-w-2xl mx-auto mb-4 p-4 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm font-medium rounded-2xl">
          {pesanSukses}
        </p>
      )}

      {/* Form tambah buku */}
      <details
        open={Boolean(pesanError)}
        className="max-w-2xl mx-auto mb-10"
      >
        <summary className="list-none cursor-pointer text-center [&::-webkit-details-marker]:hidden">
          <span className="inline-block bg-crimson hover:bg-crimson-hover text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-crimson/30 transition">
            + Tambah Buku
          </span>
        </summary>

        <div className="mt-4 bg-navy-800 border border-white/10 rounded-3xl p-6">
          <FormBuku
            aksi={tambahBuku}
            labelTombol="Simpan Buku"
          />
        </div>
      </details>

      {/* Menampilkan katalog */}
      <KatalogBuku daftarBuku={rows} />
    </section>
  );
}
