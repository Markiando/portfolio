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
      image: "/planeadito.png",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      gradient: "",
      link: "https://www.planeadito.com/",
    },
    {
      id: 2,
      title: "Talk to Santa",
      description:
        "Santa Claus calling service that brought joy to hundreds of children during the holiday season.",
      image: "/santa-mockup.png",
      technologies: ["Next.js", "Node.js", "Bland"],
      gradient: "",
      link: "https://www.hablarconsanta.com/",
    }
  ];

  return (
    <section id="projects"className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FBA2AB]">
          Featured Projects
          </h2>
          <p className="text-[#FBA2AB] font-bold max-w-3xl mx-auto text-lg">
          A selection of my best projects, each one representing a unique challenge and an innovative solution.
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
    <div className="group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-[#FBA2AB]">
      {/* Project image */}
      <div className={`relative h-80 w-full overflow-hidden`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project info */}
      <div className="p-6 bg-white">
        <h3
          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
            project.title === "Planeadito" ? "bg-gradient-to-r from-[#FEA38E] to-[#FBA2AB] bg-clip-text text-transparent" : "text-[#FBA2AB]"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mb-4 h-20 transition-colors duration-300 text-[#FBA2AB]`}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-[#FBA2AB] text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View project link */}
        <Link
          href={project.link}
          className="inline-block text-sm text-[#FBA2AB] hover:text-[#FEA38E] transition-colors"
        >
          Ver proyecto →
        </Link>
      </div>
    </div>
  );
}
