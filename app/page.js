import { Carousel } from "@/components/carousel"
import { ClientsSection } from "@/components/clients-section"
import { HeroSection } from "@/components/hero-section"
import  {PartnershipSection } from "@/components/partnership-section"
import {MissionValuesTable} from "@/components/mission-values-table"
import {AboutUs} from "@/components/about-us"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { MainHeroSection } from "@/components/main-hero"


export const metadata = {
  title: "Business Solutions - Professional Business Services",
  description:
    "We provide cutting-edge business solutions tailored to your specific needs. Our team of experts is dedicated to helping your company grow and succeed.",
}

const carouselItems = [
  {
    image: "/static/shree_guru_company.png",
    title: "Shree Guru Company",
    description: "Your trusted partner in business solutions",
  },
  {
    image: "/static/stallion_structures.png",
    title: "Professional Services",
    description: "Expert solutions for your business needs",
  },
  {
    image: "/static/kera_tech.png",
    title: "Quality Assurance",
    description: "Delivering excellence in every project",
  },
]

export default function HomePage() {
  return (
    <main>
      {/* <Carousel items={carouselItems} /> */}
      <MainHeroSection/>
      <HeroSection />
      <PartnershipSection/>
      <MissionValuesTable/>
      <AboutUs/>
      <ServicesSection/>
      <TeamSection/>
      {/* <ClientsSection/> */}
    </main>
  )
}
