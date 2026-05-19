
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    { q: "What are your operating hours?", a: "Monday-Friday: 7:30 AM - 5:00 PM, Saturday: 8:00 AM - 12:00 PM" },
    { q: "Do you provide meals?", a: "Yes, we provide healthy breakfast, lunch, and two snacks daily." },
    { q: "What is your teacher to child ratio?", a: "Baby Class: 1:8, PP1: 1:12, PP2: 1:15" },
    { q: "How do I schedule a visit?", a: "Fill out the contact form or call us at +254 700 123 456" },
  ]

  useEffect(() => {
    axios.get('http://localhost:8000/api/programs/')
      .then(response => {
        setPrograms(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.log('Django server not running, using demo data:', error)
        setPrograms([
          { id: 1, name: 'Baby Class', age_range: '1.5 - 2.5 years', description: 'Gentle introduction to structured learning through play and sensory activities', registration_fee: 5000, tuition_fee: 15000 },
          { id: 2, name: 'PP1', age_range: '3 - 4 years', description: 'Building social skills, early literacy, and numeracy through fun activities', registration_fee: 5000, tuition_fee: 18000 },
          { id: 3, name: 'PP2', age_range: '4 - 5 years', description: 'Preparing for primary school with reading, writing, and math foundations', registration_fee: 5000, tuition_fee: 20000 },
          { id: 4, name: 'Daycare', age_range: '1 - 3 years', description: 'Full-day care with structured play, naps, and meals included', registration_fee: 3000, tuition_fee: 12000 },
        ])
        setLoading(false)
      })
  }, [])

  // Separate programs: Core programs (Baby, PP1, PP2) and Daycare
  const corePrograms = programs.filter(p => ['Baby Class', 'PP1', 'PP2'].includes(p.name))
  const daycareProgram = programs.find(p => p.name === 'Daycare')

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-kindergarten-primary border-t-transparent"></div>
        <p className="mt-4 text-kindergarten-text-light">Loading programs...</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-kindergarten-text mb-4">
          Our Programs
        </h1>
        <p className="text-lg text-kindergarten-text-light max-w-2xl mx-auto">
          Choose the right class for your child's age and developmental stage
        </p>
      </div>

      {/* Core Programs Row - Baby, PP1, PP2 in one horizontal line */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {corePrograms.map((program, index) => (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="text-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-kindergarten-text">
                  {program.name}
                </h2>
                <span className="inline-block bg-kindergarten-primary-light text-kindergarten-primary px-3 py-1 rounded-full font-semibold text-xs mt-2">
                  {program.age_range}
                </span>
              </div>
              
              <p className="text-kindergarten-text-light text-sm leading-relaxed mb-4">
                {program.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-kindergarten-text-light">Registration Fee</span>
                  <span className="font-bold text-kindergarten-primary">
                    KES {program.registration_fee?.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-kindergarten-text-light">Tuition Fee</span>
                  <span className="font-bold text-kindergarten-primary">
                    KES {program.tuition_fee?.toLocaleString()}
                    <span className="text-xs font-normal text-kindergarten-text-light">/term</span>
                  </span>
                </div>
              </div>
              
              <Link
                to="/admissions"
                className="block text-center bg-kindergarten-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-kindergarten-primary-dark transition-all duration-300"
              >
                Apply for {program.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Daycare Full Width Card */}
      {daycareProgram && (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-kindergarten-text">
                {daycareProgram.name}
              </h2>
              <span className="inline-block bg-kindergarten-primary-light text-kindergarten-primary px-4 py-2 rounded-full font-semibold text-sm">
                {daycareProgram.age_range}
              </span>
            </div>
            
            <p className="text-kindergarten-text-light leading-relaxed mb-6">
              {daycareProgram.description}
            </p>
            
            <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-100">
              <div>
                <span className="text-sm text-kindergarten-text-light block">Registration Fee</span>
                <span className="text-xl font-bold text-kindergarten-primary">
                  KES {daycareProgram.registration_fee?.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-sm text-kindergarten-text-light block">Tuition Fee</span>
                <span className="text-xl font-bold text-kindergarten-primary">
                  KES {daycareProgram.tuition_fee?.toLocaleString()}
                  <span className="text-sm font-normal text-kindergarten-text-light">/term</span>
                </span>
              </div>
            </div>
            
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-kindergarten-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-kindergarten-primary-dark transition-all duration-300"
            >
              Apply for {daycareProgram.name}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}

      {/* Program Notes */}
      <div className="bg-kindergarten-secondary-light rounded-2xl p-6 text-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm">
          <p className="text-kindergarten-text">✓ Fees include meals, snacks, and learning materials</p>
          <p className="text-kindergarten-text">✓ Sibling discount available (10% for second child)</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-kindergarten-text mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left font-semibold text-kindergarten-text bg-white hover:bg-kindergarten-background transition-colors flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.q}
                <span className={`text-2xl text-kindergarten-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-kindergarten-background text-kindergarten-text-light border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

