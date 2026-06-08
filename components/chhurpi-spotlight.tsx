'use client'

import { motion } from 'motion/react'
import { Check, X, ArrowRight } from 'lucide-react'

const comparison = [
  { label: 'Single natural ingredient', chhurpi: true, ordinary: false },
  { label: 'Lasts for hours of chewing', chhurpi: true, ordinary: false },
  { label: 'High protein, low fat', chhurpi: true, ordinary: false },
  { label: 'No additives or preservatives', chhurpi: true, ordinary: false },
  { label: 'Grain & gluten free', chhurpi: true, ordinary: true },
  { label: 'Artificial flavors', chhurpi: false, ordinary: true },
]

export function ChhurpiSpotlight() {
  return (
    <section id="chhurpi" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/dog-chhurpi.png"
              alt="A happy dog chewing a natural Himalayan chhurpi cheese stick"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-background/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-heading text-2xl font-semibold text-primary">
                97% protein
              </p>
              <p className="text-xs text-muted-foreground">
                of total dry composition
              </p>
            </div>
          </motion.div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Chhurpi Spotlight
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
              The original Himalayan superchew for dogs
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Chhurpi is a centuries-old hard cheese, smoke-dried in the thin
              mountain air until it becomes a dense, long-lasting chew. Made from
              just milk, lime juice, and salt — it&apos;s rich in protein,
              naturally satisfying, and gentle on sensitive stomachs.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 bg-secondary px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span>Comparison</span>
                <span className="text-center text-primary">Chhurpi</span>
                <span className="text-center">Ordinary</span>
              </div>
              {comparison.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-t border-border px-5 py-3 text-sm"
                >
                  <span className="text-foreground/90">{row.label}</span>
                  <span className="flex justify-center">
                    <Indicator value={row.chhurpi} />
                  </span>
                  <span className="flex justify-center">
                    <Indicator value={row.ordinary} muted />
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#products"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-3"
            >
              Shop Chhurpi Chews
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Indicator({ value, muted }: { value: boolean; muted?: boolean }) {
  if (value) {
    return (
      <span className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Check className="size-4" strokeWidth={2.5} />
      </span>
    )
  }
  return (
    <span
      className={
        muted
          ? 'flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground'
          : 'flex size-6 items-center justify-center rounded-full bg-destructive/10 text-destructive'
      }
    >
      <X className="size-4" strokeWidth={2.5} />
    </span>
  )
}
