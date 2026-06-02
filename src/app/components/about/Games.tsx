import { 
  MAIN_GAME, MAIN_GAME_TAG, GAMES
} from '@/app/lib/constants';
import { motion } from 'motion/react';
import { useQueueTimer } from '../utils/useQueueTimer';
import PillList from '../utils/PillList';

export default function Games() {
  const queueTime = useQueueTimer();

  return (
    <section className='flex flex-col gap-base'>
      <div className='flex items-center justify-between pl-xxs gap-x-sm'>
        <div className='flex items-center gap-sm min-w-0'>
          <motion.span 
            className='block size-1.5 shrink-0 bg-accent-dark 
              rounded-full translate-y-px'
            animate={{
              opacity: [0.25, 1],
              scale: [0.95, 1.05]
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
          <hgroup className='flex items-baseline 
            gap-2 tablet:gap-3 min-w-0'>
            <h2 className='leading-none shrink-0'>{MAIN_GAME}</h2>
            <h3 className='text-micro tablet:text-xs
              text-background/60 truncate leading-none'>
              {MAIN_GAME_TAG}
            </h3>
          </hgroup>
        </div>
        <time className='text-xs text-accent-dark/70
          font-mono translate-y-0.5'>
            [{queueTime}]
        </time>
      </div>
      <PillList items={GAMES} />
    </section>
  )
}