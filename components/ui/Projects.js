"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  // Project data array
  const projects = [
    {
      id: 1,
      title: "Planeadito",
      description:
        "Digital catalog connecting suppliers across Mexico with potential customers, facilitating B2B commerce.",
      image: "/img/projects/planeadito.webp",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      gradient: "from-blue-400 to-purple-500",
      link: "#",
    },
    {
      id: 2,
      title: "Talk to Santa",
      description:
        "Santa Claus calling service that brought joy to hundreds of children during the holiday season.",
      image: "/img/projects/santa.webp",
      technologies: ["Next.js", "Node.js", "Bland"],
      gradient: "from-red-400 to-red-600",
      link: "#",
    },
    {
      id: 3,
      title: "Predep",
      description:
        "Sports prediction application that uses artificial intelligence to analyze and predict sports event results.",
      image: "/img/projects/predep.webp",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
      gradient: "from-gray-700 to-gray-900",
      link: "#",
    },
    {
      id: 4,
      title: "Fintech Dashboard",
      description:
        "Comprehensive financial management dashboard with real-time analytics and transaction tracking.",
      image: "/img/projects/fintech.webp",
      technologies: ["Next.js", "Chart.js", "Supabase"],
      gradient: "from-emerald-400 to-teal-500",
      link: "#",
    },
    {
      id: 5,
      title: "E-Learning Platform",
      description:
        "Interactive learning platform with course management, video lessons, and progress tracking.",
      image: "/img/projects/elearning.webp",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      gradient: "from-amber-400 to-orange-500",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Una selección de mis mejores proyectos, cada uno representando un
            desafío único y una solución innovadora.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project card component
function ProjectCard({ project }) {
  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
      {/* Project image with gradient overlay */}
      <div
        className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {/* Fallback for missing images */}
          <div className="relative w-full h-48 mx-auto">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/1f2937/${
                  project.gradient.includes("red")
                    ? "f87171"
                    : project.gradient.includes("blue")
                    ? "60a5fa"
                    : project.gradient.includes("emerald")
                    ? "34d399"
                    : project.gradient.includes("amber")
                    ? "fbbf24"
                    : "9ca3af"
                }?text=${project.title}`;
              }}
            />
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 h-20">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View project link */}
        <Link
          href={project.link}
          className="inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Ver proyecto →
        </Link>
      </div>
    </div>
  );
}
