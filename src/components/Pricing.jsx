import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '$9', features: ['200 generations', 'Basic upscaler', 'Community support'] },
  { name: 'Pro', price: '$29', features: ['2,500 generations', 'Advanced editing', 'Priority support'] },
  { name: 'Unlimited', price: '$79', features: ['Unlimited generations', 'Full suite', 'Enterprise priority'] },
]

export default function Pricing() {
  return (
    <section className="relative bg-[linear-gradient(180deg,#0a0a0a,#050505)] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-10 text-center text-3xl font-bold">Pricing</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -6, boxShadow: '0 0 50px rgba(255,106,0,0.25)' }}
              className="group relative overflow-hidden rounded-2xl border border-orange-500/30 bg-black/50 p-6 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-orange-400/40" style={{ boxShadow: '0 0 60px rgba(255,106,0,0.25)' }} />
              <div className="mb-4 text-sm tracking-wider text-orange-400">{t.name}</div>
              <div className="mb-6 text-4xl font-extrabold">{t.price}<span className="text-lg font-medium text-white/60">/mo</span></div>
              <ul className="space-y-2 text-white/80">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.02 }} className="mt-6 w-full rounded-full bg-orange-500/90 py-2 font-semibold text-white shadow-[0_0_20px_rgba(255,106,0,0.35)]">
                Choose {t.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
