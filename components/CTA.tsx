'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section
      style={{ background: '#0B0F14', padding: '100px 0' }}
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1080px] mx-auto px-[52px]">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="cta-heading"
              style={{
                fontSize: '44px',
                fontWeight: 600,
                letterSpacing: '-0.04em',
                lineHeight: 1.06,
                color: '#F8FAFC',
                marginBottom: '18px',
              }}
            >
              Ready to modernize your analytics stack?
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: '#94A3B8',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              Book a free 60-minute migration assessment. We&apos;ll audit your
              current environment and deliver a phased migration roadmap at no cost.
            </p>
            <Link
              href="/contact"
              style={{
                background: '#F8FAFC',
                color: '#05070A',
                fontSize: '14px',
                fontWeight: 600,
                padding: '11px 22px',
                borderRadius: '7px',
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              className="transition-opacity hover:opacity-90"
            >
              Book Free Assessment
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                {
                  label: 'Book a meeting',
                  action: 'Calendly →',
                  href: 'https://calendly.com/goaivora',
                },
                {
                  label: 'Email us directly',
                  action: 'hello@goaivora.com →',
                  href: 'mailto:hello@goaivora.com',
                },
                {
                  label: 'LinkedIn',
                  action: 'linkedin.com/company/goaivora →',
                  href: 'https://linkedin.com/company/goaivora',
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 0',
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    borderBottom:
                      i === 2 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                  }}
                >
                  <span style={{ fontSize: '15px', color: '#94A3B8' }}>
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#F8FAFC',
                    }}
                    className="transition-colors hover:text-[#94A3B8]"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {item.action}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
