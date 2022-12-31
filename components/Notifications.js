import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'

import { Fragment } from 'react'
import HeaderNotificationsIcon from './SVGs/HeaderIcons/HeaderNotificationsIcon'

const Index = () => {
    return (
        <div className="max-w-sm px-4 ">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md text-base font-medium text-white hover:text-opacity-100 focus:outline-none
                 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-0`}
                        >
                            <HeaderNotificationsIcon />

                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -right-28 md:right-0 z-50 pt-4 ">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 h-[512px] bg-white py-[18px] px-[18px] notification_container">
                                    <div className='flex flex-row items-center justify-between'>
                                        <h1 className='text-[#1E1E1E] font-bold text-base'>Notification</h1>
                                        <Link href="/notifications">
                                            <h1 className='text-[#1E1E1E] font-bold text-sm cursor-pointer'>View all</h1>
                                        </Link>
                                    </div>
                                    <div className='flex flex-col mt-[26px] justify-between'>
                                        {[1, 2, 3, 4, 5, 6, 7].map((__, index) => {
                                            return (
                                                <div
                                                    key={index + ''}
                                                    className="mb-6 flex justify-between items-start"
                                                >
                                                    <div className='flex gap-x-3'>
                                                        <div className='h-[38px] w-[38px] bg-black flex items-center justify-center rounded-lg'>
                                                            <img src='/lock.svg' alt='' />
                                                        </div>
                                                        <div>
                                                            <h6 className='text-[15px] font-semibold text-black'>Password changed</h6>
                                                            <p className='text-xs text-black/60'>Password has changed successfully</p>
                                                        </div>
                                                    </div>
                                                    <p className='text-xs text-black/60'>12 min</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}




export default Index