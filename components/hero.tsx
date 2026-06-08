'use client'

import { motion } from 'motion/react'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-himalaya.png"
          alt="The high Himalayan mountains of Nepal above the clouds at golden hour"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/45 to-forest/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/60 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
            Sourced from the high mountains of Nepal
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] text-balance text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Pure Himalayan Goodness. Crafted Above the Clouds.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-cream/85 md:text-lg">
            Authentic Chhurpi, Himalayan Ghee, and premium dairy products,
            crafted from milk of mountain farms and held to modern
            international quality standards.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:shadow-lg hover:shadow-accent/20"
            >
              Shop Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/5 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/15"
            >
              <Play className="size-4" />
              Explore Our Story
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-cream/80">
            {[
              ['100%', 'Natural'],
              ['4,000m+', 'Source altitude'],
              ['40+', 'Countries served'],
            ].map(([stat, label]) => (
              <div key={label} className="flex flex-col">
                <span className="font-heading text-2xl font-semibold text-cream">
                  {stat}
                </span>
                <span className="text-xs uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
