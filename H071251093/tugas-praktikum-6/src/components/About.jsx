const dataDiri = [
  { id: 1, label: 'Nama', nilai: 'Imam' },
  { id: 2, label: 'Status', nilai: 'Mahasiswa' },
  { id: 3, label: 'Fokus', nilai: 'Pengembangan web dan basis data' },
  { id: 4, label: 'Minat', nilai: 'Algoritma, struktur data, game' },
  { id: 5, label: 'Email', nilai: 'imamarief.173@gmail.com' },
]

function About() {
  return (
    <section id="tentang" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Tentang saya</h2>
          <p className="mt-5 leading-relaxed text-paper/85">
            Saya mahasiswa yang senang belajar sambil membuat sesuatu. Di kampus saya
            mengerjakan proyek perangkat lunak bersama tim, praktikum basis data, dan
            soal-soal algoritma. Saya percaya kode yang baik itu mudah dibaca orang lain.
          </p>
        </div>

        <dl className="divide-y divide-paper/15 self-start border-y border-paper/15">
          {dataDiri.map((item) => (
            <div key={item.id} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
              <dt className="w-24 shrink-0 text-paper/60">{item.label}</dt>
              <dd className="font-medium">{item.nilai}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About;