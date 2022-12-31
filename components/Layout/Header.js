import { Menu } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import Notifications from '../Notifications'
import HeaderNotificationsIcon from '../SVGs/HeaderIcons/HeaderNotificationsIcon';
import HeaderSearchIcon from '../SVGs/HeaderIcons/HeaderSearchIcon';

const Header = ({ onMenuButtonClicked }) => {
    return (
        <div className='h-[80px] bg-white flex items-center justify-between pl-[32px] pr-[42px]'>
            <div>
                <h1 className='text-black text-lg hidden lg:inline'>Welcome To My Tennis Dairy Dashboard</h1>
                <div className='bolck lg:hidden cursor-pointer'
                    onClick={() => onMenuButtonClicked()}
                >
                    <MenuIcon />
                </div>
            </div>
            <div className='flex space-x-[25px] items-center '>
                <div className='hidden sm:block sm:w-[312px] border border-[#D0CECE] h-[40px] rounded-md overflow-hidden relative'>
                    <div className='h-full flex items-center justify-center absolute z-50 left-[17px] '>
                        <HeaderSearchIcon />
                    </div>
                    <input
                        className='z-40 placeholder:font-normal font-normal text-dark-gray placeholder:text-base 
                                   w-full h-full pr-3 pl-[56px] outline-none border-none text-base'
                        placeholder='Search'
                    />
                </div>
                <div>
                    <Notifications />
                </div>
                <div className='relative'>
                    <Menu>
                        <Menu.Button className="flex gap-x-[5px] items-center">
                            <div className='h-[40px] w-[40px] rounded-full overflow-hidden'>
                                <img
                                    src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
                                    alt='profile'
                                    className='h-[40px] w-[40px]'
                                />
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>
                        </Menu.Button>
                        <Menu.Items>
                            <div className="absolute top-12 border rounded-xl right-0 bg-white shadow-md w-[217px] px-5 py-4">
                                <Menu.Item>
                                    <Link href="/profile/edit_profile">
                                        <div className='flex gap-x-2 items-center pb-4 cursor-pointer'>
                                            <img src='/profile.svg' alt='' />
                                            <span className='text-sm'>Edit profile</span>
                                        </div>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link href="/profile/update_password">
                                        <div className='flex gap-x-2 items-center pb-4 cursor-pointer'>
                                            <img src='/lock1.svg' alt='' />
                                            <span className='text-sm'>Change password</span>
                                        </div>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link href="#">
                                        <div className='flex gap-x-2 items-center cursor-pointer'>
                                            <img src='/logout.svg' alt='' />
                                            <span className='text-sm'>Logout</span>
                                        </div>
                                    </Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </div >
    );
}

const MenuIcon = () => {
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>)
}

export default Header;
