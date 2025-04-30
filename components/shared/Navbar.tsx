'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import Image from 'next/image';

const Navbar = () => {
  const [date, setDate] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className='w-full bg-white py-2 px-4 md:px-6 lg:px-8 border-b border-gray-100 shadow-sm'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <div className='flex items-center justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={25} height={34} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-4 flex-1 justify-center'>
          {/* Date Selector */}
          <div className='relative flex items-center bg-gray-50 rounded-full px-4 py-2 w-48'>
            <span className='text-gray-500 text-sm'>Select date</span>
            <Calendar className='w-5 h-5 text-gray-500 ml-auto' />
            <input
              type='date'
              className='absolute inset-0 opacity-0 cursor-pointer'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Search Input */}
          <div className='relative flex items-center bg-gray-50 rounded-full px-4 py-2 w-64'>
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent border-none outline-none text-sm w-full'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className='w-5 h-5 text-gray-500 ml-2' />
          </div>
        </div>

        {/* Right Side Navigation */}
        <div className='flex items-center space-x-4'>
          <Link
            href='/leaderboard'
            className='hidden md:flex items-center text-sm font-medium'
          >
            <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2'>
              <svg
                width='14'
                height='14'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-green-500'
              >
                <path
                  d='M21 9V3H15M3 15V21H9M21 3L13.5 10.5M3 21L10.5 13.5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            Leaderboard
          </Link>

          <Button
            variant='outline'
            className='hidden md:flex rounded-full border-gray-200 hover:bg-gray-50 hover:text-gray-900'
          >
            Login / Sign up
          </Button>

          {/* Mobile Menu Button */}
          <button
            className='p-2 rounded-full hover:bg-gray-100 flex items-center justify-center'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className='w-6 h-6' />
            <span className='sr-only'>Open menu</span>
          </button>

          {/* User Avatar */}
          <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='p-4'>
          <div className='flex justify-between items-center mb-8'>
            <Link href='/' className='flex items-center'>
              <div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-green-500'
                >
                  <path
                    d='M21 9V3H15M3 15V21H9M21 3L13.5 10.5M3 21L10.5 13.5'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </Link>
            <button
              className='p-2 rounded-full hover:bg-gray-100'
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 6L6 18M6 6L18 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='sr-only'>Close menu</span>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className='space-y-6'>
            {/* Date Selector */}
            <div className='relative flex items-center bg-gray-50 rounded-full px-4 py-2'>
              <span className='text-gray-500 text-sm'>Select date</span>
              <Calendar className='w-5 h-5 text-gray-500 ml-auto' />
              <input
                type='date'
                className='absolute inset-0 opacity-0 cursor-pointer'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Search Input */}
            <div className='relative flex items-center bg-gray-50 rounded-full px-4 py-2'>
              <input
                type='text'
                placeholder='Search'
                className='bg-transparent border-none outline-none text-sm w-full'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className='w-5 h-5 text-gray-500 ml-2' />
            </div>

            <Link
              href='/leaderboard'
              className='flex items-center text-sm font-medium p-2'
            >
              <div className='w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-green-500'
                >
                  <path
                    d='M21 9V3H15M3 15V21H9M21 3L13.5 10.5M3 21L10.5 13.5'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              Leaderboard
            </Link>

            <Button
              variant='outline'
              className='w-full rounded-full border-gray-200 hover:bg-gray-50 hover:text-gray-900'
            >
              Login / Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
