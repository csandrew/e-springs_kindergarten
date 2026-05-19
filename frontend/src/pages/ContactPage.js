
import React, { useState } from 'react'
import axios from 'axios'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parent_name: '',
    parent_email: '',
    parent_phone: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await axios.post('http://localhost:8000/api/enquiries/', formData)
      setSuccess(true)
      setFormData({ parent_name: '', parent_email: '', parent_phone: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      alert('Failed to send message. Please call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-12">
      {/* Contact Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-kindergarten-text mb-2">
          Contact Us
        </h1>
        <p className="text-center text-kindergarten-text-light mb-8">
          Find out how we can help your child unlock their potential with an exciting learning journey.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-kindergarten-background rounded-xl">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-lg font-semibold text-kindergarten-text mb-1">Visit Us</h3>
                <p className="text-kindergarten-text-light">123 Kindergarten Lane<br/>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-kindergarten-background rounded-xl">
              <div className="text-3xl">📞</div>
              <div>
                <h3 className="text-lg font-semibold text-kindergarten-text mb-1">Call Us</h3>
                <p className="text-kindergarten-text-light">+254 700 123 456<br/>+254 700 123 457</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-kindergarten-background rounded-xl">
              <div className="text-3xl">✉️</div>
              <div>
                <h3 className="text-lg font-semibold text-kindergarten-text mb-1">Email Us</h3>
                <p className="text-kindergarten-text-light">info@happykids.ac.ke<br/>admissions@happykids.ac.ke</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-kindergarten-background rounded-xl">
              <div className="text-3xl">⏰</div>
              <div>
                <h3 className="text-lg font-semibold text-kindergarten-text mb-1">School Hours</h3>
                <p className="text-kindergarten-text-light">Mon-Fri: 7:30 AM - 5:00 PM<br/>Sat: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-kindergarten-background rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {success && (
                <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              <div>
                <label className="block text-kindergarten-text font-medium mb-2">Your Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                  value={formData.parent_name}
                  onChange={e => setFormData({...formData, parent_name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-kindergarten-text font-medium mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                  value={formData.parent_email}
                  onChange={e => setFormData({...formData, parent_email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-kindergarten-text font-medium mb-2">Phone *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                  value={formData.parent_phone}
                  onChange={e => setFormData({...formData, parent_phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-kindergarten-text font-medium mb-2">Message *</label>
                <textarea 
                  rows="4" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-kindergarten-primary text-white py-3 rounded-lg font-semibold hover:bg-kindergarten-primary-dark transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Location */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8 pb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-kindergarten-text mb-2">
            Find Us Here
          </h2>
          <p className="text-center text-kindergarten-text-light mb-6">
            Visit our campus for a tour or consultation
          </p>
        </div>
        <div className="w-full h-[400px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819437899246!2d36.821926!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4f8b2e8a1%3A0x9b7b2e5b8e4f5a6!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location Map"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-6 text-center bg-kindergarten-background">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-kindergarten-text">📍 123 Kindergarten Lane, Nairobi, Kenya</span>
            <span className="text-kindergarten-text">🚗 Ample parking available</span>
            <span className="text-kindergarten-text">♿ Wheelchair accessible</span>
          </div>
        </div>
      </div>
    </div>
  )
}
