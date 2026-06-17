'use client'

import { motion } from 'framer-motion'

const columns = [
  {
    label: 'Source Systems',
    tone: 'neutral',
    items: [
      'Tableau Workbooks',
      'LOD Expressions',
      'Extracts',
      'Data Sources',
      'Governance',
    ],
  },
  {
    label: 'Migration Framework',
    tone: 'blue',
    items: [
      'Metadata Extraction',
      'Business Logic Conversion',
      'Validation',
      'Optimization',
      'AI Enablement',
    ],
  },
  {
    label: 'Modern Platform',
    tone: 'purple',
    items: [
      'Power BI',
      'Semantic Models',
      'Fabric Lakehouse',
      'DirectLake',
      'Analytics Copilot',
    ],
  },
]

const flowSteps = [
  'Assessment',
  'Architecture',
  'Migration',
  'Validation',
  'Fabric Deployment',
  'AI Enablement',
]

const toneStyles: Record<string, React.CSSProperties> = {
  neutral: { background: 'transparent' },
  blue: { background: 'rgba(59,130,246,0.03)' },
  purple: { background: 'rgba(139,92,246,0.03)' },
}

const dotColors: Record<string, string> = {
  neutral: '#2D3748',
  blue: 'rgba(59,130,246,0.45)',
  purple: 'rgba(139,92,246,0.45)',
}

export default function MigrationFramework() {
  return (
    <section
      style={{ background: '#05070A', padding: '100px 0' }}
      aria-labelledby="migration-heading"
    >
      <div className="max-w-[1080px] mx-auto px-[52px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
            marginBottom: '56px',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          <div>
            <h2
              id="migration-heading"
              style={{
                fontSize: '42px',
                fontWeight: 600,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#F8FAFC',
                marginBottom: '16px',
              }}
            >
              Tableau to Power BI &amp; Microsoft Fabric Migration
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: '#94A3B8',
                lineHeight: 1.7,
              }}
            >
              Preserve business logic. Reduce migration risk. Accelerate
              modernization.
            </p>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <p
              style={{
                fontSize: '15px',
                color: '#94A3B8',
                lineHeight: 1.7,
              }}
            >
              Our migration factory converts Tableau workbooks, LOD expressions,
              calculated fields, and governance structures into production-ready
              Power BI semantic models and Fabric deployments — without rebuilding
              from scratch.
            </p>
          </div>
        </motion.div>

        {/* Column headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            marginBottom: '2px',
          }}
          className="hidden md:grid"
        >
          {columns.map((col) => (
            <div
              key={col.label}
              style={{
                padding: '0 28px 16px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#475569',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {col.label}
            </div>
          ))}
        </div>

        {/* 3-column table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {columns.map((col, ci) => (
            <div
              key={col.label}
              style={{
                ...toneStyles[col.tone],
                padding: '28px 28px 32px',
                borderRight:
                  ci < columns.length - 1
                    ? '1px solid rgba(255,255,255,0.07)'
                    : undefined,
              }}
              className={ci < columns.length - 1 ? 'border-r-0 md:border-r' : ''}
            >
              {/* Mobile label */}
              <p
                className="md:hidden"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#475569',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                {col.label}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {col.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '15px',
                      color: '#94A3B8',
                      paddingLeft: '16px',
                      position: 'relative',
                      lineHeight: 1.45,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '8px',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: dotColors[col.tone],
                        display: 'inline-block',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: '32px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            paddingBottom: '2px',
            gap: 0,
          }}
          className="text-sm"
        >
          {flowSteps.map((step, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color:
                    i === flowSteps.length - 1 ? '#A78BFA' : '#94A3B8',
                  whiteSpace: 'nowrap',
                }}
              >
                {step}
              </span>
              {i < flowSteps.length - 1 && (
                <span
                  style={{ color: '#2D3748', padding: '0 10px', fontSize: '12px' }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
