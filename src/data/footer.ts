export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'Our Legacy', href: '/about' },
      { label: 'All Services', href: '/services' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Expertise',
    links: [
      { label: 'Bespoke UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'High-End Web Engineering', href: '/services/web-development' },
      { label: 'Performance Optimization', href: '/services/performance' },
      { label: 'Ongoing Support', href: '/services/ongoing-support' },
    ],
  },
  {
    title: 'Resources & Legal',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Client Portal', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];
