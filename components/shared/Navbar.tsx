'use client';

import { useState } from 'react';
import { Search, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import Image from 'next/image';
import Logo from './Logo';
import { Input } from '../ui/input';
import DatePicker from './DatePicker';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className='sticky top-0 z-10 w-full px-4 py-2 bg-white md:py-3 md:px-6 lg:py-3.5 lg:px-10'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className='hidden flex-1 gap-2 justify-center items-center md:flex'>
          {/* Date Selector */}
          <DatePicker />

          {/* Search Input */}
          <div className='relative w-64'>
            <Input
              type='search'
              placeholder='Search'
              className='py-6 rounded-full border shadow-md'
            />

            <Button
              size='icon'
              variant='ghost'
              className='absolute right-2 top-1/2 rounded-full transform -translate-y-1/2 cursor-pointer bg-light-yellow hover:bg-gray-50'
            >
              <Search className='size-5' />
            </Button>
          </div>
        </div>

        <div className='flex gap-2 items-center'>
          <Button
            variant='outline'
            className='hidden items-center px-3 py-6 font-medium rounded-full border-0 cursor-pointer md:flex text-secondary-pure-green hover:bg-gray-50 hover:text-primary-jithbo bg-light-yellow'
          >
            <div className='flex justify-center items-center mr-2'>
              <Image src={'/medal.svg'} alt='medal' width={13} height={18} />
            </div>
            Leaderboard
          </Button>

          <Button
            variant='outline'
            className='hidden px-6 py-6 rounded-full cursor-pointer text-secondary-pure-green border-secondary-pure-green md:flex hover:bg-gray-50 hover:text-primary-jithbo'
          >
            Login / Sign up
          </Button>
          <div className='rounded-full border'>
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='flex items-center justify-center gap-2.5 py-1.5 px-2 cursor-pointer'
            >
              {/* Mobile Menu Button */}
              <Image
                src={'/hamburger.svg'}
                alt='user_profile'
                width={22}
                height={22}
                className='size-[22px]'
              />

              {/* User Avatar */}
              <Image
                src={'/user_profile_filled.svg'}
                alt='user_profile'
                width={37}
                height={37}
                className='size-[37px]'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out transform md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='p-4'>
          <div className='flex justify-between items-center mb-8'>
            <Logo />
            <button
              className='p-2 rounded-full cursor-pointer hover:bg-gray-100'
              onClick={() => setIsMenuOpen(false)}
            >
              <XIcon className='text-gray-600 size-6' />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className='space-y-6'>
            {/* Date Selector */}
            <DatePicker />

            {/* Search Input */}
            <div className='relative w-full'>
              <Input
                type='search'
                placeholder='Search'
                className='py-6 rounded-full border'
              />

              <Button
                size='icon'
                variant='ghost'
                className='absolute right-2 top-1/2 rounded-full transform -translate-y-1/2 cursor-pointer bg-light-yellow hover:bg-gray-50'
              >
                <Search className='size-5' />
              </Button>
            </div>

            <Button
              variant='outline'
              className='items-center px-3 py-6 w-full font-medium rounded-full border-0 cursor-pointer md:flex text-secondary-pure-green hover:bg-gray-50 hover:text-primary-jithbo bg-light-yellow'
            >
              <div className='flex justify-center items-center mr-2'>
                <Image src={'/medal.svg'} alt='medal' width={13} height={18} />
              </div>
              Leaderboard
            </Button>

            <Button
              variant='outline'
              className='px-6 py-6 w-full rounded-full cursor-pointer text-secondary-pure-green border-secondary-pure-green md:flex hover:bg-gray-50 hover:text-primary-jithbo'
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
