import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Stars } from 'lucide-react'

const samples = [
  'Create a futuristic Mauritian city with neon lights…',
  'A cinematic drone shot of Port Louis at night, cyberpunk vibes…',
  'Hyperreal product photo on glossy black with soft orange glow…',
]

export default function TextToImage() {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)

  useEffect(() => {
    let cancelled = false
    const loop = async () => {
      const phrase = samples[i % samples.length]
      for (let c = 0; c <= phrase.length; c++) {
        if (cancelled) return
        setText(phrase.slice(0, c))
        await new Promise((r) => setTimeout(r, 35))
      }
      await new Promise((r) => setTimeout(r, 1200))
      setI((v) => (v + 1) % samples.length)
    }
    loop()
    return () => {
      cancelled = true
    }
  }, [i])

  const grid = Array.from({ length: 6 }).map((_, idx) => idx)

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(90deg,rgba(255,106,0,0.05)_0%,rgba(255,106,0,0.0)_40%,rgba(255,106,0,0.05)_80%)] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(255,106,0,0.12),transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-2 text-white/80">
          <Stars className="h-5 w-5 text-orange-400" />
          <span className="uppercase tracking-widest text-xs">Text to Image</span>
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <div className="relative z-10 flex items-center gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-3">
            <Sparkles className="h-5 w-5 text-orange-400" />
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={samples[0]}
              className="flex-1 bg-transparent text-white placeholder:text-white/40 focus:outline-none"
            />
            <motion.button whileHover={{ y: -1 }} className="rounded-full bg-orange-500/90 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,106,0,0.35)]">
              Generate
            </motion.button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {grid.map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black"
              >
                <div className="aspect-[4/3] w-full bg-[linear-gradient(120deg,rgba(255,255,255,0.05),rgba(0,0,0,0.4))]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_80px_at_30%_30%,rgba(255,255,255,0.12),transparent)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
