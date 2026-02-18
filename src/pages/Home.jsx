import { useEffect } from 'react'
import { useLocation } from "react-router-dom"

import HomeHeader from "../components/HomeHeader"
import Hero from '../components/Hero'
import About from '../components/About'
import Problem from '../components/Problem'
import Services from '../components/Services'
import TrackRecord from '../components/TrackRecord'
import Values from '../components/Values'
import FinancialFitnessTraining from '../components/FinancialFitnessTraining'
import Leadership from '../components/Leadership'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import LatestBlogs from "../components/LatestBlogs"

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        // small delay ensures DOM is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      <main>
        <Hero />
        <About />
        <Values />
        <Problem />
        <Services />
        <TrackRecord />
        <FinancialFitnessTraining />
        <Leadership />
        <LatestBlogs /> 
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
