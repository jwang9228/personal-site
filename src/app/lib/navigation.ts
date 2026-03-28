export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  sectionLabel: string;
  isExternal: boolean;
  sectionLinks: NavItem[];
}

const LINKEDIN_LINK = 'https://www.linkedin.com/in/justin-n-wang/';
const RESUME_LINK = '/experience/WangResume.pdf';

export const HEADER_NAV: NavItem[] = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about' }
];

export const FOOTER_NAV: FooterSection[] = [
  { 
    sectionLabel: 'Revisit',
    isExternal: false,
    sectionLinks: HEADER_NAV
  },
  {
    sectionLabel: 'Elsewhere',
    isExternal: true,
    sectionLinks: [
      { label: 'LinkedIn', href: LINKEDIN_LINK },
      { label: 'Resume', href: RESUME_LINK }
    ]
  }
];

export const TECHSTACK_LAYER_NAV = ['Project', 'Experience', 'Home'] as const;

export type TechstackLayer = typeof TECHSTACK_LAYER_NAV[number];