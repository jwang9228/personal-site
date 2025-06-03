'use client'

import NexusClient from '../../components/projects/nexus/NexusClient';
import NexusServer from '../../components/projects/nexus/NexusServer';
import { useState } from 'react';
import Orb from '../../components/utils/Orb';

export default function Page() {
  return (
    <div className='flex flex-col'>
      <div className='flex relative items-center justify-center'>
        <div className='relative z-2 w-full h-150'>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />  
        </div>
        <div className='absolute z-0 text-lg'>
          {"Enter the Nexus ->"}
        </div>
      </div>
      <div className='flex relative items-center justify-center'>
        <div className='relative z-2 w-full h-150'>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />  
        </div>
        <div className='absolute z-0 text-lg'>
          {"Enter the Nexus 2 ->"}
        </div>
      </div>
    </div>
  )
}

/*
export default function Page() {
  const [showClient, setShowClient] = useState(true);

  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col'>
        <div>nexus</div>
        <div className='text-zinc-400'>An alternative to popular League of Legends stat trackers such as op.gg</div>
      </div>
      <div className='flex justify-center gap-x-20'>
        {['client', 'server'].map((elem, i) => (
          <button
            key={i}
            type='button'
            onClick={() => setShowClient(elem === 'client')}
            className={`cursor-pointer text-white/90 text-lg underline-offset-2
              ${elem === 'client' && showClient ? 'underline' : ''}
              ${elem === 'server' && !showClient ? 'underline' : ''}`}
          >
            {elem}
          </button>
        ))}
      </div>
      {showClient 
        ? <NexusClient />
        : <NexusServer />
      }
    </div>
  )
}
  */