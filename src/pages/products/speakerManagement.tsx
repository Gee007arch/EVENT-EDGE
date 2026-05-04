
import { useState } from 'react'
import { Play, Check, ChevronRight, Star, Users, Calendar, FileText, TrendingUp, Award, Shield, Globe, Headphones, ArrowRight } from 'lucide-react'

const SpeakerManagement = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    organization: '',
    jobFunction: '',
    country: '',
    emailPreferences: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const features = [
    {
      icon: <Users className="text-[#EE3238]" />,
      title: "Streamlined Speaker Management",
      description: "Manage speaker profiles, submissions, and communications in one centralized platform"
    },
    {
      icon: <Calendar className="text-[#EE3238]" />,
      title: "Automated Scheduling",
      description: "Coordinate speaker schedules, sessions, and availability with automated tools"
    },
    {
      icon: <FileText className="text-[#EE3238]" />,
      title: "Abstract Review System",
      description: "Efficiently review and evaluate speaker submissions with customizable workflows"
    },
    {
      icon: <TrendingUp className="text-[#EE3238]" />,
      title: "Speaker Analytics",
      description: "Track speaker performance, engagement metrics, and feedback data"
    }
  ]

  const testimonials = [
    {
      text: "The speaker management system transformed how we handle our annual conference. What used to take weeks now takes days.",
      author: "Sarah Johnson",
      role: "Event Director",
      company: "Tech Summit 2024"
    },
    {
      text: "Our speakers love the intuitive platform. It makes submitting abstracts and managing their profiles seamless.",
      author: "Michael Chen",
      role: "Conference Organizer",
      company: "Future Tech Events"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#EE3238] uppercase tracking-wider mb-3">
              CVENT ABSTRACT MANAGEMENT SOFTWARE
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Crowdsource great content with an efficient call for papers
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cvent helps organizers crowdsource content with an efficient Call for Papers—collect
              submissions, review and select, then publish the final agenda.
            </p>
            
            <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl mt-12 border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EE3238]/10 to-[#D22023]/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Play className="h-8 w-8 text-[#EE3238]" />
                  </div>
                  <p className="text-gray-700 font-semibold">Future Technologies Conference</p>
                  <p className="text-gray-500 text-sm mt-2">Speaker Management Dashboard</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-8">Get in touch to learn more about our speaker management solutions</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name <span className="text-[#EE3238]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE3238] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name <span className="text-[#EE3238]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE3238] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Work email <span className="text-[#EE3238]">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE3238] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE3238] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization <span className="text-[#EE3238]">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE3238] focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="jobFunction" className="block text-sm font-medium text-gray-700 mb-2">
                  Job function <span className="text-[#EE3238]">*</span>
                </label>
                <select
                  id="jobFunction"
                  name="jobFunction"
                  value={formData.jobFunction}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE3238] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select job function</option>
                  <option value="event-planner">Event Planner</option>
                  <option value="marketing-manager">Marketing Manager</option>
                  <option value="operations-manager">Operations Manager</option>
                  <option value="executive">Executive</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country <span className="text-[#EE3238]">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE3238] focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="emailPreferences"
                  name="emailPreferences"
                  checked={formData.emailPreferences}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-[#EE3238] border-gray-300 rounded focus:ring-[#EE3238]"
                />
                <label htmlFor="emailPreferences" className="text-sm text-gray-600">
                  I agree to receive marketing communications from Event Edge
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#EE3238] text-white py-4 rounded-lg font-semibold hover:bg-[#D22023] transition-colors shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful speaker management tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage speakers from submission to delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by event professionals worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See what our customers say about our speaker management platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#EE3238] text-white text-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to streamline your speaker management?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of event planners who trust our platform to manage their speakers efficiently
          </p>
          <button className="bg-white text-[#EE3238] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  )
}

export default SpeakerManagement