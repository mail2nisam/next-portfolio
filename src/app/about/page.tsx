"use client";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    "Ruby on Rails", "Vue.js", "React", "Node.js",
    "GraphQL", "PostgreSQL", "Docker", "AWS",
    "CI/CD", "Microservices", "Redis", "TDD"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">
          /about
        </h1>

        <div className="space-y-8 font-mono">
          {/* Introduction */}
          <article className="border-l-4 border-blue-600 pl-6">
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hi, I&apos;m <span className="font-bold text-blue-600">Nisamudheen Kalampulan</span>, 
              a Full Stack Ruby on Rails Engineer with 10+ years of experience in building scalable, high-performance web applications.
              I specialize in designing RESTful APIs, microservices architectures, and cloud-based solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My expertise spans both frontend and backend development, and I&apos;m passionate about transforming complex challenges into efficient, innovative solutions.
            </p>

            <div className="py-4">
              <h2 className="text-xl font-bold mb-4">Core Technologies</h2>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <li 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Development Philosophy */}
          <article className="border-l-4 border-green-600 pl-6 mt-12">
            <h2 className="text-2xl font-bold mb-4">Development Philosophy</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                • <strong>Scalability &amp; Performance:</strong> I design systems that scale, leveraging microservices, caching, and optimized database queries.
                <span className="text-sm ml-2 text-blue-600">(e.g., reducing downtime by 35%)</span>
              </p>
              <p>
                • <strong>Clean, Maintainable Code:</strong> Adhering to SOLID principles and Test-Driven Development to ensure long-term code health.
              </p>
              <p>
                • <strong>Efficient CI/CD:</strong> Implementing continuous integration and delivery pipelines to accelerate development cycles.
                <span className="text-sm ml-2 text-blue-600">(e.g., cutting deployment times)</span>
              </p>
              <p>
                • <strong>User-Centric Approach:</strong> Prioritizing performance and seamless UX, with a focus on reliability.
              </p>
            </div>
          </article>

          {/* Career Highlights */}
          <article className="border-l-4 border-purple-600 pl-6 mt-12">
            <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Over a decade in full-stack development, I&apos;ve successfully architected and delivered solutions that drive business growth. Some of my key achievements include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Engineered robust backend systems with Ruby on Rails, boosting API performance significantly.</li>
              <li>Designed microservices architectures that improved scalability and reduced downtime by 35%.</li>
              <li>Spearheaded CI/CD implementations using Jenkins and GitHub Actions, enhancing deployment efficiency.</li>
              <li>Developed data-centric solutions with GraphQL and Node.js, streamlining content integration.</li>
            </ul>
          </article>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-mono"
            >
              <span>Explore My Work</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
