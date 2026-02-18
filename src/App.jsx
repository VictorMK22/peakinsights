import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import ScrollToTop from './components/ScrollToTop'
import DiagnosticFlow from "./pages/DiagnosticFlow";
import Results from './pages/results'
import Landing from './pages/Landing'

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
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/category/:slug" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/diagnostic" element={<DiagnosticFlow />} />
          <Route path="/landing" element={<Landing />} />
          <Route path='/results' element={<Results />} />
        </Routes>
    </>
  )
}

export default App
