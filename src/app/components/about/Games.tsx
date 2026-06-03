import { 
  MAIN_GAME, GAMES
} from '@/app/lib/constants';
import { motion } from 'motion/react';
import { useQueueTimer } from '../utils/useQueueTimer';
import PillList from '../utils/PillList';

export default function Games() {
  const queueTime = useQueueTimer();

  return (
    <section className='flex flex-col gap-6'>
      <div className='flex items-center pl-0.5 gap-x-4'>
        <div className='flex items-center gap-2.5 min-w-0'>
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
          <p className='leading-none'>{MAIN_GAME}</p>
        </div>
        <time className='text-xs text-accent-dark/70
          font-mono translate-y-px'>
            [{queueTime}]
        </time>
      </div>
      <PillList items={GAMES} />
    </section>
  )
}