export default function Experience() {
  const experiences = [
    {
      title: "Technical Specialist",
      company: "Google Technical Solutions",
      period: "Sep 2024 - Present",
      points: [
        "Specializing in Google Tracking solutions",
        "Implementing Google Analytics, Tag Manager, and Merchant Center",
        "Providing technical consulting services"
      ]
    },
    // Add other experiences from your CV
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <span className="text-primary">{exp.company}</span>
              </div>
              <span className="text-gray-500 text-sm mb-4 block">{exp.period}</span>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}