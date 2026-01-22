import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Clean navigation WITHOUT redundant "Contact"
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'The Problem', href: '#problem' },
    { label: 'Services', href: '#services' },
    { label: 'Leadership', href: '#leadership' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-gradient-to-r from-primary to-secondary py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/src/assets/Logo .jpg" 
              alt="PeakInsights Logo"
              width="60" 
              height="60"
              className="mr-2"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-semibold transition-colors duration-300 hover:text-accent ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            {/* Single, prominent CTA button */}
            <a
              href="#contact"
              className="bg-accent hover:bg-primary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center group"
            >
              <span>Contact Us</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className={`text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`} />
            ) : (
              <FaBars className={`text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-semibold py-3 text-lg ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {/* Mobile CTA - same as desktop */}
              <a
                href="#contact"
                className="bg-accent text-white px-6 py-4 rounded-full font-semibold text-center hover:bg-primary transition-colors duration-300 mt-4 flex items-center justify-center group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Contact Us</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header