import RevealAnimation from '@/src/components/animation/reveal-animation';
import GradientImg from '@/src/components/home/gradient-img';
import { SecondaryLinkButton } from '@/src/components/shared/ui/button/secondary-link-button';

export interface ServiceDetailsHeroProps {
  readonly title: string;
  readonly description: string;
}

const ServiceDetailsHero = ({ title, description }: ServiceDetailsHeroProps) => (
  <section
    className="bg-background-5 relative overflow-hidden pt-34 pb-28 md:pt-39"
    data-oid="lnyt.12"
  >
    <div className="main-container relative z-20" data-oid="s70dhwi">
      <div className="space-y-14" data-oid="8cxhfo3">
        <div className="space-y-3 text-center" data-oid="ymmmw5e">
          <RevealAnimation delay={0.1} data-oid="zw09l54">
            <h2
              className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal"
              data-oid="s818ib:"
            >
              {title}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.1} data-oid="gb4jo7r">
            <p
              className="text-tagline-2 font-inter-tight text-background-13/60 mx-auto w-full max-w-[514px] font-normal"
              data-oid="5m32e.x"
            >
              {description}
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3} data-oid="5lmfc:k">
          <div className="text-center" data-oid="535e6ui">
            <SecondaryLinkButton href="/pricing" className="mx-auto w-fit" data-oid="cc084dj">
              Get started
            </SecondaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </div>

    <GradientImg
      imagePath="/images/gradient/opai-2.avif"
      className="absolute bottom-0 left-0 z-4 h-[646px] w-full min-[2000px]:bottom-0 md:-bottom-4 md:h-[580px] lg:h-[596px] 2xl:h-[696px]"
      data-oid="781up5i"
    />
  </section>
);

export default ServiceDetailsHero;
