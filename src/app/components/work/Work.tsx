'use client';
import { useState } from 'react';
import { TECHSTACK_LAYER_NAV, TechstackLayer } from '@/app/lib/navigation';
import Experience from './Experience';

export default function Work() {
  const [activeLayer, setActiveLayer] = useState<TechstackLayer>(
    TECHSTACK_LAYER_NAV[TECHSTACK_LAYER_NAV.length - 1]
  );

  return (
    <section className='flex flex-col gap-y-6 layout-px layout-py pb-16'>
      <div className='flex flex-col gap-y-3'>
        <p className='text-xs text-primary/85 uppercase'>
          Experience
        </p>
        <div className='h-px laptop:h-[2px] w-full bg-linear-to-r from-primary/30 via-primary/25 to-transparent' />
      </div>
      <Experience />
    </section>
  );
};
