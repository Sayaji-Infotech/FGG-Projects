import "@/app/globals.css"

import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/headerbar"
import SiteFooter from "@/components/footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    template: "%s | FGG Projects",
    default: "FGG Projects - Excellence in Construction & Engineering | Joint Venture",
  },
  description: "FGG Projects is a strategic joint venture specializing in architectural engineering, infrastructure development, and surface protection solutions. With 400+ completed projects and 40+ years of combined experience in Vadodara, Gujarat.",
  keywords: [
    "construction company",
    "engineering consultancy", 
    "infrastructure development",
    "architectural engineering",
    "surface protection",
    "joint venture",
    "Vadodara",
    "Gujarat",
    "civil engineering",
    "structural engineering",
    "3D modeling",
    "Tekla design",
    "acid resistant solutions",
    "corrosion protection",
    "FGG Projects",
    "Stallion Structures",
    "Shree Guru Infracon",
    "Keratech"
  ],
}

export default function RootLayout({
  children,}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen  bg-background font-sans antialiased", inter.className)}>

          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-12">{children}</div>
            <SiteFooter />
          </div>
      </body>
    </html>
  )
}
