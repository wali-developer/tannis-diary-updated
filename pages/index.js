import { useRouter } from 'next/router';
import React from 'react';

const Index = () =>
{

  const router = useRouter()

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div>
        <img
          src='./logo.png'
          className='h-[104px] w-[106px]'
        />
      </div>
      <div className='mt-[101px] w-[90vw] max-w-[375px] md:min-w-[375px]'>
        <h1 className='text-[#333333] font-black text-3xl'>Welcome Back!</h1>
        <h1 className='text-[#333333] text-base font-normal mt-[5px]'>Login and let’s get started</h1>
        <div className='h-[56px] border border-[#D0CECE] rounded-[10px] mt-[33px] relative overflow-hidden flex flex-row items-center'>
          <img
            src='./emailicon.png'
            alt='gs'
            className='h-[27px] w-[27px] ml-[15px]'
          />
          <input
            className=' flex-1 self-stretch border-none outline-none pl-[15px] pr-[10px] z-10 '
            placeholder='Name'
          />

        </div>
        <div className='h-[56px] border border-[#D0CECE] rounded-[10px] mt-[33px] relative overflow-hidden flex flex-row items-center'>
          <img
            src='./lockicon.png'
            alt='gs'
            className='h-[27px] w-[27px] ml-[15px]'
          />
          <input
            className=' flex-1 self-stretch border-none outline-none pl-[15px] pr-[10px] z-10 '
            placeholder='Password'
            type='password'
          />
        </div>
        <div className='  text-right'>
          <h1 className='cursor-pointer mt-[12px] text-sm text-[#333333] inline-block '
            onClick={ () => router.push('/auth/forgotpassword') }
          >Forgot Password</h1>
        </div>
        <div className='bg-[#B3DD07] h-[56px] rounded-[10px] flex items-center justify-center mt-[52px] cursor-pointer'
          onClick={ () => router.push('/dashboard') }
        >
          <h1 className='text-white text-base '

          >Sign In</h1>
        </div>
      </div>
    </div>
  );
}

export default Index;
