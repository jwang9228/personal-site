export const WORK_LABEL = 'work';
export const ABOUT_LABEL = 'about';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/justin-n-wang/';
const RESUME_LINK = '/experience/WangResume.pdf';

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterSection {
  sectionLabel: string;
  isExternal: boolean;
  sectionLinks: NavItem[];
}

export const HEADER_HEIGHT = 61;
export const SCROLL_OFFSET = 14;

export const HEADER_NAV: NavItem[] = [
  { label: WORK_LABEL, href: '/' },
  { label: ABOUT_LABEL, href: `#${ABOUT_LABEL}` }
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

export function useNavClick() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault();
    if (label === WORK_LABEL) {
      scrollToTop();
    } else if (label === ABOUT_LABEL) {
      const el = document.getElementById(ABOUT_LABEL);
      if (!el) return;
      window.scrollTo({ 
        top: el.getBoundingClientRect().top + window.scrollY 
          - HEADER_HEIGHT + SCROLL_OFFSET, 
        behavior: 'smooth' 
      });
    }
  };

  return { handleNavClick, scrollToTop };
 }