import CTA from '@/src/components/shared/cta';
import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';
import AboutAchievement from '../../components/about/about-achievement';
import AboutFaq from '../../components/about/about-faq';
import AboutHero from '../../components/about/about-hero';
import AboutProcess from '../../components/about/about-process';
import AboutWhyChooseUs from '../../components/about/about-why-choose-us';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'About Us - AI Marketing Agency',
};

const AboutPage = () => (
  <main className="bg-background-7">
    <AboutHero />
    <AboutAchievement />
    <AboutProcess />
    <AboutWhyChooseUs />
    <AboutFaq />
    <CTA className="pt-20! md:pt-30! lg:pt-44!" />
  </main>
);

export default AboutPage;
