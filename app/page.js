
import { OurClients } from "@/components/our-clients"
import { JointVenture } from "@/components/joint-venture"
import { Partnership } from "@/components/partnership"
import { MissionValues } from "@/components/mission-values"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { OurTeams } from "@/components/our-team"
import { MainHeroSection } from "@/components/main-hero"
import { CompanyHighlights } from "@/components/company-highlights"
import { OngoingProjects } from "@/components/ongoing-projects"
import {ContactUsBanner} from "@/components/contact-us-banner"
import ScrollLinkedAnimation from "@/components/lighting-effect-hero"

export const metadata = {
  title: "Business Solutions - Professional Business Services",
  description:
    "We provide cutting-edge business solutions tailored to your specific needs. Our team of experts is dedicated to helping your company grow and succeed.",
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainHeroSection />
      <ScrollLinkedAnimation/>
      <JointVenture />
      <Partnership />
      <OurClients/>
      <MissionValues />
      <AboutUs />
      <Services />
      <OurTeams />
      <CompanyHighlights />
      <OngoingProjects/>
      <ContactUsBanner/>
    </main>
  )
}
