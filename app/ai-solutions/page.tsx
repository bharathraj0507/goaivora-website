import type { Metadata } from 'next'
import AISolutions from '@/components/AISolutions'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'AI-Powered Analytics Solutions',
  description:
    'Analytics Copilots, AI Agents, and Conversational BI built on Microsoft Fabric and Power BI. Ask business questions and get actionable insights instantly.',
}

const platforms = ['Power BI', 'Tableau', 'Microsoft Fabric', 'Embedded Analytics']

const capabilities = [
  {
    title: 'Analytics Copilot',
    desc: 'Answers business questions in natural language using live semantic models deployed directly inside Power BI and Fabric environments.',
    details: [
      'Natural language query over semantic models',
      'Auto-generated charts and visualizations',
      'Contextual business explanations',
      'Integrated within Power BI and Fabric',
    ],
  },
  {
    title: 'AI Agents',
    desc: 'Autonomous agents that monitor KPIs, detect anomalies, trigger workflows, and surface recommended actions without manual intervention.',
    details: [
      'Scheduled KPI monitoring',
      'Anomaly detection and alerting',
      'Automated root cause analysis',
      'Workflow integration via Power Automate',
    ],
  },
  {
    title: 'Conversational BI',
    desc: 'Embedded natural language interface that queries your semantic layer directly — no SQL, no training required for end users.',
    details: [
      'No-SQL natural language interface',
      'Direct semantic layer queries',
      'Embeddable in enterprise portals',
      'Role-based access enforcement',
    ],
  },
  {
    title: 'Executive Dashboards',
    desc: 'AI-narrated dashboards that explain performance trends, flag exceptions, and surface insights automatically for C-suite audiences.',
    details: [
      'AI-generated narrative summaries',
      'Automated exception flagging',
      'Executive-level KPI views',
      'Mobile-optimized layouts',
    ],
  },
]

export default function AISolutionsPage() {
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
            Ask Business Questions.
            <br />
            Get Actionable Insights.
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#94A3B8',
              lineHeight: 1.65,
              maxWidth: '560px',
              marginBottom: '16px',
            }}
          >
            Natural language analytics on top of your existing Power BI, Tableau,
            and Microsoft Fabric investments.
          </p>
          <p style={{ fontSize: '14px', color: '#475569' }}>
            Supported on:&nbsp;
            {platforms.map((p, i) => (
              <span key={p}>
                {p}
                {i < platforms.length - 1 && (
                  <span style={{ color: '#2D3748', margin: '0 8px' }}>·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Capabilities detail */}
      <section style={{ background: '#0B0F14', padding: '80px 0' }}>
        <div className="max-w-[1080px] mx-auto px-[52px]">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: '1px',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                style={{ background: '#0B0F14', padding: '32px 28px' }}
              >
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#F8FAFC',
                    letterSpacing: '-0.02em',
                    marginBottom: '12px',
                  }}
                >
                  {cap.title}
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#94A3B8',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                  }}
                >
                  {cap.desc}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {cap.details.map((d) => (
                    <li
                      key={d}
                      style={{
                        fontSize: '14px',
                        color: '#475569',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <span
                        style={{
                          width: '3px',
                          height: '3px',
                          borderRadius: '50%',
                          background: '#2D3748',
                          flexShrink: 0,
                          display: 'inline-block',
                        }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AISolutions />
      <CTA />
    </>
  )
}
