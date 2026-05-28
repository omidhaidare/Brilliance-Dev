import About from '@/src/components/home/about';
import CaseStudy from '@/src/components/home/case-study';
import Clients from '@/src/components/home/clients';
import Hero from '@/src/components/home/hero';
import OurProcess from '@/src/components/home/our-process';
import Services from '@/src/components/home/services';
import Testimonial from '@/src/components/home/testimonial';
import WhyChooseUs from '@/src/components/home/why-choose-us';
import CTA from '@/src/components/shared/cta';
import { getServices } from '@/src/utils/getServices';

import { generateMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'Website Design & Development Agency | Brilliance Dev',
};

const Page = () => {
  const services = getServices();
  return (
    <main className="bg-background-7">
      <Hero />
      <Clients />
      <Services services={services} />
      <WhyChooseUs />
      <CaseStudy />
      <Testimonial />
      <About />
      <OurProcess />
      <CTA className="pt-20! md:pt-30! lg:pt-44!" />
    </main>
  );
};

export default Page;
