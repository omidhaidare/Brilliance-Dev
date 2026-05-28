'use client';

import LogoWhite from '@/public/brand-logo.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { SocialIcons } from '@/src/components/shared/social-icons';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { name: 'X', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'GitHub', href: '#' }, // برای یک آژانس دولوپمنت، گیت‌هاب مهم‌تر از فیسبوک است
  { name: 'Dribbble', href: '#' }, // برای بخش دیزاین
];

const FooterLogoContact = () => (
  <div className="col-span-12 lg:col-span-4">
    <div className="space-y-8">
      <RevealAnimation delay={0.1}>
        <Link href="/" className="-ml-3.5 block">
          <span className="sr-only">Brilliance Dev</span>
          <figure className="relative h-10 w-41.5">
            <Image
              src={LogoWhite}
              alt="Brilliance Dev Architecture"
              fill
              className="object-contain object-left"
            />
          </figure>
        </Link>
      </RevealAnimation>
      <div className="space-y-6">
        <RevealAnimation delay={0.2}>
          <div>
            <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Headquarters:</p>
            <p className="text-tagline-3 font-normal text-white/50">
              One World Trade Center, Suite 8500
              <br />
              New York, NY 10007
            </p>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <div>
            <p className="text-tagline-2 text-background-11 mb-1 font-semibold">Inquiries:</p>
            <Link
              href="mailto:hello@brilliancedev.com"
              className="text-tagline-3 block font-normal text-white/50 transition-colors hover:text-white hover:underline"
            >
              hello@brilliancedev.com
            </Link>
          </div>
        </RevealAnimation>
      </div>
      <RevealAnimation delay={0.4}>
        <SocialIcons links={socialLinks} />
      </RevealAnimation>
    </div>
  </div>
);

export default FooterLogoContact;
