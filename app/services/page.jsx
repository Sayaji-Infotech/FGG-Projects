"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

// Services data - each point as a separate card
const servicesData = [
  {
    id: 1,
    title: "Architectural & Engineering Consultancy",
    description: "Provide architectural, structural, and civil engineering consultancy"
  },
  {
    id: 2,
    title: "3D Modelling & Design",
    description: "Support with advanced 3D modelling, Tekla-based design and detailing"
  },
  {
    id: 3,
    title: "Multi-disciplinary Coordination",
    description: "Coordinate multi-disciplinary design and engineering requirements for industrial and commercial projects"
  },
  {
    id: 4,
    title: "Infrastructure Execution",
    description: "Act as the primary execution contractor for civil infrastructure projects"
  },
  {
    id: 5,
    title: "Resource Management",
    description: "Provide manpower, construction equipment, and logistical support"
  },
  {
    id: 6,
    title: "Quality Implementation",
    description: "Ensure on-ground implementation as per regulatory and quality norms"
  },
  {
    id: 7,
    title: "Surface Protection Services",
    description: "Offer specialized services in corrosion and abrasion-resistant surface protection"
  },
  {
    id: 8,
    title: "Material Application",
    description: "Supply and apply acid-resistant materials and linings"
  },
  {
    id: 9,
    title: "Safety & Compliance",
    description: "Ensure compliance with safety and environmental protection standards during surface treatment processes"
  }
];

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Top colored bar */}
      <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-600 rounded-t-xl -mt-6 -mx-6 mb-6"></div>
      
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Centered Image */}
        <div className="flex justify-center mb-4">
          <Image 
            src={`/static/Services-Icons/${service.title}.png`} 
            width={80} 
            height={80}
            className="object-contain"
            alt={service.title}
          />
        </div>
        
        {/* Title and Description */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">Our Services</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Our Services</h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
