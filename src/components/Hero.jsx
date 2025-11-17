import { useEffect, useMemo, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function GlowButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(255,106,0,0.45)' }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden rounded-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 shadow-[0_0_30px_rgba(255,106,0,0.25)] ring-1 ring-orange-400/40"
    >
      <span className="relative z-10">Start Creating</span>
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_80px_at_10%_10%,rgba(255,255,255,0.25),transparent),radial-gradient(120px_80px_at_90%_90%,rgba(255,255,255,0.15),transparent)]" />
    </motion.button>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-50, 50], [8, -8])
  const rotateY = useTransform(mx, [-50, 50], [-8, 8])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mx.set(Math.max(-50, Math.min(50, x / 10)))
      my.set(Math.max(-50, Math.min(50, y / 10)))
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  const particles = useMemo(() => Array.from({ length: 36 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
  })), [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-[#141414] text-white"
    >
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_10%,rgba(255,106,0,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.6))]" />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36"
      >
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-b from-white via-white to-neutral-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          The Most Powerful AI for Images, Creativity & Motion
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-base text-neutral-300 sm:text-lg"
        >
          Generate, edit and enhance visuals instantly with next-gen AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10"
        >
          <GlowButton />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.6, 0.1], y: ['0%', '-20%', '0%'] }}
            transition={{ duration: 6 + p.delay, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.6)]"
          />
        ))}
      </div>
    </section>
  )
}
