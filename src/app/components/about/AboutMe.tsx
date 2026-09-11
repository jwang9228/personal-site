import { 
  ABOUT_ME_BASED_LOCATION, 
  ABOUT_ME_ORIGIN_LOCATION, 
  ABOUT_ME_STATEMENT 
} from '@/app/lib/constants';

export default function AboutMe() {
  return (
    <section className='flex flex-col gap-y-6'>
      <p className='text-sm text-background/90 leading-relaxed'>
        {ABOUT_ME_STATEMENT}
      </p>
      <p className='flex flex-col gap-y-1 
        text-xs text-background/60 font-accent tracking-widest'
      >
        <span>{ABOUT_ME_BASED_LOCATION}</span>
        <span>{ABOUT_ME_ORIGIN_LOCATION}</span>
      </p>
    </section>
  )
}