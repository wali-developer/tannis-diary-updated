import { useRouter } from 'next/router';
import React from 'react';
import CouchesIcon from '../SVGs/SidebarIcons/CouchesIcon';
import DashboardIcon from '../SVGs/SidebarIcons/DashboardIcon';
import EventsIcon from '../SVGs/SidebarIcons/EventsIcon';
import MathcesIcon from '../SVGs/SidebarIcons/MathcesIcon';
import PlayersIcon from '../SVGs/SidebarIcons/PlayersIcon';
import Tournaments from '../SVGs/SidebarIcons/Tournaments';
import TrainingIcon from '../SVGs/SidebarIcons/TrainingIcon';

const MobileSidebar = ({ visibility, onCloseButtonClicked }) => {
    const router = useRouter()

    // const sidebardata = [
    //     {
    //         title: 'Dashboard',
    //         Icon: <DashboardIcon />,
    //         path: '/dashboard'
    //     },
    //     {
    //         title: 'Training',
    //         Icon: <TrainingIcon />,
    //         path: '/training'
    //     },
    //     {
    //         title: 'Matches',
    //         Icon: <Tournaments />,
    //         path: '/matches'
    //     },
    //     {
    //         title: 'Tournaments',
    //         Icon: <Tournaments />,
    //         path: '/tournaments'
    //     },
    //     {
    //         title: 'Players',
    //         Icon: <PlayersIcon />,
    //         path: '/players'
    //     },
    //     {
    //         title: 'Coaches',
    //         Icon: <CouchesIcon />,
    //         path: '/coaches'
    //     },
    //     {
    //         title: 'Events',
    //         Icon: <EventsIcon />,
    //         path: '/events'
    //     }
    // ];

    const sidebardata = [
        {
            title: 'Dashboard',
            Icon: <DashboardIcon />,
            path: '/dashboard'
        },
        {
            title: 'Training',
            Icon: <CouchesIcon />,
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
            path: '/events'
        }
    ];

    return (
        <div className={`fixed z-50 inset-0  lg:hidden bg-black/5 transition-all duration-1000 ${visibility ? " -translate-x-[0px]" : " -translate-x-[1024px]"}`}>
            <div className='w-full h-full flex flex-row'>
                <div className='self-stretch flex-1 bg-white pt-5 px-4 flex flex-col'>
                    <div className={`self-end transition-all duration-1000 cursor-pointer ${visibility ? "opacity-100" : "opacity-0"} `}
                        onClick={onCloseButtonClicked}
                    >
                        <CLoseIcon />
                    </div>

                    <div>
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
                                            onCloseButtonClicked()
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
                <div className='flex-1 self-stretch hidden sm:block '
                    onClick={onCloseButtonClicked}></div>
            </div>
        </div>
    );
}

const CLoseIcon = () => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"

    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
        />
    </svg>)
}

export default MobileSidebar;
