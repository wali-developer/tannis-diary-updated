import React from 'react';
import Notifications from '../Notifications'
import HeaderNotificationsIcon from '../SVGs/HeaderIcons/HeaderNotificationsIcon';
import HeaderSearchIcon from '../SVGs/HeaderIcons/HeaderSearchIcon';

const Header = ({ onMenuButtonClicked }) =>
{
    return (
        <div className='h-[80px] bg-white flex items-center justify-between pl-[32px] pr-[42px]'>
            <div>
                <h1 className='text-black text-lg hidden lg:inline'>Welcome To My Tennis Dairy Dashboard</h1>
                <div className='bolck lg:hidden cursor-pointer'
                    onClick={ () => onMenuButtonClicked() }
                >
                    <MenuIcon />
                </div>
            </div>
            <div className='flex space-x-[33px] items-center '>
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
                <div className='flex items-center space-x-[7px]'>
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
                            strokeWidth={ 1.5 }
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
                </div>
            </div>
        </div >
    );
}

const MenuIcon = () =>
{
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={ 1.5 }
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
