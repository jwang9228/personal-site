import { AiOutlineTag } from 'react-icons/ai';
import { IoTrophyOutline, IoShieldHalf } from 'react-icons/io5';
import { TbStars } from 'react-icons/tb';

export default function Games() {
  const showRank = false;
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
      rank: '15k'
    }
  ];

  return (
    <section className='flex flex-col gap-y-4 tablet:gap-y-4.5 laptop:gap-y-5
      font-light tablet:text-lg laptop:text-xl'>
      <h2>Currently playing the following:</h2>
      <ul className='flex flex-col 
        gap-y-4.5 tablet:gap-y-6 mt-0.5'>
				{games.map(game => (
          <li key={game.name} className='flex flex-col 
            gap-y-1 tablet:gap-y-1.5 laptop:gap-y-2'>
            <p className='flex justify-between items-center laptop:gap-x-40'>
              <h3 className='italic font-normal'>{game.name}</h3>
              {showRank && 
                <h4 className='flex items-center gap-x-1.5 
                  text-sm tablet:text-base laptop:text-lg opacity-95'>
                  {game.rankIcon}
                  {game.rank}
                </h4>
              }
            </p>
            <h4 className='flex items-center gap-x-1.5 
              text-sm tablet:text-base laptop:text-lg'>
              <AiOutlineTag />
              {game.ign}
              <label className='opacity-85'>{game.tag}</label>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  )
}