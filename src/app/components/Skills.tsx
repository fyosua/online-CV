export default function Skills() {
  const skills = [
    { category: "Google Tools", items: ["Google Ads", "Google Analytics", "Google Tag Manager"] },
    { category: "Web Development", items: ["HTML/CSS", "JavaScript", "React", "Next.js"] },
    // Add other skills from your CV
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}