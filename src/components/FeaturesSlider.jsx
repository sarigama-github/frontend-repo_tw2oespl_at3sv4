import { motion } from 'framer-motion'

const items = [
  { title: 'Image Generator' },
  { title: 'Portrait Enhancer' },
  { title: 'Anime Maker' },
  { title: 'Poster Designer' },
  { title: 'Mockup Builder' },
  { title: 'Upscaler' },
]

export default function FeaturesSlider() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#030303, #0b0b0b)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-6 text-center text-3xl font-bold">AI Features Showcase</h3>
        <div className="no-scrollbar -mx-6 overflow-x-auto px-6">
          <div className="flex gap-5">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                whileHover={{ y: -8 }}
                className="group relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl border border-orange-500/20 bg-[linear-gradient(120deg,rgba(255,106,0,0.1),rgba(0,0,0,0.6))] p-5 shadow-[0_0_30px_rgba(255,106,0,0.08)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 60px rgba(255,106,0,0.35) inset' }} />
                <div className="h-full w-full rounded-xl border border-white/10 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-lg font-semibold">{it.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
