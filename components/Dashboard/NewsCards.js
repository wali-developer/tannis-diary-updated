import React from 'react';
import CallendarIcon from '../SVGs/DashboardIcons/CallendarIcon';
import ChevronLeft from '../SVGs/DashboardIcons/ChevronLeft';

const NewsCards = () =>
{
    const cardsData = [
        {
            title: 'Austrlian Open',
            description: 'A new tournament is coming...',
            date: '12 May, 2022',
            type: 1
        },
        {
            title: 'New training',
            description: '12 Advance players',
            date: '18.05.2022',
            start_time: '09.30 AM',
            closing_time: '10:30 AM',
            type: 2
        },
        {
            title: 'Austrlian Open',
            description: 'A new tournament is coming...',
            date: '12 May, 2022',
            type: 1
        },
        {
            title: 'Training Session',
            description: 'PSL Stadium',
            date: 'Coach - John',
            start_time: '09.30 AM',
            closing_time: '10:30 AM',
            type: 2
        }
    ]

    return (
        <div className='flex flex-col space-y-[17px] pt-[17px]'>
            { cardsData?.map((item, index) =>
            {
                return (
                    <div key={ index + 1 }>
                        { item.type == 1 ? <TypeOneCard data={ item } /> : <TypeTwoCard data={ item } /> }
                    </div>
                )
            }) }
        </div>
    );
}

const TypeOneCard = ({ data }) =>
{
    return (
        <div className='flex flex-row items-center justify-between bg-white py-[17px] rounded-[8px] px-[17px] '>
            <div className='flex-1'>
                <h1 className='font-semibold text-[#B3DD07] text-lg'>{ data.title }</h1>
                <h1 className='font-normal text-sm text-[#000000] py-1'>{ data.description }</h1>
                <div className='flex flex-row items-center'>
                    <CallendarIcon />
                    <h1 className='text-[#000000] text-xs inline-block ml-2'>{ data.date }</h1>
                </div>
            </div>
            <div className='cursor-pointer'>
                <ChevronLeft />
            </div>
        </div>
    )
}

const TypeTwoCard = ({ data }) =>
{
    return (
        <div className='flex flex-row items-center  bg-white py-[17px] rounded-[8px]  px-[17px] min-h-[100px]'>
            <div className=' flex flex-1 flex-col justify-between self-stretch'>
                <h1 className='font-normal text-sm text-[#000000]'>{ data.start_time }</h1>
                <h1 className='font-normal text-sm text-[#000000]'>{ data.closing_time }</h1>
            </div>
            <div className='flex-[2] flex flex-col self-stretch justify-between -mt-1 '>
                <h1 className='font-semibold text-[#B3DD07] text-lg '>{ data.title }</h1>
                <h1 className='font-normal text-sm text-[#000000]'>{ data.description }</h1>
            </div>
            <div className='flex-1 flex flex-col  items-end self-stretch justify-end'>
                <h1 className='font-semibold text-[#B3DD07] text-lg'>{ '' }</h1>
                <h1 className='font-normal text-sm text-[#000000]'>{ data.date }</h1>
            </div>
        </div>
    )
}

export default NewsCards;
