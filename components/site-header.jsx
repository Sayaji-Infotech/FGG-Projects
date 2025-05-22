"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import clsx from "clsx"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/companies", label: "Companies" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-8 w-8">
              <Image src="/static/FGG-Logo.jpg" alt="Company Logo" fill className="object-contain" priority />
            </div>
            <span className="hidden sm:inline-block font-bold text-lg text-blue-900">FGG Projects Private Limited</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:gap-8 lg:gap-10">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-primary border-b-2",
                pathname === href ? "text-blue-600 border-blue-600" : "border-transparent",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden md:flex">
            <Button variant="outline" size="sm" className="gap-1">
              <Phone className="h-4 w-4" />
              <span>Get in Touch</span>
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-80 p-0 bg-gradient-to-b from-blue-50 to-white">
              <div className="flex flex-col h-full">
                {/* Attractive Header with centered logo */}
                <div className="flex flex-col items-center justify-center py-8 px-4 border-b bg-blue-100/50">
                  <div className="relative h-16 w-16 mb-3">
                    <Image
                      src="/static/FGG-Logo.jpg"
                      alt="Company Logo"
                      fill
                      className="object-contain rounded-full shadow-sm"
                      priority
                    />
                  </div>
                  <h2 className="text-xl font-bold text-blue-900 text-center">FGG Projects Private Limited</h2>
                  <p className="text-sm text-blue-700 mt-1">Building Excellence</p>
                </div>

                {/* Sheet Nav Items with improved styling */}
                <nav className="flex flex-col px-6 py-8">
                  <h3 className="text-sm uppercase text-blue-800 font-semibold mb-4 tracking-wider">Menu</h3>
                  <div className="space-y-5">
                    {navItems.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                          "flex items-center text-base font-medium transition-colors hover:text-blue-700 py-2 px-3 rounded-lg",
                          pathname === href ? "text-blue-700 bg-blue-100 shadow-sm" : "text-gray-700",
                        )}
                      >
                        {label === "Home" && (
                          <svg
                            className="w-5 h-5 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        )}
                        {label === "Companies" && <Building2 className="w-5 h-5 mr-3" />}
                        {label === "Projects" && (
                          <svg
                            className="w-5 h-5 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        )}
                        {label === "Contact" && <Phone className="w-5 h-5 mr-3" />}
                        {label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Call to Action */}
                <div className="mt-auto px-6 py-8 border-t">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gap-2 py-6 text-base bg-blue-700 hover:bg-blue-800 shadow-md">
                      <Phone className="h-5 w-5" />
                      <span>Get in Touch</span>
                    </Button>
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    We're here to help with your construction needs
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
