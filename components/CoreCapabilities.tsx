'use client'

import { useState } from 'react'

const capabilities = [
  {
    title: 'Software Engineering',
    tags: ['ASP.NET MVC', 'RESTful APIs'],
  },
  {
    title: 'Artificial Intelligence',
    tags: ['Causal Inference', 'Agentic Systems', 'Embodied AI', 'XAI'],
  },
  {
    title: 'Languages',
    tags: ['C#','Python', 'SQL', 'TypeScript'],
  },
  {
    title: 'Tools',
    tags: ['Langchain', 'Ollama', 'GitHub', 'Docker'],
  }
]

export default function CoreCapabilities() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-20 sm:py-32 px-10 sm:px-10 lg:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
        {/* Sticky Header */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] mb-4 sm:mb-6 text-balance">
            Core Capabilities
          </h2>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-2 space-y-0 border border-[#e5e5e5]  overflow-hidden">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`border-b border-[#e5e5e5] last:border-b-0 cursor-pointer transition-all duration-300 ${
                expandedIndex === index ? 'bg-[#fcfbf9]' : 'hover:bg-gray-50'
              }`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="p-4 sm:p-6 flex items-center justify-between gap-3">
                <h3 className={`font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light transition-colors ${
                  expandedIndex === index ? 'text-[#4338ca]' : 'text-[#737373] group-hover:text-[#171717]'
                }`}>
                  {cap.title}
                </h3>
                <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-10 pb-4 sm:pb-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs uppercase tracking-widest px-3 py-1 bg-[#e0e7ff] text-[#4338ca] "
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
