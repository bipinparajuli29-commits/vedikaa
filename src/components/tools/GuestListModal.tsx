'use client'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface Props { onClose: () => void }
interface Guest { id: number; name: string; side: string; status: 'confirmed' | 'pending' }

export default function GuestListModal({ onClose }: Props) {
  const [guests, setGuests, hydrated] = useLocalStorage<Guest[]>('vw-guests', [])
  const [name, setName] = useState('')
  const [side, setSide] = useState('')
  const [status, setStatus] = useState<'confirmed' | 'pending'>('pending')

  const add = () => {
    if (!name.trim()) return
    setGuests((prev) => [...prev, { id: Date.now(), name: name.trim(), side: side.trim() || '—', status }])
    setName('')
    setSide('')
    setStatus('pending')
  }

  const remove = (id: number) => setGuests((prev) => prev.filter((g) => g.id !== id))

  const confirmed = guests.filter((g) => g.status === 'confirmed').length

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/95 z-[2000] overflow-y-auto flex items-start justify-center p-6 lg:p-12" onClick={onClose}>
      <div className="bg-[#111] border border-gold/20 max-w-2xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-5 right-5 text-white/40 hover:text-gold text-2xl" onClick={onClose}>×</button>

        <h2 className="font-serif text-3xl font-light text-white mb-1">Guest List Planner</h2>
        <p className="text-[0.7rem] tracking-[0.1em] text-white/35 mb-6">Add guests and track RSVPs — saved automatically</p>

        {/* Add form */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5 items-end">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Guest name" className="form-input col-span-2 sm:col-span-1" onKeyDown={(e) => e.key === 'Enter' && add()} />
          <input value={side} onChange={(e) => setSide(e.target.value)} placeholder="Bride / Groom" className="form-input" />
          <select value={status} onChange={(e) => setStatus(e.target.value as 'confirmed' | 'pending')} className="form-input">
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
          </select>
          <button onClick={add} className="bg-gold text-black text-[0.7rem] tracking-[0.1em] uppercase font-medium py-3 hover:bg-gold-light transition-colors">+ Add</button>
        </div>

        {/* Guest list */}
        {hydrated && (
          <div className="max-h-72 overflow-y-auto">
            {guests.length === 0 && (
              <div className="text-center py-8 text-white/25 text-[0.85rem]">No guests added yet</div>
            )}
            {guests.map((g) => (
              <div key={g.id} className="grid gap-3 py-3 border-b border-white/[0.05] items-center text-[0.8rem] text-white/65" style={{ gridTemplateColumns: '1fr auto auto auto' }}>
                <span>{g.name}</span>
                <span className="text-white/35 text-[0.75rem]">{g.side}</span>
                <span className={`px-2 py-1 text-[0.6rem] tracking-[0.1em] uppercase border ${g.status === 'confirmed' ? 'bg-green-900/20 text-green-400 border-green-800/40' : 'bg-gold/10 text-gold border-gold/20'}`}>
                  {g.status}
                </span>
                <button onClick={() => remove(g.id)} className="text-white/20 hover:text-red-400 transition-colors text-lg">×</button>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="flex gap-6 mt-5 pt-4 border-t border-white/8">
          {[
            { label: 'Total', val: guests.length },
            { label: 'Confirmed', val: confirmed },
            { label: 'Pending', val: guests.length - confirmed },
          ].map((s) => (
            <div key={s.label}>
              <span className="font-serif text-2xl text-gold block">{s.val}</span>
              <span className="text-[0.65rem] uppercase tracking-[0.1em] text-white/35">{s.label}</span>
            </div>
          ))}
          <div className="ml-auto self-end">
            <button onClick={() => setGuests([])} className="text-[0.65rem] tracking-[0.15em] uppercase text-white/25 hover:text-white/50 transition-colors">Clear all</button>
          </div>
        </div>
      </div>
    </div>
  )
}
