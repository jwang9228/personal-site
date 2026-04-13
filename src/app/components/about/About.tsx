import Fade from '../utils/Fade';
import { 
  AboutSectionLabels,
  ABOUT_ME_SECTION, 
  ABOUT_GAMES_SECTION, 
  ABOUT_ACTIVE_SECTION,
  ABOUT_PC_SECTION
} from '@/app/lib/constants';
import Active from './Active';

export default function About() {
  return (
    <Fade type='up' as='div' inView 
      className='grid grid-cols-1 tablet:grid-cols-3 gap-lg auto-rows-auto tablet:auto-rows-[384px] layout-px layout-py'
    >
      {/* TODO: what entry/load animations to use? */ } 
      {/* TODO: fix the above styling */ }

      <AboutSection
        containerStyle='laptop:col-span-2'
        aboutSectionLabels={ABOUT_ME_SECTION}
        layout='split'
        content={
          <div>{/* TODO: biography */}</div>
        }
      />
      
      <AboutSection
        containerStyle='laptop:col-span-1'
        aboutSectionLabels={ABOUT_GAMES_SECTION}
        layout='stack'
        content={
          <div>{/* TODO: game 'library'/'achievement' */}</div>
        }
      />

      <AboutSection 
        containerStyle='laptop:col-span-1'
        aboutSectionLabels={ABOUT_ACTIVE_SECTION}
        layout='stack'
        content={<Active />}
      />

      <AboutSection
        containerStyle='laptop:col-span-2'
        aboutSectionLabels={ABOUT_PC_SECTION}
        layout='split'
        content={
          <div>{/* TODO: peripherals and pc specs, maybe image of setup */}</div>
        }
      />
    
    </Fade>
  )
}

interface AboutSectionProps {
  containerStyle: string,
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
    <section className={`${containerStyle} border border-background/15 
      rounded-2xl p-base`}
    >
      <header className={`flex flex-col gap-xs ${layout === 'split' ? '' : ''}`}>
        <p className='text-sm font-medium'>{aboutSectionLabels.header}</p>
        <h3 className='text-xl text-background/80 font-accent'>{aboutSectionLabels.title}</h3>
      </header>
      <div className={`${layout === 'split' ? '' : ''}`}>
        {content}
      </div>
    </section>
  )
}