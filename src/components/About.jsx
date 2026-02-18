import { FaBan, FaBullseye, FaUnlock } from 'react-icons/fa'

const About = () => {
  const fixes = [
    'Financial blindness',
    'Strategic drift',
    'Weak execution',
    'Founder dependency',
    'Governance gaps',
  ]

  const cards = [
    {
      icon: <FaBan className="text-3xl" />,
      title: 'We Fix What Limits Growth',
      content: fixes,
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <FaBullseye className="text-3xl" />,
      title: 'Our Vision',
      content: 'Business partner of choice, powered by world-class advisors.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaUnlock className="text-3xl" />,
      title: 'Our Mission',
      content: 'We unlock the potential of businesses by helping them create value so that they can thrive - for good.',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Built for Leaders Who Refuse to Plateau
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            "If you could get all the people in an organization rowing in the same direction, 
            you could dominate any industry, in any market, against any competition, at any time."
            <span className="block mt-4 font-bold italic">— Patrick Lencioni</span>
          </p>
          <div className="mt-8">
            <p className="text-lg text-gray-700">
              At PeakInsights, we work at the intersection of{' '}
              <span className="font-bold text-accent">finance, strategy and legacy</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${card.color} text-white mb-6`}>
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">{card.title}</h3>
              
              {Array.isArray(card.content) ? (
                <ul className="space-y-3">
                  {card.content.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-semibold">
                      <span className="w-2 h-2 bg-[#0F2A5F] rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed font-semibold">{card.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About