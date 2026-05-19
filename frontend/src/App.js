

/*import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ContactPage from './pages/ContactPage'
import AdmissionsPage from './pages/AdmissionsPage'

const whatsappNumber = "254735916581"
const whatsappLink = `https://wa.me/${whatsappNumber}`

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-kindergarten-background to-white">
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container-custom">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-kindergarten-primary">
                E-Springs Kindergarten
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-kindergarten-text hover:text-kindergarten-primary transition">Home</a>
                <a href="/about" className="text-kindergarten-text hover:text-kindergarten-primary transition">About Us</a>
                <a href="/programs" className="text-kindergarten-text hover:text-kindergarten-primary transition">Programs</a>
                <a href="/contact" className="text-kindergarten-text hover:text-kindergarten-primary transition">Contact</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">Enquire</a>
              </div>
            </div>
          </div>
        </nav>
        
        <main className="container-custom py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-white mt-16">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-kindergarten-primary">E-Springs Kindergarten</h3>
                <p className="text-gray-300">Nurturing young minds with care and excellence since 2010</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-kindergarten-primary transition">Home</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-kindergarten-primary transition">About Us</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-kindergarten-primary transition">Programs</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-kindergarten-primary transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><MdPhone className="text-kindergarten-primary" /> +254 700 123 456</li>
                  <li className="flex items-center gap-2"><MdEmail className="text-kindergarten-primary" /> info@esprings.ac.ke</li>
                  <li className="flex items-center gap-2"><MdLocationOn className="text-kindergarten-primary" /> Nairobi, Kenya</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-sky-500 p-2 rounded-full transition-colors duration-300">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-green-500 p-2 rounded-full transition-colors duration-300">
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 E-Springs Kindergarten. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App */

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ContactPage from './pages/ContactPage'
import AdmissionsPage from './pages/AdmissionsPage'

const whatsappNumber = "254735916581"
const whatsappLink = `https://wa.me/${whatsappNumber}`

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-kindergarten-background to-white">
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container-custom">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-kindergarten-primary">
                E-Springs Kindergarten
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-kindergarten-text hover:text-kindergarten-primary transition">Home</a>
                <a href="/about" className="text-kindergarten-text hover:text-kindergarten-primary transition">About Us</a>
                <a href="/programs" className="text-kindergarten-text hover:text-kindergarten-primary transition">Programs</a>
                <a href="/contact" className="text-kindergarten-text hover:text-kindergarten-primary transition">Contact</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">Enquire</a>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="md:hidden text-kindergarten-primary focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
            
            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
                <div className="flex flex-col space-y-3">
                  <a 
                    href="/" 
                    onClick={closeMenu}
                    className="text-kindergarten-text hover:text-kindergarten-primary hover:bg-kindergarten-background px-4 py-2 rounded-lg transition"
                  >
                    Home
                  </a>
                  <a 
                    href="/about" 
                    onClick={closeMenu}
                    className="text-kindergarten-text hover:text-kindergarten-primary hover:bg-kindergarten-background px-4 py-2 rounded-lg transition"
                  >
                    About Us
                  </a>
                  <a 
                    href="/programs" 
                    onClick={closeMenu}
                    className="text-kindergarten-text hover:text-kindergarten-primary hover:bg-kindergarten-background px-4 py-2 rounded-lg transition"
                  >
                    Programs
                  </a>
                  <a 
                    href="/contact" 
                    onClick={closeMenu}
                    className="text-kindergarten-text hover:text-kindergarten-primary hover:bg-kindergarten-background px-4 py-2 rounded-lg transition"
                  >
                    Contact
                  </a>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="btn-primary text-sm py-2 px-4 mx-4 text-center"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
        
        <main className="container-custom py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-white mt-16">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-kindergarten-primary">E-Springs Kindergarten</h3>
                <p className="text-gray-300">Nurturing young minds with care and excellence since 2010</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-kindergarten-primary transition">Home</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-kindergarten-primary transition">About Us</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-kindergarten-primary transition">Programs</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-kindergarten-primary transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2"><MdPhone className="text-kindergarten-primary" /> +254 700 123 456</li>
                  <li className="flex items-center gap-2"><MdEmail className="text-kindergarten-primary" /> info@esprings.ac.ke</li>
                  <li className="flex items-center gap-2"><MdLocationOn className="text-kindergarten-primary" /> Nairobi, Kenya</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-sky-500 p-2 rounded-full transition-colors duration-300">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-green-500 p-2 rounded-full transition-colors duration-300">
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 E-Springs Kindergarten. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
