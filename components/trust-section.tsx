'use client'

import { motion } from 'motion/react'
import { Award, FlaskConical, Globe2, ShieldCheck, Truck } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'HACCP Certified' },
  { icon: Award, label: 'ISO 22000' },
  { icon: FlaskConical, label: 'Lab Tested' },
  { icon: Truck, label: 'Export Grade' },
  { icon: Globe2, label: 'Globally Shipped' },
]

const regions = [
  { city: 'Kathmandu', sub: 'Origin', x: '50%', y: '52%' },
  { city: 'New York', sub: 'Distribution', x: '24%', y: '40%' },
  { city: 'London', sub: 'Distribution', x: '47%', y: '34%' },
  { city: 'Dubai', sub: 'Hub', x: '58%', y: '46%' },
  { city: 'Sydney', sub: 'Distribution', x: '85%', y: '74%' },
  { city: 'Tokyo', sub: 'Distribution', x: '82%', y: '42%' },
]

export function TrustSection() {
  return (
    <section id="trust" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Global Trust & Quality
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
            Certified, tested, and trusted everywhere
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground"
            >
              <b.icon className="size-4.5 text-primary" strokeWidth={1.75} />
              {b.label}
            </div>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-border bg-primary p-6 md:p-10">
          <div className="relative aspect-[2/1] w-full">
            <img
              src="/placeholder.svg?height=600&width=1200"
              alt="World map showing Sherpa Dairy international distribution"
              className="size-full rounded-2xl object-cover opacity-25"
            />
            {regions.map((r, i) => (
              <motion.div
                key={r.city}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                style={{ left: r.x, top: r.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span className="relative flex size-3">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-3 rounded-full bg-accent" />
                </span>
                <div className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-center">
                  <p className="text-xs font-semibold text-cream">{r.city}</p>
                  <p className="text-[10px] uppercase tracking-wide text-cream/60">
                    {r.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
