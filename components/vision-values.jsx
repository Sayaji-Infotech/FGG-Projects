"use client"

import { ThumbsUp, Users, PieChart } from "lucide-react"

export function MissionVisionValues() {
  return (
    <section className="relative py-16 md:py-24 bg-slate-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Column */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="hexagon bg-slate-800 border-2 border-orange-500 flex items-center justify-center p-6">
                <Users className="h-10 w-10 text-gray-300" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            To empower people by providing skills, fostering dignified living, and contributing to the 
            overall well-being of society.
            </p>
          </div>

          {/* Values Column */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="hexagon bg-slate-800 border-2 border-orange-500 flex items-center justify-center p-6">
                <PieChart className="h-10 w-10 text-gray-300" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Values</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
            Core values include a commitment to quality and dependability. All activities are built on 
            trustworthiness, integrity, and forthrightness. The company has an individual 
            methodology, accountability, a focus on safety, and environmental stewardship. It strives 
            to be adaptable, versatile, and proactive, with faith in its ability to deduce and work smartly, 
            along with innovation, improvement, and "out-of-the-box" thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
