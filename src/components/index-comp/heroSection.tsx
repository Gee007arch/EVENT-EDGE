import { Check, ChevronRight, } from 'lucide-react';
import heroImg from '../../assets/image.png';

const featurePoints = [
  'Find and book the right venues faster',
  'Reach the right audiences',
  'Track engagement and impact',
  'Prove revenue contribution',
]

const HeroSection = () => {
  return (
    <section className="bg-black pb-28">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="relative top-24 overflow-hidden rounded-t-[28px] bg-gradient-to-b from-[#D22023]  to-black px-6 pb-28 pt-10 text-white sm:px-10 sm:pb-44 sm:pt-14 lg:px-14 lg:pb-48 lg:pt-16">
          <div className="absolute right-10 top-6 hidden text-5xl text-[#ffbf43] lg:block">
            <span className="block -rotate-6">~</span>
          </div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div className="max-w-2xl">
              <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Get better results from your events
              </h1>

              <p className="mt-5 max-w-lg text-base font-semibold text-[#d9defe] sm:text-lg">
                Designed for human connection. Built with AI-powered tools.
              </p>

              <ul className="mt-6 space-y-3 text-base text-[#eef1ff] sm:text-lg">
                {featurePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check
                      size={18}
                      strokeWidth={3}
                      className="mt-1 shrink-0 text-white"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/platform"
                  className="inline-flex items-center justify-center rounded-md bg-[#000000] px-6 py-3 text-base font-semibold text-white  hover:bg-zinc-800 transition-colors sm:text-lg"
                >
                  Explore the platform
                </a>

                <a
                  href="/demo"
                  className="inline-flex items-center gap-1 text-base font-semibold text-white transition hover:text-[#EE3238] sm:text-lg"
                >
                  Request a demo
                  <ChevronRight size={18} strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center">
              <div className="absolute left-8 top-16 h-24 w-24 rounded-full bg-[#2cf4df]/45 blur-2xl sm:h-28 sm:w-28" />
              <div className="absolute right-10 top-8 h-28 w-28 rounded-full bg-[#6f66ff]/45 blur-3xl sm:h-36 sm:w-36" />
              <div className="absolute bottom-6 right-6 h-20 w-20 rounded-full bg-[#21df7a]/40 blur-2xl" />

              <div className="relative w-full">
                <div className="mx-auto w-full max-w-[520px] rounded-[30px] border border-[#5260d9] bg-[radial-gradient(circle_at_top,_rgba(94,132,255,0.55),_rgba(20,25,95,0.96)_55%)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                  <div className="rounded-[24px] bg-[#0d114c]/90 p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-[#cfd5ff] sm:text-sm">
                      <span className="h-3 w-3 rounded-full bg-white/80" />
                      <span className="h-3 w-3 rounded-full bg-white/40" />
                      <span className="ml-2 rounded-full bg-white/10 px-3 py-1">
                        Cvent.ai
                      </span>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-[160px_1fr]">
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                        <div className="space-y-2">
                          <div className="h-9 rounded-xl bg-[#5a61ff]" />
                          <div className="h-9 rounded-xl bg-white/10" />
                          <div className="h-9 rounded-xl bg-white/10" />
                          <div className="h-9 rounded-xl bg-white/10" />
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/6 p-4">
                        <p className="text-sm font-semibold text-white sm:text-base">
                          The Future of AI: Trends and Innovation
                        </p>
                        <div className="mt-4 grid grid-cols-3 gap-3">
                          <div className="h-16 rounded-2xl bg-white/10" />
                          <div className="h-16 rounded-2xl bg-white/10" />
                          <div className="h-16 rounded-2xl bg-white/10" />
                        </div>
                        <div className="mt-4 h-24 rounded-2xl bg-gradient-to-r from-[#365cff]/40 to-[#8f43ff]/30" />
                        <div className="mt-4 grid grid-cols-4 gap-2">
                          <div className="h-3 rounded-full bg-white/20" />
                          <div className="h-3 rounded-full bg-white/20" />
                          <div className="h-3 rounded-full bg-white/20" />
                          <div className="h-3 rounded-full bg-white/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-2 bottom-6 w-28 rounded-[22px] border border-[#8c8fff] bg-[#5b51ff]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:-left-6 sm:w-36">
                  <div className="rounded-[18px] bg-[#0d114c] p-2.5">
                    <div className="mb-2 h-3 w-12 rounded-full bg-white/25" />
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg bg-white/15" />
                      <div className="h-8 rounded-lg bg-[#22d3ee]/60" />
                      <div className="h-8 rounded-lg bg-white/15" />
                      <div className="h-8 rounded-lg bg-white/15" />
                    </div>
                  </div>
                </div>

                <div className="absolute -right-1 top-12 w-40 rounded-2xl bg-white p-3 text-[#171b68] shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:-right-3 sm:w-52">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#4c5695] sm:text-xs">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#171b68]" />
                    Finding recommendations for you...
                  </div>
                </div>

                <div className="absolute right-8 top-28 w-28 rounded-[22px] bg-white p-3 text-[#171b68] shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:right-10 sm:w-36">
                  <div className="mb-2 h-3 w-16 rounded-full bg-slate-200" />
                  <div className="mx-auto grid h-16 w-16 grid-cols-4 gap-1 rounded-lg bg-[#e7ebff] p-1.5 sm:h-20 sm:w-20">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <span
                        key={index}
                        className={`rounded-sm ${
                          index % 3 === 0 ? 'bg-[#77a4ff]' : 'bg-[#c2d4ff]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-6 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1ed760] text-white shadow-[0_10px_25px_rgba(30,215,96,0.5)] sm:right-6">
                  <Check size={24} strokeWidth={3} />
                </div>
              </div>
            </div> */}
            <div className="mx-auto w-full max-w-[580px] lg:max-w-[620px]">
              <img src={heroImg} alt="hero-image" className="w-full" />
            </div>
          </div>

          {/* <svg
            viewBox="0 0 1440 260"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="hidden lg:flex absolute bottom-0 left-0 h-[150px] w-full sm:h-[180px] lg:h-[220px] pt-"
          >
            <path
              d="M0,155 C170,118 360,104 545,132 C690,154 790,236 980,244 C1165,251 1315,224 1440,166 L1440,260 L0,260 Z"
              fill="white"
            />
          </svg> */}

          {/* <div className="absolute bottom-16 left-1/2 z-20  w-[calc(100%-3rem)] max-w-[700px] -translate-x-1/2 items-center justify-between gap-6 rounded-xl bg-white px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)] md:flex lg:bottom-20 lg:max-w-[1060px] lg:px-6">
            <div className="absolute left-0 top-0 h-full w-2 rounded-l-xl bg-gradient-to-b from-[#D22023] to-[#000000]" />
            <p className="pl-4 text-sm text-[#4a4e7f] lg:text-lg">
              The agenda for Cvent CONNECT 2026 is now live! Join us in
              Nashville on July 13-16.
            </p>
            <a
              href="/register"
              className="shrink-0 rounded-md bg-[#000000] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#EE3238] lg:text-base"
            >
              Register now
            </a>
          </div> */}
        </div>
{/* 
        <div className="absolute mx-auto -mt-12 flex  max-w- items-center justify-between gap-4 rounded-md bg-white px-4 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.18)] md:hidden">
          <div className="h-full w-1.5 self-stretch rounded-full bg-gradient-to-b from-[#D22023] to-[#000000]" />
          <p className="flex-1 text-sm text-[#4a4e7f]">
            The agenda for Cvent CONNECT 2026 is now live! Join us in
            Nashville on July 13-16.
          </p>
          <a
            href="/register"
            className="shrink-0 rounded-md bg-[#D22023] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#EE3238]"
          >
            Register
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default HeroSection
