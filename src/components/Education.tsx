import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent-cyan text-sm tracking-wider uppercase">
            // Education
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-10 relative overflow-hidden group hover:border-accent-cyan/15 transition-all duration-300"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent-cyan/5 to-transparent rounded-bl-[100px] pointer-events-none" />

          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 flex items-center justify-center border border-glass-border">
              <FiBookOpen className="text-2xl text-accent-cyan" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary mb-1">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-accent-cyan font-medium mb-4">
                Computer Science & Engineering
              </p>

              <div className="flex flex-wrap gap-4 text-text-muted text-sm">
                <div className="flex items-center gap-1.5">
                  <FiCalendar className="text-accent-blue" />
                  <span>2024 — 2028</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiMapPin className="text-accent-purple" />
                  <span>India</span>
                </div>
              </div>

              {/* Coursework tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Database Management',
                  'Machine Learning',
                  'Statistics & Probability',
                  'Data Mining',
                  'Operating Systems',
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg bg-dark-600/30 border border-glass-border text-text-secondary text-xs font-mono"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
