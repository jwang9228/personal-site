import { ReactNode } from 'react';

export const DEV_NAME = 'Justin Wang';
export const COPYRIGHT = `\u00A9 ${new Date().getFullYear()} ${DEV_NAME}`;
export const MAIN_TITLE = 'Full Stack Developer';
export const SECONDARY_TITLE = 'Design Enthusiast';
export const CURRENT_POSITION = 'Software Engineer at UIC Payments';

export interface AboutSectionLabels {
  header: string,
  title: string
}

export const ABOUT_ME_SECTION: AboutSectionLabels = {
  header: 'Current Snapshot',
  title: 'Optimizing layouts, setups, and competitive gameplay'
}

export const ABOUT_ACTIVE_SECTION: AboutSectionLabels = {
  header: 'Offline Discipline',
  title: 'Routine by design'
}

export const ABOUT_GAMES_SECTION: AboutSectionLabels = {
  header: 'Matchmaking...',
  title: 'Competitive: In Queue'
}

export const ABOUT_PC_SECTION: AboutSectionLabels = {
  header: 'Aesthetic Setups',
  title: 'Surviving RAMageddon'
}

interface DayIntensityMapping {
  dayLabel: string,
  intensityClass: string;
}

export const ACTIVE_INTENSITY_HEATMAP: DayIntensityMapping[] = [
  { dayLabel: 'S', intensityClass: 'opacity-75' },
  { dayLabel: 'M', intensityClass: 'opacity-25' },
  { dayLabel: 'T', intensityClass: 'opacity-100' },
  { dayLabel: 'W', intensityClass: 'opacity-75' },
  { dayLabel: 'T', intensityClass: 'opacity-100' }, 
  { dayLabel: 'F', intensityClass: 'opacity-25' },
  { dayLabel: 'S', intensityClass: 'opacity-75' }
];

export const ACTIVE_ACTIVITIES = [
  'Badminton', 'Squash', 'Swimming', 'Weights'
];

export interface ChildrenProps {
  children: ReactNode;
}