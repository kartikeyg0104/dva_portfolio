import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Decorative elements */}
      <div className="absolute top-32 right-[15%] w-2 h-2 bg-accent-cyan rounded-full animate-pulse-glow" />
      <div className="absolute top-[40%] left-[10%] w-3 h-3 bg-accent-blue rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-accent-purple rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[20%] w-1.5 h-1.5 bg-accent-pink rounded-full animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Status badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="glass rounded-full px-5 py-2.5 flex items-center gap-2.5 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan" />
            </span>
            <span className="text-text-secondary">Open to opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
        >
          I Turn Raw Data Into
          <br />
          <span className="gradient-text">Intelligent Decisions</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Data Analyst & aspiring AI/ML Engineer — I build dashboards that reveal hidden patterns, 
          write code that automates insights, and design data pipelines that drive real business outcomes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="#projects" className="btn-primary">
            <FiArrowDown className="text-lg" />
            View Projects
          </a>
          <a
            href="https://github.com/kartikeyg0104"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FiGithub className="text-lg" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kartikeyg0104/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FiLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a href="/Kartikey_Gupta_Resume.pdf" download className="btn-secondary">
            <FiDownload className="text-lg" />
            Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '2+', label: 'Projects Shipped' },
            { value: '1.25M+', label: 'Data Points Analyzed' },
            { value: '5+', label: 'Tools Mastered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent-cyan rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
