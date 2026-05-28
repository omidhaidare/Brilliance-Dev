import RevealAnimation from '@/src/components/animation/reveal-animation';
import GradientImg from '@/src/components/home/gradient-img';
import { Badge } from '@/src/components/shared/ui/badge';
import WhyChooseUsCard from '@/src/components/shared/ui/card/why-choose-us-card';
import { StairCard } from '@/src/components/shared/ui/stair-cards/stair-card';
import { StairCards } from '@/src/components/shared/ui/stair-cards/stair-cards';
import { cn } from '@/src/utils/cn';

const cards = [
  { iconPath: '/Icons/Why Choose Us/Strategy-led design.svg', title: 'Strategy-led design, not just pretty pixels' },
  { iconPath: '/Icons/Why Choose Us/Clean code.svg', title: 'Clean code, fast load times, SEO-ready' },
  { iconPath: '/Icons/Why Choose Us/Conversion-focused.svg', title: 'Conversion-focused, data-informed decisions' },
  { iconPath: '/Icons/Why Choose Us/Support.svg', title: 'End-to-end support from concept to launch' },
];

const WhyChooseUs = () => (
  <section
    className="bg-background-5 relative -my-0.5 overflow-hidden py-16 md:py-24 lg:py-28 xl:py-36 2xl:py-44"
    data-oid="2w4ye0l"
  >
    <div className="main-container relative z-20 space-y-12 md:space-y-17.5" data-oid="ujz59dj">
      <div
        className="flex flex-col gap-y-1.5 md:gap-y-14 lg:flex-row lg:items-end lg:justify-between"
        data-oid="r4xytnh"
      >
        <div className="space-y-1.5 md:space-y-6" data-oid="spnw1eu">
          <RevealAnimation delay={0.1} data-oid="sfa.o2p">
            <div className="max-md:pb-3" data-oid="hl83r0m">
              <Badge
                badgeText="Why Choose Us"
                className="justify-center text-white/50 lg:justify-start"
                data-oid="9.:b7xx"
              />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} data-oid="30:ovmr">
            <h2
              className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-center font-normal text-white max-md:leading-[1.1] lg:text-left"
              data-oid="yem_6_d"
            >
              Why businesses <br className="hidden lg:block" data-oid="7_7x1c6" />
              choose Brilliance Dev
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3} data-oid="vs6g44.">
          <p
            className="font-inter-tight text-tagline-2 text-center font-normal text-white/60 lg:max-w-[412px] lg:text-left"
            data-oid="rbwjvl5"
          >
            We don&apos;t build &quot;random websites&quot; We create strategic digital experiences by research, built with clean code, and optimized for conversions so you can grow with confidence.
          </p>
        </RevealAnimation>
      </div>
      <StairCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" data-oid="uuaoj22">
        {cards.map((card, index) => (
          <StairCard key={card.title} data-oid="nu::fn6">
            <WhyChooseUsCard
              {...card}
              className={cn(
                index === 0 && 'lg:rounded-l-lg',
                index === cards.length - 1 && 'lg:rounded-r-lg'
              )}
              data-oid="xucyt4s"
            />
          </StairCard>
        ))}
      </StairCards>
    </div>

    <GradientImg
      imagePath="/images/gradient/opai-2.avif"
      className="absolute -bottom-[11%] left-0 z-4 h-[596px] w-full min-[2000px]:bottom-0 md:-bottom-[15%] md:h-[540px] lg:bottom-[0%] lg:h-[696px] 2xl:h-[796px]"
      data-oid="48_l6gj"
    />
  </section>
);

export default WhyChooseUs;
