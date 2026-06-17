'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      style={{ background: '#05070A' }}
      className="border-b"
      aria-label="Hero"
    >
      <div
        className="max-w-[1080px] mx-auto px-[52px] py-[108px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        {/* Left */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            style={{
              fontSize: '54px',
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: '-0.04em',
              color: '#F8FAFC',
              marginBottom: '10px',
            }}
          >
            Modernize Your{' '}
            <span
              style={{
                background: 'linear-gradient(90deg,#22D3EE,#3B82F6,#8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Analytics
            </span>
            .
          </motion.h1>

          <motion.p
            custom={0.05}
            variants={fadeUp}
            style={{
              fontSize: '20px',
              fontWeight: 400,
              color: '#94A3B8',
              lineHeight: 1.5,
              letterSpacing: '-0.01em',
              marginBottom: '6px',
            }}
          >
            Migrate Tableau and legacy BI to Microsoft Fabric.
          </motion.p>

          <motion.p
            custom={0.1}
            variants={fadeUp}
            style={{
              fontSize: '20px',
              fontWeight: 400,
              color: '#94A3B8',
              lineHeight: 1.5,
              letterSpacing: '-0.01em',
              marginBottom: '32px',
            }}
          >
            Build AI-powered dashboards, copilots and enterprise analytics.
          </motion.p>

          <motion.p
            custom={0.15}
            variants={fadeUp}
            style={{
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '460px',
            }}
          >
            GoAivora helps enterprises modernize analytics ecosystems, preserve
            business logic during migrations, and accelerate AI adoption with
            Microsoft Fabric.
          </motion.p>

          <motion.div
            custom={0.2}
            variants={fadeUp}
            className="flex items-center gap-3 flex-wrap"
          >
            <Link
              href="/contact"
              style={{
                background: '#F8FAFC',
                color: '#05070A',
                fontSize: '14px',
                fontWeight: 600,
                padding: '11px 22px',
                borderRadius: '7px',
                letterSpacing: '-0.01em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              className="transition-opacity hover:opacity-90"
            >
              Book Assessment
            </Link>
            <Link
              href="/case-studies"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#94A3B8',
                padding: '11px 22px',
                borderRadius: '7px',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
              className="transition-colors hover:text-white"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              View Case Studies
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — Architecture Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <ArchitectureCard />
          <p
            style={{
              fontSize: '12px',
              color: '#475569',
              textAlign: 'center',
              marginTop: '14px',
              letterSpacing: '0.01em',
              lineHeight: 1.55,
              padding: '0 4px',
            }}
          >
            Specialized in Tableau Migration, Microsoft Fabric, AI-Powered
            Analytics, and Enterprise Business Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ArchitectureCard() {
  return (
    <div
      style={{
        background: '#0B0F14',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '14px',
        overflow: 'hidden',
      }}
    >
      {/* Tier 1: Legacy */}
      <div style={{ padding: '22px 24px' }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 500,
            color: '#475569',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '11px',
          }}
        >
          Legacy Analytics
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
          Source Systems
        </p>
        <div className="flex gap-2 flex-wrap">
          {['Tableau', 'Snowflake', 'SQL Server'].map((item) => (
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

      {/* Connector */}
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
        <span
          style={{
            fontSize: '11px',
            color: '#2D3748',
            fontWeight: 500,
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          Migration Factory
        </span>
        <div
          style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }}
        />
      </div>

      {/* Tier 2: Fabric */}
      <div
        style={{
          padding: '22px 24px',
          background: 'rgba(59,130,246,0.04)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontWeight: 500,
            color: 'rgba(147,197,253,0.55)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '11px',
          }}
        >
          Unified Platform
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
          Microsoft Fabric
        </p>
        <div className="flex gap-2 flex-wrap">
          {['Lakehouse', 'Semantic Models', 'DirectLake'].map((item) => (
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

      {/* Connector 2 */}
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
        <div
          style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }}
        />
      </div>

      {/* Tier 3: Modern */}
      <div
        style={{
          padding: '22px 24px',
          background: 'rgba(139,92,246,0.04)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontWeight: 500,
            color: 'rgba(196,181,253,0.55)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '11px',
          }}
        >
          Modern Analytics
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
          Delivered Outcomes
        </p>
        <div className="flex gap-2 flex-wrap">
          {['Power BI', 'AI Copilot', 'Conversational BI'].map((item) => (
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
  )
}
