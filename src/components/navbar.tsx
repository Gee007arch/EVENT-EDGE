import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Search, User } from 'lucide-react'
import eventedgeIcon from '../assets/event-edge icon.png'


const navItems = [
  'Products',
  'Event types',
  'Resources',
  'Company',
  'For hoteliers & venues',
]

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-sm ">
      <nav className="mx-auto flex max-w-[1600px] px-6 lg:px-12 items-center justify-between gap-6 py-6 text-md text-white ">
        <div className="flex items-center gap-12">
          <a
            href="/"
            className="flex items-center"
            aria-label="Event home"
          >
            <img src={eventedgeIcon} alt="Event Edge" className="w-48" />
          </a>

          <div className="hidden items-center gap-8 font-semibold lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className="flex items-center gap-1.5 whitespace-nowrap transition hover:text-[#EE3238]"
              >
                <span>{item}</span>
                <ChevronDown size={16} strokeWidth={2.2} />
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 font-medium">
          <a
            href="/demo"
            className="group relative hidden rounded-full p-[2px] md:inline-block bg-gradient-to-r from-orange-500 via-[#EE3238] to-[#D22023]"
          >
            <span className="relative block overflow-hidden rounded-full bg-black px-4 py-1 text-md font-semibold">
              <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-orange-500 via-[#EE3238] to-[#D22023] transition-all duration-300 ease-out group-hover:w-full" />
              
              <span className="relative z-10 flex items-center justify-center">
                <span className="bg-gradient-to-r from-orange-500 via-[#EE3238] to-[#D22023] bg-clip-text text-transparent transition-opacity duration-300 group-hover:opacity-0">
                  Request demo
                </span>
                <span className="absolute text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Request demo
                </span>
              </span>
            </span>
          </a>

          <a
            href="/venues"
            className="hidden whitespace-nowrap text-white transition hover:text-[#EE3238] md:inline-block"
          >
            Find event venues
          </a>

          <div className="hidden h-7 w-px bg-slate-300 md:block" />

          <button
            type="button"
            className="text-white transition hover:text-[#EE3238]"
            aria-label="Search"
          >
            <Search size={21} strokeWidth={2.2} />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="group flex items-center gap-2 text-white transition hover:text-[#EE3238]"
              aria-label="User menu"
            >
              <User size={21} strokeWidth={2.2} className="fill-white transition-colors group-hover:fill-[#EE3238]" />
              <ChevronDown size={16} strokeWidth={2.2} className={`transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180 text-[#EE3238]' : ''}`} />
            </button>

            {isUserDropdownOpen && (
              <div className="absolute right-0 top-full mt-4 w-40 rounded-xl bg-black py-2 shadow-xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2">
                <Link
                  to="/login"
                  className="block px-4 py-2.5 text-sm font-semibold text-[#CACACA] transition-colors hover:bg-opacity-50 hover:text-[#EE3238]"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2.5 text-sm font-semibold text-[#CACACA] transition-colors hover:bg-opacity-50 hover:text-[#EE3238]"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          
        </div>
      </nav>
    </header>
  )
}

export default Navbar
