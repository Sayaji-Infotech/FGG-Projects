import { Shield, Award, Users, Star, CheckCircle, Lightbulb, Briefcase, Heart } from "lucide-react"
import { TurnoverChart3D } from "@/components/turnover-chart"

export function CompanyHighlights() {
  const highlights = [
    {
      title: "Safety and Quality Policies",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      color: "blue",
      points: [
        "Prioritizes safety and adheres to health, safety, and environmental policies.",
        "Committed to delivering high-quality projects that exceed client expectations.",
      ],
    },
    {
      title: "Key Strengths",
      icon: <Star className="h-8 w-8 text-amber-600" />,
      color: "amber",
      points: [
        "Highly skilled and experienced team.",
        "Strong client relationships and collaborations.",
        "Focus on value engineering.",
      ],
    },
    {
      title: "Our Strength",
      icon: <Award className="h-8 w-8 text-green-600" />,
      color: "green",
      points: [
        "Stallion Structures' biggest asset is its team of highly skilled individuals, from management to employees.",
        "The company values all team members for their unique skills and experiences.",
      ],
    },
    {
      title: "Our Team",
      icon: <Users className="h-8 w-8 text-purple-600" />,
      color: "purple",
      points: [
        "Stallion Structures has a diverse, multi-skilled workforce providing seamless, high quality service from planning to completion.",
        "At every step, attention to detail, reliable work, and a professional attitude are guaranteed.",
      ],
    },
  ]

  // Helper function to get the correct background color based on the color prop
  const getBgColor = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200"
      case "amber":
        return "bg-amber-50 border-amber-200"
      case "green":
        return "bg-green-50 border-green-200"
      case "purple":
        return "bg-purple-50 border-purple-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  // Helper function to get the correct icon background color
  const getIconBgColor = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-100"
      case "amber":
        return "bg-amber-100"
      case "green":
        return "bg-green-100"
      case "purple":
        return "bg-purple-100"
      default:
        return "bg-gray-100"
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary  mb-3">
            Highlights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Highlights</h2>
          <div className="w-[50%] h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Stallion Structures a leader in the construction and engineering industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getBgColor(
                highlight.color,
              )}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-full ${getIconBgColor(highlight.color)}`}>{highlight.icon}</div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">{highlight.title}</h3>
                </div>

                <ul className="space-y-3">
                  {highlight.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mt-0.5 mr-2 text-${highlight.color}-600 flex-shrink-0`} />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <TurnoverChart3D/>
      </div>
    </section>
  )
}
