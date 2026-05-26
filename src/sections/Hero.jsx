import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri"
import { FiGlobe } from "react-icons/fi"

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#081121] pt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Shaikh Mohammad
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
              Frontend Developer
            </h2>
            <h2 className="text-lg md:text-xl font-semibold text-white/90 max-w-3xl">
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </h2>
            <p className="max-w-lg text-sm md:text-base leading-7 text-gray-300">
              Let's create something amazing together with polished React interfaces, responsive layouts, and modern UI design.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm md:text-base font-medium text-white hover:opacity-90 transition">
                Hire Me
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-full border border-cyan-400 text-sm md:text-base font-medium text-cyan-400 hover:bg-cyan-400/10 transition">
                View Work
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 ">
              {[
                { href: 'https://github.com/Mohadsk', icon: <RiGithubFill /> },
                { href: 'https://www.linkedin.com/in/skmohammad7/', icon: <RiLinkedinBoxFill /> },

              ].map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-4xl text-gray-300 hover:bg-white/10 hover:text-cyan-300 transition">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -bottom-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="relative w-full max-w-[460px] aspect-square rounded-full border-8 border-[#1f2a44] bg-[#ffffff] shadow-[0_30px_80px_rgba(59,130,246,0.18)] overflow-hidden">
              <img
                src="/photo.png"
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero