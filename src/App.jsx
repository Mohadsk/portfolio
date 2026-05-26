import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  )
}

export default App