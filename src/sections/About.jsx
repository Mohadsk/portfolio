function About() {
  return (
    <section id="about" className="bg-[#050816] py-20 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-3">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-2xl p-4 bg-[#081121] border border-white/8 shadow-[0_30px_80px_rgba(59,130,246,0.12)]">
              <div className="overflow-hidden rounded-xl w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <img
                  src="/photo.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Who am I?</h3>
            <p className="text-lg text-gray-300 max-w-3xl">
              I'm an M.Sc. Computer Science student passionate about frontend development, responsive UI design, and modern web applications using React.js, JavaScript, Tailwind CSS, and MongoDB. I craft polished digital experiences that feel professional and easy to use across every device.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-gray-300"><span className="font-semibold text-white">Name:</span> Shaikh Mohammad</p>
                <p className="text-gray-300 mt-3"><span className="font-semibold text-white">Email:</span> skmohammad0783@gmail.com</p>
                <p className="text-gray-300 mt-3"><span className="font-semibold text-white">Phone:</span> +91 8976488622</p>
              </div>
              <div>
                <p className="text-gray-300"><span className="font-semibold text-white">Age:</span> 23</p>
                <p className="text-gray-300 mt-3"><span className="font-semibold text-white">Experience:</span> Frontend development</p>
                <p className="text-gray-300 mt-3"><span className="font-semibold text-white">Location:</span> Mumbai, India</p>
              </div>
            </div>

            <div className="pt-6">
              <a href="/resume.pdf" download className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-base font-medium text-white hover:opacity-90 transition mr-4">
                Download CV
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-cyan-400 text-base font-medium text-cyan-400 hover:bg-cyan-400/10 transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About