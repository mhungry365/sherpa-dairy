'use client'

import { motion } from 'motion/react'
import { Flame, Wind, HeartPulse, ChefHat } from 'lucide-react'

const points = [
  {
    icon: Flame,
    title: 'Slow clarification',
    desc: 'Simmered for hours over low heat the traditional way.',
  },
  {
    icon: Wind,
    title: 'Rich, nutty aroma',
    desc: 'A deep golden fragrance that fills the kitchen.',
  },
  {
    icon: HeartPulse,
    title: 'Nutritional advantage',
    desc: 'Naturally rich in fat-soluble vitamins and a high smoke point.',
  },
  {
    icon: ChefHat,
    title: 'Endlessly versatile',
    desc: 'For high-heat cooking, baking, drizzling, and daily wellness.',
  },
]

export function GheeExperience() {
  return (
    <section
      id="ghee"
      className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              The Himalayan Ghee Experience
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
              Liquid gold, clarified by tradition
            </h2>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/80">
              Our ghee begins as fresh mountain milk, churned into cultured
              butter and gently clarified until only pure, golden richness
              remains — a heritage practice perfected over generations.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl border border-cream/15 bg-cream/5 p-5 backdrop-blur-sm"
                >
                  <p.icon className="size-6 text-accent" strokeWidth={1.75} />
                  <h3 className="mt-3 font-heading text-base font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 overflow-hidden rounded-[2rem] lg:order-2"
          >
            <img
              src="/images/ghee-pour.png"
              alt="Golden Himalayan ghee being poured from a traditional brass vessel"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
