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
  title: "FGG Projects - Excellence in Construction & Engineering | Joint Venture",
  description:
    "FGG Projects is a strategic joint venture specializing in architectural engineering, infrastructure development, and surface protection solutions. With 400+ completed projects and 40+ years of combined experience, we transform ideas into excellence through precision, innovation, and unmatched quality in construction and engineering.",
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
