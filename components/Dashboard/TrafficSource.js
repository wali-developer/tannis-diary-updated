import React from 'react';
import ChevronLeftIcon from '../SVGs/DashboardIcons/ChevronLeftIcon';

const TrafficSource = () =>
{
    const data = [
        {
            title: 'Direct',
            percentage: '80%',
            value: '1,43,382'
        },
        {
            title: 'Referral',
            percentage: '90%',
            value: 'Referral'
        },
        {
            title: 'Social Media',
            percentage: '60%',
            value: '45,211'
        },
        {
            title: 'Twitter',
            percentage: '70%',
            value: '21,893'
        }
    ]

    return (
        <div className=' bg-white h-[318px]  rounded-[10px] w-full  lg:min-w-[350px] overflow-hidden relative 
                           sm:flex-1 lg:flex-none lg:w-full flex flex-col py-[14px] px-[20px]  '>
            <div className='flex items-center justify-between my-[4px]'>
                <h1 className='text-[#18181B] font-semibold text-lg'>Traffic Sources</h1>
                <div className='flex items-center space-x-[6px] cursor-pointer'>
                    <h1 className='text-[#71717A] text-[13px]'>Last 7 Days</h1>
                    <ChevronLeftIcon />
                </div>
            </div>
            <div className='flex flex-col justify-between  flex-1  '>
                { data?.map((item, index) =>
                {
                    return (
                        <div
                            key={ index + '' }
                            className='flex flex-col relative'
                        >
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-[#18181B] text-sm'>{ item?.title }</h1>
                                <h1 className='text-[#18181B] font-medium text-sm'>{ item?.value }</h1>
                            </div>
                            <div className='w-full h-[5px] bg-[#F4F4F5] mt-[8px] rounded-full relative overflow-hidden'>
                                <div
                                    className="absolute left-0 top-0 bottom-0 h-[5px] bg-[#B3DD07] rounded-full shadow-md "
                                    style={ {
                                        width: item?.percentage
                                    } }
                                ></div>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div >
    );
}

export default TrafficSource;
