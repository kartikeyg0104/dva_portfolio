import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi'

const contactLinks = [
  { icon: FiMail, label: 'Email', value: 'kartikeygupta0104@gmail.com', href: 'mailto:kartikeygupta0104@gmail.com' },
  { icon: FiGithub, label: 'GitHub', value: 'kartikeyg0104', href: 'https://github.com/kartikeyg0104' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'kartikeyg0104', href: 'https://www.linkedin.com/in/kartikeyg0104/' },
  { icon: FiMapPin, label: 'Location', value: 'India', href: '#' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent-cyan text-sm tracking-wider uppercase">// Get in Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about data & AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Links + GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-accent-cyan/20 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 flex items-center justify-center group-hover:from-accent-cyan/20 group-hover:to-accent-blue/20 transition-all">
                  <link.icon className="text-lg text-accent-cyan" />
                </div>
                <div>
                  <div className="text-text-muted text-xs font-mono uppercase tracking-wider">{link.label}</div>
                  <div className="text-text-primary text-sm font-medium mt-0.5">{link.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="glass rounded-xl p-5"
            >
              <div className="text-text-muted text-xs font-mono uppercase tracking-wider mb-3">GitHub Activity</div>
              <img
                src="https://github-readme-stats.vercel.app/api?username=kartikeyg0104&show_icons=true&theme=transparent&hide_border=true&title_color=00f5d4&icon_color=7b61ff&text_color=a0a0b8&bg_color=00000000"
                alt="GitHub Stats"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-text-secondary text-sm font-medium mb-2">Name</label>
                  <input id="contact-name" type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-text-secondary text-sm font-medium mb-2">Email</label>
                  <input id="contact-email" type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-text-secondary text-sm font-medium mb-2">Message</label>
                <textarea id="contact-message" required rows={5} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-input resize-none" placeholder="Tell me about your project or opportunity..." />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <FiSend className="text-lg" />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
              {submitted && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-accent-cyan text-sm">
                  Thanks! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
