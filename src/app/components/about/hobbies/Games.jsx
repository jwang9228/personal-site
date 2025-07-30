import { AiOutlineTag } from 'react-icons/ai';
import { IoTrophyOutline, IoShieldHalf } from 'react-icons/io5';
import { TbStars } from 'react-icons/tb';

export default function Games() {
  const games = [
    {
      name: 'Honkai Star Rail', 
      ign: 'SirRacha', 
      tag: 'UID 617240702',
      rankIcon: <TbStars className='opacity-85' />,
      rank: 'MOC12/PF4/AS4'
    },
    {
      name: 'Overwatch 2', 
      ign: 'SirRacha',
      tag: '#11210',
      rankIcon: <IoShieldHalf className='opacity-85' />,
      rank: 'Diamond 1'
    },
    {
      name: 'Brawl Stars', 
      ign: 'SirRacha', 
      tag: '#22YL9Q8PU', 
      rankIcon: <IoTrophyOutline />,
      rank: '60k'
    },
    {
      name: 'Clash Royale', 
      ign: '_indent', 
      tag: '#LLGLGGLG', 
      rankIcon: <IoTrophyOutline />,
      rank: '10k'
    }
  ];

  return (
    <div className='flex flex-col gap-y-4 tablet:gap-y-4.5 laptop:gap-y-5
      font-light tablet:text-lg laptop:text-xl'>
      <>Currently playing the following:</>
      <div className='flex flex-col 
        gap-y-4.5 tablet:gap-y-6 mt-0.5'>
				{games.map(game => (
          <div key={game.name} className='flex flex-col 
            gap-y-1 tablet:gap-y-1.5 laptop:gap-y-2'>
            <div className='flex justify-between items-center laptop:gap-x-40'>
              <div className='italic font-normal'>{game.name}</div>
              <div className='flex items-center gap-x-1.5 
                text-sm tablet:text-base laptop:text-lg opacity-95'>
                {game.rankIcon}
                {game.rank}
              </div>
            </div>
            <div className='flex items-center gap-x-1.5 
              text-sm tablet:text-base laptop:text-lg'>
              <AiOutlineTag />
              {game.ign}
              <div className='opacity-85'>{game.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}