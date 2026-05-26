import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFigma,
  SiNodedotjs,
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

const technicalSkills = [
  { name: "HTML/CSS", value: "95%" },
  { name: "JavaScript", value: "90%" },
  { name: "React", value: "85%" },
  { name: "Python", value: "80%" },
]

const professionalSkills = [
  { name: "Communication", value: "90%" },
  { name: "Teamwork", value: "85%" },
  { name: "Problem Solving", value: "95%" },
  { name: "Creativity", value: "75%" },
]

const tools = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    color: "text-orange-500",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS",
    color: "text-blue-500",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "text-yellow-400",
  },
  {
    icon: <FaReact />,
    name: "React",
    color: "text-cyan-400",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-400",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    color: "text-orange-500",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: "text-sky-400",
  },
  {
    icon: <VscVscode />,
    name: "VS Code",
    color: "text-white",
  },
]

function Skills() {
  return (
    <section id="skills" className="bg-[#081121] py-20 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          <div className="space-y-10">
            <h3 className="text-2xl md:text-3xl font-bold">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg md:text-xl font-medium">{skill.name}</span>
                    <span className="text-base md:text-lg text-gray-300">{skill.value}</span>
                  </div>
                  <div className="w-full h-3 bg-[#132039] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-purple-600" style={{ width: skill.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <h3 className="text-2xl md:text-3xl font-bold">Professional Skills</h3>
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg md:text-xl font-medium">{skill.name}</span>
                    <span className="text-base md:text-lg text-gray-300">{skill.value}</span>
                  </div>
                  <div className="w-full h-3 bg-[#132039] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-purple-600" style={{ width: skill.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Tools &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="rounded-3xl bg-[#0d1729] p-6 flex flex-col items-center justify-center text-center border border-white/10 hover:-translate-y-1 transition duration-300">
              <div className={`text-3xl mb-3 ${tool.color}`}>{tool.icon}</div>
              <p className="text-base font-medium text-gray-200">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills