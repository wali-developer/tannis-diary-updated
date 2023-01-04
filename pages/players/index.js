import React, { useState } from 'react';
import Modal from '../../components/common/Modal';
import PaginationElement from '../../components/common/PaginationElement';
import HeaderSearchIcon from '../../components/SVGs/HeaderIcons/HeaderSearchIcon'
import ModalsCloseIcon from '../../components/SVGs/ModalsCloseIcon';

const Index = () =>
{
    const [modalVisibility, setModalVisibility] = useState(false);


    return (
        <>
            <div className='  bg-[#FAFAFC] flex flex-col flex-1 self-stretch px-[20px] py-[20px] lg:py-[20px] xl:py-[36px] lg:pl-[20px] lg:pr-[30px]'>
                <div className='bg-white flex-1 rounded-[10px] relative pt-[15px] sm:pt-[30px] '>
                    {/* Heading start */ }
                    <div className=' flex flex-col sm:flex-row items-start sm:items-center space-y-[10px] sm:space-y-0 justify-between pr-[21px] pl-[30px]  '>
                        {/* Left */ }
                        <div>
                            <h1 className='text-black font-semibold text-xl'>All players</h1>
                        </div>
                        {/* Right */ }
                        <div className='self-stretch sm:w-[312px] border border-[#D0CECE] h-[40px] rounded-md overflow-hidden relative'>
                            <div className='h-full flex items-center justify-center absolute z-50 left-[17px] '>
                                <HeaderSearchIcon />
                            </div>
                            <input
                                className='z-40 placeholder:font-normal font-normal text-dark-gray placeholder:text-base 
                                   w-full h-full pr-3 pl-[56px] outline-none border-none text-base'
                                placeholder='Search'
                            />
                        </div>
                    </div>
                    {/* Heading end */ }

                    {/* Players grid start */ }
                    <div className='grid grid-cols-1 gap-[25px] md:gap-[36px] mt-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-[30px] px-1 sm:px-[30px] '>
                        { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
                        {
                            return (
                                <PlayerItem
                                    key={ index + '' }
                                    callBack={ () => setModalVisibility(true) }
                                />
                            )
                        }) }
                    </div>
                    {/* Players grid end */ }
                    <PaginationElement />
                </div>
            </div>
            <Modal
                show={ modalVisibility }
                hide={ () => setModalVisibility(false) }
            >
                <div className=' relative pb-[30px] bg-white rounded-2xl overflow-hidden sm:max-w-[510px] mx-auto z-50'
                    style={ {
                        zIndex: '99999'
                    } }
                >
                    <div className='w-full px-[17px] bg-[#F8F9FA] flex flex-row justify-between items-center py-[11px]'>
                        <h1 className='text-base text-[#000000] font-semibold'>Player details</h1>
                        <div
                            className='cursor-pointer'
                            onClick={ () => setModalVisibility(false) }
                        >
                            <ModalsCloseIcon />
                        </div>
                    </div>
                    <div className='px-[10px] sm:px-[20px] lg:px-[30px] relative'>
                        <div className=' flex flex-col items-center mt-[31px]'>
                            <img
                                src='/couchimg.jfif'
                                className='h-[141px] w-[141px] rounded-full object-fill'
                                alt='couchimage'
                            />
                            <h1 className='mt-[10px] font-semibold text-[22px] text-black'>Thora Johnson</h1>
                            <h1 className='text-base'>Seville, Spain</h1>
                        </div>
                        <div >
                            <div className='flex flex-col space-y-[10px] sm:space-y-0 sm:flex-row justify-between mt-[10px] sm:mt-[18px]'>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-[#1E1E1E] mr-[8px] text-base'>Email:</h1>
                                    <h1 className='font-medium text-base text-black'>abc123@gmail.com</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-[#1E1E1E] mr-[8px] text-base'>DOB:</h1>
                                    <h1 className='font-medium text-base text-black'>18 May, 2022</h1>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-[10px] sm:space-y-0 sm:flex-row justify-between mt-[10px] sm:mt-[12px]'>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-[#1E1E1E] mr-[8px] text-base'>Leve of player:</h1>
                                    <h1 className='font-medium text-base text-black'>Intermediate</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-[#1E1E1E] mr-[8px] text-base'>Number of matches:</h1>
                                    <h1 className='font-medium text-base text-black'>12</h1>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-[10px] sm:space-y-0 sm:flex-row justify-between mt-[10px] sm:mt-[12px]'>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-[#1E1E1E] mr-[8px] text-base'>Number of tournaments:</h1>
                                    <h1 className='font-medium text-base text-black'>05</h1>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-[#1E1E1E] mr-[8px] text-base'>Number of training:</h1>
                                    <h1 className='font-medium text-base text-black'>20</h1>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-[10px] sm:space-y-0 sm:flex-row justify-between mt-[10px] sm:mt-[12px]'>
                                <div className='flex flex-row items-center'>
                                    <h1 className='text-[#1E1E1E] mr-[8px] text-base'>Club name:</h1>
                                    <h1 className='font-medium text-base text-black'>Jersery-o-Tennis club</h1>
                                </div>
                                <div className='flex flex-row items-center'>

                                </div>
                            </div>
                            <div className=' mt-[10px] sm:mt-[12px]'>
                                <h1 className='text-[#1E1E1E] mr-[8px] text-base'>Coaches name:</h1>
                                <div className='flex flex-row gap-[30px] mt-[19px]'>
                                    <div>
                                        <img
                                            src='/couch1.jfif'
                                            alt='gdhsahg'
                                            className='w-[130px] h-[78px] rounded-[15px] shadow-sm'
                                        />
                                        <h1 className='text-black text-sm mt-[4px]'>Colin Vargas</h1>
                                    </div>
                                    <div>
                                        <img
                                            src='/couch1.jfif'
                                            alt='gdhsahg'
                                            className='w-[130px] h-[78px] rounded-[15px] shadow-sm'
                                        />
                                        <h1 className='text-black text-sm mt-[4px]'>Pearl Parkinson</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

const PlayerItem = ({ callBack }) =>
{
    return (
        <div className='bg-[#F8F9FA] shadow-sm pt-[12px] px-[13px] rounded-lg pb-[27px] flex flex-col items-center cursor-pointer'
            onClick={ () => callBack() }
        >
            <div className='self-end'>
                <ToggleButton />
            </div>

            <img
                src='./profileimg.jpg'
                className='h-[70px] w-[70px] rounded-full'
            />
            <h1 className='mt-[11px] text-black font-semibold tracking-[0.1px] leading-5'>Leslie Alexander</h1>
            <h1 className='text-black text-xs leading-[18px] mt-[1px]'>Seville, Spain</h1>
            <div className='mt-[15px] flex flex-row space-x-[12px] justify-center'>
                <div>
                    <h1 className=' text-[#807C7C] text-xs leading-5  text-start '>Level of player:</h1>
                    <h1 className=' text-[#807C7C] text-xs leading-5 my-[11px]  text-start'>Phone number:</h1>
                    <h1 className=' text-[#807C7C] text-xs leading-5  text-start'>Email:</h1>
                </div>
                <div className='flex flex-col self-stretch justify-between items-start'>
                    <h1 className='text-[#1E1E1E] text-sm '>Intermediate</h1>
                    <h1 className='text-[#1E1E1E] text-sm'>+34 776 361 436</h1>
                    <h1 className='text-[#1E1E1E] text-sm'>abc123@gmail.com</h1>
                </div>
            </div>
        </div>
    )
}


const ToggleButton = () =>
{
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={ `cursor-pointer h-[12px] w-[24px] rounded-full  relative transition-all duration-300 flex items-center px-[1px] ${isActive ? 'bg-black' : 'bg-black/50'}` }
            onClick={ () => setIsActive(!isActive) }
        >
            <div className={ `w-[10px] h-[10px] transition-all duration-300 bg-[#B3DD07] rounded-full ${isActive ? "translate-x-[12px]" : "translate-x-[1px]"}` }></div>
        </div>
    )
}


export default Index;
