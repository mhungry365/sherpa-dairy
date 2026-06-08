'use client'

import { motion } from 'motion/react'

const steps = [
  {
    n: '01',
    title: 'Mountain Farms',
    desc: 'Yaks and cows graze freely across high-altitude alpine pastures.',
  },
  {
    n: '02',
    title: 'Milk Collection',
    desc: 'Fresh milk is gathered daily and chilled at source.',
  },
  {
    n: '03',
    title: 'Traditional Production',
    desc: 'Crafted by hand using time-honored Sherpa methods.',
  },
  {
    n: '04',
    title: 'Quality Testing',
    desc: 'Each batch is lab-verified to export-grade standards.',
  },
  {
    n: '05',
    title: 'Global Export',
    desc: 'Carefully packed and shipped to homes in 40+ countries.',
  },
]

export function FarmToTable() {
  return (
    <section id="story" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              From Farm to Table
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
              A journey from the peaks to your home
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Full traceability at every step — from the high pastures of Nepal
              to international quality assurance and global delivery.
            </p>
            <div className="mt-8 overflow-hidden rounded-[2rem]">
              <img
                src="/images/farm-yak.png"
                alt="Yaks grazing on a high Himalayan pasture beside a traditional stone dairy hut"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <ol className="relative">
            {steps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-5 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-accent bg-accent/10 font-heading text-sm font-semibold text-primary">
                    {step.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
