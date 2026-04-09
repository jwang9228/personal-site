import Fade from '../utils/Fade';
import { ABOUT_ACTIVE_SECTION } from '@/app/lib/constants';

export default function About() {
  return (
    <Fade type='up' as='div' inView 
      className='grid grid-cols-1 tablet:grid-cols-3 gap-lg auto-rows-auto tablet:auto-rows-[384px] layout-px layout-py'
    >
      {/* TODO: what animations to use? */} 
      {/* ROW 1 */}
      <div className='laptop:col-span-2 border border-background/10 rounded-2xl p-base'>
        Row 1 Column 1 (Bio - 2/3 width)
      </div>
      
      <div className='laptop:col-span-1 border border-background/10 rounded-2xl p-base'>
        { /*  TODO: some game library / achievement section */}
        Row 1 Column 2 (Games - 1/3 width)
      </div>

      {/* ROW 2 */}
      <div className='laptop:col-span-1 border border-background/10 rounded-2xl p-base'>
        { /* TODO: some sortr of calendar where each day same color = same exercise, search "this week ui" */}
      </div>
      
      <div className='laptop:col-span-2 border border-background/10 rounded-2xl p-base'>
        Row 2 Column 2 (PC Build - 2/3 width)
      </div>
    </Fade>
  )
}