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
  return (
    <header className=" bg-black">
      <nav className="mx-auto flex max-w-[1600px] px-6 lg:px-12 items-center justify-between gap-6  py-46 text-md text-white sticky">
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
            className="hidden rounded-full border-2 border-white p-[1.5px] md:inline-block"
          >
            <span className="block rounded-full bg-black px-4 py-1 m-[1px] text-md font-semibold ">
              <span className='text-white'>Request demo</span>
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

          <button
            type="button"
            className="flex items-center gap-2 text-white transition hover:text-[#EE3238]"
            aria-label="Log in"
          >
            <User size={21} strokeWidth={2.2} fill='black' />
            <span className="hidden font-semibold sm:inline">Log in</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
