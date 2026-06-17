import type { Metadata } from 'next'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About GoAivora',
  description:
    'GoAivora is an enterprise analytics modernization company specializing in Tableau migration, Microsoft Fabric, AI-powered analytics, and enterprise business intelligence.',
}

const values = [
  {
    title: 'Business logic first',
    desc: 'Every migration starts with a complete audit of business logic, calculations, and governance. We never rebuild from scratch — we preserve and modernize.',
  },
  {
    title: 'Production-grade delivery',
    desc: 'We deliver production-ready solutions, not proofs of concept. Every engagement includes validation, documentation, and handover to your internal team.',
  },
  {
    title: 'Platform expertise',
    desc: 'Deep expertise across Tableau, Power BI, Microsoft Fabric, Snowflake, and Azure. We work with the platforms you have, and the platforms you want to reach.',
  },
  {
    title: 'AI that earns trust',
    desc: 'Our AI solutions are grounded in your semantic models and governance frameworks. Analytics Copilots answer from your data, not from hallucinations.',
  },
]

const expertise = [
  'Tableau to Power BI Migration',
  'Tableau to Microsoft Fabric Migration',
  'SQL Server to Fabric Migration',
  'Snowflake to Fabric Migration',
  'Power BI Modernization',
  'Microsoft Fabric Architecture',
  'Analytics Copilot Development',
  'AI Agent Development',
  'Semantic Model Design',
  'Enterprise Governance',
  'Executive Dashboard Design',
  'Banking & Financial Services Analytics',
  'Insurance Analytics',
  'Retail Analytics',
  'Manufacturing Analytics',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#05070A', padding: '100px 0 80px' }}>
        <div className="max-w-[1080px] mx-auto px-[52px]">
          <h1
            style={{
              fontSize: '54px',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1.06,
              color: '#F8FAFC',
              marginBottom: '24px',
              maxWidth: '680px',
            }}
          >
            GoAivora Technologies
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#94A3B8',
              lineHeight: 1.65,
              maxWidth: '600px',
              marginBottom: '16px',
            }}
          >
            An enterprise analytics modernization company specializing in Tableau
            migration, Microsoft Fabric, AI-powered analytics, and enterprise
            business intelligence.
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            GoAivora was built to solve the hardest problems in enterprise
            analytics — not just migrating platforms, but preserving decades of
            business logic, modernizing governance, and deploying AI that actually
            works in production.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#0B0F14', padding: '80px 0' }}>
        <div className="max-w-[1080px] mx-auto px-[52px]">
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#F8FAFC',
              marginBottom: '48px',
            }}
          >
            How we work.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '260px 1fr',
                  gap: '56px',
                  alignItems: 'start',
                  padding: '32px 0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  borderBottom:
                    i === values.length - 1
                      ? '1px solid rgba(255,255,255,0.07)'
                      : undefined,
                }}
              >
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#F8FAFC',
                    letterSpacing: '-0.02em',
                    paddingTop: '2px',
                  }}
                >
                  {v.title}
                </span>
                <span style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.7 }}>
                  {v.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section style={{ background: '#05070A', padding: '80px 0' }}>
        <div className="max-w-[1080px] mx-auto px-[52px]">
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: '#F8FAFC',
              marginBottom: '36px',
            }}
          >
            Areas of expertise.
          </h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {expertise.map((e) => (
              <span
                key={e}
                style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
