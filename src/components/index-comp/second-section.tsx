import { ChevronRight } from 'lucide-react';
import b3 from '../../assets/b3.png';
import bodyImage from '../../assets/body-image.png';
import eventedgeIcon from '../../assets/event-edge icon.png';
// import logo1 from '../../assets/logo1.png';
// import logo2 from '../../assets/logo2.png';
// import logo3 from '../../assets/logo3.png';
// import logo4 from '../../assets/logo4.png';
// import logo5 from '../../assets/logo5.png';
// import logo6 from '../../assets/logo6.png';
// import logo7 from '../../assets/logo7.png';
// import logo8 from '../../assets/logo8.png';
// import logo9 from '../../assets/logo9.png';
// import logo10 from '../../assets/logo10.png'; 
// import logo11 from '../../assets/logo11.png'; 
// import logo12 from '../../assets/logo12.png'; 



const stats = [
  { label: '8M+', desc: 'events managed' },
  { label: '350M+', desc: 'registrations processed' },
  { label: '1K+', desc: '5-star ratings on G2' },
  { label: '24/7', desc: 'customer support' },
];

// const logos = [
//   { name: 'PennState', logo: logo1 },
//   { name: 'Morgan Stanley', logo: logo2 },
//   { name: 'wrike', logo: logo3 },
//   { name: 'zoom', logo: logo4 },
//   { name: 'okta', logo: logo5 },
//   { name: 'aetna', logo: logo6 },
//   { name: 'Optimizely', logo: logo7 },
//   { name: 'REUTERS', logo: logo8 },
//   { name: 'SONY', logo: logo9 },
//   { name: 'UPS', logo: logo10 },
//   { name: 'MERCK', logo: logo11 },
//   { name: 'AAMC', logo: logo12 },
// ];

const SecondSection = () => {
  return (
    <>
      <section className=" py-12 lg:py-24 lg:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row items-center">
            
            <div className="relative z-20 w-full lg:w-[55%] mb-8 lg:mb-0 lg:mr-[-32%]">
              <div className="relative w-full">
                <img 
                  src={bodyImage} 
                  alt="AI Event Features" 
                  className="w-[87%] drop-shadow-[0_30px_50px_rgba(0,0,0,0.15)] " 
                />
              </div>
            </div>

            <div className="relative z-10 w-full lg:flex-1 lg::max-w-4xl">
              <div className="rounded-3xl bg-white/10 py-16 px-8  lg:py-28 lg:pl-80 ">
                <div className="text-[#CACACA]">
                  <div className="mb-3">
                    <img src={eventedgeIcon} alt="event edge icon" className="w-24 md:w-32 lg:w-40" />
                  </div>
                  
                  <h2 className="mb-6 text-base md:text-xl font-bold leading-[1.15] lg:text-2xl">
                    AI for smarter events
                  </h2>
                  
                  <p className="mb-10 max-w-xl text-sm font-medium leading-relaxed lg:text-lg">
                    Bringing together decades of expertise and powerful AI to 
                    help you plan, market, and host events like never before. 
                    See what's possible with Event Edge IQ.
                  </p>

                  <a 
                    href="/ai-powers" 
                    className="group inline-flex items-center gap-2 text-base md:text-lg font-bold transition-all hover:text-white lg:text-xl"
                  >
                    Learn how AI powers Event Edge IQ
                    <ChevronRight className="mt-0.5 transition-transform group-hover:translate-x-1.5 text-sm lg:text-lg" strokeWidth={3} />
                  </a>
                </div>

                {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 overflow-hidden rounded-r-[40px]">
                  <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg- py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-3 lg:gap-16 lg:grid-cols-2">

            <div className="relative">
              <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                <img 
                  src={b3} 
                  alt="Solution showcase" 
                  className="w-full" 
                />
              </div>
            </div>

            <div className="text-[#D22023]">
              <h2 className="mb-12  text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                Your all-in-one solution for every event
              </h2>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="mb-1 text-2xl font-semibold lg:text-4xl">
                      {stat.label}
                    </div>
                    <div className="text-base lg:text-lg font-medium text-[#B1B1B1]">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


{/* 
        <section className="bg-white py-12 lg:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-[#D22023] mb-16 sm:text-4xl lg:text-5xl">
            Trusted by thousands of top organizations
          </h2>
          

          <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-20 items-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center">
                <img src={logo.logo} alt={logo.name} className="" />
              </div>
            ))}
          </div>

          <div className="sm:hidden relative overflow-hidden py-4">
            <div className="flex w-max animate-marquee whitespace-nowrap">
              {[...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className="inline-flex items-center justify-center px-8 py-2 opacity-70">
                  <img src={logo.logo} alt={logo.name} className="h-20 w-auto object-contain" />
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default SecondSection
