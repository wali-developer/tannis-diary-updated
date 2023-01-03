import React from 'react';
import ChevronLeftIcon from '../SVGs/DashboardIcons/ChevronLeftIcon';

const RecentPlayers = () =>
{
    return (
        <div className=' bg-white lg:min-h-[375px] rounded-[10px]  sm:flex-1 lg:flex-none lg:w-full  lg:min-w-[350px] overflow-hidden 
                          relative flex flex-col py-[14px] px-[20px]  '>
            <h1 className='text-[#18181B] font-semibold text-lg'>Recent Players</h1>
            <div className='flex items-center justify-between my-[4px]'>
                <h1 className='text-[#71717A] text-[13px]'>Recent registered players</h1>
                <div className='flex items-center space-x-[6px] cursor-pointer'>
                    <h1 className='text-[#71717A] text-[13px]'>See all</h1>
                    <ChevronLeftIcon />
                </div>
            </div>
            <div className='flex flex-col mt-[15px] justify-between flex-1 '>
                { [1, 2, 3, 4, 5].map((__, index) =>
                {
                    return (
                        <div className='flex flex-row  items-center mt-4'
                            key={ index + "" }
                        >
                            <div className='mr-[13px]'>
                                <img
                                    src='./profileicon.png'
                                    className='h-[36px] w-[36px] rounded-full'
                                    alt='profileimage'
                                />
                            </div>
                            <div className='flex-1'>
                                <h1 className='text-[#18181B] text-sm font-bold'>Jenny Wilson</h1>
                                <h1 className='text-[#71717A] text-[13px]'>w.lawson@example.com</h1>
                            </div>
                            <div className=' self-stretch flex flex-col justify-end '>
                                <h1 className='text-[#71717A] text-[13px]'>Austin</h1>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    );
}

export default RecentPlayers;
