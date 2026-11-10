
import FormBuku from "@/components/FormBuku";
import { usulkanBuku } from "@/app/katalog/actions";

export default async function UsulanPage({ searchParams }) {
  const { error } = await searchParams;

  const pesanError =
    typeof error === "string" ? error : null;

  return (
    <section className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="font-display text-4xl sm:text-5xl">
          Usulan <em className="italic text-blush">buku</em>
        </h1>

        <p className="text-mist mt-3">
          Ada buku yang ingin dihadirkan di Pustaka Senja?
          Isi datanya di sini, lalu bukunya langsung masuk ke katalog.
        </p>
      </div>

      {/* Pesan error */}
      {pesanError && (
        <p
          role="alert"
          className="mb-4 p-4 bg-rose-500/15 border border-rose-400/30 text-rose-300 text-sm font-medium rounded-2xl"
        >
          {pesanError}
        </p>
      )}

      {/* Form usulan buku */}
      <div className="bg-navy-800 border border-white/10 rounded-3xl p-6">
        <FormBuku
          aksi={usulkanBuku}
          labelTombol="Kirim Usulan"
        />
      </div>
    </section>
  );
}
