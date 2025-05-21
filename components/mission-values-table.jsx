import { Target, Award, Shield, Users, Zap, Building2, Lightbulb, Heart } from "lucide-react"

export function MissionValuesTable() {
  const vision = [
    {
      icon: <Building2 className="h-6 w-6 text-blue-600" />,
      title: "Excellence in Construction",
      description: "To be the leading force in construction and engineering, delivering innovative solutions that transform the built environment.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-600" />,
      title: "Innovation & Technology",
      description: "To pioneer advanced construction methodologies and sustainable practices that set new industry standards.",
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Social Impact",
      description: "To empower communities through quality infrastructure development and create lasting positive impact on society.",
    },
  ]

  const values = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Integrity & Trust",
      description: "Building on a foundation of honesty, transparency, and ethical practices in all our operations.",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project, maintaining rigorous standards and attention to detail.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Collaboration",
      description: "Fostering strong partnerships and teamwork to achieve exceptional results through shared expertise.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative solutions to overcome complex challenges.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary  mb-3">
            Our Vision
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Mission & Values</h2>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Guided by our mission and core values, we strive to deliver excellence in every project we undertake.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Column */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6">
              <h3 className="text-2xl font-bold text-white text-center">Our Vision</h3>
            </div>
            <div className="p-8">
              <ul className="space-y-8">
                {vision.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 bg-blue-50 p-3 rounded-xl flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values Column */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-6">
              <h3 className="text-2xl font-bold text-white text-center">Our Values</h3>
            </div>
            <div className="p-8">
              <ul className="space-y-8">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="mt-1 bg-blue-50 p-3 rounded-xl flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                      {value.icon}
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold text-xl text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
