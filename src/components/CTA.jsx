import { FaArrowRight, FaCheckCircle, FaHandshake } from 'react-icons/fa'

const CTA = () => {
  const clients = [
    'Founders building serious companies',
    'CEOs leading complex organizations',
    'Family business principals planning succession',
    'Boards demanding accountability',
    'Financial institutions and Saccos seeking stability and growth',
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full font-semibold mb-6">
                  Let's Build Something That Lasts
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Take Control of Your Business?
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  If you are comfortable with chaos; we are not for you.
                  If you want <span className="font-bold">clarity, control and growth</span>; welcome.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Left Side - Who We Serve */}
                <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center mb-6">
                    <FaHandshake className="text-3xl mr-4" />
                    <h3 className="text-2xl font-bold">Who We Serve</h3>
                  </div>
                  <ul className="space-y-4">
                    {clients.map((client, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="text-green-400 mr-3" />
                        <span>{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side - Contact Form */}
                <div className="lg:w-1/2 bg-white rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Talk to a PeakInsights Advisor
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Message</label>
                      <textarea
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent h-32"
                        placeholder="Tell us about your business challenges..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent to-primary text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      Schedule Your Consultation
                      <FaArrowRight className="ml-3" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-white/80">Golden Mango Heights, 9th Floor</div>
                      <div className="text-white/80">Wood Avenue, Nairobi</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-white/80">0725 228 572</div>
                      <div className="text-white/80">0736 105 920</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-white/80">advisory@peak-insights.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mt-12 text-center">
            <p className="text-2xl text-gray-700 font-bold">
              Your Partner in Growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA