'use client';
import { useState } from 'react';
import { TECHSTACK_LAYER_NAV, TechstackLayer } from '@/app/lib/navigation';
import Techstack from './Techstack';
import Experience from './Experience';

export default function Work() {
  const [activeLayer, setActiveLayer] = useState<TechstackLayer>(
    TECHSTACK_LAYER_NAV[TECHSTACK_LAYER_NAV.length - 1]
  );

  return (
    <section className='flex flex-col gap-y-6 layout-px layout-py'>
      <p className='text-xs text-primary/85 uppercase'>Experience</p>
      <Experience />
      { /* <Techstack activeLayer={activeLayer} setActiveLayer={setActiveLayer} /> */ }
    </section>
  );
};
