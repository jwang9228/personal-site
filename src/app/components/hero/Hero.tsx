import { MAIN_TITLE, SECONDARY_TITLE, CURRENT_POSITION } from '@/app/lib/constants';
import Fade from '../utils/Fade';

export default function Hero() {
  return (
    <Fade 
      type='up' as='section'
      className='flex flex-col gap-base layout-px layout-py'
    >
      <section className='flex flex-col text-2xl gap-xs'>
        <h1 className='flex flex-col tablet:flex-row gap-xs tablet:gap-3'>
          <span className='flex items-baseline gap-sm tablet:gap-3'>
            {MAIN_TITLE}
            <span className='font-accent font-normal text-primary/85 text-xl'>&</span>
          </span>
          <span>{SECONDARY_TITLE}</span>
        </h1>
      </section>
      <p className='text-lg text-primary/95'>{CURRENT_POSITION}</p>
    </Fade>
  )
}