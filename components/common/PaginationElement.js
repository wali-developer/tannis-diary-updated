import React from 'react';

const PaginationElement = () =>
{
    return (
        <div className='flex flex-row justify-between items-center pt-[30px] pb-[1px] px-[20px]'>
            <div className='hidden sm:block'>
                <h1 className='text-[#A0A4A8] text-base leading-5'>Showing 1 - 10 out of 40</h1>
            </div>
            <div className='flex flex-row items-center text-[#52575C] text-[14px] mx-auto sm:mx-0'>
                <h1 className='px-[17px]'>Prev</h1>
                <h1 className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer bg-[#B3DD07] text-white'>1</h1>
                <h1 className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer'>2</h1>
                <h1 className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer'>3</h1>
                <h1 className='w-[36px] h-[36px] flex items-center justify-center cursor-pointer'>4</h1>
                <h1>Next</h1>
            </div>
        </div>
    );
}

export default PaginationElement;
