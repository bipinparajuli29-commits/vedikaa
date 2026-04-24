import Link from 'next/link'
import FadeInView from './FadeInView'
import type { Package } from '@/lib/types'

const packages: Package[] = [
  {
    tier: 'Tier I',
    name: 'Essential',
    price: 'NPR 60K',
    priceNote: 'Starting price',
    features: ['8 Hours Coverage', '1 Photographer', '300+ Edited Photos', 'Online Gallery', 'USB Delivery'],
  },
  {
    tier: 'Tier II',
    name: 'Classic',
    price: 'NPR 1.2L',
    priceNote: 'Starting price',
    features: ['Full Day Coverage', '2 Photographers', '600+ Edited Photos', 'Highlight Reel (5 min)', 'Printed Album (30 pages)', 'Drone Shots'],
  },
  {
    tier: 'Tier III',
    name: 'Premium',
    price: 'NPR 2.5L',
    priceNote: 'Starting price',
    featured: true,
    features: ['2 Days Full Coverage', '2 Photographers + 1 Videographer', '1000+ Edited Photos', 'Cinematic Film (15 min)', 'Premium Album (50 pages)', 'Drone + Aerial Shots', 'Pre-Wedding Session'],
  },
  {
    tier: 'Tier IV',
    name: 'Luxury',
    price: 'Custom',
    priceNote: 'Bespoke pricing',
    features: ['Multi-Day Coverage', 'Dedicated Creative Team', 'Cinematic Feature Film', 'Destination Shoots', 'Full Planning Support', 'Premium Albums × 2', 'Priority Editing (15 days)'],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 lg:px-12 bg-brand-black">
      <FadeInView className="text-center mb-16">
        <span className="section-tag">Investment</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
          Choose Your <em className="not-italic text-gold">Perfect Package</em>
        </h2>
        <p className="text-[0.85rem] text-white/45 mt-4 max-w-lg mx-auto">
          Every couple is unique. Our packages are starting points — not limits.
        </p>
      </FadeInView>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1300px] mx-auto">
        {packages.map((pkg, i) => (
          <FadeInView key={pkg.name} delay={i * 0.1}>
            <div
              className={`relative h-full flex flex-col border transition-all duration-400 hover:-translate-y-1 p-8 ${
                pkg.featured
                  ? 'border-gold/50 bg-gold/[0.04]'
                  : 'border-white/8 bg-white/[0.02] hover:border-gold/35'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gold text-black text-[0.6rem] tracking-[0.2em] uppercase px-4 py-1 font-medium whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-2">{pkg.tier}</div>
              <div className="font-serif text-[1.8rem] font-light text-white mb-1">{pkg.name}</div>
              <div className="font-serif text-[2.2rem] font-light text-gold mt-4">{pkg.price}</div>
              <div className="text-[0.7rem] text-white/35 tracking-[0.1em] mb-6">{pkg.priceNote}</div>

              <div className="w-8 h-px bg-gold/35 mb-6" />

              <ul className="flex-1 mb-8 space-y-0">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 py-2 border-b border-white/[0.05] text-[0.8rem] text-white/55"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={`block text-center py-3 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 border ${
                  pkg.featured
                    ? 'bg-gold text-black border-gold hover:bg-gold-light'
                    : 'border-gold/30 text-gold hover:bg-gold hover:text-black hover:border-gold'
                }`}
              >
                {pkg.name === 'Luxury' ? 'Request Quote' : 'Enquire Now'}
              </Link>
            </div>
          </FadeInView>
        ))}
      </div>

      {/* Custom quote CTA */}
      <FadeInView delay={0.3} className="text-center mt-12">
        <p className="text-[0.8rem] text-white/40">
          Need something unique?{' '}
          <Link href="/#contact" className="text-gold hover:underline">
            Contact us for a custom quote →
          </Link>
        </p>
      </FadeInView>
    </section>
  )
}
