import Link from 'next/link'

const services = ['Photography', 'Videography', 'Cinematic Films', 'Wedding Planning', 'Packages']
const planLinks = [
  { label: 'Venues', href: '/#planning' },
  { label: 'Dress & Styling', href: '/#planning' },
  { label: 'Events Guide', href: '/#planning' },
  { label: 'Music', href: '/#planning' },
  { label: 'Decor & Themes', href: '/#planning' },
]
const tools = [
  { label: 'Wedding Checklist', href: '/#tools' },
  { label: 'Budget Calculator', href: '/#tools' },
  { label: 'Guest List', href: '/#tools' },
  { label: 'Wedding Journal', href: '/blog' },
  { label: 'Book Consultation', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-offblack border-t border-white/[0.06]">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-serif text-3xl font-light text-gold mb-3">
              Vedika <em className="not-italic font-light">Weddings</em>
            </div>
            <p className="text-[0.8rem] text-white/35 leading-[1.8] max-w-[270px]">
              Luxury wedding photography &amp; planning for the couples of Nepal. Based in Pokhara &amp; Kathmandu.
            </p>
            <div className="flex gap-3 mt-5">
              {['IG', 'FB', 'YT', 'PIN'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[0.6rem] font-medium text-white/40 hover:border-gold hover:text-gold transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-[0.62rem] tracking-[0.25em] uppercase text-gold mb-5">Services</div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}><Link href="/#portfolio" className="text-[0.8rem] text-white/40 hover:text-gold transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Plan */}
          <div>
            <div className="text-[0.62rem] tracking-[0.25em] uppercase text-gold mb-5">Plan</div>
            <ul className="space-y-3">
              {planLinks.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[0.8rem] text-white/40 hover:text-gold transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <div className="text-[0.62rem] tracking-[0.25em] uppercase text-gold mb-5">Tools</div>
            <ul className="space-y-3">
              {tools.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-[0.8rem] text-white/40 hover:text-gold transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[0.7rem] text-white/25 tracking-[0.05em]">
            © {new Date().getFullYear()} Vedika Weddings. All rights reserved. · Pokhara, Nepal
          </p>
          <p className="text-[0.7rem] text-white/25">
            Made with <span className="text-red-500">♥</span> in Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}
