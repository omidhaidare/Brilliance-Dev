'use client';

import LogoWhiteSmall from '@/public/brand-logo.svg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import CompanyMenu from '@/src/components/shared/layout/navbar/company-menu';
import PlanAndSupportMenu from '@/src/components/shared/layout/navbar/plan-and-support-menu';
import PlatformMenu from '@/src/components/shared/layout/navbar/platform-menu';
import ResourcesMenu from '@/src/components/shared/layout/navbar/resources-menu';
import { MobileMenuProvider, useMobileMenuContext } from '@/src/context/MobileMenuContext';
import { mobileMenuData } from '@/src/data/mobile-meu';
import { useNavbarScroll } from '@/src/hooks/useScrollHeader';
import { cn } from '@/src/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/mobile-menu';
import { DefaultLinkButton } from '../../ui/button/default-link-button';

const dropdownNavItems = [
  { label: 'Company', dataMenu: 'company-mega-menu', MenuComponent: CompanyMenu },
  { label: 'Platform', dataMenu: 'platform-mega-menu', MenuComponent: PlatformMenu },
  { label: 'Resources', dataMenu: 'resources-dropdown-menu', MenuComponent: ResourcesMenu },
  {
    label: 'Plans & Support',
    dataMenu: 'plan-and-support-mega-menu',
    MenuComponent: PlanAndSupportMenu,
  },
];

const NavArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
    <path
      d="M1.19922 0.5L5.19922 4.5L9.19922 0.5"
      className="stroke-white/60 transition-colors duration-500 group-hover/nav-item:stroke-white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NavbarInner = () => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const { toggleMenu } = useMobileMenuContext();
  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => setMenuDropdownId(dropdownId ?? null);

  return (
    <header
      onMouseLeave={() => handleMenuHover(null)}
      className={cn(
        'fixed left-1/2 z-50 mx-auto w-full max-w-87.5 -translate-x-1/2 transition-all duration-500 md:max-w-160 lg:max-w-204.5 xl:max-w-5xl 2xl:max-w-322.5',
        isScrolled ? 'top-2' : 'top-6'
      )}
    >
      <RevealAnimation direction="up" offset={100} delay={0.1} instant>
        <nav
          className="bg-background-2/15 border-stroke-3/18 fixed left-1/2 z-50 mx-auto flex w-full max-w-87.5 -translate-x-1/2 items-center justify-between rounded-2xl border py-1.5 pr-5 pl-2 backdrop-blur-[80px] md:max-w-160 lg:max-w-204.5 lg:gap-12 lg:py-2 lg:pr-1.5 lg:pl-1.5 xl:max-w-5xl xl:py-0 2xl:max-w-322.5"
          data-opai-animate
          data-opai-animate-delay="0.8"
          data-direction="top"
        >
          <Link href="/" className="block size-11" aria-label="Nexsas home">
            <figure className="size-full">
              <Image
                src={LogoWhiteSmall}
                alt="Nexsas"
                width={44}
                height={44}
                className="size-full"
                priority
              />
            </figure>
            <span className="sr-only">Nexsas</span>
          </Link>

          <ul className="relative hidden items-center gap-6 lg:gap-8 xl:flex">
            {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
              <li
                key={label}
                className="nav-link-item group/nav-item nav-item relative cursor-pointer py-4"
                data-menu={dataMenu}
                onMouseEnter={() => handleMenuHover(dataMenu)}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="nav-item-line absolute top-0 left-1/2 h-[0.9px] w-0 -translate-x-1/2 rounded-full bg-radial-[circle,#FFFFFF_0%,#7C8EA52E_100%] opacity-100 transition-all duration-500 ease-out group-hover/nav-item:w-42" />
                  <div className="nav-item-gradient absolute top-0 left-1/2 h-[89%] w-[calc(100%+120px)] -translate-x-1/2 bg-radial-[circle_at_center] from-[#8D59FF66] from-40% to-[#8D59FF00] to-100% opacity-0 blur-[14px] transition-all duration-500 ease-out group-hover/nav-item:opacity-80" />
                </div>
                <button
                  type="button"
                  className="nav-link relative z-5 flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0"
                >
                  <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">
                    {label}
                  </span>
                  <span className="block origin-center translate-y-px transition-all duration-500 group-hover/nav-item:rotate-180">
                    <NavArrow />
                  </span>
                </button>
                <MenuComponent
                  menuDropdownId={menuDropdownId}
                  setMenuDropdownId={setMenuDropdownId}
                />
              </li>
            ))}

            <li className="nav-link-item group/nav-item relative py-4">
              <div className="pointer-events-none absolute inset-0">
                <div className="nav-item-line absolute top-0 left-1/2 h-[0.9px] w-0 -translate-x-1/2 rounded-full bg-radial-[circle,#FFFFFF_0%,#7C8EA52E_100%] opacity-100 transition-all duration-500 ease-out group-hover/nav-item:w-42" />
                <div className="nav-item-gradient absolute top-0 left-1/2 h-[89%] w-[calc(100%+120px)] -translate-x-1/2 bg-radial-[circle_at_center] from-[#8D59FF66] from-40% to-[#8D59FF00] to-100% opacity-0 blur-[14px] transition-all duration-500 ease-out group-hover/nav-item:opacity-80" />
              </div>
              <Link href="/pricing" className="nav-link relative z-5 flex items-center gap-1.5">
                <span className="nav-item-text text-tagline-3 font-ibm-plex-mono leading-[21.7px] font-normal text-white/60 capitalize transition-colors duration-500 group-hover/nav-item:text-white">
                  Pricing
                </span>
              </Link>
            </li>
          </ul>

          <div className="hidden xl:block">
            <DefaultLinkButton href="/contact" className="w-fit text-xs">
              Book Free Consultation
            </DefaultLinkButton>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex cursor-pointer flex-col items-end justify-center space-y-2 xl:hidden"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="bg-background-7 block h-px w-9" />
            <span className="bg-background-7 block h-px w-6" />
          </button>
        </nav>
      </RevealAnimation>
    </header>
  );
};

const Navbar = () => {
  return (
    <MobileMenuProvider>
      <NavbarInner />
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
