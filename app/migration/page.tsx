import type { Metadata } from 'next'
import MigrationFramework from '@/components/MigrationFramework'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Tableau to Power BI & Microsoft Fabric Migration',
  description:
    'Migrate Tableau, SQL Server, and Snowflake to Microsoft Fabric. Preserve business logic, reduce migration risk, and accelerate modernization with GoAivora.',
}

const columns = [
  {
    label: 'Source Systems',
    tone: 'neutral',
    items: [
      'Tableau Workbooks',
      'LOD Expressions',
      'Extracts',
      'Data Sources',
      'Governance & RLS',
      'Calculated Fields',
      'Published Data Sources',
    ],
  },
  {
    label: 'Migration Framework',
    tone: 'blue',
    items: [
      'Metadata Extraction',
      'Business Logic Conversion',
      'Semantic Mapping',
      'Validation & Testing',
      'Performance Optimization',
      'AI Enablement',
      'Documentation',
    ],
  },
  {
    label: 'Modern Platform',
    tone: 'purple',
    items: [
      'Power BI Reports',
      'Semantic Models',
      'Fabric Lakehouse',
      'DirectLake',
      'Analytics Copilot',
      'Row Level Security',
      'Enterprise Governance',
    ],
  },
]

const dotColors: Record<string, string> = {
  neutral: '#2D3748',
  blue: 'rgba(59,130,246,0.45)',
  purple: 'rgba(139,92,246,0.45)',
}

const toneStyles: Record<string, React.CSSProperties> = {
  neutral: { background: 'transparent' },
  blue: { background: 'rgba(59,130,246,0.03)' },
  purple: { background: 'rgba(139,92,246,0.03)' },
}

const flowSteps = [
  'Assessment',
  'Architecture',
  'Migration',
  'Validation',
  'Fabric Deployment',
  'AI Enablement',
]

const migrationTypes = [
  {
    from: 'Tableau',
    to: 'Power BI',
    desc: 'Full fidelity migration of Tableau workbooks, LOD expressions, and calculated fields to Power BI semantic models and reports.',
  },
  {
    from: 'Tableau',
    to: 'Microsoft Fabric',
    desc: 'End-to-end migration to Fabric Lakehouse with DirectLake connectivity, unified semantic layer, and AI Copilot enablement.',
  },
  {
    from: 'SQL Server',
    to: 'Fabric',
    desc: 'Migrate SQL Server data warehouses to Fabric Lakehouse with modern Delta Lake format and Fabric pipelines.',
  },
  {
    from: 'Snowflake',
    to: 'Fabric',
    desc: 'Move from Snowflake to Microsoft Fabric Lakehouse with full schema migration and DirectLake optimization.',
  },
]

export default function MigrationPage() {
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
              maxWidth: '720px',
            }}
          >
            Tableau to Power BI &amp; Microsoft Fabric Migration
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#94A3B8',
              lineHeight: 1.6,
              marginBottom: '8px',
            }}
          >
            Preserve business logic. Reduce migration risk. Accelerate
            modernization.
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '580px',
              marginBottom: '40px',
            }}
          >
            Our migration factory converts Tableau workbooks, LOD expressions,
            calculated fields, and governance structures into production-ready
            Power BI semantic models and Fabric deployments — without rebuilding
            from scratch.
          </p>
        </div>
      </section>

      {/* Migration types */}
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
            Migration paths we support.
          </h2>
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
            {migrationTypes.map((mt) => (
              <div
                key={`${mt.from}-${mt.to}`}
                style={{ background: '#0B0F14', padding: '28px 28px 32px' }}
              >
                <p
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#F8FAFC',
                    letterSpacing: '-0.02em',
                    marginBottom: '10px',
                  }}
                >
                  {mt.from}{' '}
                  <span style={{ color: '#475569', fontWeight: 400 }}>→</span>{' '}
                  {mt.to}
                </p>
                <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.65 }}>
                  {mt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework section (reused inline) */}
      <section style={{ background: '#05070A', padding: '80px 0' }}>
        <div className="max-w-[1080px] mx-auto px-[52px]">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '0',
              marginBottom: '2px',
            }}
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
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
              >
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
          </div>

          {/* Flow */}
          <div
            style={{
              marginTop: '32px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              paddingBottom: '2px',
              gap: 0,
            }}
          >
            {flowSteps.map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: i === flowSteps.length - 1 ? '#A78BFA' : '#94A3B8',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step}
                </span>
                {i < flowSteps.length - 1 && (
                  <span style={{ color: '#2D3748', padding: '0 10px', fontSize: '12px' }}>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
