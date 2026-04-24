import Image from 'next/image'
import FadeInView from './FadeInView'

const philosophy = [
  { title: 'The Light', desc: 'We chase golden hour, embrace shadows, and never use harsh flash when natural light is available.' },
  { title: 'The Moment', desc: 'We blend in. You celebrate. We watch the edges — for the tears, the glances, the laughter.' },
  { title: 'The Story', desc: 'Every wedding has a narrative arc. We sequence images to tell it with intention and emotion.' },
  { title: 'The Legacy', desc: 'Your children will watch your film. Your grandchildren will see your album. We feel that responsibility.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-brand-offblack">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1200px] mx-auto items-center">
        <FadeInView>
          <span className="section-tag">About Vedika Weddings</span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light text-white leading-[1.15]">
            We Are <em className="not-italic text-gold">Storytellers</em> First.
          </h2>

          <blockquote className="font-serif text-[1.5rem] font-light italic text-white leading-[1.5] border-l-2 border-gold pl-6 my-8">
            "A photograph is a secret about a secret. The more it tells you, the less you know."
          </blockquote>

          <p className="text-[0.85rem] text-white/45 leading-[1.9] mb-4 max-w-lg">
            Founded by a photographer obsessed with authentic human emotion, Vedika Weddings began
            in the hills of Pokhara with a simple belief: the best wedding images are the ones
            where the couple forgets we're there.
          </p>
          <p className="text-[0.85rem] text-white/45 leading-[1.9] max-w-lg">
            Today, our team of photographers, videographers, and planners serve couples across
            Nepal — always with the same obsessive attention to light, moment, and meaning.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {philosophy.map((p) => (
              <div key={p.title} className="p-5 border border-white/[0.06] hover:border-gold/30 transition-colors">
                <h4 className="font-serif text-base font-light text-gold mb-2">{p.title}</h4>
                <p className="text-[0.75rem] text-white/45 leading-[1.8]">{p.desc}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.2}>
          <Image
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=700&q=80"
            alt="Vedika Weddings photographer"
            width={700}
            height={900}
            className="w-full object-cover"
            style={{ filter: 'grayscale(15%)' }}
          />
        </FadeInView>
      </div>
    </section>
  )
}
