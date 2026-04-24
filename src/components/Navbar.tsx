'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useScrolled } from '@/hooks/useScrolled'

const navLinks = [
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#packages', label: 'Packages' },
  { href: '/#planning', label: 'Planning' },
  { href: '/#tools', label: 'Tools' },
  { href: '/blog', label: 'Journal' },
  { href: '/#about', label: 'About' },
]

export default function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? 'px-12 py-4 bg-black/95 backdrop-blur-md border-b border-gold/10'
            : 'px-12 py-6'
        }`}
        style={{ fontFamily: 'var(--font-jost)' }}
      >
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-light tracking-wide text-gold">
          Vedika <em className="not-italic text-white font-light">Weddings</em>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[0.7rem] tracking-[0.18em] uppercase text-white/60 hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden lg:inline-block px-6 py-2 border border-gold text-gold text-[0.65rem] tracking-[0.18em] uppercase hover:bg-gold hover:text-black transition-all duration-300"
        >
          Book Now
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] cursor-pointer z-[1001]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
          />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-brand-black flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-4xl font-light text-white hover:text-gold transition-colors duration-300 tracking-wide"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-8 py-3 bg-gold text-black text-sm tracking-widest uppercase font-medium"
        >
          Book Now
        </Link>
      </div>
    </>
  )
}
