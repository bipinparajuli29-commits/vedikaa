'use client'
import { useState } from 'react'
import FadeInView from './FadeInView'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9779800000000'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', eventDate: '', packageType: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const update = (k: string, v: string) => setForm((prev) => ({ ...prev, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', eventDate: '', packageType: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-brand-black">
      <FadeInView className="text-center mb-16">
        <span className="section-tag">Begin Your Journey</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
          Let's Create <em className="not-italic text-gold">Something Beautiful</em>
        </h2>
        <p className="text-[0.85rem] text-white/45 mt-4 max-w-lg mx-auto">
          We'd love to hear your love story. Reach out and let's start planning.
        </p>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1200px] mx-auto">
        {/* Info */}
        <FadeInView>
          <h3 className="font-serif text-2xl font-light text-white mb-2">
            Get in <em className="not-italic text-gold">Touch</em>
          </h3>
          <p className="text-[0.85rem] text-white/45 leading-[1.9] mb-8 max-w-sm">
            Whether you're 12 months away or planning something next month — we want to hear from you.
          </p>

          {[
            { icon: '📍', label: 'Studio (Pokhara)', value: 'Lakeside, Pokhara 33700, Nepal' },
            { icon: '📍', label: 'Studio (Kathmandu)', value: 'Thamel, Kathmandu 44600, Nepal' },
            { icon: '📧', label: 'Email', value: 'hello@vedikaweddings.com' },
            { icon: '📞', label: 'Phone', value: '+977 98-XXXX-XXXX' },
          ].map((d) => (
            <div key={d.label} className="flex gap-4 mb-5">
              <div className="text-gold text-base mt-0.5 flex-shrink-0">{d.icon}</div>
              <div>
                <div className="text-[0.62rem] tracking-[0.2em] uppercase text-white/30 mb-0.5">{d.label}</div>
                <div className="text-[0.85rem] text-white">{d.value}</div>
              </div>
            </div>
          ))}

          <a
            href={`https://wa.me/${WHATSAPP}?text=Hello%20Vedika%20Weddings%2C%20I%27d%20like%20to%20enquire%20about%20your%20wedding%20photography%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-black px-5 py-3 text-[0.7rem] tracking-[0.15em] uppercase font-medium mt-6 hover:opacity-90 transition-opacity w-fit"
          >
            💬 Chat on WhatsApp
          </a>

          <div className="flex gap-3 mt-6">
            {[
              { label: 'IG', href: 'https://instagram.com/vedikaweddings' },
              { label: 'FB', href: 'https://facebook.com/vedikaweddings' },
              { label: 'YT', href: 'https://youtube.com' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-[0.65rem] font-medium text-white/50 hover:border-gold hover:text-gold transition-all duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </FadeInView>

        {/* Form */}
        <FadeInView delay={0.2}>
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="text-4xl mb-4">💛</div>
              <h3 className="font-serif text-2xl font-light text-white mb-3">Thank You!</h3>
              <p className="text-[0.85rem] text-white/50 leading-[1.9] max-w-sm">
                We've received your inquiry and will be in touch within 24 hours. Check your inbox for a confirmation email.
              </p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-[0.65rem] tracking-[0.2em] uppercase text-gold hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Full Name *</label>
                  <input required value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" className="form-input" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Phone</label>
                  <input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+977 98XXXXXXXX" className="form-input" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Email Address *</label>
                <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="your@email.com" className="form-input" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Event Date</label>
                  <input type="date" value={form.eventDate} onChange={(e) => update('eventDate', e.target.value)} className="form-input" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Package Interest</label>
                  <select value={form.packageType} onChange={(e) => update('packageType', e.target.value)} className="form-input">
                    <option value="">Select a package</option>
                    <option>Essential</option>
                    <option>Classic</option>
                    <option>Premium</option>
                    <option>Luxury / Custom</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/40">Your Love Story *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your wedding plans, venue, or anything you'd like us to know..."
                  className="form-input resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-[0.8rem] text-red-400">Something went wrong. Please try WhatsApp or email us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold self-start disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
        </FadeInView>
      </div>
    </section>
  )
}
