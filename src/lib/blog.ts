export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  content?: string
}

// In production replace this with a CMS (Contentful, Sanity, Notion API, etc.)
const posts: BlogPost[] = [
  {
    slug: 'best-wedding-venues-pokhara-2025',
    title: 'The 10 Best Wedding Venues in Pokhara for 2025',
    excerpt:
      'From serene lakeside retreats to mountain-view resorts — a curated guide to the finest wedding venues Pokhara has to offer in 2025.',
    category: 'Venue Guide',
    date: 'April 12, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&q=80',
    featured: true,
    content: `
      <p>Pokhara, nestled in the shadow of the Annapurna range with the serene Phewa Lake at its heart, is Nepal's most romantic wedding destination. Whether you dream of a lakeside ceremony or a mountain-backdrop reception, Pokhara delivers.</p>
      <h2>1. Fishtail Lodge</h2>
      <p>Accessible only by boat, Fishtail Lodge sits on a peninsula in Phewa Lake. The privacy, the reflections at sunset, the Himalayan panorama — it's almost unfair how beautiful it is for wedding photography.</p>
      <h2>2. Temple Tree Resort & Spa</h2>
      <p>A boutique luxury property with gorgeous garden spaces, an infinity pool, and contemporary Nepali architecture. Ideal for intimate weddings of 50–150 guests.</p>
      <h2>3. Barahi Jungle Lodge</h2>
      <p>For couples who want a wilder, more adventurous setting — this jungle lodge near Chitwan offers a unique wedding experience surrounded by nature.</p>
    `,
  },
  {
    slug: 'complete-nepali-wedding-checklist',
    title: 'The Complete Nepali Wedding Planning Checklist (Month by Month)',
    excerpt:
      'A comprehensive, stress-free guide to planning your Nepali wedding — from the first venue call to the final reception dance.',
    category: 'Planning',
    date: 'March 8, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80',
    content: `
      <p>Planning a Nepali wedding involves beautiful, layered traditions — the engagement, mehendi, haldi, wedding ceremony, and reception. Each deserves careful preparation.</p>
      <h2>12 Months Before</h2>
      <p>Lock in your date, book your photographer (they go first — always), and shortlist venues. The best photographers in Nepal are booked 12–18 months in advance.</p>
      <h2>6 Months Before</h2>
      <p>Finalise your venue, caterer, makeup artist, and decor team. Begin shopping for your bridal lehenga — good tailoring takes time.</p>
    `,
  },
  {
    slug: 'top-bridal-entry-songs-nepal',
    title: 'Top 20 Bridal Entry Songs That Will Give You Goosebumps',
    excerpt:
      'Your entrance is your first moment as the bride. These 20 songs — from classical to Bollywood to contemporary — will make it perfect.',
    category: 'Music',
    date: 'February 20, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=900&q=80',
    content: `
      <p>The bridal entry is one of the most photographed and emotionally charged moments of any wedding. Your song choice sets the entire tone. Here are the top picks from our experience at hundreds of Nepali weddings.</p>
      <h2>Romantic & Emotional</h2>
      <p>Kesariya (Brahmastra), Tum Hi Ho, Pehli Nazar Mein — these Bollywood classics never fail to move the room to tears.</p>
      <h2>Grand & Cinematic</h2>
      <p>For a truly cinematic entrance, consider instrumental versions of Kal Ho Na Ho or a live shehnai performance for a traditional Nepali touch.</p>
    `,
  },
  {
    slug: 'how-to-prepare-wedding-photography',
    title: 'How to Prepare for Your Wedding Photography Session',
    excerpt:
      'Expert tips from our photographers on how to look and feel your best — from consultation to the final shot.',
    category: 'Photography',
    date: 'January 15, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80',
    content: `
      <p>The best wedding photos happen when couples feel relaxed and natural. Here's everything we tell our couples before their wedding day.</p>
      <h2>Do a Trial Session</h2>
      <p>A pre-wedding shoot is not just for beautiful photos — it's a rehearsal. You learn what angles you love, how to move naturally, and we learn what lighting works best for you.</p>
    `,
  },
  {
    slug: 'bridal-lehenga-trends-nepal-2025',
    title: 'Bridal Lehenga Trends for 2025: What Nepali Brides Are Wearing',
    excerpt:
      'From deep reds to soft blush, from heavy embroidery to minimalist elegance — the bridal fashion landscape in Nepal is evolving beautifully.',
    category: 'Style',
    date: 'December 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=900&q=80',
    content: `
      <p>Nepali brides in 2025 are confidently blending tradition with contemporary style. The results are stunning and deeply personal.</p>
      <h2>Classic Red: Reinvented</h2>
      <p>Traditional red is having a revival — but with cleaner silhouettes and more refined embroidery. Less is more, even in the most traditional settings.</p>
    `,
  },
]

export async function getAllPosts(): Promise<BlogPost[]> {
  // In production: fetch from CMS API here
  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return posts.find((p) => p.slug === slug) || null
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  return posts.filter((p) => p.category === category)
}
