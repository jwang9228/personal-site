'use client'

export default function Page() {
  return (
    <div className='flex justify-between items-center'>
      <div className='w-fit p-px rounded-sm hover:animate-rotate-border
        hover:bg-zinc-400 hover:bg-conic/[from_var(--border-angle)] 
        from-dark via-light/85 to-dark
        from-80% via-90% to-100%'>
        <div className='rounded-sm px-2.5 py-1.5 bg-dark 
          border border-zinc-500'>
          Enter the Nexus
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