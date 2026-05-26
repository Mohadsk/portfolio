import { useState } from "react"
import { FiMail, FiPhone, FiMapPin, FiArrowUp, FiSend } from "react-icons/fi"
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri"

function Contact() {

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const FORMPSREE_ENDPOINT = "https://formspree.io/f/xpqnynlb" // replace YOUR_FORM_ID with your Formspree ID

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(FORMPSREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      })

      if (res.ok) {
        setStatus({ loading: false, success: "Message sent successfully.", error: null })
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus({ loading: false, success: null, error: data.error || "Failed to send message." })
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || "Network error" })
    }
  }

  return (

    <section id="contact" className="relative bg-[#081121] py-20 sm:py-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold mb-3">Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span></h2>

          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>

        </div>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start">

          <div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h3>

            <p className="text-gray-300 text-lg leading-8 mb-8 max-w-[620px]">Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>

            <div className="space-y-8 mt-8">
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-[#0f1724] border border-white/6 flex items-center justify-center text-cyan-400">
                    <FiMapPin />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Mumbai, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-[#0f1724] border border-white/6 flex items-center justify-center text-cyan-400">
                    <FiMail />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Email</h4>
                  <p className="text-gray-300">skmohammad0783@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <div className="h-12 w-12 rounded-full bg-[#0f1724] border border-white/6 flex items-center justify-center text-cyan-400">
                    <FiPhone />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+91 8976488622</p>
                </div>
              </div>

            </div>

          </div>

          <div className="rounded-[28px] border border-white/8 bg-[#0d1729] p-8 shadow-2xl">

            <h3 className="text-2xl md:text-3xl font-bold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Your Name</label>
                  <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full rounded-2xl border border-white/8 bg-[#131f3b] px-4 py-3 text-white outline-none focus:border-cyan-400 transition" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Your Email</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full rounded-2xl border border-white/8 bg-[#131f3b] px-4 py-3 text-white outline-none focus:border-cyan-400 transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" className="w-full rounded-2xl border border-white/8 bg-[#131f3b] px-4 py-3 text-white outline-none focus:border-cyan-400 transition" />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="6" placeholder="Message" className="w-full rounded-2xl border border-white/8 bg-[#131f3b] px-4 py-3 text-white outline-none focus:border-cyan-400 transition resize-none"></textarea>
              </div>

              <div>
                <div>
                  {status.success && <div className="mb-3 rounded-lg bg-emerald-600/20 text-emerald-300 px-4 py-2">{status.success}</div>}
                  {status.error && <div className="mb-3 rounded-lg bg-red-600/20 text-red-300 px-4 py-2">{status.error}</div>}
                  <button disabled={status.loading} type="submit" className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-cyan-400 to-purple-600 hover:opacity-95 transition disabled:opacity-60">
                    <span>{status.loading ? 'Sending...' : 'Send Message'}</span>
                    <FiSend className="text-white" />
                  </button>
                </div>
              </div>

            </form>

          </div>

        </div>

      </div>

      <button onClick={scrollTop} className="absolute right-8 bottom-8 h-12 w-12 rounded-full bg-cyan-400 text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
        <FiArrowUp />
      </button>

    </section>

  )
}

export default Contact