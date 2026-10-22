import gallery1 from "../assets/gallery/gallery-1.jpeg"
import gallery2 from "../assets/gallery/gallery-2.jpeg"
import gallery3 from "../assets/gallery/gallery-3.jpeg"
import gallery4 from "../assets/gallery/gallery-4.jpeg"

const Gallery = () => {
  const photos = [
    { id: 1, src: gallery1, title: "Sintara", category: "Sistem Informasi | Universitas Hasanuddin" },
    { id: 2, src: gallery2, title: "Aventra", category: "SMAN 5 Sinjai" },
    { id: 3, src: gallery3, title: "Forgencia", category: "XII. 3" },
    { id: 4, src: gallery4, title: "A6", category: "SMP IT Wahdah Islamiyah Sinjai" },
  ];

  return (
    <section id="gallery" className="bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-800">Selected Photos</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Galeri Saya</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">Beberapa foto pilihan yang menjadi bagian dari perjalanan dan proses kreatif saya.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((foto) => (
            <article key={foto.id} className="group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
              <img src={foto.src} alt={foto.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="relative bg-stone-50 p-4">
                <p className="font-extrabold text-slate-900">{foto.title}</p>
                <p className="mt-1 text-sm text-slate-500">{foto.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;