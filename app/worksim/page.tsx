import type { Metadata } from 'next'
import WorkSim from '@/components/WorkSim'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'GoAivora WorkSim — Enterprise Job Simulation Platform',
  description:
    'Build real analytics skills through simulated enterprise sprints, stakeholder meetings, AI manager feedback, and QA cycles in Power BI, Tableau, and Microsoft Fabric.',
}

const howItWorks = [
  {
    step: '01',
    title: 'Get assigned a real enterprise scenario',
    desc: 'Work on projects based on real enterprise use cases — banking dashboards, insurance analytics, manufacturing OEE, and more.',
  },
  {
    step: '02',
    title: 'Work through Jira-style sprint tickets',
    desc: 'Receive tickets with acceptance criteria, stakeholder context, and technical specifications just like a real analytics role.',
  },
  {
    step: '03',
    title: 'Get AI Manager feedback in real time',
    desc: 'Your AI Manager reviews every submission, flags issues, and guides you to the same standards expected in enterprise environments.',
  },
  {
    step: '04',
    title: 'Pass QA and stakeholder reviews',
    desc: 'Submit your work through structured QA cycles and simulated stakeholder approvals before completing each sprint.',
  },
]

const platforms = ['Power BI', 'Tableau', 'Microsoft Fabric', 'Azure Synapse', 'Databricks']

export default function WorkSimPage() {
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
              marginBottom: '20px',
              maxWidth: '680px',
            }}
          >
            GoAivora WorkSim
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#94A3B8',
              lineHeight: 1.6,
              marginBottom: '8px',
            }}
          >
            Enterprise job simulation for analytics professionals.
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '40px',
            }}
          >
            Build real analytics skills by working through simulated sprints,
            stakeholder reviews, AI manager feedback, and QA cycles — in Power
            BI, Tableau, and Microsoft Fabric.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {platforms.map((p) => (
              <span
                key={p}
                style={{
                  fontSize: '13px',
                  color: '#475569',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
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
            How WorkSim works.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '40px',
                  alignItems: 'start',
                  padding: '32px 0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  borderBottom:
                    i === howItWorks.length - 1
                      ? '1px solid rgba(255,255,255,0.07)'
                      : undefined,
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#475569',
                    letterSpacing: '0.04em',
                    paddingTop: '3px',
                  }}
                >
                  {step.step}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: '19px',
                      fontWeight: 500,
                      color: '#F8FAFC',
                      letterSpacing: '-0.02em',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </p>
                  <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkSim />
      <CTA />
    </>
  )
}
