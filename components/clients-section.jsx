"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"

const allPartners = [
  {
    name: "Reliance Industries",
    category: "Conglomerate",
  },
  {
    name: "Tata Consultancy Services (TCS)",
    category: "Information Technology",
  },
  {
    name: "HDFC Bank",
    category: "Banking",
  },
  {
    name: "Bharti Airtel",
    category: "Telecommunications",
  },
  {
    name: "ICICI Bank",
    category: "Banking",
  },
  {
    name: "Infosys",
    category: "Information Technology",
  },
  {
    name: "ITC Limited",
    category: "Consumer Goods",
  },
  {
    name: "Larsen & Toubro (L&T)",
    category: "Engineering & Construction",
  },
  {
    name: "HCL Technologies",
    category: "Information Technology",
  },
  {
    name: "National Stock Exchange (NSE)",
    category: "Financial Services",
  },
  {
    name: "Life Insurance Corporation of India (LIC)",
    category: "Insurance",
  },
  {
    name: "State Bank of India (SBI)",
    category: "Banking",
  },
  {
    name: "Oil and Natural Gas Corporation (ONGC)",
    category: "Oil & Gas",
  },
  {
    name: "Indian Oil Corporation",
    category: "Oil & Gas",
  },
  {
    name: "Bharat Petroleum Corporation Limited (BPCL)",
    category: "Oil & Gas",
  },
  {
    name: "Tata Motors",
    category: "Automotive",
  },
  {
    name: "Axis Bank",
    category: "Banking",
  },
  {
    name: "NTPC Limited",
    category: "Energy",
  },
  {
    name: "Hindustan Unilever Limited (HUL)",
    category: "Consumer Goods",
  },
  {
    name: "Coal India Limited",
    category: "Mining",
  },
  {
    name: "Mahindra & Mahindra",
    category: "Automotive",
  },
  {
    name: "Maruti Suzuki India Limited",
    category: "Automotive",
  },
  {
    name: "Vedanta Limited",
    category: "Metals & Mining",
  },
  {
    name: "GAIL (India) Limited",
    category: "Natural Gas",
  },
  {
    name: "Bajaj Finserv",
    category: "Financial Services",
  },
  {
    name: "Kotak Mahindra Bank",
    category: "Banking",
  },
  {
    name: "Hindalco Industries",
    category: "Metals",
  },
  {
    name: "Tata Steel",
    category: "Steel",
  },
  {
    name: "JSW Steel",
    category: "Steel",
  },
  {
    name: "Grasim Industries",
    category: "Diversified",
  },
  {
    name: "Power Finance Corporation",
    category: "Financial Services",
  },
  {
    name: "Tech Mahindra",
    category: "Information Technology",
  },
  {
    name: "UPL Limited",
    category: "Chemicals",
  },
  {
    name: "Jindal Steel and Power",
    category: "Steel & Energy",
  },
  {
    name: "Sun Pharmaceutical Industries",
    category: "Pharmaceuticals",
  },
  {
    name: "Dr. Reddy's Laboratories",
    category: "Pharmaceuticals",
  },
  {
    name: "Aurobindo Pharma",
    category: "Pharmaceuticals",
  },
  {
    name: "Wipro",
    category: "Information Technology",
  },
  {
    name: "Adani Power",
    category: "Energy",
  },
  {
    name: "Adani Wilmar",
    category: "Consumer Goods",
  },
  {
    name: "Nayara Energy",
    category: "Oil & Gas",
  },
  {
    name: "Petronet LNG",
    category: "Energy",
  },
  {
    name: "IndiGo (InterGlobe Aviation)",
    category: "Aviation",
  },
  {
    name: "Bank of Baroda",
    category: "Banking",
  },
  {
    name: "Canara Bank",
    category: "Banking",
  },
  {
    name: "Punjab National Bank",
    category: "Banking",
  },
  {
    name: "Union Bank of India",
    category: "Banking",
  },
  {
    name: "Bank of India",
    category: "Banking",
  },
  {
    name: "Indian Farmers Fertiliser Cooperative (IFFCO)",
    category: "Agriculture",
  },
  {
    name: "Hyundai Motor India",
    category: "Automotive",
  },
  {
    name: "Tata Power",
    category: "Energy",
  },
  {
    name: "Rajesh Exports",
    category: "Jewelry",
  },
];


// Function to shuffle array
function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Distribute partners into three rows
const row1Partners = shuffleArray(allPartners).slice(0, 4)
const row2Partners = shuffleArray(allPartners.filter((p) => !row1Partners.includes(p))).slice(0, 4)
const row3Partners = shuffleArray(allPartners.filter((p) => !row1Partners.includes(p) && !row2Partners.includes(p)))

export function ClientsSection() {
  const scrollRef1 = useRef(null)
  const scrollRef2 = useRef(null)
  const scrollRef3 = useRef(null)
  const [showAllPartners, setShowAllPartners] = useState(false)

  useEffect(() => {
    const scrollContainers = [scrollRef1.current, scrollRef2.current, scrollRef3.current]
    const speeds = [0.05, -0.05, 0.05] // Different speeds and directions for each row

    const animations = scrollContainers.map((container, index) => {
      if (!container) return null

      let animationId
      let lastTime = 0
      const speed = speeds[index]

      const scroll = (timestamp) => {
        if (!lastTime) lastTime = timestamp
        const elapsed = timestamp - lastTime
        lastTime = timestamp

        container.scrollLeft += speed * elapsed

        // Reset scroll position when reaching the end
        if (speed > 0 && container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        } else if (speed < 0 && container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth - container.clientWidth
        }

        animationId = requestAnimationFrame(scroll)
      }

      animationId = requestAnimationFrame(scroll)
      return () => cancelAnimationFrame(animationId)
    })

    return () => {
      animations.forEach((cleanup) => cleanup && cleanup())
    }
  }, [])

  // Effect to prevent body scrolling when modal is open
  useEffect(() => {
    if (showAllPartners) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showAllPartners])

  const renderPartnerRow = (partners, ref, className = "") => (
    <div
      ref={ref}
      className={`flex gap-4 overflow-x-auto py-2 px-2 scrollbar-hide ${className}`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {[...partners, ...partners].map((partner, index) => (
        <div
          key={`${partner.name}-${index}`}
          className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-md p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50">
              <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain p-2" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{partner.name}</h3>
              <p className="text-sm text-gray-500">{partner.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-10 bg-gradient-to-b from-blue-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content - Updated with conic gradient background */}
          <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-12 text-center lg:text-left rounded-2xl overflow-hidden">
            <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827] p-8 rounded-2xl">
              <div className="inline-block rounded-lg bg-white/20 px-4 py-2 text-sm text-white mb-4 backdrop-blur-sm">
                Trusted Partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet our Integration Partners</h2>
              <p className="text-gray-200 text-lg mb-6">
                We collaborate with industry leaders to deliver comprehensive solutions in engineering, construction,
                and surface protection.
              </p>
              <button
                onClick={() => setShowAllPartners(true)}
                className="text-white font-semibold hover:text-blue-200 inline-flex items-center group transition-colors"
              >
                View all partners
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Content - Scrolling Partners */}
          <div className="lg:w-2/3 relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-blue-950 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-blue-950 to-transparent pointer-events-none"></div>

            {/* Three Rows of Scrolling Partners */}
            <div className="space-y-4">
              {renderPartnerRow(row1Partners, scrollRef1)}
              {renderPartnerRow(row2Partners, scrollRef2)}
              {renderPartnerRow(row3Partners, scrollRef3)}
            </div>
          </div>
        </div>
      </div>

      {/* All Partners Popup Modal */}
      {showAllPartners && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-800">Our Partners & Clients</h3>
              <button
                onClick={() => setShowAllPartners(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content - Partners Grid */}
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {allPartners.map((partner, index) => (
                  <div
                    key={`grid-${partner.name}-${index}`}
                    className="bg-[#5DD1D1]/20 rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white mb-3 flex items-center justify-center p-3">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={80}
                        height={80}
                        className="object-contain max-h-full"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-gray-800 text-center line-clamp-1">{partner.name}</h4>
                    <p className="text-xs text-gray-500 text-center">{partner.category}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  )
}
