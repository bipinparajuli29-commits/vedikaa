'use client'
import { useState } from 'react'
import FadeInView from './FadeInView'
import ChecklistModal from './tools/ChecklistModal'
import BudgetModal from './tools/BudgetModal'
import GuestListModal from './tools/GuestListModal'

type ModalKey = 'checklist' | 'budget' | 'guests' | null

const tools = [
  { key: 'checklist' as ModalKey, icon: '✅', title: 'Wedding Checklist', desc: 'A comprehensive, interactive checklist for every step of your wedding planning — from 12 months out to the wedding morning.' },
  { key: 'budget' as ModalKey, icon: '💰', title: 'Budget Calculator', desc: 'Plan your wedding budget across every category. See your total at a glance and adjust priorities without any surprises.' },
  { key: 'guests' as ModalKey, icon: '👥', title: 'Guest List Planner', desc: 'Build and manage your guest list with RSVP tracking. Know your confirmed count in real time.' },
]

export default function Tools() {
  const [activeModal, setActiveModal] = useState<ModalKey>(null)

  return (
    <section id="tools" className="py-24 px-6 lg:px-12 bg-brand-black">
      <FadeInView className="text-center mb-16">
        <span className="section-tag">Planning Tools</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
          Your Wedding, <em className="not-italic text-gold">Organised</em>
        </h2>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {tools.map((tool, i) => (
          <FadeInView key={tool.key} delay={i * 0.1}>
            <div className="relative border border-white/8 p-8 transition-all duration-300 hover:border-gold/30 group overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <div className="text-3xl mb-5">{tool.icon}</div>
              <h3 className="font-serif text-[1.35rem] font-light text-white mb-2">{tool.title}</h3>
              <p className="text-[0.8rem] text-white/45 leading-[1.8] mb-6 flex-1">{tool.desc}</p>
              <button
                onClick={() => setActiveModal(tool.key)}
                className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-gold hover:gap-3 transition-all duration-300"
              >
                Open Tool →
              </button>
            </div>
          </FadeInView>
        ))}
      </div>

      {activeModal === 'checklist' && <ChecklistModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'budget' && <BudgetModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'guests' && <GuestListModal onClose={() => setActiveModal(null)} />}
    </section>
  )
}
