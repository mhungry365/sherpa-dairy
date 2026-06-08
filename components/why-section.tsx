'use client'

import { motion } from 'motion/react'
import {
  Leaf,
  Mountain,
  Hammer,
  ShieldCheck,
  Sprout,
  Dumbbell,
} from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
    desc: 'No additives, preservatives, or fillers — only pure mountain milk.',
  },
  {
    icon: Mountain,
    title: 'High Himalayan Source',
    desc: 'Milk gathered from farms above 4,000 meters in the Nepalese highlands.',
  },
  {
    icon: Hammer,
    title: 'Traditional Craftsmanship',
    desc: 'Recipes passed down through generations of Sherpa dairy makers.',
  },
  {
    icon: ShieldCheck,
    title: 'Export Quality Standards',
    desc: 'Every batch is lab-tested to meet international food safety norms.',
  },
  {
    icon: Sprout,
    title: 'Sustainable Farming',
    desc: 'Low-impact grazing that protects fragile alpine ecosystems.',
  },
  {
    icon: Dumbbell,
    title: 'Rich in Protein & Nutrients',
    desc: 'Naturally dense in protein, calcium, and healthy fats.',
  },
]

export function WhySection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Why Sherpa Dairy
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
            Purity you can trace to the peak
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-cream"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <f.icon className="size-6" strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
