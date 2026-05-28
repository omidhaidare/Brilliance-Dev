import RevealAnimation from '@/src/components/animation/reveal-animation';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import { PrimaryLinkButton } from '@/src/components/shared/ui/button/primary-link-button';
import Image from 'next/image';
import AnimateGradient from './animate-gradient';
import GradientImg from './gradient-img';

const avatars = [
  '/images/Customers/43.jpg',
  '/images/Customers/72.jpg',
  '/images/Customers/82.jpg',
  '/images/Customers/95.jpg',
  '/images/Customers/97.jpg',
];

const Hero = () => (
  <section className="bg-background-5 relative overflow-hidden pt-37.5 pb-16 md:pb-24 lg:pt-50 lg:pb-28 xl:pt-40 xl:pb-36 2xl:pb-44">
    <div className="main-container relative z-20">
      <div className="space-y-1.5 text-center md:space-y-3">
        <RevealAnimation delay={0.1}>
          <h1 className="text-is-heading-3 md:text-is-heading-2 lg:text-is-heading-1 font-normal text-white/90 max-md:leading-[1.1]">
            We build websites that turn
            <br className="hidden lg:block" />
            visitors into customers.
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-tagline-2 font-normal text-white/60">
            Brilliance Dev is a website design and development agency,
            <br className="hidden lg:block" />
            We design and build websites that drive business growth.
          </p>
        </RevealAnimation>
      </div>
      <div className="space-y-8 pt-13 lg:pt-18">
        <RevealAnimation delay={0.3}>
          <div className="flex justify-center">
            <PrimaryLinkButton href="/about" displayClassName="w-[80%] sm:w-auto">
              Get Expert Advice
            </PrimaryLinkButton>
          </div>
        </RevealAnimation>
        <div className="flex items-center justify-center gap-4 max-[375px]:flex-col">
          <AvatarReveal
            className="flex -space-x-2.5"
            direction="left"
            stagger={0.08}
            markers={false}
          >
            {avatars.map((src, i) => (
              <AvatarItem key={src} className="inline-block shrink-0">
                <Image
                  src={src}
                  alt={`Avatar ${i + 1}`}
                  width={36}
                  height={36}
                  className="inline-block size-9 rounded-full object-cover ring-2 ring-white"
                />
              </AvatarItem>
            ))}
            <AvatarItem>
              <div className="text-tagline-4 inline-flex size-9 items-center justify-center rounded-full bg-[#0d0d1280] font-medium text-white/80 ring-2 ring-white backdrop-blur-[6px]">
                99+
              </div>
            </AvatarItem>
          </AvatarReveal>
          <RevealAnimation delay={0.4}>
            <div className="text-left max-[375px]:text-center">
              <p className="text-tagline-3 block font-medium text-black/50">Trusted by 100+</p>
              <p className="text-tagline-4 text-black/35">Businesses worldwide</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </div>
    <figure className="absolute bottom-0 left-1/2 z-0 size-full max-w-347.5 -translate-x-1/2 md:-bottom-10 lg:bottom-0">
      <AnimateGradient />
    </figure>
    <GradientImg
      imagePath="/images/gradient/opai-2.avif"
      className="absolute bottom-0 left-0 z-4 h-174 w-full min-[2000px]:bottom-0 md:-bottom-4 md:h-135 lg:h-140 2xl:h-199"
    />
  </section>
);

export default Hero;
