'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
          filter: 'brightness(0.28)',
        }}
      />
      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <motion.div
          {...fadeUp(0.2)}
          className="text-[0.65rem] tracking-[0.5em] uppercase text-gold/80 mb-8"
        >
          — Pokhara · Kathmandu · Nepal —
        </motion.div>

        <motion.h1
          {...fadeUp(0.5)}
          className="font-serif text-[clamp(3rem,7vw,6rem)] font-light leading-[1.05] text-white"
        >
          From Moments
          <em className="block not-italic text-gold-light font-light">to Memories</em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.8)}
          className="mt-6 text-[0.8rem] tracking-[0.25em] uppercase text-white/50"
        >
          Luxury Wedding Photography &amp; Complete Planning
        </motion.p>

        <motion.div
          {...fadeUp(1.1)}
          className="mt-10 flex gap-5 justify-center flex-wrap"
        >
          <Link href="/#portfolio" className="btn-gold">
            View Portfolio
          </Link>
          <Link href="/#contact" className="btn-outline">
            Book Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about-strip')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="scroll-line" />
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/35">Scroll</span>
      </motion.div>
    </section>
  )
}
