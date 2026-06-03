import { MAIN_TITLE, SECONDARY_TITLE } from '@/app/lib/constants';
import Fade from '../utils/Fade';

export default function Hero() {
  return (
    <Fade 
      type='up' as='section' speed='ui'
      className='flex flex-col layout-px layout-py
        tablet:pt-9'
    >
      <section className='flex flex-col text-2xl gap-1'>
        <h1 className='flex flex-col tablet:flex-row gap-1 tablet:gap-3'>
          <span className='flex items-baseline gap-2.5 tablet:gap-3'>
            {MAIN_TITLE}
            <span className='font-accent font-normal text-primary/85 text-xl'>&</span>
          </span>
          <span>{SECONDARY_TITLE}</span>
        </h1>
      </section>
    </Fade>
  )
}