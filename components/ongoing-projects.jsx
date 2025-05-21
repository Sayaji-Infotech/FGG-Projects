"use client"

import { useState } from "react"
import Image from "next/image"
import { MoreHorizontal, Info, ArrowUp, FileText, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Scale flagship course for freelancer designer",
    amount: "₹2,50,000",
  },
  {
    id: 2,
    title: "Develop new client portal dashboard",
    amount: "₹1,80,000",
  },
  {
    id: 3,
    title: "Redesign company website and branding",
    amount: "₹3,20,000",
  },
  {
    id: 4,
    title: "Implement new CRM system integration",
    amount: "₹4,50,000",

  },
  {
    id: 5,
    title: "Mobile App Development",
    amount: "₹5,20,000",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    amount: "₹6,80,000",

  },
  {
    id: 7,
    title: "Cloud Migration Project",
    amount: "₹4,20,000",
  },
  {
    id: 8,
    title: "AI Integration Project",
    amount: "₹7,50,000",
  },
]

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Top colored bar */}
      <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-600 rounded-t-xl -mt-6 -mx-6 mb-6"></div>
      
      <div className="flex flex-col space-y-4">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold text-gray-800 pr-4">{project.title}</h2>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-gray-600">Amount:</span>
          <span className="text-lg font-bold text-primary">{project.amount}</span>
        </div>
      </div>
    </div>
  )
}

export function OngoingProjects() {
  const [showAll, setShowAll] = useState(false)
  const initialDisplayCount = 6
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, initialDisplayCount)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">Ongoing Projects</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Ongoing Projects</h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projectsData.length > initialDisplayCount && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {showAll ? (
                <>
                  Show Less <ArrowUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Show More <ArrowDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
