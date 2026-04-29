import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDatabase, FiTrendingUp, FiCpu, FiCode } from 'react-icons/fi'

const highlights = [
  {
    icon: FiDatabase,
    title: 'Data Explorer',
    desc: 'Turning messy datasets into clean, actionable intelligence.',
  },
  {
    icon: FiTrendingUp,
    title: 'Insight Hunter',
    desc: 'Finding patterns that others miss, driving smarter decisions.',
  },
  {
    icon: FiCpu,
    title: 'AI Aspirant',
    desc: 'Building toward machine learning & intelligent systems.',
  },
  {
    icon: FiCode,
    title: 'Builder',
    desc: 'Shipping dashboards, pipelines, and analytical tools.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent-cyan text-sm tracking-wider uppercase">
            // About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            The Story Behind the <span className="gradient-text">Data</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 space-y-5">
              <p className="text-text-secondary leading-relaxed text-[1.05rem]">
                I've always been drawn to the question <span className="text-accent-cyan font-medium">"what does the data say?"</span> — not as a number-cruncher, but as someone who genuinely believes that every dataset tells a story waiting to be heard.
              </p>
              <p className="text-text-secondary leading-relaxed text-[1.05rem]">
                My journey started with curiosity — <span className="text-text-primary font-medium">Excel sheets, then SQL queries, then Python scripts</span> that transformed how I looked at information. I realized that data analysis isn't just about charts. It's about asking the right questions, challenging assumptions, and turning complexity into clarity.
              </p>
              <p className="text-text-secondary leading-relaxed text-[1.05rem]">
                Today, I build <span className="text-text-primary font-medium">interactive dashboards</span> that help teams make decisions in seconds, not hours. I write analytical code that uncovers <span className="text-accent-blue font-medium">revenue patterns, demand signals, and market intelligence</span>.
              </p>
              <p className="text-text-secondary leading-relaxed text-[1.05rem]">
                And I'm not stopping here — my path is leading toward <span className="gradient-text font-semibold">AI and Machine Learning</span>, where I want to build systems that don't just analyze the past but predict and shape the future.
              </p>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 group hover:border-accent-cyan/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 flex items-center justify-center mb-4 group-hover:from-accent-cyan/20 group-hover:to-accent-blue/20 transition-all">
                  <h.icon className="text-xl text-accent-cyan" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-2">
                  {h.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
