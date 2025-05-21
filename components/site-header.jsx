"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"


export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-3">
            {/* Replace icon with image */}
            <div className="relative h-8 w-8">
              <Image
                src="/static/FGG-Logo.jpg" // Replace with your image path
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:inline-block font-bold text-lg text-blue-900">
              FGG Projects Private Limited
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-8 lg:gap-10">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/companies" className="text-sm font-medium transition-colors hover:text-primary">
            Companies
          </Link>
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden md:flex">
            <Button variant="outline" size="sm" className="gap-1">
              <Phone className="h-4 w-4" />
              <span>Get in Touch</span>
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="flex flex-col gap-4 px-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Building2 className="h-6 w-6 text-primary" />
                    <span className="font-bold">FGG Projects Private Limited</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <div className="flex flex-col gap-4 py-4">
                  <Link
                    href="/"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/companies"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Companies
                  </Link>
                  <Link
                    href="/projects"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      <span>Get in Touch</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
