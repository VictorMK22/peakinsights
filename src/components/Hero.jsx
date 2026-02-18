import { FaEye, FaRocket, FaChartLine, FaArrowRight } from 'react-icons/fa'
import officeImage from '../assets/bg-images/office-image.jpg'

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{
        background: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(27, 38, 59, 0.85)), url(${officeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Build Businesses That Cannot Be Ignored.
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
            Clarity is power. Execution is leverage. Discipline is growth.
            <span className="block mt-2">
              PeakInsights is a next-generation advisory firm working with ambitious organizations.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#services"
              className="inline-flex items-center bg-[#1F4FA3] hover:bg-highlight text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#0F2A5F] shadow-lg"
            >
              Explore Our Services
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Redesigned First CTA  */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 p-1 rounded-full backdrop-blur-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-8 border border-white/20">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  We restore clarity, command and confidence.
                </h3>
                <a
                  href="#services"
                  className="inline-flex items-center bg-[#1F4FA3] hover:bg-highlight text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#0F2A5F] shadow-lg"
                >
                  Discover Our Solutions
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Tagline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <FaEye className="text-3xl" />,
                title: 'Clarity',
                description: 'See what truly matters',
              },
              {
                icon: <FaRocket className="text-3xl" />,
                title: 'Execution',
                description: 'Turn plans into results',
              },
              {
                icon: <FaChartLine className="text-3xl" />,
                title: 'Discipline',
                description: 'Sustainable growth systems',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover-lift transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 font-bold">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Redesigned Second CTA - Fits Hero styling */}
          <div className="mt-20">
            <div className="bg-gradient-to-br from-primary/30 via-transparent to-accent/30 p-8 md:p-12 rounded-2xl border border-white/20 backdrop-blur-sm hover-lift transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                PeakInsights is for leaders who want to build businesses that scale, endure and dominate.
              </h3>
              <p className="text-xl text-gray-300 font-semibold mb-8 max-w-2xl mx-auto">
                Ready to transform your business? Let's create something extraordinary together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-[#1F4FA3] hover:bg-[#0F2A5F] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero