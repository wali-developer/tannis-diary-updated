import { useRouter } from 'next/router';
import React from 'react';

const Forgotpassword = () =>
{

    const router = useRouter()

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div>
                <img
                    src='../logo.png'
                    className='h-[104px] w-[106px]'
                    alt='logo'
                />
            </div>
            <div className='mt-[101px] w-[90vw] max-w-[375px] md:min-w-[375px]'>
                <h1 className='text-[#333333] font-black text-3xl'>Forget password?</h1>
                <h1 className='text-[#333333] text-base font-normal mt-[5px]'>Recover your password by entering your registered email and username</h1>
                <div className='h-[56px] border border-[#D0CECE] rounded-[10px] mt-[33px] relative overflow-hidden flex flex-row items-center'>
                    <img
                        src='../emailicon.png'
                        alt='gs'
                        className='h-[27px] w-[27px] ml-[15px]'
                    />
                    <input
                        className=' flex-1 self-stretch border-none outline-none pl-[15px] pr-[10px] z-10 '
                        placeholder='User name'
                    />

                </div>
                <div className='h-[56px] border border-[#D0CECE] rounded-[10px] mt-[33px] relative overflow-hidden flex flex-row items-center'>
                    <img
                        src='../emailicon.png'
                        alt='gs'
                        className='h-[27px] w-[27px] ml-[15px]'
                    />
                    <input
                        className=' flex-1 self-stretch border-none outline-none pl-[15px] pr-[10px] z-10 '
                        placeholder='Email'
                    />
                </div>

                <div className='bg-[#B3DD07] h-[56px] rounded-[10px] flex items-center justify-center mt-[52px] cursor-pointer'
                    onClick={ () => router.push('/auth/confirmemail') }
                >
                    <h1 className='text-white text-base '>Recover Now</h1>
                </div>
            </div>
        </div>
    );
}



export default Forgotpassword;
