'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACTIVE_ACTIVITIES, ACTIVE_INTENSITY_HEATMAP, ACTIVE_STATEMENT } from '@/app/lib/constants';

export default function Active() {
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    // Rotate activity word every 2.5 seconds
    const timer = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % ACTIVE_ACTIVITIES.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='flex flex-col gap-6'>
      <ul className='flex justify-between laptop:justify-start 
        px-0.5 laptop:gap-x-12'>
        {ACTIVE_INTENSITY_HEATMAP.map((dayIntensityMapping, i) => (
          <li 
            key={i}
            className='flex flex-col items-center gap-1.5
              text-sm font-accent font-medium'
          >
            {dayIntensityMapping.dayLabel}
            <span className={`block size-2 bg-accent-dark rounded-full
              ${dayIntensityMapping.intensityClass}`} />
          </li>
        ))}
      </ul>
      
      <p className='text-sm text-background/60 leading-relaxed'>
        <span className='pr-2'>{ACTIVE_STATEMENT}</span>

        <span className='inline-block relative w-24 text-left'>
          <AnimatePresence mode='popLayout'>
            <motion.span
              key={ACTIVE_ACTIVITIES[activityIndex]}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
              className='inline-block text-base text-accent-dark/70 tracking-wide 
                font-accent font-medium lowercase'
            >
              {ACTIVE_ACTIVITIES[activityIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
    </section>
  )
}