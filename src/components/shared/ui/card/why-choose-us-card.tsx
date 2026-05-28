import { cn } from '@/src/utils/cn';
import Image from 'next/image';

const gradientBlobClass =
  'pointer-events-none absolute -top-[16%] -right-[26%] z-0 h-[256px] w-[306px] -translate-y-[20%] rounded-[306px] bg-linear-[190deg,#744FB3_52.06%,#FF9C7B_92.8%] opacity-0 blur-[50px] transition-all duration-500 ease-in-out select-none group-hover:translate-y-0 group-hover:opacity-100';

export type WhyChooseUsCardProps = {
  iconPath: string;
  title: string;
  className?: string;
};

const WhyChooseUsCard = ({ iconPath, title, className }: WhyChooseUsCardProps) => (
  <div
    className={cn(
      'bg-background-6 group border-stroke-1/11 relative flex min-h-[430px] flex-col justify-between gap-2.5 overflow-hidden p-8 max-lg:border-b md:min-h-[370px] md:border-r',
      className
    )}
    data-oid="bw9bwg6"
  >
    <div className={gradientBlobClass} data-oid="5d3nj5m" />

    <div className="h-[68px] w-[68px]" data-oid="q3qmmx8">
      <Image
        src={iconPath}
        alt={title}
        width={68}
        height={68}
        className="h-full w-full object-contain"
        style={{ filter: 'brightness(0) invert(1) opacity(0.8)' }}
      />
    </div>

    <h3
      className="font-instrument-serif text-is-heading-5 font-normal text-white/60 transition-colors duration-500 ease-in-out group-hover:text-white lg:max-w-[240px]"
      data-oid="kcejc:t"
    >
      {title}
    </h3>
  </div>
);

export default WhyChooseUsCard;
