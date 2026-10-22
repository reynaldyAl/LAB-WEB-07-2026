function About() {
  // Array of Object untuk data diri
  const bioData = [
    { id: 1, label: "Full Name", value: "Aliyah Fitraturramadhani" },
    { id: 2, label: "Field of Study", value: "Information Systems" },
    { id: 3, label: "University", value: "Hasanuddin University" },
    { id: 4, label: "Areas of Interest", value: "IT Governance · Web Development" },
  ];

  return (
    <section id="about" className="scroll-mt-15 py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-100 mb-3">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-rose-900/20 backdrop-blur-sm">
          <p className="text-zinc-300 leading-relaxed text-base">
            I’m an Information Systems student at Universitas Hasanuddin with an interest in web development, UI/UX design, and IT management. I enjoy learning how technology and design work together to create functional, user-friendly digital experiences.

          </p>
        </div>

        <div className="space-y-3">
          {bioData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-rose-800/40 transition-colors"
            >
              <span className="text-rose-300 font-medium text-sm">{item.label}</span>
              <span className="text-zinc-200 font-semibold text-sm sm:text-base">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;