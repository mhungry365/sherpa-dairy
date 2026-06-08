'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Dog parent · London',
    avatar: '/images/avatar-1.png',
    rating: 5,
    quote:
      'My Labrador is obsessed with the Chhurpi chews. They last for hours and there is zero mess. Finally a treat I feel good about giving him.',
  },
  {
    name: 'Marcus Bennett',
    role: 'Home chef · Toronto',
    avatar: '/images/avatar-2.png',
    rating: 5,
    quote:
      'The ghee has the most incredible aroma. I have completely replaced cooking oil with it. You can taste the quality in every dish.',
  },
  {
    name: 'Sofia Reyes',
    role: 'Cheese lover · Madrid',
    avatar: '/images/avatar-3.png',
    rating: 5,
    quote:
      'The artisanal cheese is unlike anything I have tried. You can tell it is made the traditional way. Sherpa Dairy is now a staple in our home.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const go = (dir: number) =>
    setIndex(
      (prev) => (prev + dir + testimonials.length) % testimonials.length,
    )

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Loved Worldwide
        </span>
        <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
          Trusted by families in 40+ countries
        </h2>

        <div className="relative mt-12 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 font-heading text-xl font-medium leading-relaxed text-balance text-foreground md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={t.avatar || '/placeholder.svg'}
                  alt={t.name}
                  className="size-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="flex items-center gap-1.5 text-sm font-semibold">
                    {t.name}
                    <BadgeCheck className="size-4 text-primary" />
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={
                  i === index
                    ? 'h-2 w-6 rounded-full bg-primary transition-all'
                    : 'h-2 w-2 rounded-full bg-border transition-all'
                }
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary/40"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
