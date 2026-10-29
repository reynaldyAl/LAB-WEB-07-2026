const personalInfo = [
  { id: 1, label: 'Full name', value: 'Riskia Nur Azizah Ismail' },
  { id: 2, label: 'University', value: 'Universitas Hasanuddin' },
  { id: 3, label: 'Major', value: 'Information Systems, semester 3 (Sintara batch)' },
  { id: 4, label: 'Organization', value: 'Member of Physics Consultation Center (PCC)' },
  { id: 5, label: 'Interests', value: 'UI/UX and product management' },
  { id: 6, label: 'Based in', value: 'Makassar, South Sulawesi' },
]

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold text-brand">About me</p>
          <h2 className="mt-2 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
            Still learning, and enjoying it.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              I&apos;m Kiki, an Information Systems student at Universitas
              Hasanuddin. I&apos;m drawn to UI/UX and product management, which
              is about understanding what people need and shaping a product
              around it.
            </p>
            <p>
              Right now I&apos;m a member of Physics Consultation Center (PCC)
              and exploring design through posters, app concepts, and websites.
              Each project below is part of that learning process.
            </p>
          </div>
        </div>

        <dl className="grid content-start gap-3 sm:grid-cols-2">
          {/* instruksi 5 */}
          {personalInfo.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-mist p-5 transition hover:border-brand/40"
            >
              <dt className="text-sm font-semibold text-slate-500">{item.label}</dt>
              <dd className="mt-1 text-base font-bold text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}