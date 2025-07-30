'use client';

import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Trails from './Trails';
import Games from './Games';
import PC from './PC';

export default function Hobbies() {
	const [detailsSection, setDetailsSection] = useState(undefined);

  /* each hobby has an underlined link ('link') that goes to a more 
  specific detailed section for that hobby ('detailsSection'), 
  'prelink' and 'postlink' are just texts before and after 'link' */
	const hobbies = [
		{
			prelink: 'Playing badminton, squash, or swimming',
		},
		{
			prelink: 'Hiking and exploring',
			link: 'scenic spots',
			postlink: 'in NorCal',
			detailsSection: <Trails />
		},
		{
			prelink: 'Climbing the ranks in the latest',
			link: 'competitive games',
			postlink: '',
			detailsSection: <Games />
		},
		{
			prelink: 'Tinkering with',
			link: 'PC parts',
			postlink: 'and peripherals',
			detailsSection: <PC />
		}
	];

	return (
		<div className='flex flex-col gap-y-3.5 tablet:gap-y-4.5 laptop:gap-y-5 text-zinc-300'>
			<div className='text-lg tablet:text-xl laptop:text-2xl'>
				{detailsSection
					? <button 
							type='button'
							className='flex items-center hover:cursor-pointer -translate-x-1.5'
							onClick={() => setDetailsSection(undefined)}
						>
							<IoIosArrowBack className='mr-1' />
							<>about</>
						</button>
					: <>When I'm off work, find me:</>
				}
			</div>
			{detailsSection 
				? <>{detailsSection}</>
				: <ul className='space-y-2.5 tablet:space-y-4 laptop:space-y-5
            font-light tablet:text-lg laptop:text-xl'>
						{hobbies.map(hobby => (
							<li key={hobby.prelink}>
								<>{`- ${hobby.prelink}`}</>
								<button 
									type='button'
									className='mx-1.5 underline hover:cursor-pointer font-normal'
									onClick={() => setDetailsSection(hobby.detailsSection)}>
									{hobby.link}
								</button>
								<>{hobby.postlink}</>
							</li>
						))}
					</ul>
			}
		</div>
	)
}