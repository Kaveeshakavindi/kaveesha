'use client'

import { useState } from 'react'

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full h-20 bg-[#fcfbf9] bg-opacity-95 backdrop-blur-sm z-50 border-b border-[#e5e5e5]" style={{ mixBlendMode: 'difference' }}>
      <div className="h-full px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-xl lg:text-2xl italic font-light text-[#171717]"
        >
          Kaveesha Fernando
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Work', id: 'work' },
            { label: 'Research', id: 'research' },
            { label: 'Publications', id: 'publications' },
            { label: 'Writing', id: 'writing' },
            { label: 'Contact', id: 'footer' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs uppercase tracking-widest text-[#171717] hover:text-[#4338ca] transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#4338ca] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* System Status Pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5e5e5] bg-white bg-opacity-50">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#171717]">System Online</span>
        </div>
      </div>
    </header>
  )
}
