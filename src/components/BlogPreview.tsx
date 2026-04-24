import Image from 'next/image'
import Link from 'next/link'
import FadeInView from './FadeInView'
import type { BlogPost } from '@/lib/blog'

interface Props { posts: BlogPost[] }

export default function BlogPreview({ posts }: Props) {
  const [featured, ...rest] = posts

  return (
    <section id="blog" className="py-24 px-6 lg:px-12 bg-brand-black">
      <FadeInView className="text-center mb-16">
        <span className="section-tag">Wedding Journal</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
          Stories, Tips &amp; <em className="not-italic text-gold">Inspiration</em>
        </h2>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 max-w-[1200px] mx-auto">
        {/* Featured post */}
        {featured && (
          <FadeInView>
            <Link href={`/blog/${featured.slug}`} className="block relative overflow-hidden group cursor-pointer">
              <Image
                src={featured.image}
                alt={featured.title}
                width={900}
                height={563}
                className="w-full aspect-[16/10] object-cover transition-all duration-500 group-hover:brightness-[0.35] group-hover:scale-[1.03]"
                style={{ filter: 'brightness(0.5)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-gold block mb-2">{featured.category}</span>
                <h3 className="font-serif text-[1.7rem] font-light text-white leading-[1.3]">{featured.title}</h3>
                <div className="text-[0.7rem] text-white/40 mt-2">{featured.date} · {featured.readTime}</div>
              </div>
            </Link>
          </FadeInView>
        )}

        {/* Side posts */}
        <FadeInView delay={0.15} className="flex flex-col">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="grid gap-4 border-b border-white/[0.06] py-4 cursor-pointer group"
              style={{ gridTemplateColumns: '96px 1fr' }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={96}
                height={96}
                className="w-full aspect-square object-cover"
                style={{ filter: 'brightness(0.7)' }}
              />
              <div>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold block mb-1">{post.category}</span>
                <h4 className="font-serif text-[0.98rem] font-light text-white leading-[1.4] group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h4>
                <div className="text-[0.65rem] text-white/35 mt-2">{post.date}</div>
              </div>
            </Link>
          ))}
          <Link
            href="/blog"
            className="mt-6 text-[0.65rem] tracking-[0.2em] uppercase text-gold hover:gap-3 flex items-center gap-2 transition-all"
          >
            View All Articles →
          </Link>
        </FadeInView>
      </div>
    </section>
  )
}
