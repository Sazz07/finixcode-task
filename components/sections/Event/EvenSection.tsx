import {
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsWithQuery,
} from '@/components/shared/TabsWithQuery';

import { comments, eventData, players } from '@/lib/constant';
import { MoreVertical } from 'lucide-react';
import React from 'react';
import { EventInfo } from './EventInfo';
import { PlayerList } from './PlayerList';
import { CommentsSection } from './CommentsTab';

const EvenSection = () => {
  return (
    <div className='grid grid-cols-1 mt-10 md:grid-cols-3 font-satoshi'>
      <div className='space-y-6 md:col-span-2'>
        <div className='grid grid-cols-1 gap-4'>
          {/* Event Title and Actions */}
          <div className='flex justify-between items-start'>
            <div>
              <h1 className='mb-3 text-3xl font-bold md:text-5xl text-tertiary-night-black'>
                {eventData.title}
              </h1>
              <span className='font-light md:text-2xl'>
                <p className='text-gray-body'>{eventData.venue}</p>
                <p className='text-gray-body'>{eventData.date}</p>
              </span>
            </div>
            <div className='flex gap-2 items-center md:gap-4'>
              <button className='p-2 rounded-full border cursor-pointer hover:bg-gray-100 bg-tertiary-light-gray'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='27'
                  viewBox='0 0 26 27'
                  fill='none'
                  className='size-[26px]'
                >
                  <path
                    d='M3.90002 17.5812L3.90002 18.7187C3.90002 20.6034 5.42785 22.1312 7.31252 22.1312L18.6875 22.1312C20.5722 22.1312 22.1 20.6034 22.1 18.7187L22.1 17.5812M17.55 8.48123L13 3.93123M13 3.93123L8.45002 8.48123M13 3.93123L13 17.5812'
                    stroke='#171717'
                    strokeWidth='1.41176'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
              <button className='p-2 rounded-full border cursor-pointer hover:bg-gray-100 bg-tertiary-light-gray'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='26'
                  height='27'
                  viewBox='0 0 26 27'
                  fill='none'
                  className='size-[26px]'
                >
                  <g filter='url(#filter0_d_1_432)'>
                    <path
                      d='M5.23269 6.59658C3.4558 8.37347 3.4558 11.2544 5.23269 13.0313L13.0001 20.7986L20.7674 13.0312C22.5442 11.2544 22.5442 8.37346 20.7674 6.59658C18.9905 4.81969 16.1096 4.81969 14.3327 6.59658L13.0001 7.9293L11.6674 6.59658C9.89047 4.81969 7.00957 4.81969 5.23269 6.59658Z'
                      fill='#4A4A4A'
                    />
                    <path
                      d='M5.23269 6.59658C3.4558 8.37347 3.4558 11.2544 5.23269 13.0313L13.0001 20.7986L20.7674 13.0312C22.5442 11.2544 22.5442 8.37346 20.7674 6.59658C18.9905 4.81969 16.1096 4.81969 14.3327 6.59658L13.0001 7.9293L11.6674 6.59658C9.89047 4.81969 7.00957 4.81969 5.23269 6.59658Z'
                      stroke='white'
                      strokeWidth='1.17647'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_d_1_432'
                      x='0.958826'
                      y='3.49919'
                      width='24.0823'
                      height='21.4171'
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feFlood floodOpacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='1.17647' />
                      <feGaussianBlur stdDeviation='1.17647' />
                      <feComposite in2='hardAlpha' operator='out' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow_1_432'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow_1_432'
                        result='shape'
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
              <button className='p-2 rounded-full cursor-pointer hover:bg-gray-100'>
                <MoreVertical className='w-5 h-5 text-gray-700' />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <TabsWithQuery defaultValue='info' className='w-full'>
            <TabsList className='flex space-x-8 w-full'>
              <TabsTrigger value='info' className='px-1 py-4'>
                Info
              </TabsTrigger>
              <TabsTrigger value='player' className='px-1 py-4'>
                Player
              </TabsTrigger>
              <TabsTrigger value='comments' className='px-1 py-4'>
                Comments
              </TabsTrigger>
            </TabsList>
            <TabsContent value='info' className='pt-4'>
              <EventInfo eventData={eventData} />
            </TabsContent>
            <TabsContent value='player' className='pt-4'>
              <PlayerList players={players} totalSlots={11} />
            </TabsContent>
            <TabsContent value='comments'>
              <CommentsSection comments={comments} />
            </TabsContent>
          </TabsWithQuery>
        </div>
      </div>

      <div className='md:col-span-1 md:pl-[60px]'>
        <div className='sticky top-24'>
          {/* Booking Info */}
          <div className='p-6 bg-white rounded-lg shadow-sm'>
            <div className='flex justify-between items-center p-2 mb-3 rounded-lg border md:mb-6 md:p-4'>
              <div className='font-medium text-secondary-terra-cotta'>
                {eventData.spots.left} spots left
              </div>
              <div>
                <span className='font-bold md:text-lg text-tertiary-night-black'>
                  <span>{eventData.spots.price}</span>
                  <span>/player</span>
                </span>

                <span className='ml-1 text-xs text-[#808080]'>(both)</span>
              </div>
            </div>
            <button className='py-3 w-full font-medium rounded-full transition md:text-lg md:py-4 text-tertiary-night-black bg-primary-jithbo hover:bg-green-600'>
              Join event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvenSection;
