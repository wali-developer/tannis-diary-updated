import React from "react";

const EditProfile = () => {
    return (
        <>
            <div className='bg-[#FAFAFC] flex-1 self-stretch px-[20px] py-[20px] lg:py-[20px] xl:py-[36px] lg:pl-[30px] lg:pr-[30px] min-h-screen'>
                <h1
                    className='font-semibold text-lg py-[11px]'

                >All notifications</h1>
                <div className='flex flex-col mt-[26px] justify-between border bg-white p-5 rounded-lg'>
                    {[1, 2, 3, 4, 5, 6, 7].map((__, index) => {
                        return (
                            <div
                                key={index + ''}
                                className="mb-7 flex justify-between items-start"
                            >
                                <div className='flex gap-x-3'>
                                    <div className='h-[38px] w-[38px] relative bg-black flex items-center justify-center rounded-lg'>
                                        <img src='/Lock.svg' alt='' />
                                    </div>
                                    <div className="flex-1">
                                        <h6 className='text-[15px] font-semibold text-black'>Password changed</h6>
                                        <p className='text-xs text-black/60'>Lorem ipsum dolor sit amet consectetur. Fringilla nulla egestas mauris tortor. Lectus suspendisse at odio feugiat.</p>
                                    </div>
                                </div>
                                <p className='text-xs text-black/60'>12 min</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
};

export default EditProfile;
