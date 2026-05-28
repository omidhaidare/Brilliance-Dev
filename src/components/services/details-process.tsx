import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';

const steps = [
  {
    num: '1',
    title: 'Discovery',
    desc: 'Create your account and explore with a 7-day free trial.',
  },
  {
    num: '2',
    title: 'Strategy and structure',
    desc: 'Co-build a roadmap that blends predictive insights with human creativity.',
  },
  {
    num: '3',
    title: 'Design and build',
    desc: 'Deploy experiences, run iterative experiments, and scale what works.',
  },
  {
    num: '4',
    title: 'Launch and support',
    desc: 'Stay in the loop with transparent reporting and optimization insights.',
  },
];

const numberClass =
  'text-is-heading-3 md:text-is-heading-2 lg:text-is-heading-1 webkit-bg-clip-text bg-[linear-gradient(180deg,_#0D1017_0%,_rgba(13,16,23,0.40)_100%)] bg-clip-text font-normal text-transparent';

const ServiceDetailsProcess = () => (
  <section className="py-14 md:py-24 lg:py-28 xl:py-36 2xl:py-44" data-oid="lq727xb">
    <div className="main-container space-y-10 md:space-y-20" data-oid="_cb1j5t">
      <div className="space-y-4" data-oid="k8wa-cf">
        <RevealAnimation delay={0.1} data-oid="2.lv4lx">
          <div className="flex items-center" data-oid="avcc6ci">
            <Badge badgeText="Our Process" className="text-background-13/90" data-oid="7soy7gn" />
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.2} data-oid="lqqanqv">
          <h2
            className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-background-13/90 max-md:leading-[1.1]"
            data-oid=".7eye35"
          >
            How we work
          </h2>
        </RevealAnimation>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" data-oid="hgn-9mk">
        {steps.map((step, i) => (
          <RevealAnimation key={step.num} delay={0.3 + i * 0.1} data-oid="6ok2ng:">
            <div data-oid="khqe5.l">
              <h2 className={numberClass} data-oid="f0tvamk">
                {step.num}
              </h2>
              <h3
                className="text-is-heading-5 text-background-13/90 -mt-1 font-normal lg:mb-2"
                data-oid="cvmpm.-"
              >
                {step.title}
              </h3>
              <p
                className="text-tagline-2 font-inter-tight text-background-13/60 lg:max-w-[260px]"
                data-oid="sre-:mg"
              >
                {step.desc}
              </p>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceDetailsProcess;
