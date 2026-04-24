import { ChevronRight } from 'lucide-react';
import b2 from '../../assets/b2.png';
import bodyImage from '../../assets/body-image.png';

const stats = [
  { label: '8M+', desc: 'events managed' },
  { label: '350M+', desc: 'registrations processed' },
  { label: '1K+', desc: '5-star ratings on G2' },
  { label: '24/7', desc: 'customer support' },
];

const SecondSection = () => {
  return (
    <>
      {/* First Part: AI for smarter events */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
            {/* Left side: Image that overlaps */}
            <div className="relative z-20 order-2 lg:order-1">
              <div className="relative w-full lg:translate-x-[20%] xl:translate-x-[25%]">
                <img 
                  src={b2} 
                  alt="AI Event Features" 
                  className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.02]" 
                />
              </div>
            </div>

            {/* Right side: Gradient Content Box */}
            <div className="relative z-10 order-1 lg:order-2">
              <div className="rounded-[40px] bg-gradient-to-r from-[#0060FF] to-[#9B30FF] px-8 py-16 shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:px-20 lg:py-24 lg:pl-32">
                <div className="text-white">
                  <div className="mb-3">
                    <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-blue-100">
                      EVENT EDGE IQ™
                    </span>
                  </div>
                  
                  <h2 className="mb-6 text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-6xl">
                    AI for smarter events
                  </h2>
                  
                  <p className="mb-10 max-w-xl text-lg font-medium leading-relaxed text-blue-50/90 lg:text-xl">
                    Bringing together decades of expertise and powerful AI to 
                    help you plan, market, and host events like never before. 
                    See what's possible with Event Edge IQ.
                  </p>

                  <a 
                    href="/ai-powers" 
                    className="group inline-flex items-center gap-2 text-lg font-bold transition-all hover:opacity-90 lg:text-xl"
                  >
                    Learn how AI powers Event Edge IQ
                    <ChevronRight className="mt-0.5 transition-transform group-hover:translate-x-1.5" size={24} strokeWidth={3} />
                  </a>
                </div>

                {/* Decorative glow inside the box */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 overflow-hidden rounded-r-[40px]">
                  <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Part: All-in-one solution */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left side: Composite Image */}
            <div className="relative">
              <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                <img 
                  src={bodyImage} 
                  alt="Solution showcase" 
                  className="w-full" 
                />
              </div>
            </div>

            {/* Right side: Stats and Title */}
            <div className="text-[#171c63]">
              <h2 className="mb-12 max-w-xl text-4xl font-extrabold leading-[1.2] sm:text-5xl lg:text-6xl">
                Your all-in-one solution for every event
              </h2>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="mb-1 text-4xl font-extrabold lg:text-5xl">
                      {stat.label}
                    </div>
                    <div className="text-lg font-medium text-[#4a4e7f]">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection
