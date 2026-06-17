import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import MigrationFramework from '@/components/MigrationFramework'
import AISolutions from '@/components/AISolutions'
import Marketplace from '@/components/Marketplace'
import WorkSim from '@/components/WorkSim'
import CaseStudies from '@/components/CaseStudies'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'GoAivora — Modernize Your Analytics. Migrate to Microsoft Fabric.',
  description:
    'GoAivora helps enterprises migrate Tableau and legacy BI to Microsoft Fabric. Build AI-powered dashboards, copilots, and enterprise analytics platforms.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <MigrationFramework />
      <AISolutions />
      <Marketplace />
      <WorkSim />
      <CaseStudies />
      <CTA />
    </>
  )
}
