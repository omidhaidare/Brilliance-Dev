'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { InstagramIcon, LinkedInIcon, XIcon } from '@/src/components/shared/icon';

const socialCards = [
  {
    Icon: LinkedInIcon,
    href: 'https://linkedin.com/company/brilliancedev',
    label: 'Follow Brilliance Dev on LinkedIn (opens in new tab)',
    labelText: 'LinkedIn',
    handle: '@BrillianceDev',
  },
  {
    Icon: XIcon,
    href: 'https://x.com/brilliancedev',
    label: 'Follow Brilliance Dev on X / Twitter (opens in new tab)',
    labelText: 'X (Twitter)',
    handle: '@BrillianceDev',
  },
  {
    Icon: InstagramIcon,
    href: 'https://instagram.com/brilliancedev',
    label: 'Follow Brilliance Dev on Instagram (opens in new tab)',
    labelText: 'Instagram',
    handle: '@BrillianceDev',
  },
];

const ContactFollowUs = () => (
  <section className="bg-background-7 py-20 md:py-30 lg:py-44">
    <div className="main-container">
      <div className="space-y-17.5">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90">
              Join Our Engineering Network
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Stay connected and explore our latest digital architectures and UI/UX insights.
            </p>
          </RevealAnimation>
        </div>

        <div className="mx-auto grid max-w-212.5 grid-cols-12 items-center justify-center gap-y-6 md:gap-x-8 md:gap-y-0">
          {socialCards.map(({ Icon, href, label, labelText, handle }, index) => (
            <RevealAnimation key={labelText} delay={0.3 + index * 0.1}>
              <div className="col-span-12 h-full md:col-span-4">
                {/* تغییرات اصلی در این دیو انجام شده تا کاملا سنتر شود */}
                <div className="border-stroke-3/18 flex h-full flex-col items-center justify-center gap-y-5 rounded-lg border bg-white p-6 text-center transition-transform duration-450 ease-in-out hover:scale-105 lg:p-10">
                  <span className="flex size-9 items-center justify-center">
                    <Icon className="stroke-background-6 fill-none" />
                  </span>

                  {/* کلاس text-nowrap حذف شد و متن‌ها زیر هم چیده شدند */}
                  <p className="font-inter-tight text-tagline-1 text-background-13/90 w-full font-normal">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group flex flex-col items-center justify-center gap-1 hover:underline"
                    >
                      <span className="block font-medium">{labelText}</span>
                      <span className="text-background-13/60 group-hover:text-background-13/90 block text-[0.95em] transition-colors">
                        {handle}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactFollowUs;
