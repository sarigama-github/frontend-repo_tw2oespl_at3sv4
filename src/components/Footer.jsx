import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-black py-12 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="text-sm text-white/70">Made in Mauritius 💙 with AI</div>
        <div className="flex items-center gap-4">
          {[Github, Twitter, Linkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -2, boxShadow: '0 0 20px rgba(255,106,0,0.35)' }}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-white/80"
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
