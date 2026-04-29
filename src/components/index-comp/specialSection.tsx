import React, { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronUp, X, Calendar, Megaphone, Zap, BarChart3, Layout, Users, Globe, Video, Database } from 'lucide-react';
import eventedgeIcon from '../../assets/event-edge icon.png';

interface SubItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface LifecycleStage {
  id: string;
  name: string;
  tagline: string;
  color: string;
  gradient: string;
  items: SubItem[];
}

const lifecycleData: LifecycleStage[] = [
  {
    id: 'planning',
    name: 'PLANNING',
    tagline: 'Improve your event planning workflow',
    color: 'black',
    gradient: 'from-[#000000] to-[#000000]',
    items: [
      {
        title: 'Meeting approval & budgeting',
        description: 'Keep track of all the meetings and events happening at your organization with meeting request forms, streamlined approval workflows, and budget management tools.',
      },
      {
        title: 'Venue sourcing',
        description: 'Find and book the perfect venue for your event with access to a global network of hotels and meeting spaces.',
      },
      {
        title: 'Vendor sourcing',
        description: 'Connect with trusted vendors for catering, AV, and other event services.',
      },
      {
        title: 'Room block & travel',
        description: 'Manage hotel room blocks and attendee travel arrangements in one place.',
      },
      {
        title: 'Venue diagramming',
        description: 'Create detailed floor plans and 3D diagrams of your event space.',
      },
    ],
  },
  {
    id: 'promotion',
    name: 'PROMOTION',
    tagline: 'Optimize your event marketing',
    color: '#0066FF',
    gradient: 'from-[#D22023] to-[#000000]',
    items: [
      {
        title: 'Registration',
        description: 'Create personalized registration experiences that capture the right attendee details and securely process payments.',
      },
      {
        title: 'Event website',
        description: 'Build a beautiful, branded event website that converts visitors into attendees.',
      },
      {
        title: 'Marketing',
        description: 'Drive attendance with targeted email campaigns and social media integration.',
      },
      {
        title: 'Speaker management',
        description: 'Manage speaker profiles, sessions, and presentations efficiently.',
      },
      {
        title: 'Exhibitor management',
        description: 'Give exhibitors the tools they need to succeed and track their ROI.',
      },
    ],
  },
  {
    id: 'day-of-event',
    name: 'DAY OF EVENT',
    tagline: 'Impress attendees when it matters most',
    color: '#00BFA5',
    gradient: 'from-[#D22023] to-[#D22023]',
    items: [
      {
        title: 'Networking',
        description: 'Facilitate meaningful connections between attendees with networking tools and AI-driven matchmaking.',
      },
      {
        title: 'Event app',
        description: 'Keep attendees engaged and informed with a personalized mobile event app.',
      },
      {
        title: 'Onsite check-in & badging',
        description: 'Provide a seamless check-in experience and print professional badges on demand.',
      },
      {
        title: 'Virtual experience',
        description: 'Deliver high-quality virtual and hybrid event experiences to a global audience.',
      },
      {
        title: 'Webinar',
        description: 'Host interactive and engaging webinars that drive results.',
      },
    ],
  },
  {
    id: 'post-event',
    name: 'POST EVENT',
    tagline: 'Measure and prove your ROI',
    color: '#00C853',
    gradient: 'from-[#D22023] to-[#000000]',
    items: [
      {
        title: 'Integrations',
        description: 'Connect your event data with your CRM and marketing automation tools.',
      },
      {
        title: 'Event & attendee insights',
        description: 'Gain deep insights into attendee behavior and event performance with advanced analytics.',
      },
      {
        title: 'Surveys',
        description: 'Gather valuable feedback from attendees with customizable post-event surveys.',
      },
      {
        title: 'Lead management',
        description: 'Capture and qualify leads effectively to drive sales and growth.',
      },
      {
        title: 'Engagement scoring',
        description: 'Measure attendee engagement across all touchpoints to identify high-value prospects.',
      },
    ],
  },
];

const SpecialSection = () => {
  const [activeStage, setActiveStage] = useState<LifecycleStage | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleStageClick = (stage: LifecycleStage) => {
    if (activeStage?.id === stage.id) {
      setActiveStage(null);
      setExpandedItem(null);
    } else {
      setActiveStage(stage);
      setExpandedItem(null);
    }
  };

  const getPopupPosition = () => {
    if (!activeStage) return '';
  
    switch (activeStage.id) {
      case 'planning': return 'lg:top-1/2 lg:-translate-y-1/2 lg:right-[-105%] top-[110%] left-1/2 -translate-x-1/2 lg:translate-x-0';
      case 'promotion': return 'lg:top-1/2 lg:-translate-y-1/2 lg:right-[-105%] top-[110%] left-1/2 -translate-x-1/2 lg:translate-x-0';
      case 'day-of-event': return 'lg:top-1/2 lg:-translate-y-1/2 lg:left-[-105%] top-[110%] left-1/2 -translate-x-1/2 lg:translate-x-0';
      case 'post-event': return 'lg:top-1/2 lg:-translate-y-1/2 lg:left-[-105%] top-[110%] left-1/2 -translate-x-1/2 lg:translate-x-0';
      default: return '';
    }
  };

  const getArrowPosition = () => {
    if (!activeStage) return '';
    switch (activeStage.id) {
      case 'planning': return 'lg:left-[-10px] lg:top-1/2 lg:-translate-y-1/2 lg:border-r-white top-[-10px] left-1/2 -translate-x-1/2 border-b-[#F4F6FF] lg:border-b-transparent';
      case 'promotion': return 'lg:left-[-10px] lg:top-1/2 lg:-translate-y-1/2 lg:border-r-white top-[-10px] left-1/2 -translate-x-1/2 border-b-[#F4F6FF] lg:border-b-transparent';
      case 'day-of-event': return 'lg:right-[-10px] lg:top-1/2 lg:-translate-y-1/2 lg:border-l-white top-[-10px] left-1/2 -translate-x-1/2 border-b-[#F4F6FF] lg:border-b-transparent';
      case 'post-event': return 'lg:right-[-10px] lg:top-1/2 lg:-translate-y-1/2 lg:border-l-white top-[-10px] left-1/2 -translate-x-1/2 border-b-[#F4F6FF] lg:border-b-transparent';
      default: return '';
    }
  };

  return (
    <section className="relative  bg-white py-12 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute right-[-5%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-50 blur-[100px]" />
        <div className="absolute left-[-5%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-purple-50 blur-[100px]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#171c63 0.5px, transparent 0.5px)', 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-[#D22023] md:text-4xl lg:text-5xl">
            Your event lifecycle,<br />from start to finish
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-[#B1B1B1]">
            With tools to manage the event journey in one place, 
            you'll have less on your plate so you can focus on what matters.
          </p>
        </div>

        <div className="relative flex justify-center py-6">

          <div className="relative h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]">

            <div className="absolute inset-[-40px] rounded-full border-2 border-dashed border-gray-200 animate-[spin_60s_linear_infinite]" />
            
            <div className="absolute inset-[-42px] animate-[spin_60s_linear_infinite]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rotate-45 border-r-2 border-t-2 border-gray-400 p-1" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-[135deg] border-r-2 border-t-2 border-gray-400 p-1" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rotate-[225deg] border-r-2 border-t-2 border-gray-400 p-1" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-45 border-r-2 border-t-2 border-gray-400 p-1" />
            </div>

            <div className="relative h-full w-full rounded-full bg-white p-2 shadow-inner">
              <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4 overflow-visible">
                {[
                  { stage: lifecycleData[3], rounded: 'rounded-tl-full' },
                  { stage: lifecycleData[0], rounded: 'rounded-tr-full' },
                  { stage: lifecycleData[2], rounded: 'rounded-bl-full' },
                  { stage: lifecycleData[1], rounded: 'rounded-br-full' }
                ].map(({ stage, rounded }) => {
                  const isActive = activeStage?.id === stage.id;
                  
                  return (
                    <button
                      key={stage.id}
                      onClick={() => handleStageClick(stage)}
                      className={`group relative flex flex-col items-center justify-center transition-all duration-300 bg-gradient-to-tr ${stage.gradient} text-white hover:brightness-110 ${rounded} ${isActive ? 'brightness-125 shadow-[0_0_30px_rgba(0,0,0,0.2)]' : 'opacity-90 hover:opacity-100'}`}
                    >
                      <span className="sr-only">{stage.name}</span>
                    </button>
                  );
                })}
              </div>

              <svg viewBox="0 0 500 500" className="absolute inset-0 pointer-events-none">
                <defs>
                  <path id="path-planning" d="M 280, 80 A 180, 180 0 0 1 420, 220" />
                  <path id="path-promotion" d="M 420, 280 A 180, 180 0 0 1 280, 420" />
                  <path id="path-day-of-event" d="M 80, 280 A 180, 180 0 0 0 220, 420" />
                  <path id="path-post-event" d="M 220, 80 A 180, 180 0 0 0 80, 220" />
                </defs>
                
                <text fill="white" className="text-lg sm:text-2xl font-medium uppercase tracking-[0.2em]">
                  <textPath href="#path-planning" startOffset="50%" textAnchor="middle">PLANNING</textPath>
                </text>
                <text fill="white" className="text-lg sm:text-2xl font-medium uppercase tracking-[0.2em]">
                  <textPath href="#path-promotion" startOffset="50%" textAnchor="middle">PROMOTION</textPath>
                </text>
                <text fill="white" className="text-lg sm:text-2xl font-medium uppercase tracking-[0.2em] ">
                  <textPath href="#path-day-of-event" startOffset="50%" textAnchor="middle">DAY OF EVENT</textPath>
                </text>
                <text fill="white" className="text-lg sm:text-2xl font-medium uppercase tracking-[0.2em]">
                  <textPath href="#path-post-event" startOffset="50%" textAnchor="middle">POST EVENT</textPath>
                </text>
              </svg>


              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 sm:h-56 sm:w-56 md:h-64 md:w-64">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white p-4 text-center shadow-[0_0_50px_rgba(0,0,0,0.1)] sm:p-8">
                  <img src={eventedgeIcon} alt="Event Edge" className="mb-2 w-16 brightness-100  md:w-40" />
                  <h3 className="text-sm font-bold text-[#D22023] sm:text-xl md:text-2xl">
                    {activeStage ? activeStage.name.charAt(0) + activeStage.name.slice(1).toLowerCase() : 'Event lifecycle'}
                  </h3>
                  <p className="mt-1 text-[8px] font-medium leading-tight text-[#4a4e7f] sm:mt-2 sm:text-xs">
                    {activeStage ? activeStage.tagline : 'Seamless event marketing and management, real results'}
                  </p>
                </div>
              </div>
            </div>





            {activeStage && (
              <div className={`absolute z-50 w-[280px] sm:w-[350px] lg:w-[400px] transition-all duration-300 ${getPopupPosition()} animate-in fade-in zoom-in slide-in-from-top-4`}>
                <div className="relative rounded-2xl bg-[#F4F6FF] p-4 shadow-2xl ring-1 ring-black/5 sm:p-6">

                  <div className={`absolute h-0 w-0 border-[10px] border-transparent ${getArrowPosition()}`} />
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-1 rounded-full bg-gradient-to-b ${activeStage.gradient}`} />
                      <div>
                        <h4 className="text-lg font-bold text-[#171c63] leading-tight">{activeStage.name}</h4>
                        <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Lifecycle Stage</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setActiveStage(null);
                        setExpandedItem(null);
                      }}
                      className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {activeStage.items.map((item) => {
                      const isExpanded = expandedItem === item.title;
                      return (
                        <div key={item.title} className="overflow-hidden rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-md">
                          <button
                            onClick={() => setExpandedItem(isExpanded ? null : item.title)}
                            className={`flex w-full items-center justify-between px-5 py-4 text-left transition-all ${isExpanded ? 'bg-[#171c63] text-white' : 'text-[#171c63] hover:bg-gray-50'}`}
                          >
                            <span className={`text-sm font-bold sm:text-base ${isExpanded ? 'text-white' : 'text-[#171c63]'}`}>{item.title}</span>
                            {isExpanded ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-gray-400" />}
                          </button>
                          
                          {isExpanded && (
                            <div className="p-5 bg-white animate-in slide-in-from-top-2 duration-300">
                              <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                                {item.description}
                              </p>
                              <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-[#0066FF] hover:gap-2 transition-all">
                                Learn more
                                <ChevronRight size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSection;
