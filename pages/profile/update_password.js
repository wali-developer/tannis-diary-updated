import React from "react";

const EditProfile = () => {
    return (
        <>
            <div className='bg-[#FAFAFC] flex-1 self-stretch px-[20px] py-[20px] lg:py-[20px] xl:py-[36px] lg:pl-[30px] lg:pr-[30px] min-h-screen'>
                <h1
                    className='font-semibold text-lg py-[11px]'

                >Update password</h1>
                <form className="md:w-[741px] w-full">
                    <div className='mt-[25px]'>
                        <label className="text-base text-[#333333]">Current password</label>
                        <input
                            type="password"
                            className='flex-1 self-stretch border-none outline-none px-7 h-[56px] rounded-[10px] relative overflow-hidden w-full flex items-center mt-1 '
                            placeholder='password'
                            style={{ border: '1px solid #D0CECE' }}
                        />
                    </div>
                    <div className='mt-[25px]'>
                        <label className="text-base text-[#333333]">New password</label>
                        <input
                            type="password"
                            className='flex-1 self-stretch border-none outline-none px-7 h-[56px] border border-[#D0CECE] rounded-[10px] relative overflow-hidden w-full flex items-center mt-1'
                            placeholder='password123'
                            style={{ border: '1px solid #D0CECE' }}
                        />
                    </div>
                    <div className='mt-[25px]'>
                        <label className="text-base text-[#333333]">Confirm password</label>
                        <input
                            type="password"
                            className='flex-1 self-stretch border-none outline-none px-7 h-[56px] border border-[#D0CECE] rounded-[10px] relative overflow-hidden w-full flex items-center mt-1'
                            placeholder='password123'
                            style={{ border: '1px solid #D0CECE' }}
                        />
                    </div>
                    <div className='bg-[#B3DD07] w-[219px] h-[56px] rounded-[10px] flex items-center justify-center mt-[45px] cursor-pointer'
                        onClick={() => router.push('/dashboard')}
                    >
                        <h1 className='text-white text-base '

                        >Update</h1>
                    </div>
                </form>
            </div>
        </>
    )
};

export default EditProfile;
