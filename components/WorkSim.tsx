'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const messages = [
  {
    who: 'Stakeholder',
    text: '"We need claims trends broken out by province and claim type for the Q4 board review."',
  },
  {
    who: 'AI Manager',
    text: 'Refresh time exceeds SLA at 95 min. Optimize DAX measures and consider DirectLake mode.',
  },
  {
    who: 'QA',
    text: '2 test cases failed. Filter context on the province slicer needs review before sign-off.',
  },
]

const submissions = [
  'Claims Dashboard v2.pbix',
  'Semantic Model — Claims Lakehouse',
  'Technical Documentation.md',
]

const capabilities = [
  'Jira-style sprint tickets and workflows',
  'AI Manager feedback on every submission',
  'Simulated stakeholder meetings',
  'Power BI, Tableau, and Fabric projects',
  'QA reviews and enterprise documentation',
]

export default function WorkSim() {
  return (
    <section
      style={{ background: '#0B0F14', padding: '100px 0' }}
      aria-labelledby="worksim-heading"
    >
      <div className="max-w-[1080px] mx-auto px-[52px]">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="worksim-heading"
              style={{
                fontSize: '42px',
                fontWeight: 600,
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#F8FAFC',
                marginBottom: '18px',
              }}
            >
              GoAivora WorkSim
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: '#94A3B8',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              An AI-powered enterprise job simulation platform. Professionals
              build real analytics skills by working through simulated sprints,
              stakeholder reviews, AI manager feedback, and QA cycles — in Power
              BI, Tableau, and Microsoft Fabric.
            </p>
            <Link
              href="/worksim"
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
                marginBottom: '40px',
              }}
              className="transition-colors hover:text-white"
            >
              Explore WorkSim →
            </Link>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
              {capabilities.map((cap, i) => (
                <li
                  key={cap}
                  style={{
                    fontSize: '15px',
                    color: '#94A3B8',
                    padding: '13px 0',
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    borderBottom:
                      i === capabilities.length - 1
                        ? '1px solid rgba(255,255,255,0.07)'
                        : undefined,
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
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: workspace mock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div
              style={{
                background: '#05070A',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              {/* Board header */}
              <div
                style={{
                  padding: '14px 20px',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#F8FAFC',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Sprint 02 — Claims Analytics
                  </p>
                  <p
                    style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}
                  >
                    MapleShield Insurance · Power BI · Week 2 of 4
                  </p>
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'rgba(59,130,246,0.9)',
                    background: 'rgba(59,130,246,0.1)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                  }}
                >
                  In Progress
                </span>
              </div>

              {/* Ticket body */}
              <div style={{ padding: '20px 22px' }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#475569',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    marginBottom: '7px',
                  }}
                >
                  Ticket #124
                </p>
                <p
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    color: '#F8FAFC',
                    letterSpacing: '-0.02em',
                    marginBottom: '22px',
                  }}
                >
                  Build Claims Dashboard by Province
                </p>

                {/* Thread */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {messages.map((msg, i) => (
                    <div
                      key={msg.who}
                      style={{
                        padding: '14px 0',
                        borderTop:
                          i === 0
                            ? undefined
                            : '1px solid rgba(255,255,255,0.07)',
                        display: 'grid',
                        gridTemplateColumns: '84px 1fr',
                        gap: '14px',
                        alignItems: 'start',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#475569',
                          paddingTop: '1px',
                        }}
                      >
                        {msg.who}
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          color: '#94A3B8',
                          lineHeight: 1.55,
                        }}
                      >
                        {msg.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Submission */}
                <div
                  style={{
                    marginTop: '18px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: '#475569',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                    }}
                  >
                    Submission
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {submissions.map((file) => (
                      <div
                        key={file}
                        style={{
                          fontSize: '13px',
                          color: '#94A3B8',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '9px',
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
                        {file}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div
                  style={{
                    height: '2px',
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '1px',
                    marginTop: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '38%',
                      height: '100%',
                      background: 'linear-gradient(90deg,#3B82F6,#8B5CF6)',
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
