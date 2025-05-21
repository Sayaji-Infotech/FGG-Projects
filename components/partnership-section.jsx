import Image from "next/image"
export function PartnershipSection() {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary  mb-3">
            Strategic Partnership
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Partnering for a Purpose
          </h1>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
        </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="">
                    <p className="text-lg text-gray-700 mb-6">
                    We, Stallion Structures, Shree Guru Infracon Pvt. Ltd., and Keratech, unite with a shared vision: to
                    revolutionize infrastructure, industrial development, and real estate. Our alliance is forged from the
                    synergy of our individual strengths.
                    </p>
        
                    <p className="text-lg text-gray-700 mb-6">
                    We recognize that each entity brings unique and vital capabilities. By combining Stallion Structures'
                    expertise in innovative engineering and design, Shree Guru Infracon's proven track record in large-scale
                    construction and project execution, and Keratech's specialized knowledge in corrosion-resistant solutions,
                    we believe we can achieve what none could alone.
                    </p>
        
                    <p className="text-lg text-gray-700">
                    Our primary goal is to jointly pursue, plan, and execute ambitious, large-scale projects that redefine
                    industry standards. This is about undertaking the right work – projects that challenge and inspire us to
                    leave a lasting, positive impact.
                    </p>
                </div>

                {/* Image Side */}
                <div className="relative w-[90%]">
                    <div className="aspect-square overflow-hidden rounded-2xl bg-muted/30 shadow-lg">
                    <Image
                        src="/static/visions.png"
                        alt="Partnership between companies"
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-primary/10 backdrop-blur-sm"></div>
                    <div className="absolute -top-6 -right-6 h-32 w-32 rounded-2xl bg-primary/10 backdrop-blur-sm"></div>
                </div>
            </div>
        </div>
      </section>
    )
  }
  