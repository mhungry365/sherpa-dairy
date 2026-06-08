'use client'

import { useState, useEffect } from 'react'
import { Mountain, ShoppingBag, Search, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from './cart-context'

const links = [
  { label: 'Shop', href: '#products' },
  { label: 'Chhurpi', href: '#chhurpi' },
  { label: 'Ghee', href: '#ghee' },
  { label: 'Our Story', href: '#story' },
  { label: 'Trust', href: '#trust' },
]

export function Navbar() {
  const { count, open } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <a
          href="#top"
          className={cn(
            'flex items-center gap-2 font-heading text-lg font-semibold tracking-tight transition-colors md:text-xl',
            scrolled ? 'text-foreground' : 'text-cream',
          )}
        >
          <Mountain
            className={cn(
              'size-6 transition-colors',
              scrolled ? 'text-primary' : 'text-accent',
            )}
            strokeWidth={1.75}
          />
          Sherpa Dairy
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                scrolled ? 'text-foreground/80' : 'text-cream/90',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              'rounded-full p-2.5 transition-colors hover:bg-foreground/10',
              scrolled ? 'text-foreground' : 'text-cream',
            )}
          >
            <Search className="size-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={open}
            className={cn(
              'relative rounded-full p-2.5 transition-colors hover:bg-foreground/10',
              scrolled ? 'text-foreground' : 'text-cream',
            )}
          >
            <ShoppingBag className="size-5" strokeWidth={1.75} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-4.5 min-w-[18px] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              'rounded-full p-2.5 transition-colors hover:bg-foreground/10 lg:hidden',
              scrolled ? 'text-foreground' : 'text-cream',
            )}
          >
            {mobileOpen ? (
              <X className="size-5" strokeWidth={1.75} />
            ) : (
              <Menu className="size-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium text-foreground/80 last:border-0 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
