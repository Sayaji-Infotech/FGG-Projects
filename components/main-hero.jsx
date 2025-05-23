"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

// Stats data
const stats = [
  { value: 400, label: "Projects Completed", suffix: "+" },
  { value: 45, label: "Expert Teams", suffix: "+" },
  { value: 40, label: "Years Experience", suffix: "+" },
]

export function MainHeroSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Animation for counting up
  useEffect(() => {
    if (!inView) return

    const intervals = stats.map((stat, index) => {
      const duration = 2000 // 2 seconds for the animation
      const steps = 30 // Number of steps to take
      const increment = Math.ceil(stat.value / steps)
      let count = 0

      return setInterval(() => {
        count += increment
        if (count >= stat.value) {
          count = stat.value
          clearInterval(intervals[index])
        }

        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = count
          return newCounters
        })
      }, duration / steps)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [inView])

  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-blue-50/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 lg:py-12">
          {/* Left Content */}
          <div className="space-y-6 px-4 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Transforming Ideas into <br className="hidden sm:block" />
              <span className="text-blue-600">Excellence</span> with <br className="hidden sm:block" />
              <span className="text-blue-600">Expertise</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Choose excellence in construction and engineering. Our team of experts brings your vision to life with
              precision, innovation, and unmatched quality.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>

            {/* Stats with Animation */}
            <div ref={ref} className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-4xl font-bold text-gray-900 transition-all duration-300">
                    {counters[index]}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px] w-full">
            {/* Main Image */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/static/FGG-hero.png"
                alt="Construction professional working on a building structure"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Action Button - Repositioned */}
            <div className="absolute -left-6 bottom-1/3 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer z-10">
              <ArrowUpRight className="h-8 w-8 text-white" />
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}
