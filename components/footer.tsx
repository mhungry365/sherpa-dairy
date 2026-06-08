import { Mountain, Camera, Video, MessageCircle } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: ['Chhurpi Chews', 'Himalayan Ghee', 'Cheese', 'Dairy Specialties'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Story', 'Sustainability', 'Wholesale'],
  },
  {
    title: 'Trade',
    links: ['Export', 'Distributors', 'Certifications', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <a
              href="#top"
              className="flex items-center gap-2 font-heading text-xl font-semibold text-cream"
            >
              <Mountain className="size-6 text-accent" strokeWidth={1.75} />
              Sherpa Dairy
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-cream/70">
              Pure Himalayan goodness, crafted above the clouds. Authentic dairy
              from the high mountains of Nepal, made for the world.
            </p>
            <div className="mt-6 flex gap-3">
              {[Camera, Video, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex size-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-cream">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/65 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/55 md:flex-row">
          <p>© {new Date().getFullYear()} Sherpa Dairy. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span>Multi-currency</span>
            <span>Multi-language</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
