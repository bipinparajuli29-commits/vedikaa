'use client'
import Link from 'next/link'
import { useScrolled } from '@/hooks/useScrolled'

export default function StickyCTA() {
  const scrolled = useScrolled(300)
  if (!scrolled) return null
  return (
    <Link
      href="/#contact"
      className="sticky-cta"
      aria-label="Book now"
    >
      ✨ Book Your Wedding Date
    </Link>
  )
}
