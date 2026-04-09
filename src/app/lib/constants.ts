import { ReactNode } from 'react';

export const DEV_NAME = 'Justin Wang';
export const COPYRIGHT = `\u00A9 ${new Date().getFullYear()} ${DEV_NAME}`;
export const MAIN_TITLE = 'Full Stack Developer';
export const SECONDARY_TITLE = 'Design Enthusiast';
export const CURRENT_POSITION = 'Software Engineer at UIC Payments';

interface AboutSection {
  header: string,
  title: string
}

export const ABOUT_ME_SECTION: AboutSection = {
  header: '',
  title: ''
}

export const ABOUT_ACTIVE_SECTION: AboutSection = {
  header: 'Offline Discipline',
  title: 'Routine by design.'
}

export const ABOUT_GAMES_SECTION: AboutSection = {
  header: '',
  title: ''
}

export const ABOUT_PC_SECTION: AboutSection = {
  header: 'Custom Hardware',
  title: 'Surviving RAMageddon...'
}

export interface ChildrenProps {
  children: ReactNode;
}