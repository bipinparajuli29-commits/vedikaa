import Image from 'next/image'
import FadeInView from './FadeInView'
import type { Testimonial } from '@/lib/types'

const testimonials: Testimonial[] = [
  { text: 'Vedika Weddings captured moments we didn\'t even notice happening. When we watched our film, we cried — not because it was sad, but because it was perfect. Every glance, every touch — preserved forever.', name: 'Priya & Arjun Sharma', meta: 'Pokhara · Feb 2024', avatar: 'https://i.pravatar.cc/44?img=5', rating: 5 },
  { text: 'We hired them for photography and ended up getting so much more. Their team guided us on poses, lighting, timing — we felt like movie stars. The final album is something we\'ll pass down to our grandchildren.', name: 'Sita & Ramesh Thapa', meta: 'Kathmandu · Nov 2023', avatar: 'https://i.pravatar.cc/44?img=9', rating: 5 },
  { text: 'From our first call to the final delivery, professionalism at every step. They understood our vision — a destination wedding at Club Himalaya — and executed it beyond our dreams. Absolutely extraordinary.', name: 'Anisha & Dev Poudel', meta: 'Nagarkot · Jan 2024', avatar: 'https://i.pravatar.cc/44?img=12', rating: 5 },
  { text: 'The planning hub alone was worth it. They helped us find our venue, suggested our decor theme, even recommended our bridal makeup artist. It was like having a best friend who happened to be an expert.', name: 'Maya & Suraj Karki', meta: 'Pokhara · March 2024', avatar: 'https://i.pravatar.cc/44?img=15', rating: 5 },
]

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[360px] flex-shrink-0 border border-white/7 p-8 relative bg-brand-offblack">
      <div className="absolute top-3 left-6 font-serif text-[5rem] text-gold/10 leading-none select-none">❝</div>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} className="text-gold text-sm">★</span>
        ))}
      </div>
      <p className="font-serif text-[0.98rem] font-light text-white/65 leading-[1.9] italic mb-6">{t.text}</p>
      <div className="flex items-center gap-3">
        <Image src={t.avatar} alt={t.name} width={44} height={44} className="rounded-full border border-gold/30" />
        <div>
          <div className="text-[0.85rem] text-white font-medium">{t.name}</div>
          <div className="text-[0.65rem] tracking-[0.1em] uppercase text-gold mt-0.5">{t.meta}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]
  return (
    <section id="testimonials" className="py-24 bg-brand-offblack overflow-hidden">
      <FadeInView className="text-center mb-12 px-6">
        <span className="section-tag">Love Notes</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
          What Our Couples <em className="not-italic text-gold">Say</em>
        </h2>
      </FadeInView>

      <div className="overflow-hidden">
        <div className="testimonials-track gap-6">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <FadeInView className="flex flex-wrap justify-center gap-8 mt-12 px-6">
        {['350+ Weddings Covered', '12+ Years in Nepal', 'Pokhara & Kathmandu', '98% 5-Star Reviews'].map((b) => (
          <div key={b} className="text-[0.7rem] tracking-[0.15em] uppercase text-white/30 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold" />
            {b}
          </div>
        ))}
      </FadeInView>
    </section>
  )
}
