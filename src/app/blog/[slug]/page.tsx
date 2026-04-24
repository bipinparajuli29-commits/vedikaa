import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const allPosts = await getAllPosts()
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <article className="min-h-screen pt-24">
      {/* Hero */}
      <div className="relative aspect-[21/9] max-h-[520px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" style={{ filter: 'brightness(0.4)' }} priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-4">{post.category}</span>
          <h1 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-light text-white leading-[1.2] max-w-3xl">
            {post.title}
          </h1>
          <div className="text-[0.7rem] text-white/40 mt-4">{post.date} · {post.readTime}</div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-0 py-16">
        <Link href="/blog" className="flex items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase text-gold mb-10 hover:gap-3 transition-all">
          ← Back to Journal
        </Link>

        {/* Excerpt */}
        <p className="font-serif text-[1.15rem] font-light text-white/75 leading-[1.9] mb-8 italic border-l-2 border-gold pl-6">
          {post.excerpt}
        </p>

        {/* Body */}
        {post.content && (
          <div
            className="prose-vedika"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* CTA */}
        <div className="mt-16 p-8 border border-gold/20 bg-gold/[0.03] text-center">
          <div className="section-tag text-center">Ready to Begin?</div>
          <h3 className="font-serif text-2xl font-light text-white mb-3">
            Let's Capture Your Love Story
          </h3>
          <p className="text-[0.82rem] text-white/45 mb-6">
            Book a free consultation with Vedika Weddings — Nepal's luxury wedding photographers.
          </p>
          <Link href="/#contact" className="btn-gold">
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pb-20">
        <div className="section-tag mb-4">More from the Journal</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group border border-white/8 hover:border-gold/30 transition-colors overflow-hidden">
              <Image src={p.image} alt={p.title} width={400} height={250} className="w-full aspect-video object-cover group-hover:brightness-75 transition-all" style={{ filter: 'brightness(0.7)' }} />
              <div className="p-5">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold block mb-2">{p.category}</span>
                <h4 className="font-serif text-base font-light text-white leading-[1.4] group-hover:text-gold transition-colors">{p.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .prose-vedika p { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.9; margin-bottom: 1.25rem; }
        .prose-vedika h2 { font-family: var(--font-cormorant); font-size: 1.8rem; font-weight: 300; color: white; margin: 2.5rem 0 1rem; }
        .prose-vedika h3 { font-family: var(--font-cormorant); font-size: 1.3rem; font-weight: 300; color: #C9A84C; margin: 2rem 0 0.75rem; }
        .prose-vedika ul { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .prose-vedika li { font-size: 0.88rem; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 0.4rem; }
        .prose-vedika strong { color: #C9A84C; font-weight: 400; }
      `}</style>
    </article>
  )
}
