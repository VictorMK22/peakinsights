import { FaLinkedin, FaTwitter, FaGraduationCap, FaBriefcase } from 'react-icons/fa'

const Leadership = () => {
  const leaders = [
    {
      name: 'Nixon Yebei',
      title: 'Founder & CEO',
      description: 'Nixon provides overall strategic leadership at PeakInsights, guiding the firm\'s vision, growth and execution. He is a finance and management professional with deep expertise in strategy consulting, financial leadership and institutional strengthening and over 14 years of experience advising and working with local and global organizations.',
      education: [
        'Master\'s degree in Business from Strathmore University',
        'Bachelor\'s degree in Business from Moi University',
        'Advanced Professional Certificate in Innovation and Entrepreneurship from Stanford University',
      ],
      expertise: [
        'Strategy Consulting',
        'Financial Leadership',
        'Institutional Strengthening',
        'Transformation',
      ],
      imageUrl: '/src/assets/leadership/nixon.jpg',
      linkedin: 'https://www.linkedin.com/in/nixonyebei/',
      twitter: 'https://x.com/NixonYebei',
    },
    {
      name: 'Lewis Githaiga',
      title: 'Growth & Transformation Consultant',
      description: 'Lewis supports high-impact financial and management consulting engagements helping businesses move from reactive decision-making to disciplined execution. With over seven years of experience working with and advising both local and global organizations, he has built a strong reputation for delivering practical, results-driven solutions.',
      education: [
        'Bachelor\'s degree in Economics & Finance from Kenyatta University',
        'CPA qualifications',
      ],
      expertise: [
        'Financial Systems',
        'Growth Strategy',
        'Operational Excellence',
        'Performance Improvement',
      ],
      imageUrl: '/src/assets/leadership/lewis.jpg',
      linkedin: 'https://www.linkedin.com/in/lewis-githaiga-42b0481ab',
      twitter: 'https://x.com/GithaigaLewis',
    },
  ]

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals with a track record of driving transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-8 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-highlight rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={leader.imageUrl} 
                          alt={leader.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"><FaBriefcase className="text-3xl text-white" /></div>';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-8 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">{leader.name}</h3>
                    <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-lg font-semibold mb-4">
                      {leader.title}
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4">
                      <a 
                        href={leader.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={`Connect with ${leader.name} on LinkedIn`}
                      >
                        <FaLinkedin className="text-xl" />
                      </a>
                      <a 
                        href={leader.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={`Follow ${leader.name} on Twitter`}
                      >
                        <FaTwitter className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-gray-600 mb-8 leading-relaxed">{leader.description}</p>

                {/* Education */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg mr-3">
                      <FaGraduationCap className="text-accent text-xl" />
                    </div>
                    <h4 className="text-xl font-bold text-primary">Education & Credentials</h4>
                  </div>
                  <ul className="space-y-3">
                    {leader.education.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {leader.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 text-accent rounded-full text-sm font-medium hover:from-accent/20 hover:to-accent/10 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How We Think Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-center">How We Think</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  {[
                    { text: 'Most advisory firms stop at recommendations. We don\'t.', icon: '🚫' },
                    { text: 'We challenge assumptions.', icon: '💡' },
                    { text: 'We confront reality.', icon: '🎯' },
                    { text: 'We stay long enough to make change stick.', icon: '⏳' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <p className="text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-bold">PeakInsights embeds with leadership teams to:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      Fix decision-making at the top
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      Build financial muscle across the organization
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      Align people, processes and strategy
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      Create operating discipline that holds under pressure
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center pt-8 border-t border-white/20">
                <p className="text-2xl font-bold italic">
                  This is why our work compounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership