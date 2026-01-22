import { useState, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-accent text-white rounded-full shadow-lg hover:bg-primary transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={20} />
        </button>
      )}
    </>
  )
}

export default ScrollToTop