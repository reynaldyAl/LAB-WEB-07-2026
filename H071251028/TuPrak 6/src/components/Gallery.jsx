// =========================================================================
// PETUNJUK TEMPAT MENAROH FOTO GALERI:
// 1. Simpan minimal 4 foto kamu di folder: src/assets/gallery/
// 2. Impor foto-foto tersebut di bawah ini sesuai nama file kamu:
// =========================================================================

import foto1 from "../assets/gallery/ini tumbal teman al.jpeg";
import foto2 from "../assets/gallery/ini tumbal skin acid.jpeg";
import foto3 from "../assets/gallery/ini tumbal bobo.jpeg";
import foto4 from "../assets/gallery/ini tumbal support nenek.jpeg";

function Gallery() {
  // Array of Object galeri foto
  const galeriFoto = [
    { id: 1, src: foto1, judul: "Ini tumbal teman al", deskripsi: "tumbal singkatan dari anuan, itulah" },
    { id: 2, src: foto2, judul: "Ini tumbal skin acid", deskripsi: "koleksi suasana...asyik...cintanya besar besaran meski mesranya kecil kecilan" },
    { id: 3, src: foto3, judul: "Ini tumbal bobo", deskripsi: "tidurlah intinya" },
    { id: 4, src: foto4, judul: "Ini tumbal support nenek teater", deskripsi: "minggu pun tetap ki anuan ke kampus demi anuan nenek" },
  ];

  return (
    <section id="gallery" className="scroll-mt-15 py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-100 mb-3">Galeri Foto</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galeriFoto.map((foto) => (
          <figure
            key={foto.id}
            className="group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-rose-500/40 transition-all duration-300 shadow-lg"
          >
            <div className="overflow-hidden aspect-square">
              <img
                src={foto.src}
                alt={foto.judul}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <figcaption className="p-4 bg-zinc-900">
              <h3 className="text-rose-300 font-semibold text-base mb-1">{foto.judul}</h3>
              <p className="text-zinc-400 text-xs">{foto.deskripsi}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;