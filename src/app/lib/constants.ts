import { ReactNode } from 'react';

export const DEV_NAME = 'Justin Wang';
export const COPYRIGHT = `\u00A9 ${new Date().getFullYear()} ${DEV_NAME}`;
export const MAIN_TITLE = 'Full Stack Developer';
export const SECONDARY_TITLE = 'Design Enthusiast';
export const CURRENT_POSITION = 'Software Engineer at UIC Payments';

export interface AboutSectionLabels {
  header: string,
  title: string
};

/* About Me Section */ 
export const ABOUT_ME_SECTION: AboutSectionLabels = {
  header: 'Current Snapshot',
  title: 'TODO'
};

/* Active Section */
export const ABOUT_ACTIVE_SECTION: AboutSectionLabels = {
  header: 'Offline Discipline',
  title: 'Routine by design'
};

interface DayIntensityMapping {
  dayLabel: string,
  intensityClass: string
};

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

/* Games Section */
export const ABOUT_GAMES_SECTION: AboutSectionLabels = {
  header: 'Matchmaking...',
  title: 'Competitive: In Queue'
};

export const MAIN_GAME = 'Overwatch';

export const MAIN_GAME_TAG = 'SirRacha#11210';

export const GAMES = [
  'Honkai: Star Rail', 'Clash Royale', 'Brawl Stars'
];

/* PC Parts Section */
interface PCPart {
  partName: string,
  partValue: string
};

export const PC_PARTS: PCPart[] = [
  { partName: 'Case', partValue: 'Fractal Terra (Jade)' },
  { partName: 'CPU', partValue: 'AMD Ryzen 7 7800X3D' },
  { partName: 'GPU', partValue: 'NVIDIA RTX 5070 Ti'},
  { partName: 'Display', partValue: 'MSI 27" QD-OLED (1440p 360Hz)' },
  { partName: 'Input', partValue: 'Razer Huntsman V3 Pro Mini • Finalmouse ULX (Aceu) • GLSSWRKS Polarity' }
];

export const ABOUT_PC_SECTION: AboutSectionLabels = {
  header: 'Aesthetic Setups',
  title: 'Surviving RAMageddon'
};

export interface ChildrenProps {
  children: ReactNode;
};