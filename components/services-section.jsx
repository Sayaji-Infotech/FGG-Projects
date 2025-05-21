import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample data for services
const servicesData = [
  {
    icon: "/static/services/stallion-structures.png",
    title: "Stallion Structures",
    bulletPoints: [
      "Provide architectural, structural, and civil engineering consultancy",
      "Support with advanced 3D modelling, Tekla-based design and detailing",
      "Coordinate multi-disciplinary design and engineering requirements for industrial and commercial projects",
    ],
    link: "/services/engineering",
  },
  {
    icon: "/static/services/shree-guru.png",
    title: "Shree Guru Infracon Pvt Ltd",
    bulletPoints: [
      "Act as the primary execution contractor for civil infrastructure projects",
      "Provide manpower, construction equipment, and logistical support",
      "Ensure on-ground implementation as per regulatory and quality norms",
    ],
    link: "/services/infrastructure",
  },
  {
    icon: "/static/services/kera-tech.png",
    title: "Kera Tech",
    bulletPoints: [
      "Offer specialized services in corrosion and abrasion-resistant surface protection",
      "Supply and apply acid-resistant materials and linings",
      "Ensure compliance with safety and environmental protection standards during surface treatment processes",
    ],
    link: "/services/protection",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary">Our Services</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Our Services</h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-0 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Top colored bar */}
              <div className="h-2 bg-gradient-to-r from-blue-400 to-orange-600 w-full"></div>

              <div className="p-8">
                {/* Icon and title section */}
                <div className="flex flex-col items-center mb-6">
                  <div className="h-20 w-20 flex items-center justify-center mb-4 bg-blue-50 rounded-full p-4">
                    {service.icon ? (
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    ) : (
                      <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-500"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" />
                          <path d="M3 9h18" />
                          <path d="M9 21V9" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 text-center">{service.title}</h3>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-orange-600 rounded-full my-4"></div>
                </div>

                {/* Bullet Points - Left aligned */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {service.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-slate-700 ml-3 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button - More attractive */}
                <div className="mt-auto pt-4 flex justify-center">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    asChild
                  >
                    <Link href={service.link} className="flex items-center justify-center py-2.5">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
