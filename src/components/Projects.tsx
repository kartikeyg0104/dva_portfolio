import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiBarChart2, FiDollarSign, FiMapPin, FiTrendingUp, FiShoppingBag, FiAward } from 'react-icons/fi'

const projects = [
  {
    id: 'uber',
    title: 'Uber Ride Booking Analysis',
    subtitle: 'Ride Demand Intelligence Dashboard',
    problem: 'Uber generates millions of ride data points daily. Without clear analysis, understanding demand patterns, peak hours, and revenue drivers becomes guesswork.',
    solution: 'Built an end-to-end analytics pipeline using Python for data processing and Tableau for interactive visualization — revealing hidden demand patterns and revenue optimization opportunities.',
    impact: 'Identified peak demand windows, mapped revenue trends across time periods, and uncovered location-based intelligence for smarter resource allocation.',
    insights: [
      { icon: FiBarChart2, text: 'Peak demand hour identification' },
      { icon: FiDollarSign, text: 'Revenue trend analysis' },
      { icon: FiMapPin, text: 'Location-based intelligence' },
    ],
    tech: ['Python', 'Pandas', 'Tableau'],
    liveUrl: 'https://public.tableau.com/views/UberDashboard_17773928628290/Dashboard1',
    githubUrl: 'https://github.com/kartikeyg0104',
    accent: 'cyan',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Perfume Analysis',
    subtitle: '2,000+ Products · 1.25M+ Sales Records',
    problem: 'A perfume e-commerce business needed to understand pricing strategies, brand performance, and revenue distribution across 2,000+ SKUs to optimize their catalog.',
    solution: 'Analyzed 1.25M+ sales records using Python for deep-dive statistical analysis and built a Tableau dashboard for real-time performance monitoring.',
    impact: 'Revealed optimal pricing tiers, identified top-performing brands, and mapped revenue concentration — enabling data-driven catalog optimization.',
    insights: [
      { icon: FiTrendingUp, text: 'Pricing strategy optimization' },
      { icon: FiShoppingBag, text: 'Brand performance ranking' },
      { icon: FiAward, text: 'Revenue distribution analysis' },
    ],
    tech: ['Python', 'Tableau'],
    liveUrl: 'https://public.tableau.com/views/Ecommerce-Perfume_17773934985700/Dashboard1',
    githubUrl: 'https://github.com/kartikeyg0104',
    accent: 'purple',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent-cyan text-sm tracking-wider uppercase">
            // Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Projects That <span className="gradient-text">Deliver Impact</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Real data, real insights, real dashboards — each project solves a genuine business problem.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass rounded-3xl overflow-hidden project-card"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        project.accent === 'cyan' ? 'bg-accent-cyan' : 'bg-accent-purple'
                      } animate-pulse-glow`} />
                      <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                        Project {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
                      {project.title}
                    </h3>
                    <p className={`font-mono text-sm mt-1 ${
                      project.accent === 'cyan' ? 'text-accent-cyan' : 'text-accent-purple'
                    }`}>
                      {project.subtitle}
                    </p>
                  </div>
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg bg-dark-500/50 text-text-secondary text-xs font-mono border border-glass-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem → Solution → Impact */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Problem', text: project.problem, color: 'text-red-400' },
                    { label: 'Solution', text: project.solution, color: 'text-accent-cyan' },
                    { label: 'Impact', text: project.impact, color: 'text-green-400' },
                  ].map((block) => (
                    <div
                      key={block.label}
                      className="bg-dark-800/50 rounded-xl p-5 border border-glass-border"
                    >
                      <span className={`font-mono text-xs uppercase tracking-wider ${block.color} font-medium`}>
                        {block.label}
                      </span>
                      <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Insights */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.insights.map((insight) => (
                    <div
                      key={insight.text}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-600/30 border border-glass-border"
                    >
                      <insight.icon className={`text-sm ${
                        project.accent === 'cyan' ? 'text-accent-cyan' : 'text-accent-purple'
                      }`} />
                      <span className="text-text-secondary text-sm">{insight.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1 ${
                      project.accent === 'cyan'
                        ? 'bg-gradient-to-r from-accent-cyan to-accent-teal text-dark-900 hover:shadow-lg hover:shadow-accent-cyan/20'
                        : 'bg-gradient-to-r from-accent-purple to-accent-pink text-white hover:shadow-lg hover:shadow-accent-purple/20'
                    }`}
                  >
                    <FiExternalLink />
                    Live Dashboard
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiGithub />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
