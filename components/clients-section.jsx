import Image from "next/image"

import { cn } from "@/lib/utils"

const clients = [
  {
    name: "Acme Inc",
    logo: "/placeholder.svg?height=80&width=180",
  },
  {
    name: "Globex Corporation",
    logo: "/placeholder.svg?height=80&width=180",
  },
  {
    name: "Soylent Corp",
    logo: "/placeholder.svg?height=80&width=180",
  },
  {
    name: "Initech",
    logo: "/placeholder.svg?height=80&width=180",
  },
  {
    name: "Umbrella Corporation",
    logo: "/placeholder.svg?height=80&width=180",
  },
  {
    name: "Stark Industries",
    logo: "/placeholder.svg?height=80&width=180",
  },
]

export function ClientsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary">Trusted Partners</div>
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">Our Clients</h2>
            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're proud to work with some of the most innovative companies across various industries.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 mt-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-6 grayscale transition-all hover:grayscale-0 hover:scale-105"
            >
              <div className="relative h-20 w-full">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
