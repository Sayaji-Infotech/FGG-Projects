import { Carousel } from "@/components/carousel"
import { ClientsSection } from "@/components/clients-section"
import { HeroSection } from "@/components/hero-section"
import { PartnershipSection } from "@/components/partnership-section"
import { MissionValuesTable } from "@/components/mission-values-table"
import { AboutUs } from "@/components/about-us"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { MainHeroSection } from "@/components/main-hero"
import { CompanyHighlights } from "@/components/company-highlights"
import { OngoingProjects } from "@/components/ongoing-projects"

export const metadata = {
  title: "Business Solutions - Professional Business Services",
  description:
    "We provide cutting-edge business solutions tailored to your specific needs. Our team of experts is dedicated to helping your company grow and succeed.",
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainHeroSection />
      <HeroSection />
      <PartnershipSection />
      <ClientsSection/>
      <MissionValuesTable />
      <AboutUs />
      <ServicesSection />
      <TeamSection />
      <CompanyHighlights />
      <OngoingProjects/>
    </main>
  )
}
