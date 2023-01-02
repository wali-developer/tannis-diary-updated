import React, { useState } from 'react';
import Modal from '../../components/common/Modal';
import CallendarGreenIcon from '../../components/SVGs/DashboardIcons/CallenderGreenIcon'
import ModalCallender from '../../components/SVGs/ModalCallender';
import ModalClockIcon from '../../components/SVGs/ModalClockIcon';
import ModalsCloseIcon from '../../components/SVGs/ModalsCloseIcon';
import TournamentIcon from '../../components/SVGs/TournamentsSvgs/TournamentIcon';

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
            <div className='  bg-[#FAFAFC] flex-1 self-stretch px-[10px] sm:px-[20px] py-[20px] lg:py-[20px] xl:py-[26px] lg:pl-[20px] lg:pr-[30px] relative'>
                {/* Tabs start */ }
                <div className='flex flex-col'>
                    <div className='self-stretch  md:self-center lg:self-start'>
                        <div className='flex flex-col sm:flex-row p-1 bg-white rounded-[10px]  '>
                            { tabs.map((item, index) =>
                            {
                                return (
                                    <div
                                        key={ index + '' }
                                        className='rounded-md sm:rounded-[10px] cursor-pointer flex-1'
                                        style={ {
                                            backgroundColor: selectedTab == index ? '#B3DD07' : 'white',
                                            boxShadow: selectedTab == index ? '0px 5px 20px rgba(0, 0, 0, 0.05)' : null
                                        } }
                                        onClick={ () => setSelectedtab(index) }
                                    >
                                        <h1
                                            className='font-semibold text-sm flex-1 md:w-[116px] text-center py-[11px] transition-all duration-500 ease-in'
                                            style={ {
                                                color: selectedTab == index ? 'white' : '#52575C'
                                            } }
                                        >{ item }</h1>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </div>
                {/* Tabs end */ }

                <div className='bg-white mt-[30px] sm:mt-[20px] md:mt-[31px] rounded-[8px] relative  
                             py-[10px] md:py-[24px] overflow-x-hidden shadow-sm flex flex-col '>
                    {/* Heading start */ }
                    <div className=' flex flex-col sm:flex-row sm:items-center justify-between pl-[30px] pr-[21px] space-y-[10px] '>
                        {/* Left */ }
                        <div>
                            <h1 className='text-black font-semibold text-xl'>All tournament</h1>
                        </div>
                        {/* Right */ }
                        <div className='flex flex-col md:flex-row space-x-3 lg:space-x-[30px] xl:space-x-[50px] '>

                            <div className='flex flex-row justify-between self-stretch space-x-3 lg:space-x-[30px] xl:space-x-[50px] '>
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
                    <div className='sm:pl-[30px] sm:pr-[21px] grid grid-cols-1 gap-[20px] lg:gap-[38px] mt-[30px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 '>
                        { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((__, index) => (
                            <TournamentItem
                                key={ index + '' }
                                callBack={ () => setModalVisibility(true) }
                            />
                        )) }
                    </div>
                </div>


            </div>
            <Modal
                show={ modalVisibility }
                hide={ () => setModalVisibility(false) }
            >
                <div className=' relative pb-[30px] bg-white rounded-2xl overflow-hidden'>
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
                            src='./tournament.png'
                            alt='modalimage'
                            className='h-[255px]  w-full my-[10px] md:my-[20px] rounded-2xl'
                        />
                    </div>

                    <div className='px-[10px]  sm:px-[20px] lg:px-[30px] flex flex-col space-y-[16px]'>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                            <hi className='text-[#000000] font-semibold text-[18px] sm:text-[22px]'>Europe Open Tournament</hi>
                            <h1 className='text-[#000000] font-medium text-[16px]'>Number of players:  15 players</h1>
                        </div>

                    </div>

                    <div className='px-[10px]  sm:px-[20px] lg:px-[30px]  mt-[10px] flex flex-col items-start  '>
                        <h1 className='text-[16px] text-[#1E1E1E]'>Game plan for match:</h1>
                        <h1 className='text-[16px] text-[#1E1E1E] mt-1 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque etiam tristique non nibh eleifend donec
                            ultricies. Lacus lorem a adipiscing ac. Faucibus eleifend amet,
                            diam ultricies non mollis integer.</h1>
                    </div>
                    <div className='mt-[14px] flex  flex-row items-start sm:items-center px-[10px] sm:px-[20px] lg:px-[30px]'>

                        <div className='flex flex-row items-center space-x-[7px] min-w-[140xpx]'>
                            <ModalClockIcon />
                            <h1 className='text-[#000000] text-sm  ml-[7px]'>Start: 04:30 PM</h1>
                        </div>
                        <div className='flex flex-row items-center space-x-[7px]  min-w-[140xpx]'>
                            <ModalClockIcon />
                            <h1 className='text-[#000000] text-sm  ml-[7px]'>Finish: 06:00 PM</h1>
                        </div>

                    </div>

                </div>
            </Modal>
        </>
    );
}

const TournamentItem = ({ callBack }) =>
{
    return (
        <div className='rounded-[10px] overflow-hidden flex flex-col bg-[#F8F9FA] md:pb-[29px] pb-[20px] cursor-pointer'
            onClick={ () => callBack() }
        >
            <di className='h-[200px] flex items-center justify-center overflow-hidden self-stretch'>
                <img
                    src='./tournament.png'
                    className='h-full w-full'
                />
            </di>
            <di className='flex flex-col '>
                <h1 className='text-base font-semibold text-[#000000] leading-5 tracking-wide self-center mt-[17px] mb-[4px]'>US Open tournament</h1>
                <h1 className='self-center text-xs text-[#000000] mb-[20px] leading-[18px]'>Madrid, Spain</h1>
                <div className='flex flex-row items-center justify-between'>
                    <div className='pl-[13px] text-xs leading-[14px] text-[#807C7C] space-y-[12px] '>
                        <h1>Starting date:</h1>
                        <h1>Number of player:</h1>
                    </div>
                    <div className='pr-[12px] text-[#1E1E1E] text-sm leading-5 tracking-wide  self-stretch space-y-1'>
                        <h1>24 March, 2022</h1>
                        <h1>38 players</h1>
                    </div>
                </div>
            </di>
        </div>
    )
}

export default Index;
