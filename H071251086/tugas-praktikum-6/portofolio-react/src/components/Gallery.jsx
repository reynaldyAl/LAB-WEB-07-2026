import { useState } from 'react'
import poster1 from '../assets/poster-1.png'
import poster2 from '../assets/poster-2.png'
import poster3 from '../assets/poster-3.png'
import poster4 from '../assets/poster-4.png'
import tabungin from '../assets/tabungin.png'
import nasiDarurat from '../assets/nasi-darurat.png'

const works = [
  { id: 1, src: poster1, alt: 'Poster portfolio by Kiki - 1', title: 'Poster Portfolio 1', category: 'Visual design' },
  { id: 2, src: poster2, alt: 'Poster portfolio by Kiki - 2', title: 'Poster Portfolio 2', category: 'Visual design' },
  { id: 3, src: poster3, alt: 'Poster portfolio by Kiki - 3', title: 'Poster Portfolio 3', category: 'Visual design' },
  { id: 4, src: poster4, alt: 'Poster portfolio by Kiki - 4', title: 'Poster Portfolio 4', category: 'Visual design' },
  { id: 5, src: tabungin, alt: 'Screenshot of the Tabungin app', title: 'Tabungin', category: 'Desktop app' },
  { id: 6, src: nasiDarurat, alt: 'UI/UX design of the Nasi Darurat app', title: 'Nasi Darurat', category: 'UI/UX' },
]

export default function Gallery() {
  // State untuk menyimpan gambar yang sedang dipilih/diklik
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="work" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold text-brand">Gallery</p>
        <h2 className="mt-2 max-w-2xl text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
          Work I&apos;ve made so far.
        </h2>

        {/* Daftar Grid Kartu */}
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* instruksi 7 */}
          {works.map((work) => (
            <li
              key={work.id}
              onClick={() => setSelectedImage(work)} // Saat diklik, simpan data gambar ke state
              className="group relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-3xl bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={work.src}
                alt={work.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/90 px-4 py-2.5 backdrop-blur">
                <p className="text-sm font-bold text-ink">{work.title}</p>
                <p className="text-xs font-semibold text-brand">{work.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal / Pop-up Gambar Utuh */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)} // Klik di luar gambar untuk menutup modal
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar di dalam diklik
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl bg-white p-4 shadow-2xl sm:p-6"
          >
            {/* Tombol Close (X) */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-slate-900/80 text-white transition hover:bg-brand"
            >
              ✕
            </button>

            {/* Gambar Utuh */}
            <div className="max-h-[75vh] overflow-y-auto rounded-2xl bg-slate-100 p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>

            {/* Keterangan Judul di Modal */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-ink">{selectedImage.title}</h3>
                <p className="text-sm font-semibold text-brand">{selectedImage.category}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="rounded-xl bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-200"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}