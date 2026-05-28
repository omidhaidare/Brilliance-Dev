'use client';

import LiveChatSupportImage from '@/public/images/about/LiveChatSupportImage.avif';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import Image from 'next/image';

const ContactLiveChatSupport = () => (
  <section className="bg-background-7 py-20 md:py-25 lg:py-30">
    <div className="main-container">
      <RevealAnimation delay={0.1}>
        <figure className="h-125 w-full overflow-hidden rounded-xl md:h-201.5">
          <Image
            src={LiveChatSupportImage}
            alt="Brilliance Dev Live Engineering Support"
            width={1282}
            height={1420}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGBgaGBgYGBwaHBgYGBwYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHzQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEAQUGB//EADcQAQACAAMFBAAEAwEBAQAAAAEAAhEDIRIxQVFhBCIycYGRobEFE8HRQlLwI2Lh8RQVgpLC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAQADAQEAAAAAAAAAAQIRAyExEkETIlFh/9oADAMBAAIRAxEAPwD9MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="
            className="size-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </figure>
      </RevealAnimation>
    </div>
  </section>
);

export default ContactLiveChatSupport;
