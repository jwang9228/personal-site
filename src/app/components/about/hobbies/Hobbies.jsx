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
			prelink: 'Playing badminton, squash, or swimming'
		},
		{
			prelink: 'Exploring',
			link: 'scenic spots',
			postlink: 'in NorCal',
			detailsSection: <Trails />
		},
    {
			prelink: 'Planning my next PC',
			link: 'setup upgrade',
			detailsSection: <PC />
		},
		{
			link: 'Gaming!',
			postlink: '',
			detailsSection: <Games />
		}
	];

	return (
		<section className='flex flex-col gap-y-3.5 tablet:gap-y-4.5 laptop:gap-y-5 text-light'>
			<h2 className='text-lg tablet:text-xl laptop:text-2xl'>
				{detailsSection
					? <button 
							type='button'
							className='flex items-center hover:cursor-pointer -translate-x-1.5'
							onClick={() => setDetailsSection(undefined)}
						>
							<IoIosArrowBack className='mr-1' />
							<span className='mobile:-translate-y-0.25 tablet:-translate-0.5'>about</span>
						</button>
					: <>When I'm off work, find me:</>
				}
			</h2>
			{detailsSection 
				? <>{detailsSection}</>
				: <ul className='space-y-2.5 tablet:space-y-4 laptop:space-y-5
            font-light tablet:text-lg laptop:text-xl'>
						{hobbies.map((hobby, i) => (
							<li key={i}>
								<span>- {hobby.prelink}</span>
                {hobby.link &&
                  <button 
                    type='button'
                    className={`underline underline-offset-5 hover:cursor-pointer font-normal 
                      ${hobby.prelink ? 'mx-1.5' : 'ml-0 mr-1.5'}`}
                    onClick={() => setDetailsSection(hobby.detailsSection)}>
                    {hobby.link}
                  </button>
                }
								<>{hobby.postlink}</>
							</li>
						))}
					</ul>
			}
		</section>
	)
}