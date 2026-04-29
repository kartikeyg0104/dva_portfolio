import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { FiDatabase, FiBarChart2, FiCode, FiTool, FiPieChart, FiActivity } from 'react-icons/fi'

const skillGroups = [
  {
    title: 'Programming',
    icon: FiCode,
    color: 'from-accent-cyan to-teal-400',
    skills: [
      { name: 'Python', icon: SiPython, level: 85 },
      { name: 'SQL', icon: FiDatabase, level: 80 },
    ],
  },
  {
    title: 'Data & Analytics',
    icon: FiBarChart2,
    color: 'from-accent-blue to-indigo-400',
    skills: [
      { name: 'Tableau', icon: FiPieChart, level: 90 },
      { name: 'Power BI', icon: FiActivity, level: 75 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 78 },
    ],
  },
  {
    title: 'Libraries',
    icon: FiDatabase,
    color: 'from-accent-purple to-pink-400',
    skills: [
      { name: 'Pandas', icon: SiPandas, level: 82 },
      { name: 'NumPy', icon: SiNumpy, level: 78 },
      { name: 'Matplotlib', icon: FiBarChart2, level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    color: 'from-accent-pink to-rose-400',
    skills: [
      { name: 'Excel', icon: FiBarChart2, level: 88 },
      { name: 'Git', icon: SiGit, level: 76 },
      { name: 'GitHub', icon: SiGithub, level: 80 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-accent-cyan text-sm tracking-wider uppercase">
            // Tech Stack
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            My toolkit for transforming data into actionable intelligence
          </p>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + gi * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 skill-badge"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                  <group.icon className="text-lg text-dark-900" />
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary">
                  {group.title}
                </h3>
              </div>

              {/* Skills with progress */}
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <skill.icon className="text-text-secondary text-lg" />
                        <span className="text-text-primary font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-text-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-dark-500 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + gi * 0.15 + si * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
