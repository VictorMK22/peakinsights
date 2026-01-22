import { useState } from 'react'
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaUser,
  FaLinkedin
} from 'react-icons/fa'

const AdvisorForm = () => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Advisors data
  const advisors = [
    {
      id: 1,
      name: 'Nixon Yebei'
    },
    {
      id: 2,
      name: 'Lewis Githaiga'
    }
  ]

  const handleAdvisorSelect = (advisor) => {
    setSelectedAdvisor(advisor)
    // Smooth scroll to form
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Advisor consultation request:', {
        advisor: selectedAdvisor.name,
        ...formData
      })
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      setTimeout(() => {
        setSubmitSuccess(false)
        setSelectedAdvisor(null)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: ''
        })
      }, 5000)
    }, 2000)
  }

  const handleBack = () => {
    setSelectedAdvisor(null)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: ''
    })
  }

  return (
    <section id="advisor-form" className="py-20 bg-gray-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Talk to a PeakInsights Advisor
          </h2>
          <p className="text-lg md:text-xl text-accent leading-relaxed">
            Select an advisor and schedule a confidential consultation to discuss your business needs.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {!selectedAdvisor ? (
            /* Advisor Selection */
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Select Your Advisor</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {advisors.map((advisor) => (
                  <button
                    key={advisor.id}
                    onClick={() => handleAdvisorSelect(advisor)}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-light hover:border-accent text-left group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FaUser className="text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-primary">{advisor.name}</h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end text-accent group-hover:text-primary transition-colors">
                      <span className="text-sm font-semibold mr-2">Select</span>
                      <FaArrowRight />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : submitSuccess ? (
            /* Success State */
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <FaCheckCircle className="text-4xl text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Request Submitted Successfully!</h3>
              <p className="text-lg text-accent mb-6 max-w-2xl mx-auto">
                Thank you for your interest in consulting with <strong>{selectedAdvisor.name}</strong>. 
                Our team will contact you within 24 hours to schedule your consultation.
              </p>
              <div className="bg-gray-light rounded-xl p-6 max-w-md mx-auto mb-8">
                <h4 className="font-semibold text-primary mb-3">What Happens Next:</h4>
                <ul className="space-y-2 text-left text-accent">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Confirmation call within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Calendar invitation sent to your email
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Pre-consultation briefing materials
                  </li>
                </ul>
              </div>
              <button
                onClick={handleBack}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
              >
                Schedule Another Consultation
              </button>
            </div>
          ) : (
            /* Contact Form */
            <div id="contact-form" className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {/* Selected Advisor Info */}
              <div className="flex items-center gap-4 p-4 bg-gray-light rounded-xl mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaUser className="text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-accent">Selected Advisor</p>
                  <h4 className="text-xl font-bold text-primary">{selectedAdvisor.name}</h4>
                </div>
                <button
                  onClick={handleBack}
                  className="text-accent hover:text-primary text-sm font-semibold"
                >
                  Change
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Your Contact Information</h3>
                <p className="text-accent">
                  Please provide your details so we can schedule your consultation.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-accent/70 text-white cursor-not-allowed' 
                      : 'bg-primary text-white hover:bg-accent hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      Request Consultation
                      <FaArrowRight />
                    </>
                  )}
                </button>

                <p className="text-sm text-accent text-center mt-4">
                  All information is treated with strict confidentiality.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AdvisorForm