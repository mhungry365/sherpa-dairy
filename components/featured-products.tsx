'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Star, Plus, Heart } from 'lucide-react'
import { products, categories } from '@/lib/products'
import { useCart } from './cart-context'
import { cn } from '@/lib/utils'

export function FeaturedProducts() {
  const { add, toggleWishlist, wishlist } = useCart()
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? products
      : products.filter((p) => p.category === active)

  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Featured Collection
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
              Crafted by hand, perfected by the mountains
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Every product is small-batch, traceable to its source farm, and
            tested to export-grade standards before it reaches you.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                active === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-foreground',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, i) => {
            const liked = wishlist.includes(product.id)
            return (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
                    aria-pressed={liked}
                    className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
                  >
                    <Heart
                      className={cn(
                        'size-4.5 transition-colors',
                        liked && 'fill-accent text-accent',
                      )}
                    />
                  </button>
                  <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Star className="size-3.5 fill-accent text-accent" />
                    <span className="font-medium text-foreground">
                      {product.rating}
                    </span>
                    <span>({product.reviews.toLocaleString()})</span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-pretty">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.benefit}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="font-heading text-xl font-semibold">
                      ${product.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(product)}
                      className="group/btn inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:gap-2"
                    >
                      <Plus className="size-4" />
                      Add
                    </button>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
