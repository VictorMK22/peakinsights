import { FaDollarSign, FaRocket, FaUsers } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: 'Fractional CFO',
      subtitle: 'Financial Leadership Without Compromise',
      tagline: 'Your full-time CFO; at a fraction of the cost.',
      description: 'Fast-growing businesses don\'t fail because they lack ambition. They fail because they lack financial command.',
      features: [
        'Weekly, monthly & board-level financial reporting',
        'Cashflow control, forecasting & scenario planning',
        'Tax planning & compliance oversight',
        'Financial modeling for growth, funding & expansion',
        'CEO & Board advisory',
        'Internal controls & risk management frameworks',
        'Financial literacy & decision-making training for teams',
      ],
      outcome: 'We turn finance from a rear-view mirror into a navigation system.',
      color: 'from-[#0F2A5F] to-[#1F4FA3]',
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Transformation Advisory',
      subtitle: 'Strategy That Actually Gets Executed',
      tagline: 'Re-imagined strategy consulting for modern business.',
      description: 'We partner with organizations ready to break through stagnation and execute bold transformation.',
      features: [
        'Strategy design & execution roadmaps',
        'Change management & transformation leadership',
        'Operating model redesign',
        'Business turnaround & restructuring',
        'Process optimization & operational excellence',
        'Leadership development & culture transformation',
      ],
      outcome: 'Transformation is uncomfortable. We bring structure, courage and momentum.',
      color: 'from-[#0F2A5F] to-[#1F4FA3]',
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Family Business Advisory',
      subtitle: 'Enduring Businesses. Lasting Impact',
      tagline: 'Transforming family enterprises into lasting legacies.',
      description: 'Family businesses are powerful and fragile. They don\'t collapse because of markets.',
      features: [
        'Succession planning & leadership transition',
        'Governance frameworks & family constitutions',
        'Family council facilitation',
        'Business strategy & expansion support',
        'Wealth structuring & estate planning support',
        'Next-generation leadership development',
      ],
      outcome: 'Our goal is simple: Protect the family, strengthen the business and preserve the legacy.',
      color: 'from-[#0F2A5F] to-[#1F4FA3]',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Advisory Services
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            We don't give advice. We build systems, discipline and leadership that win; today and for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover-lift transition-all duration-500"
            >
              {/* Header with gradient */}
              <div
                className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.subtitle}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="mb-6">
                  <p className="font-bold text-lg text-black mb-4">{service.tagline}</p>
                  <p className="text-gray-800 text-base mb-6">{service.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-lg text-primary mb-4">What We Do:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-800 ">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-800 font-bold italic">{service.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services