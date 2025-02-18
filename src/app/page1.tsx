
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  const skills = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text Content */}
          <div className="text-left md:text-center">
            <h1 className="text-5xl font-bold mb-6">
              Hello, I'm <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A passionate programmer who loves building things with code.
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View My Work
            </button>
          </div>
          {/* Image */}
         <div className="w-full md:w-1/2 flex justify-start">
         <img src="https://placehold.co/600X600" alt="Your Name" className="object-contain scale-110"  width={600}
          height={600} />
         {/* <Image
          src="/image.png" // Replace with your photo path
          alt="Your Name"
          width={600}
          height={600}
          className="object-contain scale-110" /> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
              >
                <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="container mx-auto text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Whether it's a website, an app, or something entirely new, I'm ready to
          bring your ideas to life.
        </p>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Get in Touch
        </button>
      </section>

      <Footer />
    </div>
  );
}