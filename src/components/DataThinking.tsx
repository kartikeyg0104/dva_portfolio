import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiHelpCircle, FiSearch, FiCheckCircle, FiTarget } from 'react-icons/fi'

const steps = [
  {
    num: '01',
    icon: FiHelpCircle,
    title: 'Ask the Right Questions',
    desc: 'Before touching data, I define the business question. What decision are we trying to make? What does success look like? The quality of analysis depends on the quality of the question.',
    color: 'text-accent-cyan',
    glow: 'from-accent-cyan/20',
  },
  {
    num: '02',
    icon: FiSearch,
    title: 'Explore & Discover Patterns',
    desc: 'I dig deep into data — cleaning, transforming, visualizing. This is where hidden patterns emerge: correlations, outliers, trends that tell the real story behind the numbers.',
    color: 'text-accent-blue',
    glow: 'from-accent-blue/20',
  },
  {
    num: '03',
    icon: FiCheckCircle,
    title: 'Validate & Stress-Test',
    desc: 'Insights without validation are just guesses. I cross-reference findings, test hypotheses, and ensure that patterns are statistically significant — not noise.',
    color: 'text-accent-purple',
    glow: 'from-accent-purple/20',
  },
  {
    num: '04',
    icon: FiTarget,
    title: 'Translate to Business Impact',
    desc: 'Data is only valuable when it drives action. I build dashboards and reports that translate complex findings into clear, actionable recommendations stakeholders can act on immediately.',
    color: 'text-accent-pink',
    glow: 'from-accent-pink/20',
  },
]

export default function DataThinking() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent-cyan text-sm tracking-wider uppercase">
            // Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            My Approach to <span className="gradient-text">Data</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            A structured, repeatable framework that turns ambiguity into clarity
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 sm:p-8 group hover:border-accent-cyan/15 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  {/* Step number + icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.glow} to-transparent flex items-center justify-center border border-glass-border`}>
                      <step.icon className={`text-2xl ${step.color}`} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-700 border border-glass-border flex items-center justify-center font-mono text-[10px] text-text-muted">
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-[0.95rem] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute left-[2.65rem] top-[4.5rem] h-6 w-px bg-gradient-to-b from-glass-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
