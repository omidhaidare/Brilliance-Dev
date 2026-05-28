'use client';

import opaiAvatarImg05 from '@/public/images/CTA/opai-avatar-img-05.jpg';
import opaiAvatarImg06 from '@/public/images/CTA/opai-avatar-img-06.jpg';
import opaiAvatarImg07 from '@/public/images/CTA/opai-avatar-img-07.jpg';
import opaiAvatarImg08 from '@/public/images/CTA/opai-avatar-img-08.jpg';
import opaiAvatarImg25 from '@/public/images/CTA/opai-avatar-img-25.jpg';
import opaiImg24 from '@/public/images/CTA/opai-img-24.jpg';
import vector01 from '@/public/images/vector-01.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import { useCtaContentImageAnimation } from '@/src/hooks/use-cta-content-image-animation';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import { useRef } from 'react';

interface CtaProps {
  className?: string;
}

const CTA = ({ className }: CtaProps) => {
  const contentImageRef = useRef<HTMLSpanElement>(null);
  const contentImage2Ref = useRef<HTMLSpanElement>(null);
  useCtaContentImageAnimation(contentImageRef, contentImage2Ref);

  return (
    <section
      className={cn('bg-background-6 overflow-hidden py-14 md:py-20 lg:py-24 xl:py-28', className)}
      data-oid="ixqvje1"
    >
      <div className="main-container" data-oid="qzyy-wz">
        <div className="space-y-14 pb-9" data-oid="pa76aa:">
          <AvatarReveal
            className="flex items-center justify-center gap-x-2"
            direction="left"
            stagger={0.1}
            data-oid="nhi-1d:"
          >
            {[opaiAvatarImg05, opaiAvatarImg06, opaiAvatarImg07, opaiAvatarImg08].map(
              (avatarImg, index) => (
                <AvatarItem key={index} className="inline-block shrink-0" data-oid="-hez3xr">
                  <Image
                    src={avatarImg}
                    alt={`Team Member ${index + 1}`}
                    width={56}
                    height={56}
                    className="inline-block size-14 rounded-full object-cover"
                    data-oid="dcamv8i"
                  />
                </AvatarItem>
              )
            )}
          </AvatarReveal>
          <div className="space-y-3" data-oid=":g0y8rd">
            <RevealAnimation delay={0.1} data-oid="uj26zer">
              <h2
                className="text-is-heading-3 lg:text-is-heading-2 font-instrument-serif text-center font-normal tracking-[-2.4px] text-white/90"
                data-oid="yni:udt"
              >
                <span
                  className="inline-flex flex-wrap items-start justify-center gap-x-1 sm:flex-nowrap md:items-center"
                  data-oid="mz2o2j6"
                >
                  <span className="w-full sm:w-auto" data-oid="20sa8ke">
                    Turn more visitors
                  </span>
                  <span
                    ref={contentImageRef}
                    className="cta-content-image inline-block h-13 w-22 overflow-hidden rounded-[300px] align-middle"
                    data-oid="ormemiz"
                  >
                    <Image
                      src={opaiImg24}
                      alt=""
                      aria-hidden
                      className="size-full object-cover"
                      data-oid="7g9xm:z"
                    />
                  </span>
                  <span className="w-full sm:w-auto" data-oid="dg-iq-9">
                    Into paying customers
                  </span>
                </span>
                <br data-oid="zqgm2vg" />
                <span
                  className="inline-flex items-center justify-center gap-x-4"
                  data-oid="9p8xg9y"
                >
                  <span
                    ref={contentImage2Ref}
                    className="cta-content-image-2 inline-block size-12 -rotate-20 overflow-hidden rounded-lg align-middle"
                    data-oid="th44uk-"
                  >
                    <Image
                      src={opaiAvatarImg25}
                      alt=""
                      aria-hidden
                      className="size-full object-cover"
                      data-oid="06jhe82"
                    />
                  </span>
                  <span data-oid="z8.ny2p">with a high-performing website</span>
                </span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2} data-oid="4usw2i3">
              <p
                className="text-tagline-2 mx-auto w-full max-w-[320px] text-center text-white/60"
                data-oid="ubbnc:n"
              >
                Strategy-led design and development that helps your business grow online.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.3} data-oid="t8fuo8o">
            <div className="flex justify-center" data-oid="66:cx.h">
              <PrimaryLinkButton href="/contact" data-oid="wlw_zqo">
                Book a strategy call
              </PrimaryLinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation
          delay={0.4}
          duration={3}
          direction="right"
          useSpring={true}
          data-oid="b1muzgt"
        >
          <figure className="flex justify-end" data-oid="ghxpcdy">
            <Image
              src={vector01}
              quality={100}
              alt="CTA"
              width={1290}
              height={91}
              data-oid="92sw7su"
            />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
