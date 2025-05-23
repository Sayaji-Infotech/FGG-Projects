import "@/app/globals.css"

import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/headerbar"
import SiteFooter from "@/components/footer"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    template: "%s | Business Solutions",
    default: "Business Solutions - Professional Business Services",
  },
  description: "Professional business solutions tailored to your needs",
  keywords: ["business", "solutions", "consulting", "professional services"],
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
