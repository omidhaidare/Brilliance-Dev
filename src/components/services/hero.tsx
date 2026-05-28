import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import ImageReveal from '@/src/components/shared/ui/image-reveal-on-hover/image-reveal';
import RevealItem from '@/src/components/shared/ui/image-reveal-on-hover/reveal-item';
import type { ServiceItem } from '@/src/data/services';
import Image from 'next/image';
import { cn } from '@/src/utils/cn';

const Hero = ({ services }: { services: ServiceItem[] }) => {
  const UNIQUE_IMAGES = Array.from(new Set(services.map((s) => s.image).filter(Boolean)));

  return (
    <section className="bg-background-5 pt-39 pb-20 md:pt-44 md:pb-32 lg:pt-52 lg:pb-38 xl:pt-56 xl:pb-44">
      <div
        className="medias pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        aria-hidden
      >
        {UNIQUE_IMAGES.map((src) => (
          <Image key={src} src={src} alt="" width={1} height={1} />
        ))}
      </div>

      <div className="main-container">
        <div className="space-y-20">
          <div className="space-y-6 lg:max-w-150">
            <RevealAnimation delay={0.1}>
              <Badge badgeText="Expertise & Services" className="text-white/50" />
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 max-md:leading-[1.1]">
                  Architecting Digital Experiences That Drive Revenue.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-2 font-normal text-white/60">
                  Brilliance Dev is a premium digital agency blending bespoke design with
                  cutting-edge technology to future-proof your digital presence.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <ImageReveal
            className="relative"
            cursorClassName="h-[180px] w-[200px] md:h-[300px] md:w-[292px] lg:h-[386px]"
          >
            <div className="divide-stroke-1/11 divide-y">
              {services.map((service, index) => {
                const isImagePath = service.iconClass?.startsWith('/');

                return (
                  <RevealAnimation key={`${service.title}-${index}`} delay={0.1 + index * 0.1}>
                    <RevealItem image={service.image} href={service.href}>
                      <div className="service-item group relative py-4 pl-0 transition-all duration-400 ease-in-out hover:pl-4 lg:py-8">
                        <div className="absolute inset-0 h-0 bg-white transition-[height] duration-400 ease-in-out group-hover:h-full" />

                        <div className="relative z-20 flex items-center gap-x-4 gap-y-2">
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                            {isImagePath ? (
                              <Image
                                src={service.iconClass}
                                alt={service.title}
                                width={52}
                                height={52}
                                className="h-13 w-13 object-contain brightness-0 invert transition-all duration-400 group-hover:scale-110 group-hover:invert-0"
                              />
                            ) : (
                              <span
                                className={cn(
                                  service.iconClass,
                                  'text-[52px] text-white/60 transition-colors duration-400 ease-in-out group-hover:text-black max-lg:scale-90'
                                )}
                                aria-hidden
                              />
                            )}
                          </div>

                          <div className="lg:max-w-116.25">
                            <h3 className="font-instrument-serif md:text-is-heading-5 text-[26px] font-normal text-white/80 transition-colors duration-400 ease-in-out group-hover:text-black">
                              {service.title}
                            </h3>
                            <p className="text-tagline-2 font-normal text-white/60 transition-colors duration-400 ease-in-out group-hover:text-black/70">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </RevealItem>
                  </RevealAnimation>
                );
              })}
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
