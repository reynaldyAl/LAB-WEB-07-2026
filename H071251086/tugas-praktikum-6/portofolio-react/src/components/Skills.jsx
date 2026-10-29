const skills = [
  'UI/UX Design',
  'Wireframing',
  'Product Requirement Docs',
  'Poster Design',
  'React',
  'Tailwind CSS',
  'HTML & CSS',
]

export default function Skills() {
  return (
    <section id="skills" className="bg-ink px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold text-blue-300">Skills</p>
        <h2 className="mt-2 max-w-2xl text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
          What I use and keep practicing.
        </h2>
        <p className="mt-4 max-w-xl text-base text-blue-100/80 sm:text-lg">
          These are the tools and skills I work with in my coursework and
          personal projects.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {/* instruksi 6 */}
          {skills.map((skill, index) => (
            <li
              key={index}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-bold transition hover:border-blue-300 hover:bg-brand sm:text-lg"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}