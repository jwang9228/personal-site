interface PillListProps {
  items: string[];
  lightVariant?: boolean;
}

export default function PillList({ 
  items, lightVariant = false 
}: PillListProps) {
  return (
    <ul className='flex flex-wrap gap-x-4 gap-y-sm'>
      {items.map(item => (
        <li
          key={item}
          className={`text-xs font-normal px-3 py-xxs select-none
            ${lightVariant ? 'text-background/70 bg-primary-muted/15 rounded-full' 
              : 'text-primary/90 bg-primary-muted/35 border-l-2 border-primary/30 font-mono'}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}