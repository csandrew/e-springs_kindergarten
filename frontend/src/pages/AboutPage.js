
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AboutPage() {
  const [teachers, setTeachers] = useState([])
  const [facilities, setFacilities] = useState([])

  useEffect(() => {
    // Fetch teachers
    axios.get('http://localhost:8000/api/teachers/')
      .then(response => setTeachers(response.data))
      .catch(() => setTeachers([]))
    
    // Fetch facilities
    axios.get('http://localhost:8000/api/facilities/')
      .then(response => setFacilities(response.data))
      .catch(() => setFacilities([]))
  }, [])

  return (
    <div className="space-y-12">
      {/* Mission & Vision Section */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-kindergarten-text mb-8">
          About E-Springs Kindergarten
        </h1>
        <p className="text-center text-kindergarten-text-light mb-12">
          Our Kindergarten in Nairobi, Kenya, serves the youngest members of the Umoja communities. Young learners aged 1 to 5 flourish with access to a holistic foundational education that embeds opportunities for exploration into daily practices and develops healthy, happy, confident children.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-kindergarten-primary-light rounded-xl p-6">
            <h2 className="text-2xl font-bold text-kindergarten-primary mb-4">Our Mission</h2>
            <p className="text-kindergarten-text leading-relaxed">
              To provide a nurturing, safe, and stimulating environment where every child discovers their unique potential and develops a lifelong love for learning.
            </p>
          </div>
          <div className="bg-kindergarten-secondary-light rounded-xl p-6">
            <h2 className="text-2xl font-bold text-kindergarten-secondary mb-4">Our Vision</h2>
            <p className="text-kindergarten-text leading-relaxed">
              To be the leading kindergarten in Kenya, setting the standard for excellence in early childhood education.
            </p>
          </div>
        </div>
      </div>

      {/* Principal's Message */}
      {/*<div className="bg-white rounded-2xl shadow-md p-8"> */}
        <h2 className="text-2xl font-bold text-center text-kindergarten-text mb-6">Principal's Message</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img 
            src="/images/e-springs.png" 
            alt="Principal" 
            className="w-32 h-32 rounded-md object-cover mx-auto md:mx-0"
          />
          <div className="flex-1">
            <p className="text-kindergarten-text italic text-lg leading-relaxed mb-4">
              "At E-Springs Kindergarten, we believe every child is unique and capable of amazing things. Our dedicated team works tirelessly to create an environment where curiosity is celebrated, kindness is practiced, and learning is joyful."
            </p>
            <p>
              <strong className="text-kindergarten-primary">- Sarah Johnson</strong>
              <br />
              <span className="text-kindergarten-text-light">Founder & Principal</span>
            </p>
          </div>
        </div>
      {/*</div> */}


      {/* Our Teachers - Image on RIGHT side */}
      {/*<div className="bg-white rounded-2xl shadow-md p-8"> */}
        <h2 className="text-2xl font-bold text-center text-kindergarten-text mb-6">Our Caring Teachers</h2>
        {teachers.length === 0 ? (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-kindergarten-text-light">
                Highly-experienced Kindergarten faculty members act as mentors and guides to help young children develop emerging skills. Within a programme of fun, participatory lessons, they observe children with their friends, listen to stories, respond to questions, discover interests, and provide youngsters with opportunities to explore further.
              </p>
            </div>
            <img 
              src="/images/e-springs.png" 
              alt="Teachers" 
              className="w-40 h-40 rounded-md object-cover mx-auto md:mx-0"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.slice(0, 3).map(teacher => (
              <div key={teacher.id} className="text-center bg-kindergarten-background rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">👩‍🏫</div>
                <h3 className="text-xl font-bold text-kindergarten-text mb-2">{teacher.name}</h3>
                <p className="text-kindergarten-primary font-medium mb-3">{teacher.title}</p>
                <p className="text-kindergarten-text-light text-sm">
                  {teacher.bio?.substring(0, 100)}...
                </p>
              </div>
            ))}
          </div>
        )}
      {/*</div> */}

      {/* Why Choose Us - Image on LEFT side */}
      {/*<div className="bg-white rounded-2xl shadow-md p-8"> */}
        <h2 className="text-2xl font-bold text-center text-kindergarten-text mb-6">Why Choose Us?</h2>
        {facilities.length === 0 ? (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src="/images/e-springs.png" 
              alt="Facility" 
              className="w-40 h-40 rounded-md object-cover mx-auto md:mx-0"
            />
            <div className="flex-1">
              <p className="text-kindergarten-text-light">
                We are proud to offer an engaging experience to young children of all abilities. Children experience personalised support from their very first day at our independent school. They are nurtured in an environment that seeks to validate them as autonomous individuals, and helps them attain wide-ranging foundational skills while enjoying a secure and expansive preschool setting.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map(facility => (
              <div key={facility.id} className="flex gap-4 bg-kindergarten-background rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl">🏫</div>
                <div>
                  <h3 className="text-xl font-bold text-kindergarten-text mb-2">{facility.name}</h3>
                  <p className="text-kindergarten-text-light">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      {/*</div> */}

      {/* Extracurricular Activities */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-kindergarten-text mb-6">Extracurricular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "✓ E-Springs Scouts",
            "✓ Jewelry-making Club",
            "✓ Lego Club",
            "✓ Music & Dance",
            "✓ Art & Craft",
            "✓ Storytelling Sessions"
          ].map((item, index) => (
            <div key={index} className="bg-kindergarten-primary-light rounded-lg p-3 text-kindergarten-primary font-medium">
              {item}
            </div>
          ))}
        </div>
      </div>



    </div>
  )
}
