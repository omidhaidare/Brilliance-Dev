import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';

const cards = [
  {
    iconClass: 'ns-shape-10 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Strategy-first',
    desc: 'We plan before we design—every decision has purpose.',
    delay: 0.1,
  },
  {
    iconClass: 'ns-shape-11 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Conversion-focused',
    desc: 'Beautiful design that drives real business results.',
    delay: 0.2,
  },
  {
    iconClass: 'ns-shape-13 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Transparent process',
    desc: 'Clear communication and updates at every stage.',
    delay: 0.3,
  },
  {
    iconClass: 'ns-shape-14 !text-background-13 text-[45px] md:text-[36px]',
    title: 'Ongoing support',
    desc: 'We stay involved after launch to ensure success.',
    delay: 0.4,
  },
];

const AboutWhyChooseUs = () => {
  return (
    <section className="lp:py-44 bg-background-7 py-20 md:py-25 lg:py-30" data-oid="c5:-jox">
      <div className="main-container" data-oid="l3h9ytv">
        <div className="space-y-17.5" data-oid="6sbwfs1">
          <div className="space-y-4 text-center" data-oid="jrswj8i">
            <RevealAnimation delay={0.1} data-oid="0-p75qz">
              <Badge badgeText="Why Choose Us" className="justify-center" data-oid="5_5zo86" />
            </RevealAnimation>
            <div className="space-y-3" data-oid="j4e3cwu">
              <RevealAnimation delay={0.2} data-oid="c::9yej">
                <h2
                  className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal"
                  data-oid="w1m0u8."
                >
                  Why choose Brilliance Dev?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3} data-oid="fitvnik">
                <p
                  className="text-tagline-2 text-background-13/60 font-inter-tight font-normal"
                  data-oid="6jz738c"
                >
                  Unparalleled expertise and innovation.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <div
            className="grid grid-cols-12 items-center justify-center gap-x-0 gap-y-6 md:gap-x-8 md:gap-y-8 lg:gap-y-0"
            data-oid="k11535c"
          >
            {cards.map((card, index) => (
              <RevealAnimation key={card.title} delay={card.delay} data-oid="1v_73tq">
                <div
                  className="bg-background-9 col-span-12 flex h-[240px] flex-col items-center justify-between rounded-lg p-8 md:col-span-6 lg:col-span-3"
                  data-oid="d6eovx2"
                >
                  <span className={card.iconClass} data-oid="an61j-e" />
                  <div className="space-y-2 text-center" data-oid="-biwwpp">
                    <h3
                      className="text-is-heading-5 text-background-13/90 font-instrument-serif font-normal"
                      data-oid="9bleaj4"
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-tagline-2 text-background-13/60 font-inter-tight font-normal"
                      data-oid="s93ow3l"
                    >
                      {card.desc}
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
};

export default AboutWhyChooseUs;
