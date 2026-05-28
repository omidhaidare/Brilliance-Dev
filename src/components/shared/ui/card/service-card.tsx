import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import Image from 'next/image';

export type ServiceCardProps = {
  iconClass: string;
  title: string;
  description: string;
  href: string;
  className?: string;
};

const ServiceCard = ({ iconClass, title, description, href, className }: ServiceCardProps) => {
  const isImagePath = iconClass.startsWith('/');

  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-block w-full py-4 pl-0 transition-all duration-300 ease-out hover:pl-4 lg:py-8',
        className
      )}
    >
      <div className="absolute inset-0 h-0 bg-white transition-all duration-300 ease-out group-hover:h-full" />

      <div className="relative z-10 flex gap-x-4 gap-y-2">
        <div className="flex h-13 w-13 shrink-0 items-center justify-center">
          {isImagePath ? (
            <Image
              src={iconClass}
              alt={title}
              width={52}
              height={52}
              className={cn(
                'h-13 w-13 object-contain transition-all duration-300 group-hover:scale-110',
                'brightness-0 invert group-hover:invert-0'
              )}
            />
          ) : (
            <i
              className={cn(
                iconClass,
                'text-[40px] transition-all duration-300 group-hover:scale-110',
                'text-white/80! group-hover:text-black'
              )}
              style={{ display: 'block' }}
            />
          )}
        </div>

        <div className="lg:max-w-116.25">
          <h3 className="font-instrument-serif md:text-is-heading-5 text-[26px] font-normal text-white/80 transition-colors duration-300 ease-out group-hover:text-black">
            {title}
          </h3>

          <p className="text-tagline-2 font-normal text-white/60 transition-colors duration-300 ease-out group-hover:text-black/70">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
