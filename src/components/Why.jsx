import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Stars } from 'lucide-react'

const cards = [
  { icon: Zap, title: 'Ultra fast generation', desc: 'Lightning-fast inference optimized for creativity at the speed of thought.' },
  { icon: ShieldCheck, title: 'Safe, private, secure', desc: 'Enterprise-grade privacy, moderation and encrypted storage.' },
  { icon: Stars, title: 'Professional results', desc: 'Consistent, photoreal outputs tuned for production workflows.' },
]

export default function Why() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-10 text-center text-3xl font-bold">Why KOM AI?</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/30 bg-orange-500/10 text-orange-400">
                <c.icon className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold">{c.title}</h4>
              <p className="mt-1 text-white/70">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
