import CaseStudyHero from '@/src/components/case-study/case-study-hero';
import CaseStudyList from '@/src/components/case-study/case-study-list';
import CTA from '@/src/components/shared/cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study - AI Marketing Agency || Nexsas',
};

const page = () => (
  <main className="bg-background-5">
    <CaseStudyHero />
    <CaseStudyList />
    <CTA className="pt-20! md:pt-30! lg:pt-44!" />
  </main>
);

export default page;
