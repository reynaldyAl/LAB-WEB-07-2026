const Skills = () => {
  const skills = ["HTML", "PostgreSQL", "Canva", "Figma", "CapCut", "Magic Chess"];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-800">What I Use</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Skills & Tools</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">Beberapa kemampuan dan tools yang sedang saya pelajari dan gunakan dalam berbagai project.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <span key={index} className="rounded-xl border border-stone-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-800">
            <span className="mr-2 text-emerald-700">✦</span>{skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;