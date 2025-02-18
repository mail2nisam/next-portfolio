import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Scalable API Platform",
      description: "A high-performance API platform built to enhance response times and system reliability. Leveraging Ruby on Rails, microservices architecture, and Redis-based queues, this project streamlines back-end operations and reduces downtime.",
      techStack: [
        "Ruby on Rails",
        "Laravel",
        "Redis",
        "Sidekiq",
        "Jenkins",
        "GitHub Actions"
      ],
      link: "/projects/1",
      duration: "2023 - Present"
    },
    {
      id: 2,
      title: "Unified Data Platform",
      description: "Engineered a data-centric platform that streamlines content delivery and enhances service modularity. Developed BFF APIs and GraphQL endpoints to boost data retrieval efficiency and ensure a seamless user experience.",
      techStack: [
        "Node.js",
        "GraphQL",
        "React",
        "Contentful",
        "Docker"
      ],
      link: "/projects/2",
      duration: "Aug 2022 - Dec 2022"
    },
    {
      id: 3,
      title: "Cloud Data Operator",
      description: "Implemented a Redis operator within a cloud data ecosystem, optimizing data processing and system responsiveness. This project underscores my ability to integrate innovative solutions to boost performance in cloud environments.",
      techStack: [
        "Redis",
        "Cloud Pak for Data",
        "Node.js"
      ],
      link: "/projects/3",
      duration: "IBM Experience"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">
          /projects
        </h1>

        <div className="space-y-16">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="border-l-4 border-blue-600 pl-6 group hover:border-blue-400 transition-all"
            >
              <div className="space-y-4">
                <header>
                  <h2 className="text-2xl font-bold font-mono">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    {project.duration}
                  </p>
                </header>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
                  {project.description}
                </p>

                <div className="py-4">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-mono">
                    Tech Stack:
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <li 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.link}                  
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-mono"
                >
                  <span>View Project</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
