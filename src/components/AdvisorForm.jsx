// src/components/AdvisorForm.jsx
import { useState } from 'react'
import { 
  FaArrowRight, 
  FaCheckCircle, 
  FaUserTie, 
  FaCalendarAlt,
  FaChartLine,
  FaShieldAlt,
  FaHeadset
} from 'react-icons/fa'

const AdvisorForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    revenueRange: '',
    challenge: '',
    preferredDate: '',
    preferredTime: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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
      console.log('Advisor form submitted:', formData)
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          phone: '',
          companySize: '',
          revenueRange: '',
          challenge: '',
          preferredDate: '',
          preferredTime: '',
        })
      }, 5000)
    }, 2000)
  }

  const benefits = [
    {
      icon: <FaUserTie className="text-2xl" />,
      title: 'Expert Matching',
      description: 'We connect you with the advisor best suited for your industry and challenge'
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: 'Growth Strategy',
      description: 'Get actionable insights to accelerate your business growth'
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Confidential',
      description: 'All discussions are protected by strict confidentiality agreements'
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: 'Ongoing Support',
      description: 'Continued advisory relationship beyond the initial consultation'
    }
  ]

  return (
    <section id="advisor-form" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold mb-4">
            Professional Advisory
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Talk to a PeakInsights Advisor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a confidential consultation with our expert advisors to transform your business challenges into growth opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Benefits */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-primary mb-8">Why Consult With Us?</h3>
              
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-4 bg-accent/10 text-accent rounded-xl mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Advisor Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <FaCalendarAlt className="text-3xl text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">Consultation Scheduled!</h3>
                  <p className="text-xl text-gray-600 mb-6">
                    Thank you for your interest. Our advisor team will:
                  </p>
                  <ul className="space-y-3 max-w-md mx-auto mb-8">
                    <li className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      Contact you within 24 hours to confirm details
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      Send a calendar invitation
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      Provide pre-consultation materials
                    </li>
                  </ul>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-300"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-primary mb-8">Schedule Your Consultation</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="0725 228 572"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Company Size *
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="">Select size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Annual Revenue Range *
                        </label>
                        <select
                          name="revenueRange"
                          value={formData.revenueRange}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="Under 10M">Under Ksh 10M</option>
                          <option value="10M-50M">Ksh 10M - 50M</option>
                          <option value="50M-100M">Ksh 50M - 100M</option>
                          <option value="100M-500M">Ksh 100M - 500M</option>
                          <option value="500M+">Ksh 500M+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                          Preferred Consultation Date *
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">
                        Primary Business Challenge *
                      </label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Describe your biggest business challenge..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-accent to-primary text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl hover:scale-[1.02]'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Scheduling Consultation...
                        </>
                      ) : (
                        <>
                          Schedule Professional Consultation
                          <FaArrowRight className="ml-3" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-500 text-sm text-center">
                      This consultation is designed for business leaders seeking serious advisory services. 
                      All information is treated with strict confidentiality.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvisorForm