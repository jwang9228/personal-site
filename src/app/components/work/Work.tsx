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
    <section className='layout-px layout-py'>
      <Experience />
      { /* <Techstack activeLayer={activeLayer} setActiveLayer={setActiveLayer} /> */ }
    </section>
  );
};
