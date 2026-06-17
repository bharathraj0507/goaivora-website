import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact GoAivora — Book a Migration Assessment',
  description:
    'Book a free 60-minute migration assessment. We\'ll audit your current environment and deliver a phased migration roadmap at no cost.',
}

const contactOptions = [
  {
    label: 'Book a meeting',
    value: 'Schedule via Calendly',
    href: 'https://calendly.com/goaivora',
    external: true,
  },
  {
    label: 'Email us',
    value: 'hello@goaivora.com',
    href: 'mailto:hello@goaivora.com',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/company/goaivora',
    href: 'https://linkedin.com/company/goaivora',
    external: true,
  },
]

const assessmentIncludes = [
  'Audit of your current BI environment and platform inventory',
  'Identification of migration complexity and estimated effort',
  'Phased migration roadmap with clear timelines and milestones',
  'Microsoft Fabric architecture recommendation',
  'AI enablement opportunities within your existing data models',
  'Licensing cost comparison and optimization recommendations',
]

export default function ContactPage() {
  return (
    <>
      <section style={{ background: '#05070A', padding: '100px 0 80px' }}>
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
            <div>
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 600,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.06,
                  color: '#F8FAFC',
                  marginBottom: '20px',
                }}
              >
                Book a Free Assessment
              </h1>
              <p
                style={{
                  fontSize: '17px',
                  color: '#94A3B8',
                  lineHeight: 1.7,
                  marginBottom: '40px',
                }}
              >
                A 60-minute migration assessment at no cost. We&apos;ll audit
                your current environment and deliver a phased migration roadmap.
              </p>

              {/* Contact options */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {contactOptions.map((opt, i) => (
                  <div
                    key={opt.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '18px 0',
                      borderTop: '1px solid rgba(255,255,255,0.07)',
                      borderBottom:
                        i === contactOptions.length - 1
                          ? '1px solid rgba(255,255,255,0.07)'
                          : undefined,
                    }}
                  >
                    <span style={{ fontSize: '15px', color: '#94A3B8' }}>
                      {opt.label}
                    </span>
                    <a
                      href={opt.href}
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#F8FAFC',
                      }}
                      className="transition-colors hover:text-[#94A3B8]"
                      target={opt.external ? '_blank' : undefined}
                      rel={opt.external ? 'noopener noreferrer' : undefined}
                    >
                      {opt.value} →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div style={{ paddingTop: '8px' }}>
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#F8FAFC',
                  letterSpacing: '-0.02em',
                  marginBottom: '28px',
                }}
              >
                What the assessment includes.
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                {assessmentIncludes.map((item, i) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '15px',
                      color: '#94A3B8',
                      padding: '14px 0',
                      borderTop: '1px solid rgba(255,255,255,0.07)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      lineHeight: 1.55,
                      borderBottom:
                        i === assessmentIncludes.length - 1
                          ? '1px solid rgba(255,255,255,0.07)'
                          : undefined,
                    }}
                  >
                    <span
                      style={{
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        background: '#2D3748',
                        flexShrink: 0,
                        marginTop: '8px',
                        display: 'inline-block',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
