import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TestimonialStarIcon } from '@/src/components/shared/icon';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const testimonialsData = [
  {
    quote:
      'Committed, innovative, and results-oriented—exactly what we needed. Their creative strategies consistently introduce new concepts. With a deep dedication to quality.',
    name: 'Lena Torres',
    role: 'CMO',
    avatar: '/Icons/Testimonials/1.jpg',
  },
  {
    quote:
      "The team's expertise and hands-on approach made the entire integration seamless and surprisingly fast. Highly recommend!",
    name: 'Maya Chen',
    role: 'CTO, Fintech Innovators',
    avatar: '/Icons/Testimonials/14.jpg',
  },
  {
    quote:
      'From day one, Brilliance Dev felt like an extension of our internal team. Their design expertise and support are truly next-level.',
    name: 'Derek Singh',
    role: 'Head of Product, E-commerce Platform',
    avatar: '/Icons/Testimonials/35.jpg',
  },
  {
    quote:
      'We went from idea to execution in weeks—not months. The automation is saving us countless hours every month.',
    name: 'Laura Fernandez',
    role: 'Operations Lead, SaaS Company',
    avatar: '/Icons/Testimonials/36.jpg',
  },
  {
    quote:
      'What impressed me most was the flexibility. Brilliance Dev adapted to our workflow instead of forcing us to change.',
    name: 'Jonas Müller',
    role: 'Growth Manager, Logistics Startup',
    avatar: '/Icons/Testimonials/48.jpg',
  },
  {
    quote:
      'The onboarding was seamless and the team was incredibly responsive. Now, our marketing runs smoother and results are up by 33%!',
    name: 'Priya Singh',
    role: 'Marketing Director, E-Commerce Brand',
    avatar: '/Icons/Testimonials/62.jpg',
  },
];

const TestimonialMarquee = () => (
  <div className="gradient-hidden" data-oid="dppr4g5">
    <RevealAnimation delay={0.3} data-oid="3-sia6m">
      <div className="relative z-20" data-oid="exvvhy_">
        <Marquee
          speed={40}
          direction="left"
          pauseOnHover
          autoFill
          gradient={false}
          className="overflow-hidden"
          data-oid="f3g0a41"
        >
          <div className="flex items-center gap-8 pr-8" data-oid="z3lovlv">
            {testimonialsData.map((t) => (
              <div
                key={t.name}
                className="relative flex min-h-[329px] w-[320px] flex-col items-center rounded-lg bg-white px-4 pt-8 pb-8 md:min-h-[370px] md:w-[332px] md:px-8 md:pt-14"
                data-oid="qdbz.ci"
              >
                <div className="max-h-full space-y-4 text-center" data-oid="upy-0pi">
                  <div className="flex items-center justify-center gap-1" data-oid="oidvuuy">
                    <TestimonialStarIcon className="size-4 fill-black!" data-oid="az46gei" />
                  </div>
                  <p
                    className="text-tagline-2 text-background-13/60 font-normal text-wrap"
                    data-oid="bc-.pdi"
                  >
                    {t.quote}
                  </p>
                </div>
                <div
                  className="absolute bottom-4 left-1/2 mt-[5px] -translate-x-1/2 space-y-2 text-center md:bottom-6"
                  data-oid="7qctbk-"
                >
                  <figure
                    className="mx-auto size-12 overflow-hidden rounded-full"
                    data-oid="v_3.9ta"
                  >
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="size-full object-cover grayscale-25"
                      data-oid="50-l0am"
                    />
                  </figure>
                  <blockquote className="space-y-0.5" data-oid="q:5a:uu">
                    <h3
                      className="text-is-heading-6 text-background-6 font-normal"
                      data-oid="34tx6ie"
                    >
                      {t.name}
                    </h3>
                    <p
                      className="text-tagline-3 text-background-13/60 font-normal"
                      data-oid=".e8.tgb"
                    >
                      {t.role}
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </RevealAnimation>
  </div>
);

export { TestimonialMarquee };
