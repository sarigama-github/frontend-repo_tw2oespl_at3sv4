import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ImageEditing() {
  const [pos, setPos] = useState(50)

  return (
    <section className="relative bg-gradient-to-b from-[#0b0b0b] to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Transform Anything. Instantly.</h2>
          <p className="mt-2 text-white/70">Erase, enhance, recolor, upscale — all with one click.</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-0 backdrop-blur-md">
          <div className="relative aspect-[16/9] w-full">
            <img
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop"
              alt="Before"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop"
                alt="After"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_200px_at_30%_30%,rgba(255,106,0,0.15),transparent)]" />
            </div>

            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDrag={(e, info) => {
                const rect = e.currentTarget.parentElement.getBoundingClientRect()
                const x = info.point.x - rect.left
                setPos(Math.max(0, Math.min(100, (x / rect.width) * 100)))
              }}
              className="absolute left-0 top-0 z-10 h-full"
              style={{ left: `calc(${pos}% - 1px)` }}
            >
              <div className="relative h-full w-[2px] bg-white/70">
                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 shadow-[0_0_20px_rgba(255,106,0,0.35)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
