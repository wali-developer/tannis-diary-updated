import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CallenderComponent = () =>
{
    const [value, onChange] = useState(new Date());

    return (
        <div className=' bg-white h-[370px] rounded-[10px] w-full  lg:min-w-[350px] overflow-hidden relative
         flex flex-col'>
            <Calendar onChange={ onChange } value={ value } />
            <div className='flex  flex-row items-center justify-center space-x-[45px] flex-1'>
                <div className='flex flex-row items-center space-x-[12px]'>
                    <div className='h-[12px] w-[12px] rounded-full bg-[#3415B0]'></div>
                    <h1 className='text-[15px] font-normal text-black'>Match</h1>
                </div>
                <div className='flex flex-row items-center space-x-[12px]'>
                    <div className='h-[12px] w-[12px] rounded-full bg-[#D0073D]'></div>
                    <h1 className='text-[15px] font-normal text-black'>Training</h1>
                </div>
            </div>
        </div>
    );
}

export default CallenderComponent;
