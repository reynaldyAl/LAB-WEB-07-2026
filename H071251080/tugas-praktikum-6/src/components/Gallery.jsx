import foto1 from '../assets/gallery/foto-1.jpg'
import foto2 from '../assets/gallery/foto-2.jpg'
import foto3 from '../assets/gallery/foto-3.jpg'
import foto4 from '../assets/gallery/foto-4.jpg'

function Gallery() {
  const galeriFoto = [
    { id: 1, src: foto1, judul: 'Kegiatan Kampus' },
    { id: 2, src: foto2, judul: 'Proyek ESPOR-HUB' },
    { id: 3, src: foto3, judul: 'YJJA(Yang Juara" Ajah )' },
    { id: 4, src: foto4, judul: 'Momen" kala itu' },
  ]

  return (
    <section id="gallery" className="scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Galeri <span className="text-indigo-400">Foto</span>
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galeriFoto.map((foto) => (
            <figure
              key={foto.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={foto.src}
                alt={foto.judul}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <figcaption className="p-3 text-center text-sm font-medium text-slate-300">
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
