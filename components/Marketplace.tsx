'use client'

import { motion } from 'framer-motion'

const industries = [
  {
    name: 'Banking',
    items: ['Customer 360', 'Risk Analytics', 'Fraud Detection', 'Revenue Intelligence'],
  },
  {
    name: 'Insurance',
    items: ['Claims Analytics', 'Claims AI Agent', 'Underwriting Analytics', 'Customer Analytics'],
  },
  {
    name: 'Retail',
    items: ['Sales Analytics', 'Demand Forecasting', 'Inventory Analytics', 'Customer Insights'],
  },
  {
    name: 'Manufacturing',
    items: ['OEE', 'Downtime Analytics', 'Supply Chain Analytics', 'Predictive Maintenance'],
  },
]

export default function Marketplace() {
  return (
    <section
      style={{ background: '#05070A', padding: '100px 0' }}
      aria-labelledby="marketplace-heading"
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
            id="marketplace-heading"
            style={{
              fontSize: '42px',
              fontWeight: 600,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: '#F8FAFC',
              marginBottom: '16px',
            }}
          >
            Production-ready dashboard marketplace.
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#94A3B8',
              lineHeight: 1.7,
              maxWidth: '620px',
            }}
          >
            Deploy in days, not months. Reusable analytics solutions designed for
            Banking, Insurance, Retail and Manufacturing — validated against real
            enterprise data models and built on Microsoft Fabric.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              style={{
                padding: '28px 24px',
                borderRight:
                  i < industries.length - 1
                    ? '1px solid rgba(255,255,255,0.07)'
                    : undefined,
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : undefined,
              }}
              className={[
                i % 2 === 0 && i !== industries.length - 1 ? 'border-r md:border-r' : '',
                i < 2 ? 'border-b md:border-b-0' : '',
              ].join(' ')}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#F8FAFC',
                  letterSpacing: '-0.01em',
                  marginBottom: '20px',
                }}
              >
                {ind.name}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {ind.items.map((item) => (
                  <li
                    key={item}
                    style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.4 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
