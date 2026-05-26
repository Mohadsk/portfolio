import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri"

function Footer() {
  return (
    <footer className="bg-[#040914] text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
          <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Portfolio
          </a>

          <p className="text-sm">© 2026 Shaikh Mohammad. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Mohadsk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-4xl"><RiGithubFill /></a>
            <a href="https://www.linkedin.com/in/skmohammad7/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-4xl"><RiLinkedinBoxFill /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
