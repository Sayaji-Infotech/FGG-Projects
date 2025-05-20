import Link from "next/link"
export function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary">About Us</div>
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">About Us</h2>
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Stallion Structures, Shree Guru Infracon Pvt. Ltd., and Keratech have formed a strategic 
            alliance to deliver comprehensive solutions in the engineering and construction sectors. 
            Stallion Structures, an architectural, civil, and structural engineering consultancy and 
            construction firm, brings expertise in design and advanced modeling. Shree Guru Infracon 
            Pvt. Ltd., a Government-approved contractor, excels in infrastructure development and 
            on-ground project execution. Keratech specializes in surface protection and corrosion
            resistant solutions. Together, these firms will collaborate on large-scale infrastructure, 
            industrial, and real estate projects
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
