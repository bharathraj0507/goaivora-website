'use client'

import { motion } from 'framer-motion'

const analysisFlow = [
  {
    label: 'Business Question',
    content: 'Why did revenue decline last quarter?',
    type: 'question',
  },
  {
    label: 'Insight',
    content: 'Revenue declined 7.8% quarter-over-quarter across three regions.',
    type: 'text',
  },
  {
    label: 'Root Cause',
    items: [
      'Customer churn increased 8% in SMB segment',
      'Product returns increased 11% in Q4',
      'East corridor sales declined 18% YoY',
    ],
    type: 'list',
  },
  {
    label: 'Recommended Actions',
    items: [
      'Review SMB retention strategy',
      'Investigate product return root causes',
      'Analyze regional pricing impact',
    ],
    type: 'list',
  },
  {
    label: 'Supported On',
    platforms: ['Power BI', 'Tableau', 'Microsoft Fabric'],
    type: 'platforms',
  },
]

const capabilities = [
  {
    title: 'Analytics Copilot',
    desc: 'Answers business questions in natural language using live semantic models — deployed directly inside Power BI and Fabric.',
  },
  {
    title: 'AI Agents',
    desc: 'Autonomous agents that monitor KPIs, detect anomalies, and surface recommended actions without manual intervention.',
  },
  {
    title: 'Conversational BI',
    desc: 'Embedded natural language interface that queries your semantic layer directly — no SQL, no training required.',
  },
  {
    title: 'Executive Dashboards',
    desc: 'AI-narrated dashboards that explain performance trends and flag exceptions automatically for C-suite audiences.',
  },
]

export default function AISolutions() {
  return (
    <section
      style={{ background: '#0B0F14', padding: '100px 0' }}
      aria-labelledby="ai-heading"
    >
      <div className="max-w-[1080px] mx-auto px-[52px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
        >
          <h2
            id="ai-heading"
            style={{
              fontSize: '42px',
              fontWeight: 600,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: '#F8FAFC',
              marginBottom: '16px',
            }}
          >
            Ask Business Questions.
            <br />
            Get Actionable Insights.
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#94A3B8',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Natural language analytics on top of your existing Power BI, Tableau,
            and Fabric investments. No retraining. No rebuilding.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'start',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left: flow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {analysisFlow.map((step, i) => (
              <div
                key={step.label}
                style={{
                  padding: '22px 0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  borderBottom:
                    i === analysisFlow.length - 1
                      ? '1px solid rgba(255,255,255,0.07)'
                      : undefined,
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#475569',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '9px',
                  }}
                >
                  {step.label}
                </p>
                {step.type === 'question' && (
                  <p
                    style={{
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#F8FAFC',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.4,
                    }}
                  >
                    {step.content}
                  </p>
                )}
                {step.type === 'text' && (
                  <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6 }}>
                    {step.content}
                  </p>
                )}
                {step.type === 'list' && step.items && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {step.items.map((item) => (
                      <p key={item} style={{ fontSize: '15px', color: '#94A3B8' }}>
                        {item}
                      </p>
                    ))}
                  </div>
                )}
                {step.type === 'platforms' && step.platforms && (
                  <div style={{ display: 'flex', gap: '18px' }}>
                    {step.platforms.map((p) => (
                      <span key={p} style={{ fontSize: '13px', color: '#475569' }}>
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right: capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                style={{
                  padding: '22px 0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  borderBottom:
                    i === capabilities.length - 1
                      ? '1px solid rgba(255,255,255,0.07)'
                      : undefined,
                }}
              >
                <p
                  style={{
                    fontSize: '17px',
                    fontWeight: 500,
                    color: '#F8FAFC',
                    letterSpacing: '-0.01em',
                    marginBottom: '7px',
                  }}
                >
                  {cap.title}
                </p>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.65 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
