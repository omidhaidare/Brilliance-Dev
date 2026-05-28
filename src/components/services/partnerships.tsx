'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import CardArrow from '@/src/components/shared/ui/width-transition-on-hover/card-arrow';
import CardContent from '@/src/components/shared/ui/width-transition-on-hover/card-content';
import CardDescription from '@/src/components/shared/ui/width-transition-on-hover/card-description';
import CardIcon from '@/src/components/shared/ui/width-transition-on-hover/card-icon';
import CardTitle from '@/src/components/shared/ui/width-transition-on-hover/card-title';
import TransitionCard from '@/src/components/shared/ui/width-transition-on-hover/transition-card';
import TransitionGradient from '@/src/components/shared/ui/width-transition-on-hover/transition-gradient';
import TransitionWrapper from '@/src/components/shared/ui/width-transition-on-hover/transition-wrapper';
import React, { useState } from 'react';

const PARTNERSHIPS = [
  {
    img: '/images/icons/meta.png',
    alt: 'meta',
    title: 'Meta Business Partner',
    description:
      "As a Meta Business Partner, we help you leverage Meta's platforms to build a strong online presence. Our tailored web design and development approaches enhance your brand's digital identity and broaden your audience reach, ensuring you remain a strong contender in the online landscape.",
  },
  {
    img: '/images/icons/google-ads-certified.png',
    alt: 'google ads certified',
    title: 'Google Partner',
    description:
      "As a Google Partner, we help you leverage Google's platforms to build a strong online presence. Our tailored web design and development approaches enhance your brand's digital identity and broaden your audience reach, ensuring you remain a strong contender in the online landscape.",
  },
  {
    img: '/images/icons/klaviyo.png',
    alt: 'klaviyo',
    title: 'Technology Partner',
    description:
      "As a Technology Partner, we help you leverage modern tools to build a strong online presence. Our tailored web design and development approaches enhance your brand's digital identity and broaden your audience reach, ensuring you remain a strong contender in the online landscape.",
  },
];

const Partnerships = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      className="bg-background-5 pt-20 pb-20 md:pt-30 md:pb-30 lg:pt-44 lg:pb-44"
      data-oid="2jui9vl"
    >
      <div className="main-container space-y-10 md:space-y-17.5" data-oid="cthl_3:">
        <div className="space-y-1.5 text-center md:space-y-3" data-oid="z85l9zv">
          <RevealAnimation delay={0.1} data-oid="n8c0qv9">
            <div className="flex items-center justify-center max-md:pb-3" data-oid="u:6s830">
              <Badge badgeText="Partnership" className="text-white/50" data-oid="8o.ckpi" />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} data-oid="73pinj.">
            <h2
              className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 pt-1 font-normal text-white/90 max-md:leading-[1.1]"
              data-oid="kal57qb"
            >
              Certified by the Best
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3} data-oid="hn5c.u:">
            <p className="text-tagline-2 font-normal text-white/60" data-oid="c09ksze">
              Our certifications demonstrate our commitment to excellence in web design and
              development.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4} data-oid="0tr3oif">
          <TransitionWrapper data-oid="i874qtd">
            {PARTNERSHIPS.map((partner, i) => (
              <TransitionCard
                key={partner.title}
                href="/team"
                isActive={activeIndex === i}
                onMouseEnter={() => setActiveIndex(i)}
                className="bg-background-6!"
                data-oid="7tg9ec2"
              >
                <TransitionGradient data-oid="db0nz4l" />
                <CardContent data-oid="gkqls:.">
                  <CardIcon src={partner.img} alt={partner.alt} data-oid="x9pz-:z" />
                  <div className="flex justify-between gap-21" data-oid="3-gwetf">
                    <div data-oid="o_7n0c1">
                      <CardTitle data-oid="vu32_6:">{partner.title}</CardTitle>
                      <CardDescription data-oid="ryuxy65">{partner.description}</CardDescription>
                    </div>
                    <div data-oid="nnu2ft3">
                      <CardArrow data-oid=".i:5pg5" />
                    </div>
                  </div>
                </CardContent>
              </TransitionCard>
            ))}
          </TransitionWrapper>
        </RevealAnimation>

        <RevealAnimation delay={0.1} data-oid="1mb6r7i">
          <div className="flex justify-center" data-oid="frp4r8b">
            <PrimaryLinkButton
              href="/pricing"
              displayClassName="w-[85%] md:w-auto"
              data-oid="svie1om"
            >
              Let&apos;s get started
            </PrimaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Partnerships;
