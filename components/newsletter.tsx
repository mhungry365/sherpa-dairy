'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center md:px-12 md:py-20">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 size-72 rounded-full bg-cream/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Newsletter
            </span>
            <h2 className="mx-auto mt-3 max-w-xl font-heading text-3xl font-semibold leading-tight text-balance text-cream md:text-4xl lg:text-5xl">
              Join the Sherpa Dairy community
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-cream/80">
              Exclusive discounts, recipes, early product launches, and stories
              from the Himalayas — delivered to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setDone(true)
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 rounded-full border border-cream/25 bg-cream/10 px-5 py-3.5 text-sm text-cream placeholder:text-cream/50 outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:gap-3"
              >
                {done ? (
                  <>
                    <Check className="size-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-xs text-cream/55">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
