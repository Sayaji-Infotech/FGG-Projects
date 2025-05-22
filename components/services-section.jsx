import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// All bullet points in a single array
const allBulletPoints = [
  // Stallion Structures points
  "Provide architectural, structural, and civil engineering consultancy",
  "Support with advanced 3D modelling, Tekla-based design and detailing",
  "Coordinate multi-disciplinary design and engineering requirements for industrial and commercial projects",
  // Shree Guru points
  "Act as the primary execution contractor for civil infrastructure projects",
  "Provide manpower, construction equipment, and logistical support",
  "Ensure on-ground implementation as per regulatory and quality norms",
  // Kera Tech points
  "Offer specialized services in corrosion and abrasion-resistant surface protection",
  "Supply and apply acid-resistant materials and linings",
  "Ensure compliance with safety and environmental protection standards during surface treatment processes",
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">Our Services</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Our Services</h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
            {/* Top colored bar */}
            <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-600 w-full"></div>

            <div className="p-8">
              {/* Logo and title section */}
              <div className="flex flex-col items-center mb-12">
                <div className="h-18 w-18 flex items-center justify-center mb-6 bg-blue-50 rounded-full p-4">
                  <Image
                    src="/static/FGG-Logo.jpg"
                    alt="FGG Projects"
                    width={60}
                    height={60}
                    className="object-contain rounded-full"
                  />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-slate-800 text-center mb-2">FGG Projects</h3>
                <p className="text-slate-600 text-center mb-6">Joint Venture Excellence in Construction</p>

                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-600 rounded-full"></div>
              </div>

              {/* Bullet Points in 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {allBulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-slate-700 ml-3 text-md">{point}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/services" className="flex items-center justify-center">
                    <span>Explore Our Services</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
