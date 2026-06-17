'use client'

import { motion } from 'framer-motion'

const caseStudies = [
  {
    industry: 'Banking',
    company: 'NorthStar Bank',
    project: 'Tableau → Microsoft Fabric',
    detail:
      '15 dashboards migrated with zero business logic loss. Unified semantic layer deployed across all reporting teams. Refresh time reduced from 90 minutes to 15. AI Copilot enabled on top of DirectLake.',
    tags: ['Fabric Lakehouse', 'Semantic Layer', 'DirectLake', 'AI Copilot'],
    stats: [
      { num: '35%', label: 'Cost reduction' },
      { num: '6×', label: 'Faster refresh' },
    ],
  },
  {
    industry: 'Insurance',
    company: 'MapleShield Insurance',
    project: 'Claims Analytics & AI Platform',
    detail:
      'End-to-end claims intelligence platform on Microsoft Fabric. AI agent handles first-level triage and routes complex cases automatically. Analytics Copilot answers adjuster questions in natural language.',
    tags: ['AI Claims Agent', 'Fabric Lakehouse', 'Analytics Copilot'],
    stats: [{ num: '40%', label: 'Faster processing' }],
  },
]

export default function CaseStudies() {
  return (
    <section
      style={{ background: '#05070A', padding: '100px 0' }}
      aria-labelledby="cases-heading"
    >
      <div className="max-w-[1080px] mx-auto px-[52px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <h2
            id="cases-heading"
            style={{
              fontSize: '42px',
              fontWeight: 600,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: '#F8FAFC',
            }}
          >
            Business outcomes delivered.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {caseStudies.map((cs, i) => (
            <div
              key={cs.company}
              style={{
                padding: '36px 36px',
                display: 'grid',
                gridTemplateColumns: '200px 1fr 160px',
                gap: '36px',
                alignItems: 'start',
                borderBottom:
                  i < caseStudies.length - 1
                    ? '1px solid rgba(255,255,255,0.07)'
                    : undefined,
              }}
              className="grid-cols-1 md:grid-cols-[200px_1fr_160px]"
            >
              {/* Left */}
              <div>
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
                  {cs.industry}
                </p>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#F8FAFC',
                    letterSpacing: '-0.02em',
                    marginBottom: '4px',
                  }}
                >
                  {cs.company}
                </p>
                <p style={{ fontSize: '13px', color: '#475569' }}>{cs.project}</p>
              </div>

              {/* Middle */}
              <div>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#94A3B8',
                    lineHeight: 1.65,
                    marginBottom: '14px',
                  }}
                >
                  {cs.detail}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '12px',
                        color: '#475569',
                        border: '1px solid rgba(255,255,255,0.07)',
                        padding: '3px 10px',
                        borderRadius: '10px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: stats */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  alignItems: 'flex-end',
                }}
                className="items-start md:items-end"
              >
                {cs.stats.map((stat) => (
                  <div
                    key={stat.label}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}
                    className="items-start md:items-end"
                  >
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: 600,
                        color: '#F8FAFC',
                        letterSpacing: '-0.04em',
                        display: 'block',
                      }}
                    >
                      {stat.num}
                    </span>
                    <span style={{ fontSize: '12px', color: '#475569' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
