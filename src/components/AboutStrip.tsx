import Image from 'next/image'
import FadeInView from './FadeInView'

const stats = [
  { num: '350+', label: 'Weddings' },
  { num: '12+', label: 'Years' },
  { num: '98%', label: '5-Star Reviews' },
]

export default function AboutStrip() {
  return (
    <section
      id="about-strip"
      className="py-24 px-6 lg:px-12 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
    >
      {/* Image */}
      <FadeInView>
        <div className="relative">
          <div className="absolute -top-6 -left-6 right-6 bottom-6 border border-gold/25 -z-10 hidden lg:block" />
          <Image
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
            alt="Wedding photography by Vedika Weddings"
            width={800}
            height={1067}
            className="w-full aspect-[3/4] object-cover"
            style={{ filter: 'grayscale(15%)' }}
          />
        </div>
      </FadeInView>

      {/* Text */}
      <FadeInView delay={0.2}>
        <span className="inline-block bg-gold text-black px-4 py-1 text-[0.65rem] tracking-[0.2em] uppercase font-medium mb-6">
          Our Story
        </span>
        <span className="section-tag">Vedika Weddings</span>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-white">
          We Don't Just <em className="not-italic text-gold">Photograph Weddings.</em>
          <br />
          We Tell Love Stories.
        </h2>
        <p className="font-serif text-[1.1rem] font-light text-white/70 leading-[1.9] mt-6">
          Born in the mountains of Nepal, we believe every couple deserves imagery as timeless as
          their love. From the misty lakesides of Pokhara to the ancient temples of Kathmandu —
          we chase the light, the tears, the laughter in between.
        </p>
        <p className="text-[0.85rem] text-white/45 leading-[1.9] mt-4 max-w-lg">
          Each frame is intentional. Each film is a poem. This is not documentation — this is art.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gold/15">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-[2.5rem] font-light text-gold">{s.num}</div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeInView>
    </section>
  )
}
