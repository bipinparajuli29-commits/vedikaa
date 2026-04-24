'use client'
import { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface Props { onClose: () => void }

const SECTIONS = [
  {
    title: '12 Months Before',
    items: ['Set your wedding date', 'Establish total wedding budget', 'Book wedding photographer & videographer', 'Research and book your venue', 'Create guest list (first draft)'],
  },
  {
    title: '6 Months Before',
    items: ['Book caterer & confirm menu', 'Shop for bridal lehenga / saree', 'Book makeup artist & hair stylist', 'Book DJ / live band / entertainment', 'Plan honeymoon destination', 'Design & send save-the-dates'],
  },
  {
    title: '3 Months Before',
    items: ['Send formal wedding invitations', 'Book accommodation for outstation guests', 'Schedule mehendi artist', 'Finalise decor theme and florals', 'Create wedding day timeline'],
  },
  {
    title: '1 Week Before',
    items: ['Confirm all vendor bookings', 'Pack honeymoon bags', 'Do a trial makeup run', 'Prepare emergency kit (safety pins, mirror, pain relief)', 'Get a full night\'s rest — you\'ll glow for it'],
  },
]

export default function ChecklistModal({ onClose }: Props) {
  const [checked, setChecked, hydrated] = useLocalStorage<Record<string, boolean>>('vw-checklist', {})

  const toggle = (key: string) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }))
  const total = SECTIONS.flatMap((s) => s.items).length
  const done = Object.values(checked).filter(Boolean).length

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/95 z-[2000] overflow-y-auto flex items-start justify-center p-6 lg:p-12" onClick={onClose}>
      <div className="bg-[#111] border border-gold/20 max-w-xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-5 right-5 text-white/40 hover:text-gold text-2xl transition-colors" onClick={onClose}>×</button>

        <h2 className="font-serif text-3xl font-light text-white mb-1">Wedding Checklist</h2>
        <p className="text-[0.7rem] tracking-[0.1em] text-white/35 mb-2">Track every step of your planning journey</p>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-white/10 relative">
            <div className="absolute top-0 left-0 h-full bg-gold transition-all duration-500" style={{ width: `${total > 0 ? (done / total) * 100 : 0}%` }} />
          </div>
          <span className="text-[0.65rem] text-gold whitespace-nowrap">{done}/{total} completed</span>
        </div>

        {hydrated && SECTIONS.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-3 pb-2 border-b border-gold/20">{section.title}</div>
            {section.items.map((item) => {
              const key = `${section.title}:${item}`
              const isDone = !!checked[key]
              return (
                <div
                  key={item}
                  className="flex items-center gap-3 py-2 border-b border-white/[0.04] cursor-pointer group"
                  onClick={() => toggle(key)}
                >
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggle(key)}
                    className="w-4 h-4 flex-shrink-0 cursor-pointer accent-[#C9A84C]"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <label className={`text-[0.83rem] cursor-pointer transition-all ${isDone ? 'line-through text-white/25' : 'text-white/65'}`}>
                    {item}
                  </label>
                </div>
              )
            })}
          </div>
        ))}

        <button
          onClick={() => setChecked({})}
          className="mt-4 text-[0.65rem] tracking-[0.15em] uppercase text-white/25 hover:text-white/50 transition-colors"
        >
          Reset all
        </button>
      </div>
    </div>
  )
}
