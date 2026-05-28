'use client';

import avatarImage1 from '@/public/images/Customers/72.jpg';
import avatarImage2 from '@/public/images/Customers/82.jpg';
import avatarImage3 from '@/public/images/Customers/95.jpg';
import avatarImage4 from '@/public/images/Customers/97.jpg';
import achievementImage from '@/public/images/about/achievementImage.avif';
import NumberAnimation from '@/src/components/animation/number-animation';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import { Badge } from '@/src/components/shared/ui/badge';
import Image from 'next/image';

const AboutAchievement = () => {
  return (
    <section className="bg-background-5 lp:py-44 relative overflow-hidden py-20 md:py-25 lg:py-30">
      <div className="main-container relative z-20">
        <div className="flex flex-col items-center justify-center gap-x-15 gap-y-18 lg:flex-row lg:gap-y-0 xl:gap-x-25">
          <div className="w-full space-y-8">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <Badge badgeText="Our Legacy" className="text-white" />
              </RevealAnimation>

              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                    Architecting Digital Brilliance
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-tagline-2 max-w-155 font-normal text-white/60">
                    Brilliance Dev was founded on a simple belief: every digital experience should
                    be a masterpiece. We engineer high-performance, award-winning websites that
                    empower brands to dominate their industries.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-x-3 gap-y-3 md:flex-row">
              <div className="w-full space-y-3">
                <RevealAnimation delay={0.3}>
                  <div className="bg-background-4 flex w-full items-center gap-x-3 rounded-sm p-8">
                    <h3 className="font-instrument-serif text-is-heading-5 flex items-center font-normal text-white/90">
                      <NumberAnimation number={100} speed={2000} interval={200} rooms={3} />%
                    </h3>
                    <p className="text-tagline-2 font-inter-tight font-normal text-white/90">
                      Lighthouse Performance Score
                    </p>
                  </div>
                </RevealAnimation>

                <RevealAnimation delay={0.4}>
                  <div className="bg-background-4 w-full space-y-3 rounded-sm p-8">
                    <h3 className="text-is-heading-5 font-instrument-serif font-normal text-white/90">
                      High-End Engineering
                    </h3>
                    <p className="text-tagline-3 font-inter-tight w-full max-w-60.5 font-normal text-white/90">
                      We build robust, scalable, and lightning-fast architectures.
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <div className="w-full space-y-3">
                <RevealAnimation delay={0.5}>
                  <div className="bg-background-4 w-full space-y-3 rounded-sm p-8">
                    <h3 className="text-is-heading-5 font-instrument-serif font-normal text-white/90">
                      Bespoke UI/UX
                    </h3>
                    <p className="text-tagline-3 font-inter-tight w-full max-w-60.5 font-normal text-white/90">
                      Crafting pixel-perfect designs that drive conversion and inspire users.
                    </p>
                  </div>
                </RevealAnimation>

                <RevealAnimation delay={0.6}>
                  <div className="bg-background-4 flex flex-row items-center gap-x-4 gap-y-8 rounded-sm p-8 lg:flex-col xl:flex-row xl:gap-y-0">
                    <AvatarReveal
                      className="flex items-center justify-center -space-x-2"
                      direction="left"
                      stagger={0.1}
                    >
                      <AvatarItem className="size-9 overflow-hidden rounded-full ring-2 ring-white">
                        <Image
                          src={avatarImage1}
                          alt="Client avatar"
                          width={36}
                          height={36}
                          className="size-full object-cover"
                        />
                      </AvatarItem>
                      <AvatarItem className="lp:block hidden size-9 overflow-hidden rounded-full ring-2 ring-white">
                        <Image
                          src={avatarImage2}
                          alt="Client avatar"
                          width={36}
                          height={36}
                          className="size-full object-cover"
                        />
                      </AvatarItem>
                      <AvatarItem className="lp:block hidden size-9 overflow-hidden rounded-full ring-2 ring-white">
                        <Image
                          src={avatarImage3}
                          alt="Client avatar"
                          width={36}
                          height={36}
                          className="size-full object-cover"
                        />
                      </AvatarItem>
                      <AvatarItem className="size-9 overflow-hidden rounded-full ring-2 ring-white">
                        <Image
                          src={avatarImage4}
                          alt="Client avatar"
                          width={36}
                          height={36}
                          className="size-full object-cover"
                        />
                      </AvatarItem>
                      <AvatarItem className="bg-background-13/50 font-inter-tight text-tagline-4 flex size-9 items-center justify-center rounded-full font-normal text-white/80 ring-2 ring-white backdrop-blur-[5.5px]">
                        99+
                      </AvatarItem>
                    </AvatarReveal>
                    <p className="text-tagline-3 font-inter-tight font-normal text-white/60">
                      Trusted by visionary leaders worldwide.
                    </p>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <figure className="h-94.25-full overflow-hidden rounded-lg lg:max-w-112.75 xl:h-113.5">
              <Image
                src={achievementImage}
                alt="Brilliance Dev Achievement"
                width={451}
                height={454}
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGBgaGBgYGBwaHBgYGBwYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEAQUGB//EADcQAQACAAMFBAAEAwEBAQAAAAEAAhEDIRIxQVFhBCIycYGRobEFE8HRQlLwI2Lh8RQVgpLC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAQADAQEAAAAAAAAAAQIRAyExEkETIlFh/9oADAMBAAIRAxEAPwD9MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
                className="size-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutAchievement;
