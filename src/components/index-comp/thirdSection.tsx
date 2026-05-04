import { ChevronRight } from 'lucide-react';
import eventImage from '../../assets/eventImage.png';
import t2 from '../../assets/t2.png';
import t3 from '../../assets/t3.png';
import t4 from '../../assets/t4.png';
import t5 from '../../assets/t5.png';
import t6 from '../../assets/t6.png';
import connect from '../../assets/connect.png';
import demo from '../../assets/demo.png';

const products = [
  {
    category: 'REGISTRATION',
    title: 'Capture event registrations in beautiful online experiences',
    linkText: 'Design custom branded sites',
    image: eventImage,
  },
  {
    category: 'MOBILE EVENT APPS',
    title: 'Connect to your audience with personalized app experiences',
    linkText: 'Build engaging mobile event apps',
    image: t2,
  },
  {
    category: 'EVENT EDGE WEBINAR',
    title: 'Create interactive webinars on a powerful, flexible platform',
    linkText: 'Plan webinars attendees will love',
        image: t3,
  },
  {
    category: 'NEW! EVENT EDGE ESSENTIALS',
    title: 'Radically simplify your field and repeatable event programs',
    linkText: 'Launch on-brand events in minutes',
    image: t4,
  },
  {
    category: 'CHECK-IN AND BADGING',
    title: 'Quickly check in attendees and print badges on demand',
    linkText: 'Improve your check-in and badging',
    image: t5,
  },
  {
    category: 'INTEGRATIONS',
    title: 'Capture and integrate the data most important to you',
    linkText: 'Integrate with all your systems',
    image: t6,
  },
];

const ThirdSection = () => {
  return (
    <div className="bg-">

      {/* <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-20">
          <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute right-[-5%] bottom-[5%] h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
          
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(#171c63 0.5px, transparent 0.5px)', 
            backgroundSize: '30px 30px' 
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-[#171c63] sm:text-5xl lg:text-6xl">
              Your event lifecycle,<br />from start to finish
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-[#4a4e7f]">
              With tools to manage the event journey in one place, 
              you'll have less on your plate so you can focus on what matters.
            </p>
          </div>

          <div className="relative mx-auto flex h-[500px] w-[500px] items-center justify-center scale-75 sm:scale-90 md:scale-100">
            <div className="absolute h-full w-full rounded-full border-2 border-dashed border-[#171c63]/20" />
            <div className="relative grid h-[420px] w-[420px] grid-cols-2 grid-rows-2 gap-4">
              <div className="group relative flex items-center justify-center overflow-hidden rounded-tr-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] p-8 text-white transition-transform hover:scale-105">
                <span className="absolute -rotate-45 text-xl font-bold uppercase tracking-widest">Planning</span>
              </div>
              <div className="group relative flex items-center justify-center overflow-hidden rounded-tl-full bg-gradient-to-bl from-[#0ea5e9] to-[#14b8a6] p-8 text-white transition-transform hover:scale-105">
                <span className="absolute rotate-45 text-xl font-bold uppercase tracking-widest">Post Event</span>
              </div>
              <div className="group relative flex items-center justify-center overflow-hidden rounded-bl-full bg-gradient-to-tl from-[#10b981] to-[#0ea5e9] p-8 text-white transition-transform hover:scale-105">
                <span className="absolute -rotate-45 text-xl font-bold uppercase tracking-widest text-center leading-tight">Day of<br/>Event</span>
              </div>
              <div className="group relative flex items-center justify-center overflow-hidden rounded-br-full bg-gradient-to-tr from-[#3b82f6] to-[#6366f1] p-8 text-white transition-transform hover:scale-105">
                <span className="absolute rotate-45 text-xl font-bold uppercase tracking-widest">Promotion</span>
              </div>
            </div>
            <div className="absolute flex h-64 w-64 flex-col items-center justify-center rounded-full bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] text-center p-6">
              <img src={eventedgeIcon} alt="Event Edge" className="mb-2 w-28 grayscale brightness-50" />
              <h3 className="text-2xl font-bold text-[#171c63]">Event lifecycle</h3>
              <p className="mt-2 text-xs font-medium text-[#4a4e7f] leading-relaxed">
                Seamless event marketing<br/>and management, real<br/>results
              </p>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1">
              <div className="h-2 w-2 border-r-2 border-t-2 border-[#171c63]/40 rotate-[135deg]" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-1">
              <div className="h-2 w-2 border-r-2 border-t-2 border-[#171c63]/40 -rotate-45" />
            </div>
          </div>
        </div>
      </section> */}


      <section className="bg- py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#D22023] md:text-4xl lg:text-5xl mb-4">
              Powerful event management software
            </h2>
            <p className="text-sm md:text-base font-medium text-[#B1B1B1] max-w-2xl mx-auto">
              Automate your event planning process with Event Edge event technology.<br className="hidden md:block" />
              Host engaging <span className="text-[#EE3238] hover:underline cursor-pointer">webinars</span>, <span className="text-[#EE3238] hover:underline cursor-pointer">in-person</span>, <span className="text-[#EE3238] hover:underline cursor-pointer">virtual</span>, and <span className="text-[#EE3238] hover:underline cursor-pointer">hybrid events</span> and get real results.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div key={index} className="group relative flex flex-col rounded-3xl bg-gradient-to-br from-[#EE3238] via-orange-500 to-[#D22023] p-[1px] shadow-sm transition-all hover:shadow-xl ">
                <div className="flex flex-1 flex-col rounded-3xl   bg-[#0a0a0a] p-2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-base lg:text-lg font-normal tracking-widest text-[#D22023] uppercase mb-3">
                    {product.category}
                  </span>
                  <h3 className="mb-4 text-lg font-bold leading-snug text-[#CACACA] md:text-xl">
                    {product.title}
                  </h3>
                  <div className="mt-auto">
                    <a 
                      href="#" 
                      className="group inline-flex items-center gap-1 text-sm font-bold text-[#EE3238] transition-colors hover:text-[#EE3238]"
                    >
                      {product.linkText}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center rounded-md bg-[#D22023] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#EE3238] hover:shadow-lg">
              Explore all products
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-24 overflow-visible">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#D22023] via-[#EE3238] to-orange-500 p-8 lg:p-16 w-full lg:max-w-[85%]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

            <div className="text-white z-10 col-span-1 lg:col-span-2">
              <h2 className="text-xl font-extrabold mb-6 lg:text-2xl text-center lg:text-left">
                Find the right venue faster with AI
              </h2>
              <p className="text-base lg:text-lg mb-10 opacity-90 text-center lg:text-left">
                Source the perfect venue for your next event with the <span className="font-bold text-white">Event Edge Supplier Network</span>. 
                Let AI refine results from nearly 340K venues and quickly build strong RFPs.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="inline-block rounded-lg border-2 border-white px-8 py-3 font-bold transition-all hover:bg-white hover:text-[#EE3238]"
                >
                  Find venues for free
                </a>
              </div>
            </div>


            <div className="relative lg:absolute lg:right-[-200px] lg:w-[50%] z-20 mt-8 lg:mt-0 col-span-1">
              <div className="relative overflow-hidden shadow-2xl group cursor-pointer transition-transform duration-500 hover:scale-[1.02] flex justify-center lg:block">
                <img 
                  src={connect} 
                  alt="Connect with venues" 
                  className="w-full max-w-[400px] lg:max-w-none" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-24">
        <div className="relative flex flex-col lg:flex-row items-center">

          <div className="relative z-20 w-full lg:w-[55%] mb-[-40px] lg:mb-0 lg:mr-[-28%] flex justify-center lg:block">
            <div className="overflow-hidden transition-transform duration-500 hover:scale-[1.02] w-[85%] lg:w-full">
              <img 
                src={demo} 
                alt="Event planning in action" 
                className="w-full lg:w-[85%]" 
              />
            </div>
          </div>

          <div className="relative z-10 w-full lg:flex-1 rounded-3xl bg-gradient-to-bl from-[#D22023] via-[#EE3238] to-orange-500 p-8 pt-20 lg:p-16 lg:pl-72 lg:py-36">
            <div className="text-center lg:text-left">
              <h2 className="text-xl font-extrabold text-white mb-8 lg:text-2xl">
                Ready to see how it works?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="rounded-lg bg-white px-6 py-3 font-bold text-[#EE3238] transition-all hover:bg-[#EE3238] hover:text-white text-center"
                >
                  Request a demo
                </a>
                <a 
                  href="#" 
                  className="rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition-all hover:bg-white hover:text-[#EE3238] text-center"
                >
                  Watch a 10-minute demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ThirdSection;
