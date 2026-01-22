import { FaMountain, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ]

  const servicesLinks = [
    { label: 'Fractional CFO', href: '#services' },
    { label: 'Growth & Transformation', href: '#services' },
    { label: 'Family Business Advisory', href: '#services' },
  ]

  // Correct social media links with proper URLs and username @PeakInsightsKE
  const socialLinks = [
    { icon: <FaTwitter />, href: 'https://twitter.com/PeakInsightsKE', label: 'Twitter' },
    { icon: <FaYoutube />, href: 'https://youtube.com/@PeakInsightsKE', label: 'YouTube' },
    { icon: <FaFacebook />, href: 'https://facebook.com/PeakInsightsKE', label: 'Facebook' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/PeakInsightsKE', label: 'LinkedIn' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold mb-6">
              <img 
                src="/src/assets/Logo .jpg" 
                alt="PeakInsights Logo"
                width="60" 
                height="60"
                className="mr-2"
              />
            </a>
            <p className="text-gray-300 mb-6">
              We Build Businesses That Cannot Be Ignored. Clarity is power. Execution is leverage. Discipline is growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary hover:bg-accent rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-highlight transition-colors duration-300 flex items-center"
                  >
                    <FaArrowUp className="transform -rotate-45 mr-2 text-sm" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-highlight transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-highlight mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">
                  Golden Mango Heights, 9th Floor<br />
                  Wood Avenue, Nairobi
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-highlight mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">
                  0725 228 572<br />
                  0736 105 920
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-highlight mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:advisory@peak-insights.com" className="text-gray-300 hover:text-highlight">
                  advisory@peak-insights.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PeakInsights Advisory. All rights reserved.
            </p>
            
            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="flex items-center text-sm text-gray-400 hover:text-highlight transition-colors duration-300"
              >
                Back to top
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Built for leaders who refuse to plateau. Your Partner in Growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer