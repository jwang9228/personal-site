import { MAIN_TITLE, SECONDARY_TITLE, CURRENT_POSITION } from '@/app/lib/constants';
import Fade from '../utils/Fade';

export default function Hero() {
  return (
    <Fade 
      type='up' as='section'
      className='flex flex-col gap-base layout-px layout-py'
    >
      <section className='flex flex-col text-2xl gap-xs'>
        <h1 className='flex items-baseline gap-sm'>
          {MAIN_TITLE}
          <span className='font-accent font-normal text-primary/85 text-xl'>&</span>
        </h1>
        <h2>{SECONDARY_TITLE}</h2>
      </section>
      <h2 className='text-lg text-primary/95'>{CURRENT_POSITION}</h2>
    </Fade>
  )
}