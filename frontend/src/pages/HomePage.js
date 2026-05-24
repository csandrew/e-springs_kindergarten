
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { FaChalkboardTeacher, FaTrophy, FaShieldAlt, FaPalette } from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HomePage() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    setTestimonials([
      {
        id: 1,
        parent_name: "Mary Wanjiku",
        child_name: "Ethan",
        content: "My son has flourished at Happy Kids! The teachers are amazing and truly care about each child's development.",
        rating: 5,
        location: "Nairobi"
      },
      {
        id: 2,
        parent_name: "John Mwangi",
        child_name: "Sophia",
        content: "As first-time parents, we were nervous about daycare. The staff made us feel so comfortable!",
        rating: 5,
        location: "Westlands"
      },
      {
        id: 3,
        parent_name: "Jane Kamau",
        child_name: "Michael",
        content: "The transition to primary school was seamless thanks to the excellent foundation from Happy Kids.",
        rating: 5,
        location: "Kilimani"
      }
    ])
  }, [])

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <HiStar key={i} className="inline-block text-yellow-400 text-xl" />
    ))
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center py-16 bg-gradient-to-r from-kindergarten-primary to-kindergarten-primary-dark rounded-2xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Welcome to E-Springs Kindergarten
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Where little minds grow, explore, and discover the joy of learning
        </p>
        <Link to="/admissions" className="btn-primary bg-white text-kindergarten-primary hover:bg-gray-100">
          Enroll Your Child Today
        </Link>
      </div>

      {/* Highlights Section with Font Icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <FaChalkboardTeacher className="text-5xl text-kindergarten-primary" />
          </div>
          <h3 className="text-xl font-bold text-kindergarten-text mb-2">Qualified Teachers</h3>
          <p className="text-kindergarten-text-light">Experienced and caring educators</p>
        </div>
        
        <div className="card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <FaTrophy className="text-5xl text-kindergarten-primary" />
          </div>
          <h3 className="text-xl font-bold text-kindergarten-text mb-2">Proven Curriculum</h3>
          <p className="text-kindergarten-text-light">Montessori-inspired approach</p>
        </div>
        
        <div className="card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-5xl text-kindergarten-primary" />
          </div>
          <h3 className="text-xl font-bold text-kindergarten-text mb-2">Safe Environment</h3>
          <p className="text-kindergarten-text-light">Safe and nurturing space</p>
        </div>
        
        <div className="card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-4">
            <FaPalette className="text-5xl text-kindergarten-primary" />
          </div>
          <h3 className="text-xl font-bold text-kindergarten-text mb-2">Creative Learning</h3>
          <p className="text-kindergarten-text-light">Art, music, and hands-on activities</p>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-12 bg-kindergarten-primary-light rounded-2xl">
        <h2 className="section-title">What Our Parents Say</h2>
        <p className="section-subtitle">Real stories from E-Springs families</p>
        
        <div className="px-4 md:px-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="mb-3">{renderStars(testimonial.rating)}</div>
                  <p className="text-kindergarten-text italic mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t">
                    <div className="w-10 h-10 bg-kindergarten-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.parent_name.charAt(0)}
                    </div>
                    <div>
                      <strong className="block text-kindergarten-text">{testimonial.parent_name}</strong>
                      <span className="text-sm text-kindergarten-text-light">Parent of {testimonial.child_name}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-kindergarten-secondary-light rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-kindergarten-text mb-4">
          Ready to start your child's journey?
        </h2>
        <p className="text-lg text-kindergarten-text-light mb-8">
          Limited spots available for the upcoming term
        </p>
        <Link to="/admissions" className="btn-primary">
          Apply for Admission
        </Link>
      </div>
    </div>
  )
}
