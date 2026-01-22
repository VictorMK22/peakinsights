import { FaChartLine, FaExclamationTriangle, FaFire } from 'react-icons/fa'

const Problem = () => {
  const problemCards = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Growth Without Control',
      description: 'They grow revenue but lose control. They hire fast but execution weakens.',
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: <FaExclamationTriangle className="text-3xl" />,
      title: 'Decision Making Without Numbers',
      description: 'They make decisions without data. Strategy becomes noise. Finance becomes reporting.',
      color: 'bg-yellow-50 border-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: <FaFire className="text-3xl" />,
      title: 'Leadership Becomes Firefighting',
      description: 'They survive but never fully break through. Leadership spends time on emergencies, not strategy.',
      color: 'bg-red-50 border-red-100',
      iconColor: 'text-red-600',
    },
  ]

  const painPoints = [
    'Growth is outpacing control',
    'Complexity is killing speed',
    'Founders are still the bottleneck',
    'Boards are asking harder questions',
    'Legacy starts to matter',
  ]

  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold mb-4">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            The Problem We Exist to Solve
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Most businesses don't fail. They stall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problemCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} border rounded-2xl p-8 hover-lift transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl ${card.color} mb-6`}>
                <div className={card.iconColor}>{card.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Pain Points */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-center mb-10 text-primary">
            That's where we come in. PeakInsights steps in when:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-accent/5 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-accent transition-colors duration-300">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary p-1 rounded-full">
            <div className="bg-white rounded-full p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                We restore clarity, command and confidence.
              </h3>
              <a
                href="#services"
                className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Discover Our Solutions
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem