"use client"

import { useState } from "react"
import Image from "next/image"
import { MoreHorizontal, Info, ArrowUp, FileText, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Proposed ROB in Lieu of LC No. 71 at KM 155/16/18 (DFCC CH 190/802.520) Between Sttion Bhilad - Sanjan",
    amount: "14 Cr.",
  },
  {
    id: 2,
    title: "Construction of Road over Bridge in lieu of existing LC No. 70 at KM 152/2-4 Between Sanjan - Bhilad Railway Station of Mumbai - Delhi - Trunk route of Western Railway.",
    amount: "74 Cr.",
  },
  {
    id: 3,
    title: "Construction of Road Over Bridge in lieu of existing LC No.67 at IR chainage KM 146/2-4 between Sanjan – Umbergaon Railway station of Mumbai – Delhi – Trunk route of Western Railway",
    amount: "70 Cr.",
  },
  {
    id: 4,
    title: "Construction of VUP at Km. 334.675 (Dhamdachi)... for the rectification of Blackspots on Surat - Dahisar Section of NH-48 in the State of Gujarat through an EPC",
    amount: "53 Cr.",
  },
  {
    id: 5,
    title: "Construction of RUB (size 6 x 3) in lieu of LC no. 68 at IR chainage 149/22-24 between Sanjan – Bhilad stations of Vaitarna–Surat section of Mumbai Division of Western Railway",
    amount: "50 Cr.",
  },
  {
    id: 6,
    title: "CONSTRUCTION OF RAILWAY OVER BRIDGE INCLUDING APPROACHES COMPLETE IN LIEU OF LCNO.255 AT RAILWAY Km424/34-2 BETWEEN STATIONS VADOD TO ANAND OF VADODARA-GERATPUR SECTION OF WESTERN RAILWAY VADODARA DIVISION.",
    amount: "48 Cr.",
  },
  {
    id: 7,
    title: "Construction New Structure of Amreli District Package No.RPC-2/AMR/MMGSY/Normal/2023-24/P.31Ta.Dhari, Dist- Amreli",
    amount: "35 Cr.",
  },
  {
    id: 8,
    title: "CONSTRUCTION OF 2 LANE ROAD OVER BRIDGES(ROB) WITH APPROACHES (END TO END) IN LIEU OF LC NO. 257AT KM 426/18-20 BETWEEN SECTION VADODARA - GERATPUR OFVADODARA DIVISION.",
    amount: "33 Cr.",
  },
  {
    id: 9,
    title: "90,000 SQ FT Ground + 5 School Building at Vadodara (Design engineering)",
    amount: "10 Lacs.",
  },
  {
    id: 10,
    title: "Sub contracting for design for Adani Projects for 2000 mt weight steel structure mundra (Design engineering)",
    amount: "18 Lacs.",
  },
  {
    id: 11,
    title: "Design Engineering Services for Chemical Plant at Dahej, Gujarat",
    amount: "33 Lacs.",
  },
  {
    id: 12,
    title: "Acid Proof Tile Lining and Epoxy Painting at Yadri Thermal Power Project 5 x 800 MW, Miryalaguda, Nalgonda, Telangana",
    amount: "85 Lacs.",
  },
  {
    id: 13,
    title: "Acid Proof Tile Lining at Sagardiggi Power Plant, Murshidabad, Westbengal",
    amount: "30 Lacs.",
  },
  {
    id: 14,
    title: "Acid Proof Tile Lining at NTPC Kahalgaon, Bihar",
    amount: "30 Lacs.",
  },
  {
    id: 15,
    title: "Acid Proof Tile Lining and Epoxy coating at NTPC Talcher, Angul, Orissa 660 x 4 MW",
    amount: "65 Lacs.",
  },
  {
    id: 16,
    title: "Acid Proof Tile Lining, Food Grade Epoxy coating, Food grade epoxy screed with glass cloth, concrete cracks repairs, injection epoxy grouting, water-proofing",
    amount: "1 Cr.",
  },
  {
    id: 17,
    title: "Acid Proof Tile Lining at IOCL, Gujarat Refinary, Vadodara",
    amount: "10 Lacs.",
  },
  {
    id: 18,
    title: "Acid Proof Tile Lining at BWSSB, Bengaluru Water treatment Plant at various stations in Karnataka",
    amount: "14 Lacs.",
  },
];


// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Top colored bar */}
      <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-600 rounded-t-xl -mt-6 -mx-6 mb-6"></div>
      
      <div className="flex flex-col space-y-4">
        <div className="flex items-start justify-between">
          <h2 className="text-md font-semibold text-gray-800 pr-4">{project.title}</h2>
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
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">As on 31st March 2025</div>
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
