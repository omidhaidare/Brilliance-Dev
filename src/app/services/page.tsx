import Hero from '@/src/components/services/hero';
import Partnerships from '@/src/components/services/partnerships';
import CTA from '@/src/components/shared/cta';
import { getServices } from '@/src/utils/getServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Website Design Agency | Brilliance Dev',
};

const page = () => {
  const services = getServices();
  return (
    <main className="bg-background-5" data-oid="356:80h">
      <Hero services={services} data-oid="fx:93n_" />
      <Partnerships data-oid="8hyqqbm" />
      <CTA className="bg-background-5! pt-20! md:pt-30! lg:pt-44!" data-oid="_so4dyy" />
    </main>
  );
};

export default page;
