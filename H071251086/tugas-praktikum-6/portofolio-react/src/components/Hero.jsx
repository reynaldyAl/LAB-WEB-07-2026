import fotoProfil from '../assets/foto-profil.jpg'

const highlights = [
  { id: 1, icon: '🎨', text: 'Exploring UI/UX & Product Management' },
  { id: 2, icon: '🎓', text: 'Information Systems, Unhas' },
  { id: 3, icon: '🔬', text: 'Member of PCC' },
]

export default function Hero() {
  const handleSeeWork = () => {
    console.log('"See My Work" button clicked. Welcome to Kiki\'s portfolio!')
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 lg:pt-40 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-brand-soft blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-rise-in text-center lg:text-left">
          {/* <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Currently exploring design
          </p> */}

          <h1 className="mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-brand">Kiki</span>
          </h1>
          <p className="mt-3 text-2xl font-bold text-slate-800 sm:text-3xl">
            Information Systems student interested in UI/UX and Product Management.
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            I&apos;m a third-semester student at Universitas Hasanuddin. I&apos;m
            learning how digital products get designed and built, from wireframes
            and product docs to posters and websites, and this page collects what
            I&apos;ve made so far.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            {/* <button
              type="button"
              onClick={handleSeeWork}
              className="w-full cursor-pointer rounded-full bg-ink px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-brand..."
            >
              See My Work
            </button> */}
            <a
              href="#about"
              className="w-full rounded-full border border-slate-300 bg-white px-8 py-3.5 text-center text-base font-bold text-ink transition hover:border-brand hover:text-brand sm:w-auto"
            >
              About Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <div className="aspect-square overflow-hidden rounded-full border-8 border-white shadow-2xl shadow-blue-900/20">
          {/* instruksi 4 */}
            <img
              src={fotoProfil}
              alt="Portrait of Kiki"
              className="h-full w-full object-cover"
            />
          </div>

          <ul className="absolute -bottom-6 -left-2 flex flex-col gap-3 sm:-left-10">
            {highlights.map((item) => (
              <li
                key={item.id}
                className="animate-float-slow flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 text-sm font-bold shadow-xl shadow-blue-900/10"
                style={{ animationDelay: `${item.id * 0.6}s` }}
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand-soft text-base">
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}