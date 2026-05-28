import NsImg427 from '@/public/images/Navbar/platform.avif';
import {
  AnalyticsIcon,
  BrandKitIcon,
  DownloadIcon,
  FeatureIcon,
  IntegrationIcon,
  PressIcon,
  ProcessICon,
  SecurityIcon,
  WhitePaperIcon,
} from '@/src/components/shared/icon/menu-icon';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import PlatformMenuItemLink from './platform-menu-item-link';

interface PlatformMenuItemProps {
  id: string;
  href: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const firstColumnItems: PlatformMenuItemProps[] = [
  {
    id: 'features',
    href: '#',
    title: 'Features',
    description: 'Make cool SaaS experiences for your users!',
    Icon: FeatureIcon,
  },
  {
    id: 'integration',
    href: '#',
    title: 'Integrations',
    description: 'Increase engagement and growth while reducing churn.',
    Icon: IntegrationIcon,
  },
  {
    id: 'process',
    href: '#',
    title: 'Process',
    description: 'Unify data, operations, and insights into a single source of truth.',
    Icon: ProcessICon,
  },
  {
    id: 'press',
    href: '#',
    title: 'Press',
    description: 'See what others are saying about us.',
    Icon: PressIcon,
  },
];

const secondColumnItems: PlatformMenuItemProps[] = [
  {
    id: 'analytics',
    href: '#',
    title: 'Analytics',
    description: 'Guide users through seamless setup.',
    Icon: AnalyticsIcon,
  },
  {
    id: 'security',
    href: '#',
    title: 'Security',
    description: 'Automate tasks and boost engagement.',
    Icon: SecurityIcon,
  },
  {
    id: 'whitepaper',
    href: '#',
    title: 'Whitepaper',
    description: 'Store and manage data securely.',
    Icon: WhitePaperIcon,
  },
];

const thirdColumnItems: PlatformMenuItemProps[] = [
  {
    id: 'brandkit',
    href: '#',
    title: 'Brandkit',
    description: 'Extend workflows with one-click app connections.',
    Icon: BrandKitIcon,
  },
  {
    id: 'download',
    href: '#',
    title: 'Download',
    description: 'Scale fast with flexibility and performance combined.',
    Icon: DownloadIcon,
  },
];

const PlatformMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      {/* Hover Bridge */}
      <div
        className={cn(
          `absolute top-full left-1/2 z-40 h-3 w-242.5 max-w-[95vw] translate-x-[-35%] bg-transparent transition-opacity duration-300`,
          menuDropdownId === 'platform-mega-menu'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />

      {/* Mega Menu */}
      <div
        id="platform-mega-menu"
        className={cn(
          `border-stroke-3/20 bg-background-14 absolute top-full left-1/2 z-50 mt-2 hidden w-242.5 max-w-[95vw] translate-x-[-35%] items-start gap-y-6 overflow-hidden rounded-[20px] border p-6 transition-all duration-300 lg:gap-x-8 xl:block`,
          menuDropdownId === 'platform-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0'
        )}
      >
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          {/* First Column */}
          <div className="col-span-4 space-y-3">
            <ul className="space-y-1">
              {firstColumnItems.map((item) => (
                <li key={item.id}>
                  <PlatformMenuItemLink
                    href={item.href}
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Second Column */}
          <div className="col-span-4">
            <ul className="space-y-1">
              {secondColumnItems.map((item) => (
                <li key={item.id}>
                  <PlatformMenuItemLink
                    href={item.href}
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-span-4">
            <figure className="mb-3 overflow-hidden rounded-xl">
              <Image
                src={NsImg427}
                alt="Platform preview"
                width={400}
                height={220}
                className="h-full w-full rounded-xl object-cover"
              />
            </figure>

            <ul className="space-y-1">
              {thirdColumnItems.map((item) => (
                <li key={item.id}>
                  <PlatformMenuItemLink
                    href={item.href}
                    title={item.title}
                    description={item.description}
                    Icon={item.Icon}
                    setMenuDropdownId={setMenuDropdownId}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PlatformMenu.displayName = 'PlatformMenu';

export default PlatformMenu;
