export default function About() {
  return (
    <main className='flex flex-col'>
      <header className='flex flex-col gap-base'>
        <h1 className='font-accent text-primary-muted text-lg uppercase tracking-widest'>Justin Wang</h1>
        <section className='flex flex-col text-2xl gap-xs'>
          <h2 className='flex items-baseline gap-sm'>
            Full Stack Developer
            <span className='font-accent font-normal text-primary/90 text-xl'>&</span>
          </h2>
          <h2>Design Enthusiast</h2>
        </section>
        <h2 className='text-lg text-primary/95'>Software Engineer at UIC Payments</h2>
      </header>
    </main>
  )
}