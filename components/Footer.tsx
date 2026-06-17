import Link from 'next/link'
import LogoMark from './LogoMark'

const footerLinks = {
  Company: [
    { label: 'Migration', href: '/migration' },
    { label: 'AI Solutions', href: '/ai-solutions' },
    { label: 'Dashboard Marketplace', href: '/marketplace' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
  ],
  Connect: [
    { label: 'WorkSim', href: '/worksim' },
    { label: 'Book Assessment', href: '/contact' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/goaivora', external: true },
    { label: 'Email', href: 'mailto:hello@goaivora.com', external: true },
    { label: 'Calendly', href: 'https://calendly.com/goaivora', external: true },
  ],
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#05070A',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '56px 0 40px',
      }}
      aria-label="Site footer"
    >
      <div className="max-w-[1080px] mx-auto px-[52px]">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '64px',
            marginBottom: '48px',
          }}
          className="grid-cols-1 md:grid-cols-[2fr_1fr_1fr]"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                marginBottom: '14px',
              }}
            >
              <LogoMark size={22} id="footer" />
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
            </div>
            <p
              style={{
                fontSize: '15px',
                color: '#94A3B8',
                lineHeight: 1.65,
                maxWidth: '220px',
              }}
            >
              Modernize Analytics.
              <br />
              Build AI-Powered Enterprises.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h3
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#475569',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {col}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '11px',
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{ fontSize: '14px', color: '#94A3B8' }}
                      className="transition-colors hover:text-white"
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={
                        'external' in link && link.external
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '13px', color: '#475569' }}>
            © GoAivora Technologies Pvt Ltd
          </span>
          <span style={{ fontSize: '13px', color: '#475569' }}>
            Analytics Modernization · AI Transformation · Enterprise Job Simulation
          </span>
        </div>
      </div>
    </footer>
  )
}
