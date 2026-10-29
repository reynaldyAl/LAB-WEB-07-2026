// GANTI: letakkan 4 foto milikmu di src/assets/gallery/ lalu sesuaikan nama file
import foto1 from '../assets/foto-1.jpeg'
import foto2 from '../assets/foto-2.jpeg'
import foto3 from '../assets/foto-3.png'
import foto4 from '../assets/foto-4.png'

const galeri = [
  { id: 1, src: foto1, judul: 'Kegiatan kuliah' },
  { id: 2, src: foto2, judul: 'Kerja kelompok' },
  { id: 3, src: foto3, judul: 'Proyek terbaru' },
  { id: 4, src: foto4, judul: 'Momen favorit' },
]

function Gallery() {
  return (
    <section id="galeri" className="mx-auto max-w-5xl px-5 pb-20 pt-4 md:pb-28">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Galeri</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {galeri.map((foto) => (
          <figure key={foto.id} className="md:even:mt-8">
            <img
              src={foto.src}
              alt={foto.judul}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2 text-sm text-ink/70">{foto.judul}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery;