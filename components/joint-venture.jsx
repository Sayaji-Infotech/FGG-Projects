import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

// Sample data for dynamic content
const sectionData = [
  {
    badge: "Engineering Excellence",
    title: "Stallion Structure",
    description:
      "A premier civil, architectural, and structural engineering consultancy led by Mr. Yash Suthar. We specialize in innovative design, advanced 3D modeling, and Tekla-based engineering.",
    image: "/static/stallion_structures.png",
    imageAlt: "Stallion Structure engineering design",
    primaryButton: {
      text: "Engineering Services",
      link: "/stallion-services",
    },
    secondaryButton: {
      text: "Design Portfolio",
      link: "/design-portfolio",
    },
    bgClass: "bg-blue-50",
  },
  {
    badge: "Infrastructure Development",
    title: "Shree Guru Infracon Pvt. Ltd.",
    description:
      "An AA Class Government Approved Contractor specializing in large-scale infrastructure projects. With headquarters in Mehsana, we excel in civil infrastructure development, ROB construction, and project execution with a proven track record of projects worth 200+ Crore.",
    image: "/static/shree_guru_company.png",
    imageAlt: "Shree Guru Infracon construction project",
    primaryButton: {
      text: "Infrastructure Projects",
      link: "/infrastructure-projects",
    },
    secondaryButton: {
      text: "Our Expertise",
      link: "/construction-expertise",
    },
    bgClass: "bg-green-50",
  },
  {
    badge: "Surface Protection Specialists",
    title: "KeraTech",
    description:
      "Specialists in surface protection and corrosion-resistant solutions. We provide acid-proof tile lining, epoxy coating, and specialized treatments for power plants, refineries, and water treatment facilities across India.",
    image:  "/static/kera_tech.png",
    imageAlt: "KeraTech surface protection application",
    primaryButton: {
      text: "Protection Solutions",
      link: "/keratech-solutions",
    },
    secondaryButton: {
      text: "Industries Served",
      link: "/industries",
    },
    bgClass: "bg-yellow-50",
  },
];

export function JointVenture() {
  return (
    <section className="pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">A Joint Venture</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"> A Joint Venture Between</h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>


        <div className="py-10 flex flex-col gap-8">
          {sectionData.map((section, index) => (
            <div key={index} className={`py-10 ${section.bgClass} rounded-2xl px-6 md:px-8`}>
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Content */}
                <div className={`space-y-6 ${index % 2 !== 0 ? "order-2" : "order-1"}`}>
                  <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary mb-3">
                    {section.badge}
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{section.title}</h2>
                  <p className="text-muted-foreground text-lg md:text-xl">{section.description}</p>
                  {/* <div className="flex flex-col gap-4 min-[400px]:flex-row">
                    <Button size="lg" asChild>
                      <Link href={section.primaryButton.link}>
                        {section.primaryButton.text}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href={section.secondaryButton.link}>{section.secondaryButton.text}</Link>
                    </Button>
                  </div> */}
                </div>

                {/* Image */}
                <div className={`mx-auto ${index % 2 !== 0 ? "order-1" : "order-2"} lg:ml-auto`}>
                  <div className="aspect-video overflow-hidden rounded-xl bg-muted/30 object-cover shadow-lg">
                    <img
                      src={section.image || "/placeholder.svg"}
                      alt={section.imageAlt}
                      className="h-full w-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
