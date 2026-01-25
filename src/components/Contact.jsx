import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('advisory@peak-insights.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email', err)
    }
  }

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })

      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-20 bg-gray-light overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Let's Talk About Your Business
          </h2>
          <p className="text-lg md:text-xl text-accent leading-relaxed">
            Ready to transform your business? Get in touch with our team and let's build something exceptional together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Phone</h4>
                    <a href="tel:0725228572" className="text-accent hover:text-primary transition-colors block">
                      0725 228 572
                    </a>
                    <a href="tel:0736105920" className="text-accent hover:text-primary transition-colors block">
                      0736 105 920
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Email</h4>
                    <button
                      onClick={copyEmail}
                      className="text-accent hover:text-primary transition-colors flex items-center gap-2 text-left"
                      aria-label="Copy email address"
                    >
                      advisory@peak-insights.com
                      {emailCopied && (
                        <span className="text-xs text-green-600 font-medium">
                          (Copied!)
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Office</h4>
                    <p className="text-accent">
                      Golden Mango Heights, 9th Floor<br />
                      Wood Avenue, Nairobi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-light">
              <h3 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h3>
              <p className="text-accent mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                      placeholder="John Doe"
                    />
                  </div>
                  
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
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors bg-gray-light"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border-2 border-light focus:border-accent focus:outline-none transition-colors resize-none bg-gray-light"
                    placeholder="Tell us about your business needs and how we can help..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitted || isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-primary text-white hover:bg-accent hover:shadow-lg'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {submitted ? (
                    <>
                      <FaCheckCircle className="text-xl" />
                      Message Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact