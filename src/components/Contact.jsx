// src/components/Contact.jsx
import { useState } from 'react'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaCar,
  FaWifi,
  FaBuilding,
  FaGlobeAfrica
} from 'react-icons/fa'

const Contact = () => {
  const [copiedNumber, setCopiedNumber] = useState(null)

  const handleCopyNumber = (number) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopiedNumber(number)
      setTimeout(() => setCopiedNumber(null), 2000)
    })
  }

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone Numbers',
      details: [
        { label: 'Primary Line', value: '0725 228 572' },
        { label: 'Secondary Line', value: '0736 105 920' }
      ],
      color: 'bg-blue-50 border-blue-100',
      iconColor: 'text-blue-600',
      action: 'call'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email Address',
      details: [
        { label: 'Advisory Services', value: 'advisory@peak-insights.com' }
      ],
      color: 'bg-green-50 border-green-100',
      iconColor: 'text-green-600',
      action: 'email'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Office Location',
      details: [
        { label: 'Address', value: 'Golden Mango Heights, 9th Floor' },
        { label: 'Street', value: 'Wood Avenue' },
        { label: 'City', value: 'Nairobi' }
      ],
      color: 'bg-purple-50 border-purple-100',
      iconColor: 'text-purple-600',
      action: 'location'
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      title: 'Social Media',
      details: [
        { label: 'Twitter', value: '@PeakInsightsKE' },
        { label: 'YouTube', value: '@PeakInsightsKE' },
        { label: 'Facebook', value: '@PeakInsightsKE' },
        { label: 'LinkedIn', value: '@PeakInsightsKE' }
      ],
      color: 'bg-orange-50 border-orange-100',
      iconColor: 'text-orange-600',
      action: 'social'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Contact PeakInsights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to us through any of these channels. We're here to help your business grow.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`${info.color} border rounded-2xl p-8 hover-lift transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-xl ${info.color} ${info.iconColor} mr-4`}>
                  {info.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{info.title}</h3>
              </div>
              
              <div className="space-y-4">
                {info.details.map((detail, idx) => (
                  <div key={idx}>
                    <div className="font-semibold text-gray-700 mb-1">{detail.label}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-600">{detail.value}</div>
                      {info.action === 'call' && (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleCopyNumber(detail.value)}
                            className="text-sm text-accent hover:text-primary font-medium"
                          >
                            {copiedNumber === detail.value ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      )}
                      {info.action === 'email' && (
                        <a
                          href={`mailto:${detail.value}`}
                          className="text-sm bg-accent text-white px-3 py-1 rounded-lg hover:bg-primary transition-colors"
                        >
                          Email
                        </a>
                      )}
                      {info.action === 'social' && (
                        <a
                          href={
                            detail.label === 'Twitter' ? 'https://twitter.com/PeakInsightsKE' :
                            detail.label === 'YouTube' ? 'https://youtube.com/@PeakInsightsKE' :
                            detail.label === 'Facebook' ? 'https://facebook.com/PeakInsightsKE' :
                            'https://linkedin.com/company/PeakInsightsKE'
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-accent text-white px-3 py-1 rounded-lg hover:bg-primary transition-colors"
                        >
                          Follow
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact