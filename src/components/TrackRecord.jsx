import { FaChartBar, FaGlobeAfrica, FaBusinessTime, FaRocket } from 'react-icons/fa'

const TrackRecord = () => {
  const stats = [
    {
      icon: <FaChartBar className="text-4xl" />,
      value: '5,000+',
      label: 'Businesses Supported',
      description: 'Across African markets',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <FaGlobeAfrica className="text-4xl" />,
      value: '$25B+',
      label: 'Economic Value Unlocked',
      description: 'In client growth and impact',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <FaBusinessTime className="text-4xl" />,
      value: '2X',
      label: 'Sales Growth',
      description: 'Within 30 months for clients',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <FaRocket className="text-4xl" />,
      value: '14+',
      label: 'Years Experience',
      description: 'Professional advisory work',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F2A5F] to-[#1F4FA3] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 translate-y-32"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full font-bold mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Track Record
          </h2>
          <p className="text-xl text-white/90 font-bold max-w-3xl mx-auto">
            We are anchored in Kenya — but our impact spans Africa.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover-lift transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 ${stat.bgColor} ${stat.color} rounded-2xl mb-6`}>
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-bold text-white mb-2">{stat.label}</div>
              <div className="text-white/80 font-bold">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full mb-4">
                    <FaChartBar className="text-3xl text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">When PeakInsights is in the room:</h4>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="space-y-6">
                  {[
                    { title: 'Numbers become decisions', icon: '📊' },
                    { title: 'Strategy becomes action', icon: '🎯' },
                    { title: 'Growth becomes predictable', icon: '📈' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/5 rounded-xl">
                      <span className="text-2xl mr-4">{item.icon}</span>
                      <span className="text-lg text-white font-bold">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mt-12 text-center">
            <p className="text-2xl italic text-white/90 font-bold mb-6">
              "These numbers didn't come from luck. They came from repeating one thing relentlessly:"
            </p>
            <div className="inline-block bg-gradient-to-r from-accent to-highlight p-1 rounded-full">
              <div className="bg-white rounded-full px-8 py-4">
                <p className="text-xl font-bold text-primary">
                  Turning clarity into execution and execution into results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackRecord