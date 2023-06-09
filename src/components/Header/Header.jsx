import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-header'>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    {/* Logo Section */}
                    <Link to='/' className='inline-flex items-center'>
                        <span className='ml-2 text-3xl lg:text-5xl font-mono font-bold tracking-wide text-gray-800'>Job Arena</span>
                    </Link>

                    {/* Nav Items Section */}
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/applied-jobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Blog
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button aria-label='Open Menu' title='Open Menu' onClick={() => setIsMenuOpen(true)}>
                            <Bars3BottomRightIcon className='w-5 text-gray-600' />
                        </button>
                        {
                            isMenuOpen && (
                                <div className='absolute top-0 left-0 w-full z-10'>
                                    <div className='p-5 bg-white border rounded shadow-sm'>
                                        {/* Logo & Button section */}
                                        <div className='flex items-center justify-between mb-4'>
                                            <div>
                                                <Link to='/' className='inline-flex items-center'>
                                                    <span className='ml-2 text-2xl font-mono font-bold tracking-wide text-gray-800'>
                                                        Job Arena
                                                    </span>
                                                </Link>
                                            </div>
                                            {/* Dropdown menu close button */}
                                            <div>
                                                <button aria-label='Close Menu' title='Close Menu' onClick={() => setIsMenuOpen(false)}>
                                                    <XMarkIcon className='w-5 text-gray-600' />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Mobile Nav Items Section */}
                                        <nav>
                                            <ul className='space-y-4'>
                                                <li>
                                                    <NavLink 
                                                        to='/statistics' 
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Statistics
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink 
                                                        to='/applied-jobs' 
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Applied Jobs
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to='/blog'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Blog
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    {/* Button Section */}
                    <Link className='btn'>Start Applying</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;