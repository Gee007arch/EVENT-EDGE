import React from 'react';
import { ChevronRight } from 'lucide-react';

const LastSection = () => {
  return (
    <>
    <section className="bg-[#CACACA] py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-extrabold tracking-tight text-[#D22023] md:text-4xl lg:text-5xl">
          What's new at Event Edge
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-gray-100">
            <span className="text-sm lg:text-base font-medium tracking-widest text-[#B1B1B1] uppercase mb-4">
              EVENT EDGE CONNECT
            </span>
            <h3 className="mb-4 text-xl font-bold leading-snug text-[#D22023]">
              Learn how great events are made at Event Edge CONNECT 2026
            </h3>
            <p className="mb-6 text-sm lg:text-lg text-[#B1B1B1]">
              July 13-16, 2026 |<br />
              Nashville, TN & Virtual
            </p>
            <div className="mt-auto">
              <a href="#" className="group inline-flex items-center gap-1 text-sm font-bold text-[#000000] hover:text-[#EE3238]">
                Register now
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-gray-100">
            <span className="text-sm lg:text-lg font-normal tracking-widest text-[#B1B1B1] uppercase mb-4">
              CERTIFICATION
            </span>
            <h3 className="mb-4 text-xl font-bold leading-snug text-[#D22023]">
              Grow your career and certify your Event Edge expertise
            </h3>
            <p className="mb-6 text-sm lg:text-lg text-[#B1B1B1]">
              Free year-round
            </p>
            <div className="mt-auto">
              <a href="#" className="group inline-flex items-center gap-1 text-sm font-bold text-[#000000] hover:text-[#EE3238]">
                Learn more
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-gray-100">
            <span className="text-sm lg:text-lg font-normal tracking-widest text-[#B1B1B1] uppercase mb-4">
              NEW RESOURCE
            </span>
            <h3 className="mb-4 text-xl font-bold leading-snug text-[#D22023]">
              Discover the biggest meetings and events trends for 2026
            </h3>
            <div className="mt-auto">
              <a href="#" className="group inline-flex items-center gap-1 text-sm font-bold text-[#000000] hover:text-[#EE3238]">       
                Download the eBook
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-gray-100">
            <ul className="space-y-4">
              <li>
                <a href="#" className="group flex items-center justify-between text-sm font-bold text-[#000000] hover:text-[#EE3238]">
                  New: AI tools for events
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between text-sm font-bold text-[#000000] hover:text-[#EE3238]">  
                  Event trends for 2026
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between text-sm font-bold text-[#000000] hover:text-[#EE3238]">  
                  Event marketing guide
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between text-sm font-bold text-[#000000] hover:text-[#EE3238]">  
                  Event strategy guide
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center justify-between text-sm font-bold text-[#000000] hover:text-[#EE3238]">
                  How to plan corporate events
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-black py-12 lg:py-24 text-[#CACACA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          

          <div className="max-w-xl">
            <h2 className="mb-6 text-xl font-extrabold tracking-tight md:text-2xl ">
              A complete platform for your events
            </h2>
            <p className="mb-8 text-base  lg:text-lg font-normal opacity-90">
              Maximize the impact of all your meetings and events with easy-to-use, integrated event technology.
            </p>
            
            <div className="mb-10">
              <p className="mb-6 font-semibold text-base lg:text-lg">Request a demo to see how you can:</p>
              <ul className="space-y-4 text-base lg:text-lg">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CACACA]"></span>
                  Plan and market events
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CACACA]"></span>
                  Easily manage events onsite
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CACACA]"></span>
                  Engage with your audience
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CACACA]"></span>
                  Measure and analyze results
                </li>
              </ul>
            </div>

            <a href="#" className="group inline-flex items-center gap-2 text-xl font-bold transition-all hover:text-white">
              Try Event Edge event registration for free
              <ChevronRight className="mt-0.5 transition-transform group-hover:translate-x-1" size={24} />
            </a>
          </div>    


              <div className="rounded-xl bg-white p-6 text-gray-900 shadow-2xl lg:p-8">
            <h3 className="mb-8 text-xl lg:text-2xl font-bold text-[#D22023]">
              See our event management tools in action
            </h3>

            <form className="space-y-4">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#D22023]">First name *</label>
                  <input type="text" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D22023] focus:ring-1 focus:ring-[#D22023] outline-none required" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#D22023]">Last name *</label>
                  <input type="text" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D22023] focus:ring-1 focus:ring-[#D22023] outline-none required" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#D22023]">Work email *</label>
                  <input type="email" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D22023] focus:ring-1 focus:ring-[#D22023] outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#D22023]">Phone <span className="text-xs font-normal text-gray-500">(no spaces)</span> *</label>
                  <input type="tel" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D22023] focus:ring-1 focus:ring-[#D22023] outline-none" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#D22023]">Organization *</label>
                  <input type="text" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D22023] focus:ring-1 focus:ring-blue-500 outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#D22023]">Job function *</label>
                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D22023] focus:ring-1 focus:ring-[#D22023] outline-none bg-white" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option value="event-planner">Event Planner</option>
                    <option value="marketing">Marketing</option>
                    <option value="executive">Executive</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#D22023]">Country *</label>
                <select className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#D22023] focus:ring-1 focus:ring-[#D22023] outline-none bg-white" required defaultValue="Nigeria">
                  <option value="Nigeria">Nigeria</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>

              <div className="flex gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-[#D22023] focus:ring-[#D22023]" required id="consent" />
                <label htmlFor="consent" className="text-xs lg:text-sm text-[#B1B1B1] leading-relaxed">
                  I agree to receive emails from Event Edge, Inc. about relevant content, products, and services. I understand I can manage my communication preferences or <a href="#" className="text-black hover:underline">unsubscribe</a> at any time.
                </label>
              </div>

              <p className="text-[10px] lg:text-xs text-[#B1B1B1]">
                Please refer to our <a href="#" className="text-black  hover:underline">Privacy Policy</a> or <a href="#" className="text-black hover:underline">Contact Us</a> for more details.
              </p>

              <button type="submit" className="w-fit rounded-md bg-[#D22023] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#EE3238] hover:shadow-lg">
                Request a demo
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

    </>
  );
};

export default LastSection;
