import { FaFlag, FaHandshake, FaUsers, FaMedal, FaBullseye } from 'react-icons/fa'

const Values = () => {
  const values = [
    {
      icon: <FaFlag className="text-3xl" />,
      title: 'Leadership',
      description: 'We set the standard.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Integrity',
      description: 'We do what we say. Always.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Teamwork',
      description: 'Together, we win.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaMedal className="text-3xl" />,
      title: 'Excellence',
      description: 'The best or nothing.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaBullseye className="text-3xl" />,
      title: 'Commitment',
      description: 'We deliver results.',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold mb-4">
            Our DNA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Our core values guide every engagement and decision we make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center lift hover-lift transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
              <p className="text-gray-900">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Promise Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0F2A5F] to-[#1F4FA3] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Promise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* We Will Not */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-extrabold">We will not:</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 font-bold rounded-full mr-3"></div>
                    Sugarcoat reality
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 font-bold rounded-full mr-3"></div>
                    Hide behind jargon
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 font-bold rounded-full mr-3"></div>
                    Disappear after a presentation
                  </li>
                </ul>
              </div>

              {/* We Will */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-extrabold">We will:</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 font-bold rounded-full mr-3"></div>
                    Tell you the truth
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 font-bold rounded-full mr-3"></div>
                    Bring structure where there is confusion
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 font-bold rounded-full mr-3"></div>
                    Build systems that outlast us
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 font-bold rounded-full mr-3"></div>
                    Partner with you step by step
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-center text-xl font-bold italic">
                Because real transformation is not advice. It is discipline, decisions and follow-through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values