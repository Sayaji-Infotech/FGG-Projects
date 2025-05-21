"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

// Sample team data - replace with your actual team members
const teamMembers = [
  {
    id: 1,
    name: "Yash Suthar",
    role: "Structural Engineer",
    company: "Stallion Structure",
    image: "/static/team/jay.png",
    bio: "It was in high school when a design that I made for a class freedom project shaped my future path in structural engineering.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:yash@example.com",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Project Director",
    company: "Shree Guru Infracon",
    image: "/static/team/jay.png",
    bio: "With over 15 years of experience in infrastructure development, I lead our team in executing large-scale government projects.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:rajesh@example.com",
  },
  {
    id: 3,
    name: "Amit Shah",
    role: "Surface Protection Specialist",
    company: "KeraTech",
    image: "/static/team/jay.png",
    bio: "My passion for material science led me to develop innovative solutions for industrial surface protection and corrosion resistance.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:amit@example.com",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Architectural Designer",
    company: "Stallion Structure",
    image: "/static/team/jay.png",
    bio: "I believe that great design should balance aesthetics with functionality, creating spaces that inspire and endure.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:priya@example.com",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Civil Engineer",
    company: "Shree Guru Infracon",
    image: "/static/team/jay.png",
    bio: "My focus is on developing sustainable infrastructure solutions that meet the needs of communities while respecting the environment.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:vikram@example.com",
  },
  {
    id: 6,
    name: "Neha Verma",
    role: "Chemical Engineer",
    company: "KeraTech",
    image: "/static/team/jay.png",
    bio: "I specialize in formulating advanced coating systems that provide superior protection in harsh industrial environments.",
    linkedin: "#",
    twitter: "#",
    email: "mailto:neha@example.com",
  },
]

export function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef(null)

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationId
    let lastTime = 0
    const speed = 0.1 // pixels per millisecond

    const scroll = (timestamp) => {
      if (!lastTime) lastTime = timestamp
      const elapsed = timestamp - lastTime
      lastTime = timestamp

      if (!isPaused) {
        scrollContainer.scrollLeft += speed * elapsed

        // Reset scroll position when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused])

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-blue-500/20 px-4 py-2 text-sm text-blue-400">Our Team</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
            Meet Our Expert Team
          </h1>
          <div className="w-[50%] h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Our team of professionals brings together expertise from engineering, construction, and surface protection
            to deliver exceptional results for every project.
          </p>
        </div>

        {/* Scrolling Container */}
        <div
          className="relative mt-12 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>

          {/* Scrolling Team Members */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicate the team members to create a seamless loop */}
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className="relative flex-shrink-0 w-[280px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-500/20 hover:shadow-xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 z-10"></div>

                {/* Member Image */}
                <div className="h-[350px] relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>

                {/* Basic Info - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-400">{member.role}</p>
                </div>

                {/* Expanded Info - Slides up on hover */}
                <div
                  className={`absolute left-0 right-0 bg-gradient-to-t from-gray-900 to-gray-800/95 backdrop-blur-sm p-6 text-center transition-all duration-500 ease-in-out ${
                    hoveredIndex === index ? "bottom-0" : "-bottom-full"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-blue-400 mb-1">{member.role}</p>
                  <p className="text-xs text-gray-400 mb-3">{member.company}</p>
                  <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
                  <p className="text-sm text-gray-300 mb-5">{member.bio}</p>

                  <div className="flex justify-center mt-4 space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.email}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 text-gray-400">
          <p>Hover over a team member to learn more</p>
        </div>
      </div>
    </section>
  )
}
