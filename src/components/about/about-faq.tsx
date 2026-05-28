'use client';

import faqImage from '@/public/images/about/faqImage.avif';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Accordion } from '@/src/components/shared/ui/accordion/accordion';
import { AccordionAction } from '@/src/components/shared/ui/accordion/accordion-action';
import { AccordionContent } from '@/src/components/shared/ui/accordion/accordion-content';
import { AccordionItem } from '@/src/components/shared/ui/accordion/accordion-item';
import { Badge } from '@/src/components/shared/ui/badge';
import { SecondaryLinkButton } from '@/src/components/shared/ui/button/secondary-link-button';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';

const FAQ_ITEMS: { value: string; question: string; answer: string }[] = [
  {
    value: 'faq-1',
    question: 'What kind of projects does Brilliance Dev specialize in?',
    answer:
      'We specialize in bespoke digital architecture. We design and build high-performance websites, complex web applications, and immersive UI/UX experiences. We use AI-assisted tools for optimization, but every line of code is guided by human engineering strategy for maximum impact.',
  },
  {
    value: 'faq-2',
    question: 'What core technologies and services do you provide?',
    answer:
      'Our core stack includes Next.js, React, Node.js, and modern cloud infrastructure. Services encompass UI/UX design, full-stack development, performance tuning (Lighthouse optimization), SEO-friendly architecture, and CRO (Conversion Rate Optimization) strategy.',
  },
  {
    value: 'faq-3',
    question: 'How do you integrate AI into the development process?',
    answer:
      'We use AI primarily as an accelerator. It assists us in rapid UI prototyping, automated testing generation, and analyzing vast amounts of data to find performance bottlenecks. This allows us to move faster while maintaining human strategy for design integrity and complex problem-solving.',
  },
  {
    value: 'faq-4',
    question: 'What is a typical timeline for a web project?',
    answer:
      'Timelines vary by complexity. A standard premium website or MVP development typically builds over 30–90 days, starting with design strategy, moving to engineering, and finishing with vigorous testing and deployment.',
  },
  {
    value: 'faq-5',
    question: 'What kind of project tracking and reporting do we receive?',
    answer:
      'Yes. You receive clear weekly project updates. We provide access to project management boards and dashboards showing sprint progress, milestones, Lighthouse performance scores, and key conversion metrics.',
  },
  {
    value: 'faq-6',
    question: 'What assets or input do you need from us to begin?',
    answer:
      "Access to existing branding assets, current wireframes or sketches (if any), product requirements docs, and a critical kickoff call. If existing systems need integration, we'll help configure the necessary API access.",
  },
  {
    value: 'faq-7',
    question: 'Do you only work with large enterprise clients?',
    answer:
      'We work with visionary businesses at all stages. From building MVPs for funded startups to engineering complex, scalable architectures for established enterprises, the goal is the same: digital dominance and profitable growth.',
  },
  {
    value: 'faq-8',
    question: "What's included in a typical ongoing support monthly retainer?",
    answer:
      'Retainers vary but usually include strategic guidance, ongoing performance optimization, security updates, creative testing implementation, CRO recommendations, feature support, and regular reporting.',
  },
  {
    value: 'faq-9',
    question: 'Is there a minimum contract length or long-term commitment?',
    answer:
      "No long-term lock-ins. We operate on flexible monthly retainers or project-based agreements. If we're not delivering exceptional value, you're free to pause or stop—simple and transparent.",
  },
];

const AboutFaq = () => {
  return (
    <section className="lp:py-44 bg-background-7 py-20 md:py-25 lg:py-30">
      <div className="main-container">
        <div className="flex flex-col items-start gap-x-0 gap-y-10 lg:flex-row lg:gap-x-25 lg:gap-y-0">
          <div className="flex w-full flex-col items-center space-y-12.5 lg:w-auto lg:items-start">
            <div className="w-full space-y-4">
              <RevealAnimation delay={0.1}>
                <Badge badgeText="FAQ" className="justify-center text-black lg:justify-start" />
              </RevealAnimation>

              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="text-is-heading-2 font-instrument-serif text-background-13 text-center font-normal lg:text-left">
                    Frequently asked questions
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-tagline-2 text-background-13/60 font-inter-tight max-w-146.75 text-center font-normal lg:text-left">
                    Quick answers to common questions about our premium development services,
                    engineering process, timelines, reporting, and how we architect digital
                    brilliance.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <figure className="aspect-1174/984 h-123 w-full overflow-hidden rounded-sm lg:max-w-146.75">
                <Image
                  src={faqImage}
                  alt="Brilliance Dev FAQ and Knowledge Base"
                  width={1174}
                  height={984}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGBgaGBgYGBwaHBgYGBwYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEAQUGB//EADcQAQACAAMFBAAEAwEBAQAAAAEAAhEDIRIxQVFhBCIycYGRobEFE8HRQlLwI2Lh8RQVgpLC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAQADAQEAAAAAAAAAAQIRAyExEkETIlFh/9oADAMBAAIRAxEAPwD9MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
            </RevealAnimation>
          </div>

          <div className="w-full lg:max-w-148.75">
            <Accordion defaultOpen="faq-1" className="space-y-0!">
              {FAQ_ITEMS.map((item) => (
                <RevealAnimation key={item.value} delay={0.1}>
                  <AccordionItem
                    value={item.value}
                    className={cn(
                      'group border-stroke-3/25 relative z-10 w-full cursor-pointer overflow-hidden border-b py-6'
                    )}
                  >
                    <AccordionAction
                      className={cn(
                        'text-background-13/60 font group-data-[state=open]:text-background-13/90 font-medium',
                        'md:text-tagline-1 group-data-[state=open]:pb-4!'
                      )}
                    >
                      {item.question}
                    </AccordionAction>
                    <AccordionContent className="text-background-13/60 px-0!">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </RevealAnimation>
              ))}
            </Accordion>
          </div>
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-20 flex justify-center">
            <SecondaryLinkButton href="#" displayClassName="w-[85%] md:w-auto">
              Explore All FAQ
            </SecondaryLinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AboutFaq;
