import { ReactNode } from 'react';

export const DEV_NAME = 'Justin Wang';
export const COPYRIGHT = `\u00A9 ${new Date().getFullYear()} ${DEV_NAME}`;
export const MAIN_TITLE = 'Full Stack Developer';
export const SECONDARY_TITLE = 'Design Enthusiast';
export const CURRENT_POSITION = 'Software Engineer at UIC Payments';

export const ABOUT_ACTIVE_SECTION = 'Trying to stay more active, less screen time. My routine:'

export interface ChildrenProps {
  children: ReactNode;
}