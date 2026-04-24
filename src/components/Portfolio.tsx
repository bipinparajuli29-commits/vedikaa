'use client'
import Image from 'next/image'
import { useState } from 'react'
import FadeInView from './FadeInView'
import type { PortfolioItem } from '@/lib/types'

const ALL_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'Priya & Arjun', subtitle: 'Pre-Wedding · Pokhara', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', category: 'pre-wedding' },
  { id: 2, title: 'Sita & Ramesh', subtitle: 'Wedding Day · Kathmandu', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', category: 'wedding' },
  { id: 3, title: 'Anisha & Dev', subtitle: 'Cinematic Film · Pokhara', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', category: 'film' },
  { id: 4, title: 'Maya & Suraj', subtitle: 'Pre-Wedding · Nagarkot', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80', category: 'pre-wedding', colSpan: 2 },
  { id: 5, title: 'Nisha & Binod', subtitle: 'Wedding Day · Chitwan', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80', category: 'wedding' },
  { id: 6, title: 'Kritika & Aarav', subtitle: 'Wedding Day · Kathmandu', image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80', category: 'wedding' },
]

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'pre-wedding', label: 'Pre-Wedding' },
  { key: 'wedding', label: 'Wedding Day' },
  { key: 'film', label: 'Cinematic Films' },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null)

  const filtered = active === 'all' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 bg-brand-offblack">
      {/* Header */}
      <FadeInView className="text-center mb-12">
        <span className="section-tag">Our Work</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
          A Portfolio of <em className="not-italic text-gold">Pure Emotion</em>
        </h2>
      </FadeInView>

      {/* Tabs */}
      <div className="flex justify-center border-b border-white/10 mb-8 gap-0 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`relative px-6 py-3 text-[0.7rem] tracking-[0.15em] uppercase transition-colors duration-300 whitespace-nowrap ${
              active === t.key ? 'text-gold' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {t.label}
            {active === t.key && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`portfolio-item cursor-pointer ${item.colSpan === 2 ? 'sm:col-span-2' : ''}`}
            style={{ aspectRatio: item.colSpan === 2 ? '16/9' : '2/3' }}
            onClick={() => setLightbox(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={item.colSpan === 2 ? 450 : 1067}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="portfolio-overlay">
              <h3 className="font-serif text-xl font-light text-white">{item.title}</h3>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mt-1 block">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/#contact"
          className="inline-block px-10 py-4 border border-gold/40 text-gold text-[0.7rem] tracking-[0.2em] uppercase hover:bg-gold hover:text-black hover:border-gold transition-all duration-300"
        >
          Book Your Session →
        </a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white/60 hover:text-gold text-2xl transition-colors"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <Image
              src={lightbox.image.replace('w=600', 'w=1200').replace('w=800', 'w=1400')}
              alt={lightbox.title}
              width={1200}
              height={800}
              className="w-full object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif text-xl font-light text-white">{lightbox.title}</h3>
              <span className="text-[0.65rem] tracking-widest uppercase text-gold">{lightbox.subtitle}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
