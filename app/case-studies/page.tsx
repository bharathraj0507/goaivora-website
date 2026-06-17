import type { Metadata } from 'next'
import CaseStudies from '@/components/CaseStudies'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Case Studies — Enterprise Analytics Outcomes',
  description:
    'Real results from GoAivora engagements. Tableau to Microsoft Fabric migration, AI-powered claims analytics, and more.',
}

export default function CaseStudiesPage() {
  return (
    <>
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
              maxWidth: '640px',
            }}
          >
            Business outcomes delivered.
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#94A3B8',
              lineHeight: 1.65,
              maxWidth: '520px',
            }}
          >
            Real results from enterprise analytics modernization engagements across
            banking, insurance, and financial services.
          </p>
        </div>
      </section>
      <CaseStudies />
      <CTA />
    </>
  )
}
