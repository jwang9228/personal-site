import Fade from '../utils/Fade';
import { 
  AboutSectionLabels,
  ABOUT_ME_SECTION, 
  ABOUT_GAMES_SECTION, 
  ABOUT_ACTIVE_SECTION,
  ABOUT_PC_SECTION
} from '@/app/lib/constants';
import Active from './Active';
import Games from './Games';
import PC from './PC';
import AboutMe from './AboutMe';
import { motion } from 'motion/react';

const ABOUT_SECTION_VARIANTS = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <motion.div
      variants={ABOUT_SECTION_VARIANTS}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      className='grid grid-cols-1 tablet:grid-cols-12
        gap-sm tablet:gap-2 layout-x-about layout-py'
    >
      <Fade className='tablet:col-span-7'>
        <AboutSection
          aboutSectionLabels={ABOUT_ME_SECTION}
          layout='split'
          content={<AboutMe />}
        />
      </Fade>
      
      <Fade className='tablet:col-span-5'>
        <AboutSection
          aboutSectionLabels={ABOUT_GAMES_SECTION}
          layout='stack'
          content={<Games />}
        />
      </Fade>

      <Fade className='tablet:col-span-5'>
        <AboutSection 
          aboutSectionLabels={ABOUT_ACTIVE_SECTION}
          layout='stack'
          content={<Active />}
        />
      </Fade>

      <Fade className='tablet:col-span-7'>
        <AboutSection
          aboutSectionLabels={ABOUT_PC_SECTION}
          layout='split'
          content={<PC />}
        />
      </Fade>
    </motion.div>
  )
}

interface AboutSectionProps {
  containerStyle?: string,
  aboutSectionLabels: AboutSectionLabels,
  layout: 'stack' | 'split',
  content: React.ReactNode
}

function AboutSection({ 
  containerStyle, 
  aboutSectionLabels, 
  layout,
  content 
} : AboutSectionProps) {
  return (
    <section className={`${containerStyle} h-full bg-white/90
      border border-primary-muted/35 rounded-2xl px-base py-4.5`}
    >
      <header className={`flex flex-col gap-xs ${layout === 'split' ? '' : ''}`}>
        <p className='text-xs text-background/70 uppercase'>
          {aboutSectionLabels.header}
        </p>
        <h3 className='text-lg text-background/80 font-accent font-semibold'>
          {aboutSectionLabels.title}
        </h3>
      </header>
      <div className={`pt-lg ${layout === 'split' ? '' : ''}`}>
        {content}
      </div>
    </section>
  )
}