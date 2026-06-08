'use client'

import { motion } from 'motion/react'
import { Play, Heart } from 'lucide-react'

const videos = [
  {
    image: '/images/vid-1.png',
    title: 'How Chhurpi is made',
    likes: '128K',
  },
  {
    image: '/images/vid-2.png',
    title: 'A very good chew',
    likes: '342K',
  },
  {
    image: '/images/vid-3.png',
    title: 'Ghee, three ways',
    likes: '96K',
  },
  {
    image: '/images/vid-4.png',
    title: 'Sunrise on the farm',
    likes: '211K',
  },
]

export function VideoSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              The Sherpa Reel
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
              Life above the clouds, in motion
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Production, farm life, recipes, and very happy dogs — straight from
            the Himalayas to your feed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {videos.map((v, i) => (
            <motion.button
              key={v.title}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[9/16] overflow-hidden rounded-3xl bg-foreground text-left"
            >
              <img
                src={v.image || '/placeholder.svg'}
                alt={v.title}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-cream/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play className="size-6 fill-cream text-cream" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                <p className="font-heading text-sm font-semibold text-cream">
                  {v.title}
                </p>
                <span className="flex shrink-0 items-center gap-1 text-xs text-cream/90">
                  <Heart className="size-3.5 fill-cream/90" />
                  {v.likes}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
