'use client';

import { DEV_NAME, MAIN_TITLE, SECONDARY_TITLE, CURRENT_POSITION } from '../lib/constants';
import Fade from './utils/Fade';

export default function Title() {
  return (
    <Fade 
      type='up' as='header'
      className='flex flex-col gap-base'
    >
      <h1 className='font-accent text-primary-muted text-lg uppercase tracking-widest'>{DEV_NAME}</h1>
      <section className='flex flex-col text-2xl gap-xs'>
        <h2 className='flex items-baseline gap-sm'>
          {MAIN_TITLE}
          <span className='font-accent font-normal text-primary/85 text-xl'>&</span>
        </h2>
        <h2>{SECONDARY_TITLE}</h2>
      </section>
      <h2 className='text-lg text-primary/95'>{CURRENT_POSITION}</h2>
    </Fade>
  )
}