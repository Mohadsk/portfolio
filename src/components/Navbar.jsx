import { useEffect, useState } from "react"

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.target)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3
      let current = "home"

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            current = id
          }
        }
      })

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#050816]/95 backdrop-blur-md z-50 border-b border-white/5">
      <div className="max-w-10xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="text-3xl lg:text-4xl font-bold tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Portfolio
        </a>

        <div className="relative hidden md:block">
          <ul className="flex items-center gap-6 text-sm lg:text-base uppercase tracking-[0.3em] text-gray-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.target
              return (
                <li key={item.target} className="group">
                  <a
                    href={`#${item.target}`}
                    className={`relative inline-flex items-center transition ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar