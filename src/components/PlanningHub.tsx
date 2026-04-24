'use client'
import Image from 'next/image'
import { useState } from 'react'
import FadeInView from './FadeInView'
import { venues, events, decorThemes, musicSections, stylingTips } from '@/lib/planning'

type DetailKey = 'venues' | 'styling' | 'events' | 'music' | 'decor' | null

const cards = [
  { key: 'venues' as DetailKey, icon: '🏛', title: 'Venues in Nepal', desc: 'Top wedding venues in Pokhara & Kathmandu', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=80' },
  { key: 'styling' as DetailKey, icon: '👗', title: 'Dress & Styling', desc: 'Bridal and groom style inspiration', image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=600&q=80' },
  { key: 'events' as DetailKey, icon: '📅', title: 'Events Guide', desc: 'Engagement, mehendi, haldi, wedding, reception', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80' },
  { key: 'music' as DetailKey, icon: '🎵', title: 'Music & Entertainment', desc: 'Playlist ideas from ceremony to reception', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80' },
  { key: 'decor' as DetailKey, icon: '🌸', title: 'Decor & Themes', desc: 'Modern, traditional, boho, and royal aesthetics', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80' },
  { key: null, icon: '📖', title: 'Wedding Journal', desc: 'Tips, guides, and real wedding stories', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80', href: '/blog' },
]

export default function PlanningHub() {
  const [detail, setDetail] = useState<DetailKey>(null)

  return (
    <section id="planning" className="py-24 px-6 lg:px-12 bg-brand-offblack">
      <FadeInView className="text-center mb-16">
        <span className="section-tag">Wedding Planning Hub</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
          Everything You Need to <em className="not-italic text-gold">Plan Your Day</em>
        </h2>
        <p className="text-[0.85rem] text-white/45 mt-4 max-w-lg mx-auto">
          From venue scouting to the final dance — we guide you through every step.
        </p>
      </FadeInView>

      {/* Card grid */}
      {detail === null && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1300px] mx-auto">
          {cards.map((card, i) => (
            <FadeInView key={card.title} delay={i * 0.08}>
              <div
                className="plan-card relative overflow-hidden cursor-pointer border border-white/[0.06] hover:border-gold/30 transition-all duration-300"
                onClick={() => card.key ? setDetail(card.key) : (window.location.href = card.href || '/blog')}
              >
                <div className="plan-card-img aspect-[4/3] w-full relative overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    style={{ filter: 'brightness(0.5)' }}
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 to-transparent">
                  <div className="text-2xl mb-1">{card.icon}</div>
                  <h3 className="font-serif text-[1.35rem] font-light text-white">{card.title}</h3>
                  <p className="text-[0.75rem] text-white/50 mt-1">{card.desc}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 border border-gold/40 flex items-center justify-center text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      )}

      {/* Detail panels */}
      {detail && (
        <div className="max-w-[1200px] mx-auto">
          <button
            onClick={() => setDetail(null)}
            className="flex items-center gap-2 text-gold text-[0.65rem] tracking-[0.15em] uppercase mb-8 hover:gap-3 transition-all"
          >
            ← Back to Planning
          </button>

          {detail === 'venues' && (
            <>
              <FadeInView><span className="section-tag">Venue Guide</span>
              <h2 className="font-serif text-3xl font-light text-white mb-8">Top Venues in <em className="not-italic text-gold">Nepal</em></h2></FadeInView>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {venues.map((v) => (
                  <div key={v.name} className="border border-white/8 hover:border-gold/30 transition-colors overflow-hidden">
                    <Image src={v.image} alt={v.name} width={600} height={338} className="w-full aspect-video object-cover" style={{ filter: 'brightness(0.8)' }} loading="lazy" />
                    <div className="p-6">
                      <div className="text-[0.6rem] tracking-[0.2em] uppercase text-gold mb-1">📍 {v.location}</div>
                      <h3 className="font-serif text-[1.4rem] font-light text-white mb-2">{v.name}</h3>
                      <p className="text-[0.8rem] text-white/50 leading-[1.8]">{v.description}</p>
                      <div className="flex gap-2 flex-wrap mt-4">
                        {v.tags.map((t) => (
                          <span key={t} className="text-[0.6rem] tracking-[0.1em] uppercase px-3 py-1 border border-gold/30 text-gold">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {detail === 'styling' && (
            <>
              <FadeInView><span className="section-tag">Style Guide</span>
              <h2 className="font-serif text-3xl font-light text-white mb-8">Bridal &amp; Groom <em className="not-italic text-gold">Style Inspiration</em></h2></FadeInView>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[...stylingTips.bride, ...stylingTips.groom].map((s) => (
                  <div key={s.theme} className="p-6 border border-white/8 hover:border-gold/30 transition-colors text-center">
                    <div className="text-3xl mb-3">{s.icon}</div>
                    <h3 className="font-serif text-lg font-light text-white mb-2">{s.theme}</h3>
                    <p className="text-[0.78rem] text-white/50 leading-[1.8]">{s.description}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 border border-gold/20 bg-gold/[0.04]">
                <h3 className="font-serif text-lg font-light text-gold mb-2">💡 Pro Styling Tip</h3>
                <p className="text-[0.82rem] text-white/55 leading-[1.9]">Always do a trial shoot 1–2 weeks before the wedding to test how your outfit and makeup photograph under different lighting. We offer complimentary style consultations for Premium and Luxury clients.</p>
              </div>
            </>
          )}

          {detail === 'events' && (
            <>
              <FadeInView><span className="section-tag">Events Timeline</span>
              <h2 className="font-serif text-3xl font-light text-white mb-8">The Complete <em className="not-italic text-gold">Wedding Journey</em></h2></FadeInView>
              <div className="flex flex-col">
                {events.map((ev) => (
                  <div key={ev.day} className="grid gap-x-8 py-8" style={{ gridTemplateColumns: '80px 1px 1fr' }}>
                    <div className="font-serif text-[3rem] font-light text-gold/30 leading-none text-right">{ev.day}</div>
                    <div className="bg-gold/20 relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold border-2 border-brand-black" />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-[1.5rem] font-light text-white mb-2">{ev.name}<em className="not-italic text-gold">{ev.nameEm}</em></h3>
                      <p className="text-[0.82rem] text-white/55 leading-[1.9] mb-3">{ev.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {ev.tips.map((t) => (
                          <span key={t} className="text-[0.65rem] tracking-[0.1em] px-3 py-1 bg-gold/8 border border-gold/20 text-gold/80">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {detail === 'music' && (
            <>
              <FadeInView><span className="section-tag">Music Guide</span>
              <h2 className="font-serif text-3xl font-light text-white mb-8">Set the <em className="not-italic text-gold">Perfect Mood</em></h2></FadeInView>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {musicSections.map((m) => (
                  <div key={m.title} className="border border-white/8 hover:border-gold/30 transition-colors p-6">
                    <div className="text-[0.6rem] tracking-[0.2em] uppercase text-gold mb-2">{m.category}</div>
                    <h3 className="font-serif text-[1.3rem] font-light text-white mb-2">{m.title}</h3>
                    <p className="text-[0.8rem] text-white/50 leading-[1.8] mb-4">{m.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {m.tags.map((t) => (
                        <span key={t} className="text-[0.6rem] uppercase px-3 py-1 border border-gold/30 text-gold">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {detail === 'decor' && (
            <>
              <FadeInView><span className="section-tag">Decor & Themes</span>
              <h2 className="font-serif text-3xl font-light text-white mb-8">Design Your <em className="not-italic text-gold">Dream Aesthetic</em></h2></FadeInView>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {decorThemes.map((d) => (
                  <div key={d.theme} className="p-8 border border-white/8 hover:border-gold/30 transition-colors">
                    <div className="text-3xl mb-3">{d.icon}</div>
                    <h3 className="font-serif text-xl font-light text-white mb-3">{d.theme}</h3>
                    <p className="text-[0.8rem] text-white/50 leading-[1.8]">{d.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  )
}
