import { FaEye, FaRocket, FaChartLine, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{
        background: 'linear-gradient(rgba(13, 27, 42, 0.9), rgba(27, 38, 59, 0.9)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
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
              className="bg-accent hover:bg-highlight text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Our Services
            </a>
            <a
              href="#advisor-form"                             // Links to advisor form
              className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-primary transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
            >
              <span>Talk to Advisor</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
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
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
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