const LINKEDIN_LINK = 'https://www.linkedin.com/in/justin-n-wang/';
const RESUME_LINK = '/experience/WangResume.pdf';

export const HEADER_NAV = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/' }
];

export const FOOTER_NAV = [
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

export const TILE_NAV = [
  { label: 'Project' },
  { label: 'Experience' },
  { label: 'Home', isActive: true }
];