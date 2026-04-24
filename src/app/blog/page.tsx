import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Wedding Journal | Tips, Guides & Inspiration',
  description: "Expert wedding planning tips, venue guides, style inspiration, and real wedding stories from Vedika Weddings — Nepal's luxury wedding photographers.",
  keywords: ['wedding blog Nepal', 'wedding planning tips Nepal', 'Nepali wedding guide'],
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const [featured, ...rest] = posts

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 lg:px-12 max-w-[1200px] mx-auto">
      <div className="text-center mb-16">
        <span className="section-tag">Wedding Journal</span>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-white">
          Stories &amp; <em className="not-italic text-gold">Inspiration</em>
        </h1>
        <p className="text-[0.85rem] text-white/45 mt-4 max-w-lg mx-auto">
          Real weddings, expert planning guides, venue reviews, and style inspiration for couples in Nepal.
        </p>
      </div>

      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/8 hover:border-gold/30 transition-colors overflow-hidden">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" style={{ filter: 'brightness(0.8)' }} />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="inline-block bg-gold text-black text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 font-medium mb-4 w-fit">Featured</span>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-3 block">{featured.category}</span>
              <h2 className="font-serif text-[1.8rem] font-light text-white leading-[1.3] mb-4">{featured.title}</h2>
              <p className="text-[0.82rem] text-white/50 leading-[1.8] mb-6">{featured.excerpt}</p>
              <div className="text-[0.7rem] text-white/30">{featured.date} · {featured.readTime}</div>
            </div>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group border border-white/8 hover:border-gold/30 transition-colors overflow-hidden flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" style={{ filter: 'brightness(0.75)' }} />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold mb-2">{post.category}</span>
              <h3 className="font-serif text-[1.15rem] font-light text-white leading-[1.4] group-hover:text-gold transition-colors mb-3 flex-1">{post.title}</h3>
              <p className="text-[0.78rem] text-white/40 leading-[1.7] mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="text-[0.65rem] text-white/25 border-t border-white/[0.06] pt-3">{post.date} · {post.readTime}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
