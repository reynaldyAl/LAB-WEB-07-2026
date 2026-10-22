const keahlian = [
  'JavaScript',
  'React',
  'Tailwind CSS',
  'PostgreSQL',
  'Java',
  'Git dan GitHub',
]

export function Skills() {
  return (
    <section id="keahlian" className="mx-auto max-w-5xl px-5 py-16 md:py-20">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">Keahlian</h2>
      <ul className="mt-8 flex flex-wrap gap-3">
        {keahlian.map((skill, index) => (
          <li
            key={index}
            className="rounded-full border-2 border-ink bg-white px-5 py-2 text-lg font-medium transition-colors hover:bg-sun"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills;