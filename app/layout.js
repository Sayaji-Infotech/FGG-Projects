import "@/app/globals.css"

import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
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
            <footer className="border-t py-8 md:py-12">
              <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between gap-6 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2025 Sayaji Infotech Pvt Ltd. All rights reserved.
                </p>
                <nav className="flex gap-6 text-sm text-muted-foreground">
                  <a href="/terms" className="hover:underline">
                    Terms
                  </a>
                  <a href="/privacy" className="hover:underline">
                    Privacy
                  </a>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </nav>
              </div>
            </footer>
          </div>
      </body>
    </html>
  )
}
