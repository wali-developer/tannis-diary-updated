import { useRouter, } from 'next/router';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const Confirmemail = () => {

    const [otp, setOtp] = useState('');
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
                <h1 className='text-[#333333] font-black text-3xl'>Email Confirmation</h1>
                <h1 className='text-[#333333] text-base font-normal mt-[5px] max-w-[300px]'>Confirmation code has been sent to your registered email Fais*********gmail.com</h1>
                <div className=' mt-[47px] '>
                    <OtpInput
                        value={otp}
                        onChange={val => setOtp(val)}
                        numInputs={4}
                        containerStyle={{
                            display: 'flex',
                            'flex-direction': 'row',
                            'justify-content': 'sapce-between !important',
                            padding: '1px'
                        }}
                        inputStyle={{
                            width: '65px',
                            height: '60px',
                            border: '1px solid #D0CECE',
                            borderRadius: '10px'
                        }}
                        separator={<div className='flex-1 w-8'></div>}
                    />
                </div>
                <div className='bg-[#B3DD07] h-[56px] rounded-[10px] flex items-center justify-center mt-[66px] cursor-pointer'
                    onClick={() => router.push('/auth/setnewpassword')}
                >
                    <h1 className='text-white text-base '>Confirm Now</h1>
                </div>
                <div className='mx-auto text-center mt-[11px]'>
                    <h1 className='text-[#333333] text-base '>Resend Code</h1>
                </div>
            </div>
        </div>
    );
}





export default Confirmemail;
