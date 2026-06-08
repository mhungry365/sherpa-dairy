import { CartProvider } from '@/components/cart-context'
import { Navbar } from '@/components/navbar'
import { CartDrawer } from '@/components/cart-drawer'
import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { WhySection } from '@/components/why-section'
import { ChhurpiSpotlight } from '@/components/chhurpi-spotlight'
import { GheeExperience } from '@/components/ghee-experience'
import { FarmToTable } from '@/components/farm-to-table'
import { Testimonials } from '@/components/testimonials'
import { TrustSection } from '@/components/trust-section'
import { VideoSection } from '@/components/video-section'
import { Newsletter } from '@/components/newsletter'
import { Footer } from '@/components/footer'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sherpa Dairy',
    description:
      'Authentic Chhurpi dog chews, traditional Himalayan Ghee, and premium dairy products from Nepal.',
    brand: 'Sherpa Dairy',
    areaServed: 'Worldwide',
  }

  return (
    <CartProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <FeaturedProducts />
        <WhySection />
        <ChhurpiSpotlight />
        <GheeExperience />
        <FarmToTable />
        <Testimonials />
        <TrustSection />
        <VideoSection />
        <Newsletter />
      </main>
      <Footer />
    </CartProvider>
  )
}
