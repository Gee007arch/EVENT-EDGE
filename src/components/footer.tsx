import { ChevronDown, SquareCheck } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';

const footerLinks = {
  Sales: [
    { label: 'Request a demo', href: '/demo' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact sales', href: '/contact' },
    { label: '971.4568.4914', href: 'tel:97145684914' },
  ],
  About: [
    { label: 'Awards', href: '/awards' },
    { label: 'Careers', href: '/careers' },
    { label: 'Investor relations', href: '/investors' },
    { label: 'Newsroom', href: '/newsroom' },
    { label: 'Partners', href: '/partners' },
  ],
  'Popular products': [
    { label: 'Event registration', href: '/products/registration' },
    { label: 'Mobile apps', href: '/products/mobile-apps' },
    { label: 'Attendee Hub', href: '/products/attendee-hub' },
    { label: 'Check-in & badging', href: '/products/check-in' },
    { label: 'Webinar platform', href: '/products/webinar' },
    { label: 'Venue Sourcing', href: '/products/venue-sourcing' },
    { label: 'All products', href: '/products' },
  ],
  'Free resources': [
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Case studies', href: '/resources/case-studies' },
    { label: 'Events', href: '/resources/events' },
    { label: 'Watch webinars', href: '/resources/webinars' },
    { label: 'Find event venues', href: '/venues' },
    { label: 'Best event venues', href: '/venues/best' },
  ],
  Support: [
    { label: 'Contact support', href: '/support/contact' },
    { label: 'Community', href: '/support/community' },
    { label: 'Developer Hub', href: '/support/developers' },
    { label: 'Knowledge base', href: '/support/knowledge' },
    { label: 'Security', href: '/security' },
    { label: 'Training', href: '/training' },
    { label: 'Log in to Event Edge', href: '/login' },
  ],
  'For suppliers & venues': [
    { label: 'Attract', href: '/suppliers/attract' },
    { label: 'Convert', href: '/suppliers/convert' },
    { label: 'Manage', href: '/suppliers/manage' },
    { label: 'Improve', href: '/suppliers/improve' },
    { label: 'Corporate Travel', href: '/suppliers/corporate-travel' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#0d114c] pt-12 pb-8 text-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-10 md:flex-row">
          <div className="text-3xl font-bold tracking-tighter">Event Edge</div>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-blue-400">
              <FaFacebook size={24} /> 
            </a>
            <a href="#" className="transition hover:text-blue-400">
              <FaXTwitter size={24} />
            </a>
            <a href="#" className="transition hover:text-blue-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="transition hover:text-blue-400">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="transition hover:text-blue-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 md:grid-cols-3 lg:grid-cols-6">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-6 text-base font-bold text-white">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#d1d5ff] transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#d1d5ff]">
                <span>© Copyright 2026 Event Edge Inc. All rights reserved.</span>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="underline hover:text-white">LEGAL</a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="underline hover:text-white">PRIVACY POLICY</a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="underline hover:text-white">ACCESSIBILITY</a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="underline hover:text-white">PRODUCT TERMS OF USE</a>
                <span className="hidden sm:inline">|</span>
                <a href="#" className="underline hover:text-white">WEBSITE TERMS OF USE</a>
              </div>
              
              <a href="#" className="flex items-center gap-2 text-xs font-semibold text-white underline decoration-transparent transition hover:decoration-white">
                <div className="flex h-4 w-6 items-center justify-center rounded-sm bg-blue-500 px-0.5 text-[8px] leading-none">
                  <SquareCheck size={10} className="mr-0.5" />
                  <span>X</span>
                </div>
                YOUR PRIVACY CHOICES
              </a>

              <p className="text-[10px] text-[#8c92b0]">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="underline">Privacy Policy</a> and{' '}
                <a href="#" className="underline">Terms of Service</a> apply
              </p>
            </div>

            <button type="button" className="flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:bg-white/10">
              <ChevronDown size={16} />
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
