import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri"

function Footer() {
  return (
    <footer className="bg-[#040914] text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Portfolio
          </a>

          <p className="text-sm">© 2026 Shaikh Mohammad. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Mohadsk" className="text-gray-400 hover:text-white transition"><RiGithubFill /></a>
            <a href="https://www.linkedin.com/in/skmohammad7/" className="text-gray-400 hover:text-white transition"><RiLinkedinBoxFill /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
