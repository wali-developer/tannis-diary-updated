import React, { useState } from 'react';
import Modal from '../../components/common/Modal';
import PaginationElement from '../../components/common/PaginationElement';
import CallendarGreenIcon from '../../components/SVGs/DashboardIcons/CallenderGreenIcon'
import GreenEye from '../../components/SVGs/GreenEye';
import ModalCallender from '../../components/SVGs/ModalCallender';
import ModalClockIcon from '../../components/SVGs/ModalClockIcon';
import ModalsCloseIcon from '../../components/SVGs/ModalsCloseIcon';

const Index = () =>
{
    const tabs = [
        'Upcooming',
        'Completed',
        'Total'
    ]

    const [selectedTab, setSelectedtab] = useState(0);

    const [modalVisibility, setModalVisibility] = useState(false);

    return (
        <>
            <div className='  bg-[#FAFAFC] flex-1 flex flex-col self-stretch px-[20px] py-[20px] lg:py-[20px] xl:py-[36px] slg:pl-[20px] lg:pr-[30px]'>
                {/* Tabs start */ }
                <div className=' block md:mx-auto lg:mx-0 max-w-[355px] '>
                    <div className='flex flex-col sm:flex-row p-1 bg-white rounded-[10px] '>
                        { tabs.map((item, index) =>
                        {
                            return (
                                <div
                                    key={ index + '' }
                                    className='rounded-[10px] cursor-pointer flex items-center justify-center'
                                    style={ {
                                        backgroundColor: selectedTab == index ? '#B3DD07' : 'white',
                                        boxShadow: selectedTab == index ? '0px 5px 20px rgba(0, 0, 0, 0.05)' : null
                                    } }
                                    onClick={ () => setSelectedtab(index) }
                                >
                                    <h1
                                        className='font-semibold text-sm w-[116px] text-center py-[11px] transition-all duration-500 ease-in'
                                        style={ {
                                            color: selectedTab == index ? 'white' : '#52575C'
                                        } }
                                    >{ item }</h1>
                                </div>
                            )
                        }) }
                    </div>
                </div>
                {/* Tabs end */ }

                {/* Table start */ }
                {/* TODO REMOVE THIS */ }

                <div className=' bg-white mt-[31px] rounded-[8px] relative py-[24px] overflow-x-hidden shadow-sm flex flex-col '>
                    {/* Heading start */ }
                    <div className=' flex flex-col md:flex-row space-y-[20px] md:space-y-0  items-center justify-between pl-[30px] pr-[21px]   '>
                        {/* Left */ }
                        <div>
                            <h1 className='text-black font-semibold text-xl'>All trainings</h1>
                        </div>
                        {/* Right */ }
                        <div className='flex flex-col sm:flex-row space-y-[20px] sm:space-y-0   sm:space-x-3 lg:space-x-[30px] xl:space-x-[50px] self-stretch'>
                            <div className='flex flex-row space-x-3 lg:space-x-[30px] xl:space-x-[50px] justify-end '>
                                <div className='flex flex-row items-center space-x-[8px]'>
                                    <h1 className='text-[#1E1E1E] text-xs font-normal'>Game situation:</h1>
                                    <div className=' h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[10px]'>
                                        <h1 className='text-xs'>Attack</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-3 h-3 mt-1">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className=' h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[10px]'>
                                    <h1 className='text-xs'>This week</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-3 h-3 mt-1">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-3 lg:space-x-[30px] xl:space-x-[50px] justify-end'>
                                <div className='w-[92px] h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[14px]'>
                                    <h1 className='text-xs'>12/06</h1>
                                    <CallendarGreenIcon />
                                </div>
                                <div className='w-[92px] h-[42px] rounded-[6px] border border-rgba(0, 0, 0, 0.2) cursor-pointer 
                                    px-[10px] flex flex-row items-center space-x-[14px]'>
                                    <h1 className='text-xs'>12/06</h1>
                                    <CallendarGreenIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Heading end */ }
                    <div className='relative self-stretch '>
                        <div className=' max-w-[90vw] sm:container sm:mx-auto  lg:w-full mt-[20px] overflow-x-auto lg:overflow-hidden relative  '>
                            <table className='w-full  '>
                                <thead>
                                    <tr className='bg-[#F8F9FA]   text-left'>
                                        <th className='pl-[20px]  py-[12px] font-medium lg:font-semibold  text-base  whitespace-nowrap  '>#</th>
                                        <th className='  py-[12px]  font-medium lg:font-semibold text-base whitespace-nowrap lg:min-w-[100px] tracking-wide'>Name</th>
                                        <th className=' py-[12px]  font-medium  lg:font-semibold  text-base whitespace-nowrap lg:min-w-[100px] tracking-wide'>Club name</th>
                                        <th className=' py-[12px]  font-medium  lg:font-semibold  text-base whitespace-nowrap lg:min-w-[100px] tracking-wide'>Date</th>
                                        <th className=' py-[12px]  font-medium  lg:font-semibold  text-base  whitespace-nowrap lg:min-w-[200px] tracking-wide'>Time (Star & Finish)</th>
                                        <th className=' py-[12px]  font-medium  lg:font-semibold  text-base  whitespace-nowrap lg:min-w-[150px] tracking-wide'>Coach name</th>
                                        <th className=' py-[12px]  font-medium  lg:font-semibold  text-base  whitespace-nowrap lg:min-w-[150px] tracking-wide'>Numbr of players</th>
                                        <th className=' py-[12px]  font-medium   lg:font-semibold  text-base whitespace-nowrap tracking-wide'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { new Array(10).fill(null).map((__, index) =>
                                    {
                                        return (
                                            <tr key={ index + '' }
                                                className='bg-white   border-b border-[#E8E8E8] text-sm text-[#52575C]'>
                                                <td className='px-[10px] lg:px-0   py-[17px] '>
                                                    <h1 className='pl-[20px] min-w-[50px] '>{ index + 1 }</h1>
                                                </td>
                                                <td className='px-[10px] lg:px-0 py-[17px] '>
                                                    <h1 className=' min-w-[120px]'>
                                                        New training
                                                    </h1>
                                                </td>
                                                <td className='px-[10px] lg:px-0 py-[17px] '>
                                                    <h1 className=' min-w-[120px]'>Tennis Squad club</h1>
                                                </td>
                                                <td className='px-[10px] lg:px-0 py-[17px] '>
                                                    <h1 className='min-w-[120px]'>22 May, 2022</h1>
                                                </td>
                                                <td className='px-[10px] lg:px-0 py-[17px] '>
                                                    <h1 className='min-w-[120px]'>09:00 - 10:30 AM</h1>
                                                </td>
                                                <td className='px-[10px] lg:px-0 py-[17px] '>
                                                    <h1 className='min-w-[120px]'>Jacob Jones</h1>
                                                </td>
                                                <td className='px-[10px] lg:px-0 py-[17px] '>
                                                    <h1 className='min-w-[120px]'>60 players</h1>
                                                </td>
                                                <td
                                                    onClick={ () => setModalVisibility(true) }
                                                    className='cursor-pointer'
                                                >
                                                    <GreenEye />
                                                </td>
                                            </tr>
                                        )
                                    }) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <PaginationElement />
                </div>

                {/* Table end */ }
            </div>
            <Modal
                show={ modalVisibility }
                hide={ () => setModalVisibility(false) }
            >
                <div className=' relative pb-[30px] bg-white rounded-2xl overflow-hidden'
                    style={ {
                        'zIndex': '999999'
                    } }
                >
                    <div className='w-full px-[17px] bg-[#F8F9FA] flex flex-row justify-between items-center py-[11px]'>
                        <h1 className='text-base text-[#000000] font-semibold'>Training details</h1>
                        <div
                            className='cursor-pointer'
                            onClick={ () => setModalVisibility(false) }
                        >
                            <ModalsCloseIcon />
                        </div>
                    </div>
                    <div className='px-[10px] sm:px-[20px] lg:px-[30px] relative'>

                        <img
                            src='./modalimg.jfif'
                            alt='modalimage'
                            className='h-[255px]  w-full my-[10px] md:my-[20px] rounded-2xl'
                        />
                    </div>

                    <div className='px-[10px]  sm:px-[20px] lg:px-[30px] flex flex-col space-y-[16px]'>
                        <div className='flex flex-row items-center justify-between'>
                            <hi className='text-[#000000] font-semibold text-[22px]'>Basic training</hi>
                            <h1 className='text-[#000000] font-medium text-[16px]'>45 mint duration</h1>
                        </div>
                        <div className='flex flex-col sm:items-center sm:flex-row sm:justify-between space-y-[16px] sm:space-y-0'>
                            <hi className='text-[#1E1E1E] text-base'>Coach:<span className='font-medium text-black inline-block pl-[12px]'>Nicholas Fernandez </span></hi>
                            <hi className='text-[#1E1E1E] text-base'>Primary objective: <span className='font-medium text-black inline-block pl-[12px]'>Skill Development</span></hi>
                        </div>
                        <div className='flex flex-col sm:items-center sm:flex-row sm:justify-between space-y-[16px] sm:space-y-0'>
                            <hi className='text-[#1E1E1E] text-base'>Number of players:<span className='font-medium text-black inline-block pl-[12px]'>12 advance player</span></hi>
                            <hi className='text-[#1E1E1E] text-base'>Type of ball:<span className='font-medium text-black inline-block pl-[12px]'>Green ball</span></hi>
                        </div>
                    </div>
                    <div className='mt-[14px] flex flex-col sm:flex-row items-start sm:items-center space-y-[16px] sm:space-y-0 sm:justify-between px-[10px] sm:px-[20px] lg:px-[30px]'>
                        <div >
                            <h1 className='text-[#1E1E1E] text-base'>Game situation:</h1>
                            <div className='flex flex-row space-x-[17px] mt-[7px]'>
                                <div className='w-[81px] h-[32px] bg-[#B3DD07] rounded-md flex items-center justify-center cursor-pointer'>
                                    <h1 className='text-white text-xs'>Defense</h1>
                                </div>
                                <div className='w-[81px] h-[32px] bg-[#B3DD07] rounded-md flex items-center justify-center cursor-pointer'>
                                    <h1 className='text-white text-xs'> Return</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <hi className='text-[#1E1E1E] text-base'>Wrap up:<span className='font-medium text-black inline-block pl-[12px]'>Bench Press for 30mint</span></hi>
                            <hi className=' text-base font-medium text-black '><span className=''>Shots duration</span></hi>
                        </div>
                    </div>
                    <div className='mt-[14px] flex flex-col sm:flex-row items-start sm:items-center space-y-[16px] sm:space-y-0 sm:justify-between px-[10px] sm:px-[20px] lg:px-[30px]'>
                        <div >
                            <h1 className='text-[#1E1E1E] text-base '>Goals from the game:</h1>

                            <div className='flex flex-row flex-wrap sm:space-x-[17px] mt-[7px]  space-y-2 '>
                                <div className='w-[81px] h-[32px] bg-[#B3DD07] rounded-md flex items-center justify-center cursor-pointer mr-2 sm:mr-0'>
                                    <h1 className='text-white text-xs'>technical</h1>
                                </div>
                                <div className='w-[81px] h-[32px] bg-[#B3DD07] rounded-md flex items-center justify-center cursor-pointer  mr-2 sm:mr-0'>
                                    <h1 className='text-white text-xs'>physical</h1>
                                </div>
                                <div className='w-[81px] h-[32px] bg-[#B3DD07] rounded-md flex items-center justify-center cursor-pointer  mr-2 sm:mr-0'>
                                    <h1 className='text-white text-xs'>technical</h1>
                                </div>
                                <div className='w-[81px] h-[32px] bg-[#B3DD07] rounded-md flex items-center justify-center cursor-pointer  mr-2 sm:mr-0'>
                                    <h1 className='text-white text-xs'>physical</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-end'>
                            <hi className='text-[#1E1E1E] text-base'>1st serve:<span className='font-medium text-black inline-block pl-[12px]'>15mint</span></hi>
                            <hi className='text-[#1E1E1E] text-base'>Kick serve:<span className='font-medium text-black inline-block pl-[12px]'>20mint</span></hi>
                        </div>
                    </div>
                    <div className='mt-[14px] flex  flex-col sm:flex-row items-start sm:items-center space-y-[16px] sm:space-y-0 sm:justify-between px-[10px] sm:px-[20px] lg:px-[30px]'>

                        <div className='flex flex-row items-center space-x-[7px] min-w-[140xpx]'>
                            <ModalClockIcon />
                            <h1 className='text-[#000000] text-sm  ml-[7px]'>Start: 04:30 PM</h1>
                        </div>
                        <div className='flex flex-row items-center space-x-[7px]  min-w-[140xpx]'>
                            <ModalClockIcon />
                            <h1 className='text-[#000000] text-sm  ml-[7px]'>Finish: 06:00 PM</h1>
                        </div>
                        <div className='flex flex-row items-center space-x-[7px]  min-w-[140xpx]'>
                            <ModalCallender />
                            <h1 className='text-[#000000] text-sm  ml-[7px]'>18.04.2022</h1>
                        </div>
                        <div className='flex flex-row items-center space-x-[7px]  min-w-[140xpx]'>
                            <ModalClockIcon />
                            <h1 className='text-[#000000] text-sm  ml-[7px]'>AT&T club</h1>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    );
}

export default Index;
