import { useRouter } from 'next/router';
import React from 'react';
import LogoIcon from '../SVGs/LogoIcon';
import CouchesIcon from '../SVGs/SidebarIcons/CouchesIcon';
import DashboardIcon from '../SVGs/SidebarIcons/DashboardIcon';
import EventsIcon from '../SVGs/SidebarIcons/EventsIcon';
import MathcesIcon from '../SVGs/SidebarIcons/MathcesIcon';
import PlayersIcon from '../SVGs/SidebarIcons/PlayersIcon';
import Tournaments from '../SVGs/SidebarIcons/Tournaments';
import TrainingIcon from '../SVGs/SidebarIcons/TrainingIcon';

const Sidebar = () => {
    const sidebardata = [
        {
            title: 'Dashboard',
            Icon: <DashboardIcon />,
            path: '/dashboard'
        },
        {
            title: 'Training',
            Icon: <TrainingIcon />,
            path: '/training'
        },
        {
            title: 'Matches',
            Icon: <Tournaments />,
            path: '/matches'
        },
        {
            title: 'Tournaments',
            Icon: <Tournaments />,
            path: '/tournaments'
        },
        {
            title: 'Players',
            Icon: <PlayersIcon />,
            path: '/players'
        },
        {
            title: 'Coaches',
            Icon: <CouchesIcon />,
            path: '/coaches'
        },
        {
            title: 'Events',
            Icon: <EventsIcon />,
            path: '#'
        }
    ];

    const router = useRouter()

    return (
        <div className=' hidden lg:min-w-[200px]  bg-white  pt-[35px]  lg:flex relative'>
            <div className='flex flex-col fixed top-0 bottom-0 left-0   lg:min-w-[200px]'>
                <div className=' mb-[54px]   mt-[10px] cursor-pointer' onClick={() => router.push('/dashboard')}>
                    <img
                        src='./logo.png'
                        className='w-[104px] h-[106px] mx-auto'
                        alt=""
                    />

                </div>
                {
                    sidebardata.map((item, index) => {

                        return (
                            <div
                                key={index + ''}
                                className='flex items-center pl-[26px] py-[15px] space-x-[22px] cursor-pointer relative'
                                style={{
                                    backgroundColor: router.pathname == item.path ? '#FAFAFC' : 'white'
                                }}
                                onClick={() => {
                                    router.push(item.path)
                                }}
                            >
                                <div>
                                    {item.Icon}
                                </div>
                                <div>
                                    <h1 className='text-[#807C7C] text-base font-normal'>{item.title}</h1>
                                </div>
                                {router.pathname == item.path && <div className='absolute -left-[24px] top-0 bottom-0 w-1 bg-[#B3DD07]'></div>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Sidebar;

