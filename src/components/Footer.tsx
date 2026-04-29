import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <span>Built with</span>
          <FiHeart className="text-accent-pink text-xs" />
          <span>by</span>
          <span className="text-text-primary font-medium">Kartikey Gupta</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/kartikeyg0104" target="_blank" rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors p-2">
            <FiGithub className="text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/kartikeyg0104/" target="_blank" rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-cyan transition-colors p-2">
            <FiLinkedin className="text-lg" />
          </a>
          <a href="mailto:kartikeygupta0104@gmail.com"
            className="text-text-muted hover:text-accent-cyan transition-colors p-2">
            <FiMail className="text-lg" />
          </a>
        </div>

        <div className="text-text-muted text-xs font-mono">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
