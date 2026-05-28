import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import ServiceCard from '@/src/components/shared/ui/card/service-card';
import ImageReveal from '@/src/components/shared/ui/image-reveal-on-hover/image-reveal';
import RevealItem from '@/src/components/shared/ui/image-reveal-on-hover/reveal-item';
import type { ServiceItem } from '@/src/data/services';
import { PrimaryLinkButton } from '../shared/ui/button/primary-link-button';

const Services = ({ services }: { services: ServiceItem[] }) => {
  return (
    <section
      className="bg-background-5 py-16 md:py-24 lg:py-28 xl:py-36 2xl:py-44"
      data-oid="osygwpd"
    >
      <div className="main-container" data-oid="pxx89og">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-2 lg:gap-x-20" data-oid="t2-msth">
          <div className="space-y-1.5 md:space-y-3 lg:max-w-128.5" data-oid="totdiiv">
            <RevealAnimation delay={0.1} data-oid="wq4-1f_">
              <div className="pb-4" data-oid="8t1uo.r">
                <Badge badgeText="Our Services" className="text-white/60" data-oid="q_66qj1" />
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} data-oid="hqvro46">
              <h2
                className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white/90 lg:text-left"
                style={{ fontSize: '49px' }}
                data-oid="xs69pne"
              >
                Everything you need to launch or improve your website.
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3} data-oid="-otiue4">
              <p
                className="text-tagline-2 text-center font-normal text-white/60 lg:text-left"
                data-oid="j-fb9:f"
              >
                Trusted by 100+ businesses in retail, healthcare, tech, and more.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4} data-oid="qqgk2d4">
              <div className="pt-8 md:pt-18" data-oid="hvc.s68">
                <PrimaryLinkButton
                  href="/services"
                  displayClassName="mx-auto w-[85%] sm:w-fit lg:mx-0"
                  data-oid="itfsise"
                >
                  Explore all services
                </PrimaryLinkButton>
              </div>
            </RevealAnimation>
          </div>

          <ImageReveal
            className="relative"
            cursorClassName="h-[260px] w-[220px] lg:h-[320px] lg:w-[260px]"
            data-oid="kvcjbk3"
          >
            <div className="divide-stroke-1/11 divide-y" data-oid="znqalad">
              {services.map((service, index) => (
                <RevealAnimation
                  key={service.title}
                  delay={0.2 + index * 0.1}
                  instant
                  data-oid="-r0.nub"
                >
                  <RevealItem image={service.image}>
                    <ServiceCard
                      iconClass={service.iconClass}
                      title={service.title}
                      description={service.description}
                      href={service.href}
                    />
                  </RevealItem>
                </RevealAnimation>
              ))}
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
};
export default Services;
