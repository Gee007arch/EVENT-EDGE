import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import authBg from '../../assets/authBg.jpg';
import eventEdgeLogo from '../../assets/event-edge icon.png';

const Signup = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro'>('basic');

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{ backgroundImage: `url(${authBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      <header className="relative z-10 flex justify-between items-center p-4 sm:p-6 lg:px-12 text-white">
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="/">
            <img src={eventEdgeLogo} alt="Event Edge" className="w-24 sm:w-32 md:w-40 brightness-0 invert transition-opacity hover:opacity-80" />
          </a>
          <div className="h-6 sm:h-8 w-px bg-white/30" />
          <span className="text-sm sm:text-lg md:text-xl font-light tracking-wide">Supplier Network</span>
        </div>
        <button className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium hover:text-gray-300 transition-colors">
          <span className="hidden sm:inline">Language:</span> English <ChevronDown size={16} />
        </button>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 my-auto">
        <div className="bg-white rounded-3xl shadow-2xl max-w-[1100px] w-full flex flex-col lg:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-500">

          <div className="lg:w-[45%] p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-[#fafafa]">
            <h3 className="text-lg font-bold text-black mb-6">Features included:</h3>
            <ul className="space-y-3.5 mb-10">
              {[
                '1 User',
                'Unlimited venue searches',
                '3 RFPs per day',
                '10 venues per RFP',
                'Unlimited instant bookings'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                  <Check size={18} className="text-[#EE3238] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="space-y-4">
              <button 
                onClick={() => setSelectedPlan('basic')}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                  selectedPlan === 'basic' 
                    ? 'border-[#EE3238] shadow-md bg-white' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedPlan === 'basic' ? 'border-[#EE3238]' : 'border-gray-300'
                    }`}>
                      {selectedPlan === 'basic' && <div className="w-2.5 h-2.5 rounded-full bg-[#EE3238]" />}
                    </div>
                    <span className="font-bold text-black">Basic Plan</span>
                  </div>
                  <span className="text-xl font-bold text-black">Free</span>
                </div>
                <p className="text-sm text-gray-500 ml-8">Starter solution for individuals and small teams</p>
              </button>

              <button 
                onClick={() => setSelectedPlan('pro')}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all relative overflow-hidden ${
                  selectedPlan === 'pro' 
                    ? 'border-[#EE3238] shadow-md bg-white' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 via-[#EE3238] to-[#D22023]" />
                
                <div className="flex justify-between items-start mt-2 mb-1">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedPlan === 'pro' ? 'border-[#EE3238]' : 'border-gray-300'
                    }`}>
                      {selectedPlan === 'pro' && <div className="w-2.5 h-2.5 rounded-full bg-[#EE3238]" />}
                    </div>
                    <span className="font-bold text-black">Pro Plan</span>
                    <span className="bg-black text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Popular</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#EE3238]">$299</span>
                    <span className="block text-xs font-medium text-gray-400 line-through mt-0.5">$375</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 ml-8 mb-3">Comprehensive solution for growing teams to manage multiple RFPs</p>
                <p className="text-xs text-[#EE3238] font-semibold ml-8 bg-red-50 inline-block px-2 py-1 rounded-md">
                  $299 USD billed monthly & $2,990 USD annually
                </p>
              </button>
            </div>
          </div>

          <div className="lg:w-[55%] p-6 sm:p-8 lg:p-14 bg-white flex flex-col justify-center">
            <div className="max-w-[420px] mx-auto w-full">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-3">Create a Free Account</h2>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Send RFPs to over 300,000 venues around the world and compare rates and availability side-by-side.
              </p>
              
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">All fields are required</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#EE3238]/20 focus:border-[#EE3238] outline-none transition-all text-sm font-medium text-gray-900" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-1.5">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#EE3238]/20 focus:border-[#EE3238] outline-none transition-all text-sm font-medium text-gray-900" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1.5">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#EE3238]/20 focus:border-[#EE3238] outline-none transition-all text-sm font-medium text-gray-900" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1.5">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#EE3238]/20 focus:border-[#EE3238] outline-none transition-all text-sm font-medium text-gray-900" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-[#EE3238] to-[#D22023] hover:from-red-600 hover:to-red-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Next
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm font-medium text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="font-bold text-[#EE3238] hover:text-[#D22023] transition-colors hover:underline underline-offset-4">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="relative z-10 bg-white/95 backdrop-blur-sm py-4 px-4 sm:px-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] sm:text-xs font-medium text-gray-500 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <img src={eventEdgeLogo} alt="Event Edge" className="w-16 sm:w-20 grayscale opacity-60" />
          <span>© 2000-2026 Event Edge, Inc. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-2">
          <a href="#" className="hover:text-[#EE3238] transition-colors">Product Terms of Use</a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#" className="hover:text-[#EE3238] transition-colors">Website Terms of Use</a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#" className="hover:text-[#EE3238] transition-colors">Privacy Policy</a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#" className="hover:text-[#EE3238] transition-colors">Help and Support</a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="#" className="hover:text-[#EE3238] transition-colors">Your Privacy Choices</a>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
