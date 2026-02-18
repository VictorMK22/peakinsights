import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import NixonImage from '../assets/leadership/nixon.jpeg';
import LewisImage from '../assets/leadership/lewis.jpg';
import EmmanuelImage from '../assets/leadership/emmanuel.jpeg';

const Leadership = () => {
  const leaders = [
    {
      name: 'Nixon Yebei',
      title: 'Founder & CEO',
      description: `Nixon Yebei is a transformation consultant and founder/CEO of PeakInsights Advisory, where he works with businesses, boards and institutions to fix what truly limits growth; strategy, structure, governance and financial clarity.

Nixon provides overall strategic leadership at PeakInsights, guiding the firm's vision, growth and execution. He is a finance and management professional with deep expertise in strategy consulting, financial leadership and institutional strengthening and over 14 years of experience advising and working with local and global organizations.

Nixon is known for cutting through noise, challenging complacency and driving practical, results-focused transformation. His work focuses on turning organizations from surviving to scaling and from busy to profitable. His edge is brutal clarity, structured thinking and execution that actually moves the needle.

Nixon holds a Master's degree in Business from Strathmore University, a Bachelor's degree in Business from Moi University and an Advanced Professional Certificate in Innovation and Entrepreneurship from Stanford University.`,
      imageUrl: NixonImage,
      linkedin: 'https://www.linkedin.com/in/nixonyebei/',
      twitter: 'https://x.com/NixonYebei',
    },
    {
      name: 'Lewis Githaiga',
      title: 'Transformation Consultant',
      description: `Lewis Githaiga is a Growth & Transformation Consultant at PeakInsights, working with growth-oriented enterprises to remove the real constraints to scale; unclear finances, weak execution discipline and fragile operating structures.

At PeakInsights, Lewis supports high-impact financial and management consulting engagements helping businesses move from reactive decision-making to disciplined execution.

With over seven years of experience working with and advising both local and global organizations, he has built a strong reputation for delivering practical, results-driven solutions that improve performance, strengthen financial systems and enable sustainable growth for organizations.

Lewis holds a Bachelor's degree in Economics & Finance from Kenyatta University, with CPA qualifications. He is driven by a deep commitment to continuous learning, professional excellence and applying global best practices to build stronger enterprises.`,
      imageUrl: LewisImage,
      linkedin: 'https://www.linkedin.com/in/lewis-githaiga-42b0481ab',
      twitter: 'https://x.com/GithaigaLewis',
    },
    {
      name: 'Emmanuel Kipkemei',
      title: 'Fractional CFO Lead',
      description: `Emmanuel Kipkemei is the Fractional CFO Lead at PeakInsights Advisory, working closely with founders, CEOs and leadership teams to restore financial control, strengthen governance and drive execution in fast-growing, complex organizations.

He plays a hands-on role across Fractional CFO and advisory engagements, leading financial reporting, cash-flow management, forecasting, tax-compliance oversight, internal controls and audit readiness. Emmanuel reviews and drives delivery, mentors teams and ensures outputs are accurate, timely and decision-focused.

Known for disciplined execution and sharp analytical judgment, Emmanuel brings order to messy financial environments; turning finance function into a practical management tool that enables better decisions, risk control and sustainable scale.

He holds a Bachelor’s degree in Commerce (Accounting) from Meru University of Science & Technology and he is a Certified Public Accountant with over eight years’ experience across accounting, audit, consulting and operational finance. His edge lies in combining technical rigor with clear communication and an execution mindset that delivers results.`,
      imageUrl: EmmanuelImage,
      linkedin: 'https://www.linkedin.com/in/kipkemeiemmanuel', 
      // twitter: '#', // Add actual Twitter URL
    },
  ]

  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-bold mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 font-bold max-w-3xl mx-auto">
            Experienced professionals with a track record of driving transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[#0F2A5F] to-[#1F4FA3] p-8 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-highlight rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                      {leader.imageUrl ? (
                        <img 
                          src={leader.imageUrl} 
                          alt={leader.name}
                          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"><FaBriefcase className="text-3xl text-white" /></div>';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <FaBriefcase className="text-3xl text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{leader.name}</h3>
                  <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-lg font-bold mb-4">
                    {leader.title}
                  </div>
                  
                  <div className="flex space-x-4">
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

              {/* Body - Only Paragraph Description */}
              <div className="p-8">
                <div className="text-black text-base leading-relaxed space-y-4">
                  {leader.description.split('\n\n').map((paragraph, idx) => (
                    paragraph.trim() && (
                      <p key={idx} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How We Think Section - Unchanged */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0F2A5F] to-[#1F4FA3] rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
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
                      <p className="text-lg font-bold">{item.text}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-xl font-bold">PeakInsights embeds with leadership teams to:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white font-semibold rounded-full mr-3"></div>
                      Fix decision-making at the top
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white font-semibold rounded-full mr-3"></div>
                      Build financial muscle across the organization
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white font-semibold rounded-full mr-3"></div>
                      Align people, processes and strategy
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-white font-semibold rounded-full mr-3"></div>
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