'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaMedium, FaBehance } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#171717] text-white/50 pt-24 pb-12">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden -mx-4 sm:-mx-0">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,40 Q300,0 600,40 T1200,40 L1200,0 L0,0 Z"
            fill="#171717"
          />
        </svg>
      </div>

      {/* Radial Glow */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4338ca 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 px-4 sm:px-10 lg:px-12 max-w-6xl mx-auto">


        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-white border-opacity-10">
          {/* Location */}
          <div className="text-center">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
              Location
            </h3>
            <p className="font-sans text-base sm:text-sm text-white/50">Sri Lanka</p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
              Contact
            </h3>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="mailto:kaveeshafernando3@gmail.com"
                className="block font-sans text-sm sm:text-sm text-white/50 hover:text-[#4338ca] transition-colors break-all"
              >
                kaveeshafernando3@gmail.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-3 sm:mb-4">
              Social
            </h3>
            <div className="flex justify-center items-center gap-4 min-h-[60px] w-full">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/kaveesha-fernando-b94301224/" aria-label="LinkedIn" className="group">
                <FaLinkedin className="h-5 w-5 text-zinc-600 hover:text-blue-600 transition-colors" />
              </a>

              {/* GitHub */}
              <a href="https://github.com/Kaveeshakavindi" aria-label="GitHub" className="group">
                <FaGithub className="h-5 w-5 text-zinc-600 hover:text-white dark:hover:text-white transition-colors" />
              </a>

              {/* Medium */}
              <a href="https://medium.com/@kaveesha.20210431" aria-label="Medium" className="group">
                <FaMedium className="h-5 w-5 text-zinc-600 hover:text-white dark:hover:text-white transition-colors" />
              </a>

              {/* Behance */}
              <a href="https://www.behance.net/kaveeshfernand" aria-label="Behance" className="group">
                <FaBehance className="h-5 w-5 text-zinc-600 hover:text-cyan-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
            © 2026 Kaveesha Fernando.
          </p>
        </div>
      </div>
    </footer>
  )
}
