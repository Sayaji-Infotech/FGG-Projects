"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

// Team members data
const teamsData = [
  {
    id: 1,
    name: "Arpit Suthar",
    role: "Head - Architectural Designing",
    image: "/static/team/arpit.jpg"
  },
  {
    id: 2,
    name: "Yash Suthar",
    role: "Head - Design Enginering",
    image: "/static/team/yash.jpg"
  },
  {
    id: 3,
    name: "Raxit Patel",
    role: "Head - Operations",
    image: "/static/team/raxit.jpg"
  },
  {
    id: 4,
    name: "Chetan Patel",
    role: "Co Head - Civil Projects",
    image: "/static/team/chetan.jpg"
  },
  {
    id: 5,
    name: "Paresh Patel",
    role: "Co Head - Civil Projects",
    image: "/static/team/pares.jpg"
  },
  {
    id: 6,
    name: "Pushkar Chawra",
    role: "Head - Abrasion & Corrosion Projects",
    image: "/static/team/pushkar.jpg"
  }
];

// Team Member Card Component
const TeamCard = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Top colored bar */}
      <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-600 rounded-t-xl -mt-6 -mx-6 mb-6"></div>
      
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Image */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name and Role */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
          <p className="text-blue-600 font-semibold">{member.role}</p>
        </div>
      </div>
    </div>
  )
}

const Teams = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">Our Team</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Meet Our Expert Team</h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {teamsData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teams;
