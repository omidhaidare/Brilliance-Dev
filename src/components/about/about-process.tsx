'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { Badge } from '@/src/components/shared/ui/badge';
import processImage from '@/public/images/about/processImage.avif';
import Image from 'next/image';

const AboutProcess = () => {
  return (
    <section className="lp:py-44 bg-background-7 py-20 md:py-25 lg:py-30">
      <div className="main-container">
        <div className="space-y-10 md:space-y-17.5">
          <div className="flex flex-col items-center space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <Badge badgeText="Our Methodology" className="justify-center" />
            </RevealAnimation>
            <div className="max-w-3xl space-y-3 text-center">
              <RevealAnimation delay={0.2}>
                <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 text-background-13/90 font-normal">
                  A Framework for Digital Dominance
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-tagline-2 text-background-13/60 font-inter-tight font-normal">
                  Our systematic approach transforms complex visions into high-performance,
                  award-winning digital realities. From pixel-perfect design to robust architecture.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <RevealAnimation delay={0.4}>
            <figure className="h-125 max-w-full overflow-hidden rounded-lg md:h-175">
              <Image
                src={processImage}
                alt="Brilliance Dev Development Process"
                width={2580}
                height={1400}
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGBgaGBgYGBwaHBgYGBwYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEAQUGB//EADcQAQACAAMFBAAEAwEBAQAAAAEAAhEDIRIxQVFhBCIycYGRobEFE8HRQlLwI2Lh8RQVgpLC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAQADAQEAAAAAAAAAAQIRAyExEkETIlFh/9oADAMBAAIRAxEAPwD9MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
                className="size-full object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
