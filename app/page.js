import { Carousel } from "@/components/carousel"
import { ClientsSection } from "@/components/clients-section"
import { HeroSection } from "@/components/hero-section"
import  {PartnershipSection } from "@/components/partnership-section"
import {MissionVisionValues} from "@/components/vision-values"
import {AboutUs} from "@/components/about-us"
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
      <Carousel items={carouselItems} />
      <HeroSection />
      <PartnershipSection/>
      <MissionVisionValues/>
      <AboutUs/>
      {/* <ClientsSection/> */}
    </main>
  )
}
