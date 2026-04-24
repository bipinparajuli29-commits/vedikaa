export interface PortfolioItem {
  id: number
  title: string
  subtitle: string
  image: string
  category: 'pre-wedding' | 'wedding' | 'film'
  colSpan?: number
}

export interface Package {
  tier: string
  name: string
  price: string
  priceNote: string
  featured?: boolean
  features: string[]
}

export interface Testimonial {
  text: string
  name: string
  meta: string
  avatar: string
  rating: number
}
