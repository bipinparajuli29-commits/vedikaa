import Image from 'next/image'
import FadeInView from './FadeInView'

const photos = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=300&q=80',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=300&q=80',
]

export default function InstagramGrid() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-brand-black">
      <FadeInView className="text-center mb-8">
        <span className="section-tag">Follow Our Journey</span>
        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light text-white">
          @vedikaweddings <em className="not-italic text-gold">on Instagram</em>
        </h2>
      </FadeInView>

      <FadeInView>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 max-w-[1200px] mx-auto">
          {photos.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/vedikaweddings"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Vedika Weddings Instagram ${i + 1}`}
                fill
                className="object-cover transition-all duration-400 group-hover:brightness-50 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xl">
                ♥
              </div>
            </a>
          ))}
        </div>
      </FadeInView>

      <div className="text-center mt-6">
        <a
          href="https://instagram.com/vedikaweddings"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.7rem] tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors"
        >
          Follow on Instagram →
        </a>
      </div>
    </section>
  )
}
