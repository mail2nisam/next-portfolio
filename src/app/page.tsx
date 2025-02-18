import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const featuredSkills = [
    "Ruby on Rails",
    "Next.js",
    "React",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "AWS",
    "CI/CD",
    "Microservices"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">
          /nisam
        </h1>

        <div className="space-y-16">
          {/* Intro Section */}
          <article className="border-l-4 border-blue-600 pl-6">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-mono">
                Full-Stack Developer & Technical Architect
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
                I build robust, scalable web applications that transform complex challenges into streamlined, efficient solutions.
                My passion lies in crafting clean, maintainable code using modern tech stacks to deliver high-performance results.
              </p>
            </div>
          </article>

          {/* Core Expertise */}
          <article className="border-l-4 border-green-600 pl-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-mono">
                Core Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {featuredSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* What Drives Me */}
          <article className="border-l-4 border-purple-600 pl-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-mono">
                What Drives Me
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
                I thrive on solving complex problems and delivering elegant solutions. Whether it's optimizing a critical API endpoint
                or architecting a scalable microservices ecosystem, my goal is to drive innovation and efficiency. Collaboration,
                continuous learning, and a passion for cutting-edge technologies are at the heart of everything I do.
              </p>
            </div>
          </article>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-mono"
            >
              <span>Explore My Work</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
