import React from 'react';

const AuthLayout = ({ children }) =>
{
    return (
        <div className='flex flex-row min-h-screen bg-white overflow-y-auto'>
            <div className='flex-[6]  hidden lg:block relative'>
                <img
                    src='./authbg.png'
                    className='h-screen w-full'
                    alt='groundiamge'
                />
                <div className='absolute inset-0 bg-[#B3DD07]/20'></div>
            </div>
            <div className='flex-[4] bg-white flex items-center justify-center lg:min-w-[580px]  py-3'>
                { children }
            </div>
        </div>
    );
}

export default AuthLayout;


