import { useState } from 'react';
import { ChevronDown, Building2, User, Lock, Eye, EyeOff, Check } from 'lucide-react';
import authBg from '../../assets/authBg.jpg';
import eventEdgeLogo from '../../assets/event-edge icon.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

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
          
          <div className="lg:w-[45%] p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-[#fafafa] flex flex-col justify-center">
            <h3 className="text-2xl lg:text-5xl font-extrabold text-black mb-4">Welcome back</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Log in to access your personalized dashboard, manage your events, and connect with top venues worldwide.
            </p>
            <h4 className="text-sm font-bold text-black mb-4 uppercase tracking-wider">Your Dashboard Includes:</h4>
            <ul className="space-y-4 mb-4 lg:mb-10">
              {[
                'Real-time RFP tracking and analytics',
                'Seamless communication with venues',
                'Comprehensive budget management',
                'Instant booking capabilities'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-[#EE3238]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-[55%] p-6 sm:p-8 lg:p-14 bg-white flex flex-col justify-center">
            <div className="max-w-[420px] mx-auto w-full">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-2">Log In</h2>
              <p className="text-sm text-gray-500 mb-8">
                Enter your credentials to access your account.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-black mb-1.5">Account Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building2 size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="e.g. Acme Corp"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#EE3238]/20 focus:border-[#EE3238] outline-none transition-all text-sm font-medium text-gray-900" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-1.5">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter your username"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#EE3238]/20 focus:border-[#EE3238] outline-none transition-all text-sm font-medium text-gray-900" 
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-semibold text-black">Password</label>
                    <a href="#" className="text-xs font-bold text-[#EE3238] hover:text-[#D22023] transition-colors hover:underline underline-offset-4">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock size={18} className="text-gray-400" />
                    </div>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter your password"
                      className="w-full pl-11 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#EE3238]/20 focus:border-[#EE3238] outline-none transition-all text-sm font-medium text-gray-900" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-2 bg-gradient-to-r from-[#EE3238] to-[#D22023] hover:from-red-600 hover:to-red-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-500/30 hover:shadow-red-500/40 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Log in
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm font-medium text-gray-600">
                  Don't have an account?{' '}
                  <a href="/signup" className="font-bold text-[#EE3238] hover:text-[#D22023] transition-colors hover:underline underline-offset-4">
                    Sign up
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

export default Login;