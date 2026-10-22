function Skills() {
  // Minimal 5 keahlian dalam array string
  const skillList = [
    "HTML & CSS / Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js Basic",
    "Java Programming",
    "SQL & Database Design",
    "UI/UX Design Concept",
  ];

  return (
    <section id="skills" className="scroll-mt-15 py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-100 mb-3">Currently Exploring</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skillList.map((skill, index) => (
          <div
            key={index}
            className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-rose-500/40 hover:scale-[1.02] transition-all flex items-center justify-center text-center shadow-md"
          >
            <span className="text-zinc-200 font-medium text-sm md:text-base">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;