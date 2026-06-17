interface Tier {
  label: string
  title: string
  items: string[]
  background?: string
  labelColor?: string
}

interface ArchitectureCardProps {
  tiers?: Tier[]
  connectorLabel?: string
}

const defaultTiers: Tier[] = [
  {
    label: 'Legacy Analytics',
    title: 'Source Systems',
    items: ['Tableau', 'Snowflake', 'SQL Server'],
  },
  {
    label: 'Unified Platform',
    title: 'Microsoft Fabric',
    items: ['Lakehouse', 'Semantic Models', 'DirectLake'],
    background: 'rgba(59,130,246,0.04)',
    labelColor: 'rgba(147,197,253,0.55)',
  },
  {
    label: 'Modern Analytics',
    title: 'Delivered Outcomes',
    items: ['Power BI', 'AI Copilot', 'Conversational BI'],
    background: 'rgba(139,92,246,0.04)',
    labelColor: 'rgba(196,181,253,0.55)',
  },
]

export default function ArchitectureCard({
  tiers = defaultTiers,
  connectorLabel = 'Migration Factory',
}: ArchitectureCardProps) {
  return (
    <div
      style={{
        background: '#0B0F14',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '14px',
        overflow: 'hidden',
      }}
    >
      {tiers.map((tier, i) => (
        <div key={tier.title}>
          {i > 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '9px 24px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }}
              />
              {i === 1 && (
                <span
                  style={{
                    fontSize: '11px',
                    color: '#2D3748',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {connectorLabel}
                </span>
              )}
              <div
                style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }}
              />
            </div>
          )}
          <div
            style={{
              padding: '22px 24px',
              background: tier.background || 'transparent',
              borderTop: i > 0 ? undefined : undefined,
            }}
          >
            <p
              style={{
                fontSize: '11px',
                fontWeight: 500,
                color: tier.labelColor || '#475569',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '11px',
              }}
            >
              {tier.label}
            </p>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: '#F8FAFC',
                letterSpacing: '-0.01em',
                marginBottom: '10px',
              }}
            >
              {tier.title}
            </p>
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
              {tier.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: '12px',
                    color: '#94A3B8',
                    padding: '4px 11px',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
