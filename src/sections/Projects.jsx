import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Projects() {
  const projects = [
    {
      title: "Sign to Text",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description: "Real-time hand gesture recognition app for easy communication using React, Flask, and MongoDB.",
      tech: ["React.js", "Python", "Flask", "MongoDB"],

    },
    {
      title: "Corporate Training UI",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "A modern corporate training interface built with responsive React components and clean animations.",
      tech: ["React.js", "Tailwind CSS", "UI Design"],
      demo: "https://accredian-clone-alpha.vercel.app/",
      code: "https://github.com/Mohadsk/Accredian-clone",
    },
  ]

  return (
    <section id="projects" className="bg-[#081121] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={index} className="group overflow-hidden rounded-2xl border border-white/8 bg-[#0f1724] shadow-2xl transition transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-t-2xl">
                <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 lg:h-44 xl:h-56 object-cover transition duration-500 group-hover:scale-105" />
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.12em] text-cyan-300">Featured</span>
                  <div className="flex items-center gap-3 text-gray-400 text-lg">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"><FaExternalLinkAlt /> <span className="hidden sm:inline">Live Demo</span></a>
                    <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition"><FaGithub /> <span className="hidden sm:inline">Code</span></a>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item, techIndex) => (
                    <span key={techIndex} className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 border border-white/6">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects