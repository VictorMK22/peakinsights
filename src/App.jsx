import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Problem from './components/Problem'
import Services from './components/Services'
import TrackRecord from './components/TrackRecord'
import Values from './components/Values'
import Leadership from './components/Leadership'
import Contact from './components/Contact'          // Basic contact info
// import AdvisorForm from './components/AdvisorForm' // Talk to advisor form
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary to-secondary">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-white">PEAKINSIGHTS</h1>
          <p className="text-light mt-2">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Problem />
        <Services />
        <TrackRecord />
        <Values />
        <Leadership />
        <Contact />        {/* Basic contact information */}
        {/* <AdvisorForm />    Talk to advisor form */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App