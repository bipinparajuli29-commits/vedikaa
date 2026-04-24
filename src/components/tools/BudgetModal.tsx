'use client'
import { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface Props { onClose: () => void }

const CATEGORIES = [
  { key: 'photography', label: 'Photography & Video', default: 150000 },
  { key: 'venue', label: 'Venue', default: 200000 },
  { key: 'catering', label: 'Catering', default: 300000 },
  { key: 'attire', label: 'Bridal Attire & Jewellery', default: 150000 },
  { key: 'decor', label: 'Decor & Florals', default: 100000 },
  { key: 'music', label: 'Music & Entertainment', default: 50000 },
  { key: 'makeup', label: 'Makeup & Hair', default: 40000 },
  { key: 'stationery', label: 'Invitations & Stationery', default: 20000 },
  { key: 'accommodation', label: 'Accommodation (guests)', default: 80000 },
  { key: 'honeymoon', label: 'Honeymoon', default: 100000 },
]

type BudgetValues = Record<string, number>

export default function BudgetModal({ onClose }: Props) {
  const defaults: BudgetValues = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.default]))
  const [values, setValues, hydrated] = useLocalStorage<BudgetValues>('vw-budget', defaults)

  const total = Object.values(values).reduce((sum, v) => sum + (Number(v) || 0), 0)

  const update = (key: string, val: string) => {
    setValues((prev) => ({ ...prev, [key]: Number(val) || 0 }))
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/95 z-[2000] overflow-y-auto flex items-start justify-center p-6 lg:p-12" onClick={onClose}>
      <div className="bg-[#111] border border-gold/20 max-w-2xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-5 right-5 text-white/40 hover:text-gold text-2xl" onClick={onClose}>×</button>

        <h2 className="font-serif text-3xl font-light text-white mb-1">Budget Calculator</h2>
        <p className="text-[0.7rem] tracking-[0.1em] text-white/35 mb-6">Plan your wedding spend across every category (NPR)</p>

        {hydrated && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.key} className="flex flex-col gap-1">
                <label className="text-[0.65rem] tracking-[0.1em] uppercase text-white/40">{cat.label}</label>
                <input
                  type="number"
                  value={values[cat.key] ?? cat.default}
                  onChange={(e) => update(cat.key, e.target.value)}
                  className="form-input"
                  min={0}
                />
              </div>
            ))}
          </div>
        )}

        <div className="bg-gold/8 border border-gold/30 p-5 text-center">
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-2">Estimated Total Budget</div>
          <div className="font-serif text-[2.5rem] font-light text-white">
            NPR {total.toLocaleString('en-IN')}
          </div>
        </div>

        <button
          onClick={() => setValues(defaults)}
          className="mt-4 text-[0.65rem] tracking-[0.15em] uppercase text-white/25 hover:text-white/50 transition-colors"
        >
          Reset to defaults
        </button>
      </div>
    </div>
  )
}
