'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LogoMark from './LogoMark'

const navLinks = [
  { href: '/migration', label: 'Migration' },
  { href: '/ai-solutions', label: 'AI Solutions' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/worksim', label: 'WorkSim' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: '#05070A',
        borderColor: 'rgba(255,255,255,0.07)',
      }}
    >
      <nav
        className="flex items-center justify-between h-[62px] max-w-[1080px] mx-auto px-[52px]"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px] flex-shrink-0">
          <LogoMark size={27} />
          <span
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: '#F8FAFC',
              letterSpacing: '-0.01em',
            }}
          >
            GoAivora
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{ fontSize: '14px', color: '#94A3B8' }}
                className="transition-colors duration-150 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center transition-colors duration-150"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#F8FAFC',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '8px 18px',
            borderRadius: '7px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
          }}
        >
          Book Assessment
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-[#94A3B8] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{
            background: '#0B0F14',
            borderColor: 'rgba(255,255,255,0.07)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-[14px] text-[#94A3B8] hover:text-white border-b transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 text-center py-2.5 rounded-md text-[14px] font-medium text-white transition-colors"
            style={{ background: '#3B82F6' }}
            onClick={() => setMobileOpen(false)}
          >
            Book Assessment
          </Link>
        </div>
      )}
    </header>
  )
}
