'use client'

import { FaLinkedin, FaGithub, FaMedium, FaBehance } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 sm:pt-32 px-12 lg:px-12 overflow-hidden flex flex-col justify-center items-center bg-[#fcfbf9]">
      <div className="relative z-10 max-w-2xl text-center  sm:space-y-8">
        <div className="flex justify-center items-center gap-4 min-h-[60px] w-full">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kaveesha-fernando-b94301224/" aria-label="LinkedIn" className="group">
            <FaLinkedin className="h-5 w-5 text-zinc-600 hover:text-blue-600 transition-colors" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/Kaveeshakavindi" aria-label="GitHub" className="group">
            <FaGithub className="h-5 w-5 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors" />
          </a>

          {/* Medium */}
          <a href="https://medium.com/@kaveesha.20210431" aria-label="Medium" className="group">
            <FaMedium className="h-5 w-5 text-zinc-600 hover:text-black dark:hover:text-white transition-colors" />
          </a>

          {/* Behance */}
          <a href="https://www.behance.net/kaveeshfernand" aria-label="Behance" className="group">
            <FaBehance className="h-5 w-5 text-zinc-600 hover:text-cyan-600 transition-colors" />
          </a>
        </div>
        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#171717] space-y-0">
          Hi! I&apos;m <span className="italic">Kaveesha</span> Fernando
        </h1>

        {/* Monospace Subtitle */}
        <p className="font-mono py-4 text-[10px] sm:text-xs uppercase tracking-widest text-[#737373] leading-tight break-words">
          Software Engineer
        </p>

        {/* Profile Image Placeholder - Smaller */}
        <div className="flex justify-center py-10">
          <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full overflow-hidden border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
            <img
              src="/me.jpg"
              alt="Kaveesha Fernando"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] ">
          "
        </h1>

        <p className="font-mono text-[12px]  tracking-widest text-[#737373] ">
          I am a Software Engineer passionate about creating structured, practical solutions by transforming ambiguous ideas. I would like to spend my free time volunteering or sketching on a digital canvas. I warmly welcome you to my portfolio. Have fun!
        </p>
      </div>
    </section>
  )
}
