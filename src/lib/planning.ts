export interface Venue {
  name: string
  location: string
  description: string
  tags: string[]
  image: string
  capacity?: string
  priceRange?: string
}

export interface EventItem {
  day: string
  name: string
  nameEm: string
  description: string
  tips: string[]
}

export interface DecorTheme {
  icon: string
  theme: string
  description: string
}

export interface MusicSection {
  category: string
  title: string
  description: string
  tags: string[]
}

export const venues: Venue[] = [
  {
    name: 'Fishtail Lodge',
    location: 'Pokhara',
    description:
      'A serene lakeside retreat accessible only by boat, with panoramic Annapurna views. Perfect for intimate luxury weddings with a natural, peaceful atmosphere.',
    tags: ['Lakeside', '50–200 Guests', 'Luxury'],
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600&q=80',
    capacity: '50–200 guests',
    priceRange: 'NPR 3L–8L',
  },
  {
    name: 'Hotel Yak & Yeti',
    location: 'Kathmandu',
    description:
      "Kathmandu's most iconic luxury hotel with grand ballrooms, lush gardens, and world-class service. A royal setting for grand receptions and traditional ceremonies.",
    tags: ['Grand Ballroom', '200–1000 Guests', 'Heritage'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    capacity: '200–1000 guests',
    priceRange: 'NPR 5L–20L',
  },
  {
    name: 'Club Himalaya',
    location: 'Nagarkot',
    description:
      'Elevated at 2,175m with the most dramatic Himalayan backdrop in Nepal. A dream destination venue for couples seeking unforgettable mountain vistas.',
    tags: ['Mountain View', 'Destination', 'Boutique'],
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    capacity: '20–100 guests',
    priceRange: 'NPR 4L–12L',
  },
  {
    name: 'Temple Tree Resort',
    location: 'Pokhara',
    description:
      'A boutique luxury property with gorgeous garden spaces, infinity pool, and contemporary design. Blends modern elegance with the lush greenery of Pokhara.',
    tags: ['Garden', 'Pool', 'Modern Luxury'],
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    capacity: '50–300 guests',
    priceRange: 'NPR 2L–7L',
  },
]

export const events: EventItem[] = [
  {
    day: '01',
    name: '',
    nameEm: 'Engagement',
    description:
      'The official beginning — an intimate gathering where rings are exchanged and families unite. A beautiful time for candid portraits and genuine emotion.',
    tips: ['Outdoor preferred', 'Evening golden hour', 'Intimate setting'],
  },
  {
    day: '02',
    name: '',
    nameEm: 'Mehendi Night',
    description:
      'An evening of artistry, music, and feminine joy. The bride and female guests gather for intricate henna designs, dancing, and pre-wedding rituals.',
    tips: ['Warm indoor light', 'Detail shots essential', 'Candid moments'],
  },
  {
    day: '03',
    name: '',
    nameEm: 'Haldi Ceremony',
    description:
      'Pure joy — turmeric paste applied by family in a shower of colour, laughter, and love. Some of the most authentic, emotional photographs come from Haldi.',
    tips: ['Natural outdoor light', 'Morning preferred', 'Vibrant & playful'],
  },
  {
    day: '04',
    name: 'The ',
    nameEm: 'Wedding Day',
    description:
      'Pheras, vows, and the sacred union. We document every ritual from the baraat entry to the saptapadi — the seven promises that bind two souls together.',
    tips: ['Full day coverage', 'Temple or venue', 'Family portraits'],
  },
  {
    day: '05',
    name: '',
    nameEm: 'Reception',
    description:
      'The celebration in full swing. Couple portraits, first dance, speeches, and the grand party. We capture the electricity and elegance of your reception night.',
    tips: ['Evening/night lighting', 'Dance floor coverage', 'Couple portraits'],
  },
]

export const decorThemes: DecorTheme[] = [
  {
    icon: '🏯',
    theme: 'Royal Traditional',
    description:
      'Rich marigold and red florals, brass diyas, mandap with carved arches. Deeply rooted in Nepali Hindu traditions. Gold & crimson dominate. Best for heritage venues.',
  },
  {
    icon: '🌿',
    theme: 'Boho Garden',
    description:
      'Pampas grass, dried flowers, macramé, earthy tones with terracotta & sage. Low seating, candlelit ambience. Perfect for outdoor lakeside weddings in Pokhara.',
  },
  {
    icon: '🕯',
    theme: 'Modern Luxury',
    description:
      'Minimal florals in white and blush, crystal chandeliers, geometric structures, monochromatic palette. Clean, sophisticated, and extremely photogenic.',
  },
  {
    icon: '🌄',
    theme: 'Himalayan Destination',
    description:
      'Let nature be the decor. Wildflowers, wooden elements, and lanterns against a backdrop of the Annapurna range. Raw, romantic, unforgettable.',
  },
]

export const musicSections: MusicSection[] = [
  {
    category: '🎼 Ceremony',
    title: 'Sacred Beginnings',
    description:
      'Traditional Nepali flute & tabla for the baraat. Shehnai during the rituals. Vedic mantras and classical ragas create an atmosphere of divine reverence.',
    tags: ['Shehnai', 'Tabla', 'Classical'],
  },
  {
    category: '🎵 Bridal Entry',
    title: 'Top Bridal Entry Songs',
    description:
      'Kesariya (Brahmastra) · Tum Hi Ho · Tumse Milke · Pehli Nazar Mein · Sawaar Loon · Mast Magan — all beautifully cinematic for the walk down the aisle.',
    tags: ['Bollywood', 'Emotional', 'Romantic'],
  },
  {
    category: '🎉 Reception',
    title: 'Dance Floor Anthems',
    description:
      'Gallan Goodiyaan · Balam Pichkari · Nagada Sang Dhol · Lungi Dance · Desi Beat — perfect to get every generation on the dance floor.',
    tags: ['High Energy', 'Bhangra', 'Bollywood'],
  },
  {
    category: '🌙 First Dance',
    title: 'Slow Dance Favourites',
    description:
      'Tum Hi Ho · Tera Hone Laga Hoon · Janam Janam (Dilwale) · Perfect (Ed Sheeran) · A Thousand Years — intimate, emotional, unforgettable.',
    tags: ['Slow Dance', 'Romantic', 'Cinematic'],
  },
]

export const stylingTips = {
  bride: [
    {
      icon: '🌹',
      theme: 'Traditional Nepali Bride',
      description:
        'Red Dhaka saree or lehenga, gold jewellery, tikka, chura and pote. Timeless and deeply meaningful. Pooja Sarees in New Road are legendary.',
    },
    {
      icon: '✨',
      theme: 'Modern Fusion Bride',
      description:
        'Contemporary lehenga with minimalist jewellery. Mix of Indo-western styles with pastel or dusty rose tones for a sophisticated, photogenic look.',
    },
  ],
  groom: [
    {
      icon: '👑',
      theme: 'Royal Groom',
      description:
        'Embroidered sherwani with layered necklace and turban. Opt for ivory, gold, or royal blue. Pairs beautifully against any Nepali wedding backdrop.',
    },
    {
      icon: '🕴',
      theme: 'Minimalist Groom',
      description:
        'Clean lines with a well-tailored bandhgala or daura suruwal. Understated accessories. The groom\'s look should complement, not compete.',
    },
  ],
}
