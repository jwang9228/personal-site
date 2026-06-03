export default function PillList({ items }: { items: string[] }) {
  return (
    <ul className='flex flex-wrap gap-x-4 gap-y-2.5'>
      {items.map(item => (
        <li
          key={item}
          className='text-xs text-background/70 font-normal px-3 py-0.5
          bg-primary-muted/15 rounded-full select-none' 
        >      
          {item}
        </li>
      ))}
    </ul>
  )
}