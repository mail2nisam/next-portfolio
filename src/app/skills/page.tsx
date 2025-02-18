import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Link from "next/link";

export default function SkillsPage() {
  const coreTechnologies = [
    { name: "Laravel", level: "Expert", years: 9 },
    { name: "REST API", level: "Advanced", years: 9 },
    { name: "Ruby on Rails", level: "Expert", years: 5 },
    { name: "React", level: "Expert", years: 5 },
    { name: "Dcoker", level: "Expert", years: 5 },
    { name: "VueJs", level: "Expert", years: 3 },
    { name: "Node.js", level: "Advanced", years: 4 },
    { name: "GraphQL", level: "Advanced", years: 3 },
  ];

  const technologyMap = [
    {
      category: "Frontend Mastery",
      skills: ["React", "Vue.js", "JavaScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend & DevOps",
      skills: ["Ruby on Rails", "MySQL", "PostgreSQL", "Microservices", "Docker", "AWS", "CI/CD", "Redis"]
    },
    {
      category: "Tools & Practices",
      skills: ["Git", "TDD", "Agile", "GraphQL", "OAuth", "Performance Optimization", "Software Architecture"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">
          /skills
        </h1>

        <div className="space-y-16">
          {/* Core Competencies */}
          <section className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-bold mb-6 font-mono">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coreTechnologies.map((tech, index) => (
                <div 
                  key={index}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold font-mono">{tech.name}</span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-mono">
                      {tech.years}y+
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(tech.years / 10) * 100}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-mono">
                    {tech.level} proficiency
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Matrix */}
          <section className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold mb-8 font-mono">
              Technology Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologyMap.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-bold font-mono">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-mono hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Legend */}
          <section className="border-l-4 border-purple-600 pl-6">
            <div className="flex flex-wrap gap-8 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full" />
                <span className="text-gray-600 dark:text-gray-300">Core Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 dark:bg-gray-700 rounded-full" />
                <span className="text-gray-600 dark:text-gray-300">Working Knowledge</span>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-mono"
            >
              <span>See These in Action</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
