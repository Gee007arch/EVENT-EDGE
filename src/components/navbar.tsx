import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search, User, ClipboardList, Calendar, CheckSquare, Users, Handshake, Link as Star, Zap, DollarSign, Settings, Megaphone, ArrowRight, Building2, LayoutGrid, Tag, Globe, GraduationCap, HelpCircle, Info, Mail, Target, CalendarCheck, TrendingUp, Menu, X, ChevronRight, ChevronLeft, MapPin, PlayCircle } from 'lucide-react'
import eventedgeIcon from '../assets/event-edge icon.png'

const navItems = [
  'Products',
  'Event types',
  'Resources',
  'Company',
  'For hoteliers & venues',
]

const productsData = {
  lifecycle: [
    {
      title: 'BEFORE YOUR EVENTS',
      icon: <ClipboardList size={16} className="text-[#EE3238]" />,
      items: [
        'Registration & marketing',
        'Venue sourcing',
        'Event diagramming',
        'Repeatable events',
        'Room blocks',
        'Approvals & budgeting',
        'Speaker management'
      ],
      itemsLink: [
        'registrationAndMarketing',
        'venueSourcing',
        'eventDiagramming',
        'repeatableEvents',
        'roomBlocks',
        'approvalAndBudgeting',
        'speakerManagement'
      ]
    },
    {
      title: 'DURING YOUR EVENTS',
      icon: <Calendar size={16} className="text-orange-500" />,
      items: [
        'Event app',
        'Check-in & badging',
        'Attendee engagement',
        'Trade show lead capture',
        'Trade show meetings',
        'Virtual experience',
        'Webinars'
      ],
      itemsLink: [
        'eventApp',
        'checkInBadging',
        'attendeeEngagement',
        'tradeShowLeadCapture',
        'tradeShowMeetings',
        'virtualExperience',
        'webinars'
      ]
    },
    {
      title: 'AFTER YOUR EVENTS',
      icon: <CheckSquare size={16} className="text-green-500" />,
      items: [
        'Event & attendee insights',
        'Integrations',
        'Surveys',
        'Lead retrieval',
        'Event video'
      ],
      itemsLink: [
        'eventAndAttendeeInsights',
        'integrations',
        'surveys',
        'leadRetrieval',
        'eventVideo'
      ]
    }
  ],
  featured: [
    {
      title: 'Event management',
      description: 'Manage your entire event lifecycle',
      icon: <Settings size={20} className="text-[#EE3238]" /> 
    },
    {
      title: 'Event marketing',
      description: 'Turn events into your top marketing channel',
      icon: <Megaphone size={20} className="text-[#EE3238]" /> 
    },
    {
      title: 'Event Edge Essentials',
      description: 'Simplify your repeatable in-person events',
      icon: <Users size={20} className="text-[#EE3238]" />
    },
    {
      title: 'AI for events',
      description: 'Make every event smarter with Event Edge IQ™',
      icon: <Zap size={20} className="text-[#EE3238]" />
    },
    {
      title: 'Pricing',
      description: 'Learn about our pricing structure',
      icon: <DollarSign size={20} className="text-[#EE3238]" />
    }
  ]
}

const eventTypesData = {
  columns: [
    {
      title: 'YOUR INDUSTRY',
      icon: <Building2 size={16} className="text-green-500" />,
      items: [
        'Agency',
        'Association',
        'Financial services',
        'Higher education',
        'Life sciences',
        'Technology'
      ],
      bottomLink: 'See all industries'
    },
    {
      title: 'YOUR FORMAT',
      icon: <LayoutGrid size={16} className="text-purple-500" />,
      items: [
        'In-person',
        'Hybrid',
        'Virtual',
        'Webinar'
      ]
    },
    {
      title: 'YOUR EVENT',
      icon: <Tag size={16} className="text-orange-500" />,
      items: [
        'Conference',
        'Field marketing',
        'Internal event',
        'Networking',
        'Sales kickoff',
        'Trade show'
      ]
    },
    {
      title: 'YOUR ROLE',
      icon: <Users size={16} className="text-blue-500" />,
      items: [
        'Event planner',
        'Marketing manager',
        'Marketing operations',
        'Demand generation',
        'Travel manager'
      ]
    }
  ],
  featured: {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    title: 'Event planning and marketing in one place',
    description: "Event Edge's software helps you manage every stage of the event process.",
    buttonText: 'Learn more'
  }
}

const resourcesData = {
  columns: [
    {
      title: 'EXPLORE',
      icon: <Globe size={16} className="text-green-500" />,
      items: [
        'All resources',
        'Blog',
        'Case studies',
        'Podcast',
        'Upcoming events',
        'Upcoming webinars'
      ]
    },
    {
      title: 'LEARN',
      icon: <GraduationCap size={16} className="text-blue-500" />,
      items: [
        'Community',
        'Certification',
        'Training'
      ]
    },
    {
      title: 'GET HELP',
      icon: <HelpCircle size={16} className="text-orange-500" />,
      items: [
        'Knowledge Base',
        'Professional Services',
        'Support',
        'Security'
      ]
    }
  ],
  featured: {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    title: 'Interactive demo library',
    description: 'Take a self-guided tour to see how Event Edge works.',
    buttonText: 'Take a tour'
  }
}

const companyData = {
  columns: [
    {
      title: 'ABOUT',
      icon: <Info size={16} className="text-blue-500" />,
      items: [
        'About Event Edge',
        'Newsroom',
        'Accessibility',
        'Pricing'
      ]
    },
    {
      title: 'WORK WITH US',
      icon: <Handshake size={16} className="text-green-500" />,
      items: [
        'Careers',
        'Diversity',
        'Partner with us'
      ]
    },
    {
      title: 'CONTACT',
      icon: <Mail size={16} className="text-orange-500" />,
      items: [
        'Contact sales',
        'Contact support'
      ]
    }
  ],
  featured: {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: 'Join 4,800+ employees around the world who power our technology',
    buttonText: 'See all positions'
  }
}

const hoteliersData = {
  miceBusiness: {
    title: 'WIN MICE BUSINESS',
    columns: [
      {
        title: 'ATTRACT MEETING PLANNERS',
        icon: <Target size={16} className="text-orange-400" />,
        items: [
          'Digital ads',
          'Prospect planners',
          'Promote in person',
          'Vendor marketplace'
        ]
      },
      {
        title: 'CONVERT RFPS',
        icon: <Handshake size={16} className="text-green-500" />,
        items: [
          'Showcase meeting space',
          'Customize proposals',
          'Capture instant bookings',
          'Manage MICE RFPs'
        ]
      },
      {
        title: 'MANAGE EVENT BOOKINGS',
        icon: <CalendarCheck size={16} className="text-blue-400" />,
        items: [
          '3D diagramming',
          'Manage room blocks'
        ]
      },
      {
        title: 'IMPROVE MICE BUSINESS',
        icon: <TrendingUp size={16} className="text-purple-400" />,
        items: [
          'Measure performance'
        ]
      }
    ]
  },
  corporateTravel: {
    title: 'WIN CORPORATE TRAVEL',
    columns: [
      {
        items: ['Grow corporate travel']
      },
      {
        items: ['Manage transient RFPs']
      },
      {
        items: ['Distribute rates']
      },
      {
        items: ['Evaluate performance']
      }
    ]
  }
}

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setExpandedMobileSection(null);
    setIsUserDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);


    useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 z-[100] w-full bg-black/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-[1600px] px-6 lg:px-12 items-center justify-between gap-6 py-6 text-md text-white relative">
        <div className="flex items-center gap-12">
          <a
            href="/"
            className="flex items-center"
            aria-label="Event home"
          >
            <img src={eventedgeIcon} alt="Event Edge" className="w-48" />
          </a>

          <div className="hidden items-center gap-8 font-semibold lg:flex">
            {navItems.map((item, index) => {
              const isLastItem = index === navItems.length - 1;
              const activeColor = isLastItem ? 'text-[#22c55e]' : 'text-[#EE3238] bg-[#EE3238]/20';
              const hoverColor = isLastItem ? 'hover:text-[#22c55e]' : 'hover:text-[#EE3238] ';
              const indicatorBg = isLastItem ? 'bg-[#22c55e]' : 'bg-[#EE3238]';

              return (
                <div key={item} className="relative group">
                  <button
                    type="button"
                    onClick={() => setActiveMenu(activeMenu === item ? null : item)}
                    className={`flex items-center gap-1.5 whitespace-nowrap transition py-2 px-2 ${activeMenu === item ? activeColor : hoverColor}`}
                  >
                    <span>{item}</span>
                    <ChevronDown size={16} strokeWidth={2.2} className={`transition-transform duration-200 ${activeMenu === item ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeMenu === item && (
                    <div className={` bottom-[-24px] left-0 w-full h-[3px] ${indicatorBg}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {activeMenu === 'Products' && !isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#0a0a0a] border-t border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-10 flex">
              
              <div className="w-[70%] grid grid-cols-3 gap-8 ">
                {productsData.lifecycle.map((stage, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-6">
                      {stage.icon}
                      <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">{stage.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {stage.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link to={`/${stage.itemsLink[itemIdx]}` } className="text-[15px] font-semibold text-white hover:text-[#EE3238] py-2  transition-colors block">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                <div className="col-span-3 flex justify-end mt-4">
                  <Link to="/products" className="flex items-center gap-1.5 text-sm font-bold text-[#EE3238] hover:text-red-400 transition-colors group">
                    See all products
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="w-[30%] pl-12 border-l border-gray-800 bg-gradient-to-br from-[#0a0a0a] to-[#1a1010]">
                <div className="flex items-center gap-2 mb-6">
                  <Star size={16} className="text-gray-400 fill-gray-400" />
                  <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">FEATURED</h4>
                </div>
                
                <div className="space-y-3">
                  {productsData.featured.map((item, idx) => (
                    <a key={idx} href="#" className="flex items-start gap-4 p-4 rounded-xl border border-gray-800 bg-[#141414] hover:border-[#EE3238] hover:bg-[#1a1a1a] transition-all group">
                      <div className="mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="text-[15px] font-bold text-white group-hover:text-[#EE3238] transition-colors mb-0.5">{item.title}</h5>
                        <p className="text-[12px] text-gray-400 leading-tight">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {activeMenu === 'Event types' && !isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#0a0a0a] border-t border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-10 flex">
              
              <div className="w-[70%] grid grid-cols-4 gap-8 pr-12">
                {eventTypesData.columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-6">
                      {col.icon}
                      <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">{col.title}</h4>
                    </div>
                    <ul className="space-y-4 flex-1">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a href="#" className="text-[15px] font-semibold text-white hover:text-[#EE3238] transition-colors block">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {col.bottomLink && (
                      <div className="mt-6 pt-4">
                        <a href="#" className="flex items-center gap-1.5 text-sm font-bold text-[#EE3238] hover:text-red-400 transition-colors group">
                          {col.bottomLink}
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="w-[30%] pl-12 border-l border-gray-800 flex items-center justify-center">
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#141414] group w-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={eventTypesData.featured.image} 
                      alt="Featured Event" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#141414] to-[#1a1a1a]">
                    <h4 className="text-[17px] font-bold text-white mb-2 leading-tight">{eventTypesData.featured.title}</h4>
                    <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">{eventTypesData.featured.description}</p>
                    <a href="#" className="inline-block px-5 py-2.5 rounded-lg border border-[#EE3238] text-[#EE3238] text-sm font-bold hover:bg-[#EE3238] hover:text-white transition-colors">
                      {eventTypesData.featured.buttonText}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeMenu === 'Resources' && !isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#0a0a0a] border-t border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-10 flex">
              
              <div className="w-[70%] grid grid-cols-3 gap-8 pr-12">
                {resourcesData.columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-6">
                      {col.icon}
                      <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">{col.title}</h4>
                    </div>
                    <ul className="space-y-4 flex-1">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a href="#" className="text-[15px] font-semibold text-white hover:text-[#EE3238] transition-colors block">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="w-[30%] pl-12 border-l border-gray-800 flex items-center justify-center">
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#141414] group w-full">
                  <div className="h-48 overflow-hidden bg-white flex items-center justify-center p-4">

                    <div className="w-full h-full border border-gray-200 rounded-lg shadow-sm relative overflow-hidden flex flex-col">
                       <div className="h-6 bg-gray-50 border-b border-gray-200 flex items-center px-2 gap-1.5">
                         <div className="w-2 h-2 rounded-full bg-red-400"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                         <div className="w-2 h-2 rounded-full bg-green-400"></div>
                       </div>
                       <div className="flex-1 p-3 bg-white flex items-center justify-center relative">
                         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
                         <div className="relative z-10 bg-white border border-gray-200 shadow-xl rounded-xl p-4 w-3/4 transform transition-transform duration-700 group-hover:scale-105">
                           <div className="h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md w-full mb-3 flex items-center justify-center">
                             <span className="text-white text-xs font-bold">Event Edge</span>
                           </div>
                           <p className="text-[10px] text-center text-gray-600 font-medium mb-3">Take a tour of Event Edge now!</p>
                           <div className="h-6 bg-blue-50 border border-blue-100 rounded-md w-2/3 mx-auto"></div>
                         </div>
                       </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#141414] to-[#1a1a1a]">
                    <h4 className="text-[17px] font-bold text-white mb-2 leading-tight">{resourcesData.featured.title}</h4>
                    <p className="text-[13px] text-gray-400 mb-6 leading-relaxed">{resourcesData.featured.description}</p>
                    <a href="#" className="inline-block px-5 py-2.5 rounded-lg border border-[#EE3238] text-[#EE3238] text-sm font-bold hover:bg-[#EE3238] hover:text-white transition-colors">
                      {resourcesData.featured.buttonText}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeMenu === 'Company' && !isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#0a0a0a] border-t border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-10 flex">
              
              <div className="w-[70%] grid grid-cols-3 gap-8 pr-12">
                {companyData.columns.map((col, idx) => (
                  <div key={idx} className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-6">
                      {col.icon}
                      <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">{col.title}</h4>
                    </div>
                    <ul className="space-y-4 flex-1">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a href="#" className="text-[15px] font-semibold text-white hover:text-[#EE3238] transition-colors block">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="w-[30%] pl-12 border-l border-gray-800 flex items-center justify-center">
                <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#141414] group w-full">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={companyData.featured.image} 
                      alt="Event Edge Team" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#141414] to-[#1a1a1a] -mt-8 relative z-10">
                    <h4 className="text-[17px] font-bold text-white mb-6 leading-tight">{companyData.featured.title}</h4>
                    <a href="#" className="inline-block px-5 py-2.5 rounded-lg border border-[#EE3238] text-[#EE3238] text-sm font-bold hover:bg-[#EE3238] hover:text-white transition-colors">
                      {companyData.featured.buttonText}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {activeMenu === 'For hoteliers & venues' && !isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#0a0a0a] border-t border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-10">
              
              <div className="mb-10 pb-10 border-b border-gray-800">
                <a href="#" className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#22c55e] hover:text-[#16a34a] transition-colors mb-8 group">
                  {hoteliersData.miceBusiness.title}
                  <ChevronDown size={16} className="rotate-[-90deg] transition-transform group-hover:translate-x-1" />
                </a>
                
                <div className="grid grid-cols-4 gap-8">
                  {hoteliersData.miceBusiness.columns.map((col, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-2 mb-6">
                        {col.icon}
                        <h4 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">{col.title}</h4>
                      </div>
                      <ul className="space-y-4">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a href="#" className="text-[15px] font-semibold text-white hover:text-[#22c55e] transition-colors block">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a href="#" className="inline-flex items-center gap-1.5 text-[15px] font-bold text-[#22c55e] hover:text-[#16a34a] transition-colors mb-6 group">
                  {hoteliersData.corporateTravel.title}
                  <ChevronDown size={16} className="rotate-[-90deg] transition-transform group-hover:translate-x-1" />
                </a>
                
                <div className="grid grid-cols-4 gap-8">
                  {hoteliersData.corporateTravel.columns.map((col, idx) => (
                    <div key={idx}>
                      <ul className="space-y-4">
                        {col.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a href="#" className="text-[15px] font-semibold text-white hover:text-[#22c55e] transition-colors block">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

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

          <div className="relative hidden md:block">
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
          
          <button
            type="button"
            className="lg:hidden text-white hover:text-[#EE3238] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
    </header>



    {isMobileMenuOpen && (
      <div className="lg:hidden fixed inset-0 bg-[#0a0a0a] z-[9999] overflow-y-auto">

          <div className="flex items-center justify-between px-6 py-6 border-b border-gray-800 bg-[#0a0a0a]">
            <img src={eventedgeIcon} alt="Event Edge" className="w-40" />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#EE3238] transition-colors"
            >
              <X size={32} />
            </button>
          </div>

          <div className="px-6 py-6">

            <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full bg-[#1a1a1a] border border-gray-800 rounded-full py-3 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-[#EE3238]"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>

            {!activeMenu ? (
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveMenu(item)}
                    className="flex items-center justify-between w-full py-4 text-[17px] font-bold text-white border-b border-gray-900 hover:text-[#EE3238] transition-colors"
                  >
                    <span>{item}</span>
                    <ChevronRight size={20} className="text-gray-500" />
                  </button>
                ))}
                
                <div className="mt-8 pt-8 space-y-6">
                  <Link to="/demo" className="flex items-center gap-4 text-[15px] font-bold text-white uppercase tracking-wider hover:text-[#EE3238] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#EE3238]/10 flex items-center justify-center text-[#EE3238]">
                      <PlayCircle size={20} />
                    </div>
                    Request Demo
                  </Link>
                  <Link to="/venues" className="flex items-center gap-4 text-[15px] font-bold text-white uppercase tracking-wider hover:text-[#EE3238] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                      <MapPin size={20} />
                    </div>
                    Find Event Venues
                  </Link>
                  <Link to="/login" className="flex items-center gap-4 text-[15px] font-bold text-white uppercase tracking-wider hover:text-[#EE3238] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <User size={20} />
                    </div>
                    Log In
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <button 
                  onClick={() => {
                    setActiveMenu(null);
                    setExpandedMobileSection(null);
                  }}
                  className="flex items-center gap-2 text-[#EE3238] font-bold mb-8 text-[17px]"
                >
                  <ChevronLeft size={20} />
                  {activeMenu}
                </button>

                <div className="space-y-4">
                  {activeMenu === 'Products' && (
                    <div className="space-y-6">
                      {productsData.lifecycle.map((stage, idx) => (
                        <div key={idx} className="border-b border-gray-900 pb-4">
                          <button 
                            onClick={() => setExpandedMobileSection(expandedMobileSection === stage.title ? null : stage.title)}
                            className="flex items-center justify-between w-full text-[15px] font-bold text-gray-300 uppercase tracking-wider"
                          >
                            <span>{stage.title}</span>
                            <ChevronDown size={20} className={`transition-transform duration-200 ${expandedMobileSection === stage.title ? 'rotate-180 text-[#EE3238]' : ''}`} />
                          </button>
                          {expandedMobileSection === stage.title && (
                            <ul className="mt-4 space-y-4 pl-2">
                              {stage.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <Link to={`/${stage.itemsLink[subIdx]}`} className="text-[16px] font-semibold text-white hover:text-[#EE3238]">
                                    {subItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                      
                      <Link to="/products" className="flex items-center gap-2 text-[15px] font-bold text-[#EE3238] mt-8">
                        See all products <ChevronRight size={16} />
                      </Link>

                      <div className="mt-12">
                        <div className="flex items-center gap-2 mb-6">
                          <Star size={16} className="text-[#EE3238] fill-[#EE3238]" />
                          <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">Featured</h4>
                        </div>
                        <div className="space-y-6">
                          {productsData.featured.map((item, idx) => (
                            <a key={idx} href="#" className="flex items-start gap-4 group">
                              <div className="mt-1 text-[#EE3238]">
                                {item.icon}
                              </div>
                              <div>
                                <h5 className="text-[16px] font-bold text-white group-hover:text-[#EE3238] transition-colors">{item.title}</h5>
                                <p className="text-[13px] text-gray-500 mt-1">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMenu === 'Event types' && (
                    <div className="space-y-6">
                      {eventTypesData.columns.map((col, idx) => (
                        <div key={idx} className="border-b border-gray-900 pb-4">
                          <button 
                            onClick={() => setExpandedMobileSection(expandedMobileSection === col.title ? null : col.title)}
                            className="flex items-center justify-between w-full text-[15px] font-bold text-gray-300 uppercase tracking-wider"
                          >
                            <span>{col.title}</span>
                            <ChevronDown size={20} className={`transition-transform duration-200 ${expandedMobileSection === col.title ? 'rotate-180 text-[#EE3238]' : ''}`} />
                          </button>
                          {expandedMobileSection === col.title && (
                            <ul className="mt-4 space-y-4 pl-2">
                              {col.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a href="#" className="text-[16px] font-semibold text-white hover:text-[#EE3238]">
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeMenu === 'Resources' && (
                    <div className="space-y-6">
                      {resourcesData.columns.map((col, idx) => (
                        <div key={idx} className="border-b border-gray-900 pb-4">
                          <button 
                            onClick={() => setExpandedMobileSection(expandedMobileSection === col.title ? null : col.title)}
                            className="flex items-center justify-between w-full text-[15px] font-bold text-gray-300 uppercase tracking-wider"
                          >
                            <span>{col.title}</span>
                            <ChevronDown size={20} className={`transition-transform duration-200 ${expandedMobileSection === col.title ? 'rotate-180 text-[#EE3238]' : ''}`} />
                          </button>
                          {expandedMobileSection === col.title && (
                            <ul className="mt-4 space-y-4 pl-2">
                              {col.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a href="#" className="text-[16px] font-semibold text-white hover:text-[#EE3238]">
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeMenu === 'Company' && (
                    <div className="space-y-6">
                      {companyData.columns.map((col, idx) => (
                        <div key={idx} className="border-b border-gray-900 pb-4">
                          <button 
                            onClick={() => setExpandedMobileSection(expandedMobileSection === col.title ? null : col.title)}
                            className="flex items-center justify-between w-full text-[15px] font-bold text-gray-300 uppercase tracking-wider"
                          >
                            <span>{col.title}</span>
                            <ChevronDown size={20} className={`transition-transform duration-200 ${expandedMobileSection === col.title ? 'rotate-180 text-[#EE3238]' : ''}`} />
                          </button>
                          {expandedMobileSection === col.title && (
                            <ul className="mt-4 space-y-4 pl-2">
                              {companyData.columns[idx].items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a href="#" className="text-[16px] font-semibold text-white hover:text-[#EE3238]">
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeMenu === 'For hoteliers & venues' && (
                    <div className="space-y-12">
                      <div className="space-y-6">
                        <h4 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider">{hoteliersData.miceBusiness.title}</h4>
                        {hoteliersData.miceBusiness.columns.map((col, idx) => (
                          <div key={idx} className="border-b border-gray-900 pb-4">
                            <button 
                              onClick={() => setExpandedMobileSection(expandedMobileSection === col.title ? null : col.title)}
                              className="flex items-center justify-between w-full text-[14px] font-bold text-gray-400 uppercase tracking-wider"
                            >
                              <span>{col.title}</span>
                              <ChevronDown size={18} className={`transition-transform duration-200 ${expandedMobileSection === col.title ? 'rotate-180 text-[#22c55e]' : ''}`} />
                            </button>
                            {expandedMobileSection === col.title && (
                              <ul className="mt-4 space-y-4 pl-2">
                                {col.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <a href="#" className="text-[16px] font-semibold text-white hover:text-[#22c55e]">
                                      {subItem}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-sm font-bold text-[#22c55e] uppercase tracking-wider">{hoteliersData.corporateTravel.title}</h4>
                        {hoteliersData.corporateTravel.columns.map((col, idx) => (
                          <div key={idx} className="border-b border-gray-900 pb-4">
                            <ul className="space-y-4">
                              {col.items.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <a href="#" className="text-[16px] font-semibold text-white hover:text-[#22c55e]">
                                    {subItem}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
