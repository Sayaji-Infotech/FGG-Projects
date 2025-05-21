"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactUsBanner() {
  return (
    <div className="w-full px-4 py-8">
      {/* Gradient Border Wrapper */}
      <div className="p-[3px] rounded-2xl bg-gradient-to-r from-blue-400 to-orange-400 hover:from-blue-500 hover:to-orange-500 transition-all duration-300">
        {/* Inner Content */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="flex flex-col md:flex-row h-full">
            
            {/* Left Side - Text */}
            <div className="md:w-2/3 w-full p-6 md:p-10 flex flex-col justify-center">
              <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold mb-2">
                Support & Help
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Let&apos;s Talk!
              </h2>
              <p className="text-base md:text-lg text-gray-600 mt-4 mb-6 max-w-xl">
                Have questions or need support? Our team is here to help you with all your queries and concerns.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center w-fit bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/3 w-full relative h-[200px] md:h-auto">
              <div className="absolute inset-0">
                <Image
                  src="/static/contact-us.jpg"
                  alt="Contact support"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center rounded-br-2xl md:rounded-bl-none md:rounded-tr-2xl"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
