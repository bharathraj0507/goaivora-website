'use client'

import { motion } from 'framer-motion'

const services = [
  {
    name: 'Analytics Modernization',
    detail:
      'Tableau to Power BI and Microsoft Fabric. SQL Server and Snowflake migrations. Full preservation of business logic, governance, and row-level security across every workbook.',
  },
  {
    name: 'AI & Analytics Solutions',
    detail:
      'Analytics Copilots, AI Agents, and Conversational BI built on Fabric and Power BI. Executive dashboards with AI-narrated insights and automated anomaly detection.',
  },
  {
    name: 'Managed Analytics',
    detail:
      'Fabric administration, semantic model governance, performance tuning, and cost optimization for enterprise analytics environments at scale.',
  },
]

export default function Services() {
  return (
    <section
      style={{ background: '#0B0F14', padding: '100px 0' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1080px] mx-auto px-[52px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '72px' }}
        >
          <h2
            id="services-heading"
            style={{
              fontSize: '42px',
              fontWeight: 600,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: '#F8FAFC',
              marginBottom: '16px',
            }}
          >
            What we do for enterprises.
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#94A3B8',
              lineHeight: 1.7,
              maxWidth: '580px',
            }}
          >
            From legacy BI migration to production AI analytics — end-to-end
            solutions on Microsoft Fabric for banking, insurance, retail, and
            manufacturing.
          </p>
        </motion.div>

        <div role="list">
          {services.map((svc, i) => (
            <motion.div
              key={svc.name}
              role="listitem"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '260px 1fr',
                gap: '56px',
                alignItems: 'start',
                padding: '36px 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}
              className="last:border-b last:border-[rgba(255,255,255,0.07)]"
            >
              <span
                style={{
                  fontSize: '19px',
                  fontWeight: 500,
                  color: '#F8FAFC',
                  letterSpacing: '-0.02em',
                  paddingTop: '2px',
                }}
              >
                {svc.name}
              </span>
              <span
                style={{
                  fontSize: '16px',
                  color: '#94A3B8',
                  lineHeight: 1.7,
                }}
              >
                {svc.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
