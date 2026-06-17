import type { Metadata } from 'next'
import Marketplace from '@/components/Marketplace'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Production-Ready Dashboard Marketplace',
  description:
    'Industry-specific dashboards for Banking, Insurance, Retail, and Manufacturing — built on Microsoft Fabric and Power BI. Deploy in days, not months.',
}

const industries = [
  {
    name: 'Banking',
    dashboards: [
      {
        title: 'Customer 360',
        desc: 'Unified view of customer relationships, products, and risk across all segments.',
      },
      {
        title: 'Risk Analytics',
        desc: 'Credit risk, market risk, and operational risk dashboards with regulatory reporting.',
      },
      {
        title: 'Fraud Detection',
        desc: 'Real-time fraud monitoring with pattern detection and case management workflows.',
      },
      {
        title: 'Revenue Intelligence',
        desc: 'Product profitability, fee income, and revenue attribution analysis.',
      },
    ],
  },
  {
    name: 'Insurance',
    dashboards: [
      {
        title: 'Claims Analytics',
        desc: 'End-to-end claims performance with trend analysis, severity tracking, and SLA monitoring.',
      },
      {
        title: 'Claims AI Agent',
        desc: 'AI-powered triage and routing for incoming claims with automated adjuster assignment.',
      },
      {
        title: 'Underwriting Analytics',
        desc: 'Policy performance, loss ratios, and underwriting profitability by segment.',
      },
      {
        title: 'Customer Analytics',
        desc: 'Retention, lapse, and cross-sell analytics across personal and commercial lines.',
      },
    ],
  },
  {
    name: 'Retail',
    dashboards: [
      {
        title: 'Sales Analytics',
        desc: 'Store, channel, and category performance with comp sales and margin analysis.',
      },
      {
        title: 'Demand Forecasting',
        desc: 'AI-powered demand planning with seasonal adjustment and promotional impact.',
      },
      {
        title: 'Inventory Analytics',
        desc: 'Stock health, days on hand, replenishment triggers, and shrink analysis.',
      },
      {
        title: 'Customer Insights',
        desc: 'Customer lifetime value, basket analysis, and loyalty segmentation.',
      },
    ],
  },
  {
    name: 'Manufacturing',
    dashboards: [
      {
        title: 'OEE',
        desc: 'Overall equipment effectiveness with availability, performance, and quality breakdowns.',
      },
      {
        title: 'Downtime Analytics',
        desc: 'Equipment downtime root cause analysis, MTTR/MTBF tracking, and maintenance scheduling.',
      },
      {
        title: 'Supply Chain Analytics',
        desc: 'Supplier performance, lead times, inventory turns, and logistics cost analysis.',
      },
      {
        title: 'Predictive Maintenance',
        desc: 'ML-powered failure prediction with maintenance window optimization.',
      },
    ],
  },
]

export default function MarketplacePage() {
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
            Production-ready dashboard marketplace.
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#94A3B8',
              lineHeight: 1.6,
              marginBottom: '8px',
            }}
          >
            Deploy in days, not months.
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '560px',
            }}
          >
            Reusable analytics solutions designed for Banking, Insurance, Retail
            and Manufacturing — validated against real enterprise data models and
            built on Microsoft Fabric.
          </p>
        </div>
      </section>

      {/* Detail by industry */}
      {industries.map((ind, ii) => (
        <section
          key={ind.name}
          style={{
            background: ii % 2 === 0 ? '#0B0F14' : '#05070A',
            padding: '80px 0',
          }}
        >
          <div className="max-w-[1080px] mx-auto px-[52px]">
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#F8FAFC',
                marginBottom: '40px',
              }}
            >
              {ind.name}
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
              {ind.dashboards.map((d) => (
                <div
                  key={d.title}
                  style={{
                    background: ii % 2 === 0 ? '#0B0F14' : '#05070A',
                    padding: '24px 28px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#F8FAFC',
                      letterSpacing: '-0.01em',
                      marginBottom: '8px',
                    }}
                  >
                    {d.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA />
    </>
  )
}
