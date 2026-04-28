interface PillListProps {
  items: string[];
}

export default function PillList({ items }: PillListProps) {
  return (
    <ol className='flex flex-wrap gap-x-base gap-y-sm'>
      {items.map(item => (
        <li
          key={item}
          className='text-xs text-background/70 font-normal rounded-full
            bg-primary-muted/15 px-sm py-xs'
        >
          {item}
        </li>
      ))}
    </ol>
  )
}