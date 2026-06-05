import { IconType } from 'react-icons';
import { GoMail } from 'react-icons/go';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export const WORK_LABEL = 'work';
export const ABOUT_LABEL = 'about';
const EMAIL = 'jwang.srv1@gmail.com'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/justin-n-wang/';
const RESUME_LINK = '/experience/WangResume.pdf';

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterNav {
  label: string;
  links: NavItem[];
}

export interface SocialLink extends NavItem {
  icon: IconType
}

export const HEADER_HEIGHT = 61;
export const SCROLL_OFFSET = 14;

export const HEADER_NAV: NavItem[] = [
  { label: WORK_LABEL, href: '/' },
  { label: ABOUT_LABEL, href: `#${ABOUT_LABEL}` }
];

export const FOOTER_NAV: FooterNav = {
  label: 'Elsewhere',
  links: [
    { label: 'LinkedIn', href: LINKEDIN_LINK },
    { label: 'Resume', href: RESUME_LINK }
  ]
}

export const SOCIALS: SocialLink[] = [
  { 
    label: 'GitHub',
    href: 'https://github.com/jwang9228',
    icon: IoLogoGithub
  },
  { 
    label: 'LinkedIn',
    href: LINKEDIN_LINK,
    icon: IoLogoLinkedin
  },
  { 
    label: 'Email',
    href: `mailto:${EMAIL}`,
    icon: GoMail
  }
];

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