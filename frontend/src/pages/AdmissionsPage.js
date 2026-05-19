
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

export default function AdmissionsPage() {
  const [programs, setPrograms] = useState([])
  const [formData, setFormData] = useState({
    child_first_name: '',
    child_last_name: '',
    date_of_birth: '',
    parent_name: '',
    parent_email: '',
    parent_phone: '',
    address: '',
    program_applied: '',
    desired_start_date: '',
    special_needs: ''
  })
  const [files, setFiles] = useState({ birth_certificate: null })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios.get(`${API_URL}/programs/`)
      .then(response => setPrograms(response.data))
      .catch(error => {
        console.log('Django server not running yet:', error)
        setPrograms([
          { id: 1, name: 'Baby Class', age_range: '1.5-2.5 years' },
          { id: 2, name: 'PP1', age_range: '3-4 years' },
          { id: 3, name: 'PP2', age_range: '4-5 years' },
        ])
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    
    const formDataToSend = new FormData()
    Object.keys(formData).forEach(key => {
      if (formData[key]) formDataToSend.append(key, formData[key])
    })
    if (files.birth_certificate) {
      formDataToSend.append('birth_certificate', files.birth_certificate)
    }

    try {
      await axios.post(`${API_URL}/applications/`, formDataToSend)
      setSuccess(true)
      setFormData({
        child_first_name: '',
        child_last_name: '',
        date_of_birth: '',
        parent_name: '',
        parent_email: '',
        parent_phone: '',
        address: '',
        program_applied: '',
        desired_start_date: '',
        special_needs: ''
      })
      setFiles({ birth_certificate: null })
      window.scrollTo(0, 0)
      setTimeout(() => setSuccess(false), 5000)
    } catch (error) {
      console.error('Submission error:', error)
      alert('Submission failed. Please make sure all required fields are filled.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-kindergarten-text mb-2">
        Apply for Admission
      </h1>
      <p className="text-center text-kindergarten-text-light mb-8">
        Fill out the form below to begin your child's journey with us
      </p>
      
      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-lg mb-6">
          <strong>Success!</strong> Your application has been submitted. Check your email for confirmation.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Child's Information */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-kindergarten-text mb-4 pb-2 border-b-2 border-kindergarten-primary">
            Child's Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">First Name *</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.child_first_name}
                onChange={e => setFormData({...formData, child_first_name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">Last Name *</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.child_last_name}
                onChange={e => setFormData({...formData, child_last_name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">Date of Birth *</label>
              <input 
                type="date" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.date_of_birth}
                onChange={e => setFormData({...formData, date_of_birth: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">Program *</label>
              <select 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.program_applied}
                onChange={e => setFormData({...formData, program_applied: e.target.value})}
              >
                <option value="">Select a program</option>
                {programs.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.age_range})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Parent Information */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-kindergarten-text mb-4 pb-2 border-b-2 border-kindergarten-primary">
            Parent/Guardian Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">Full Name *</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.parent_name}
                onChange={e => setFormData({...formData, parent_name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">Email Address *</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.parent_email}
                onChange={e => setFormData({...formData, parent_email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">Phone Number *</label>
              <input 
                type="tel" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.parent_phone}
                onChange={e => setFormData({...formData, parent_phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">Desired Start Date</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.desired_start_date}
                onChange={e => setFormData({...formData, desired_start_date: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-kindergarten-text font-medium mb-2">Home Address *</label>
              <textarea 
                required
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-kindergarten-text mb-4 pb-2 border-b-2 border-kindergarten-primary">
            Additional Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">
                Special Needs or Medical Conditions
              </label>
              <textarea 
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent"
                placeholder="Please mention any allergies, medical conditions, or special requirements"
                value={formData.special_needs}
                onChange={e => setFormData({...formData, special_needs: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-kindergarten-text font-medium mb-2">
                Birth Certificate (PDF or Image) *
              </label>
              <input 
                type="file" 
                required
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kindergarten-primary focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-kindergarten-primary file:text-white hover:file:bg-kindergarten-primary-dark"
                onChange={e => setFiles({...files, birth_certificate: e.target.files[0]})}
              />
              <p className="text-sm text-kindergarten-text-light mt-1">
                Accepted formats: PDF, JPG, PNG (Max 5MB)
              </p>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={submitting}
          className="w-full bg-kindergarten-primary text-white py-3 rounded-lg font-semibold text-lg hover:bg-kindergarten-primary-dark transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting Application...
            </span>
          ) : (
            'Submit Application'
          )}
        </button>
      </form>
    </div>
  )
}
