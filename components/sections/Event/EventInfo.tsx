import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Heart,
  Info,
  MapPin,
  Star,
} from 'lucide-react';
import Image from 'next/image';

type EventInfoProps = {
  eventData: {
    description: string;
    location: {
      name: string;
      address: string;
    };
    host: {
      name: string;
      activities: number;
      rating: number;
    };
    date: string;
    venue: string;
  };
};

export function EventInfo({ eventData }: EventInfoProps) {
  return (
    <div className=''>
      {/* About Event Section */}
      <div className='pb-5 border-b py-6 md:py-10 lg:py-[60px]'>
        <h2 className='text-[32px] font-bold text-tertiary-night-black mb-5 md:mb-8 lg:mb-10'>
          About this event
        </h2>
        <p className='text-sm font-light text-tertiary-night-black lg:w-1/2'>
          {eventData.description}
        </p>
        <button className='mt-3 text-sm text-blue-500 underline'>
          Read more
        </button>
      </div>

      {/* Location Section */}
      <div className='pb-5 border-b py-6 md:py-10 lg:py-[60px]space-y-2'>
        <h2 className='text-[32px] font-bold text-tertiary-night-black mb-5 md:mb-8 lg:mb-10'>
          Location
        </h2>
        <div className='flex gap-3 items-start'>
          <div>
            <h3 className='font-[700] text-secondary-gray-blue text-lg md:text-2xl'>
              {eventData.location.name}
            </h3>
            <p className='text-sm font-light text-tertiary-night-black'>
              {eventData.location.address}
            </p>
          </div>

          <button className='px-3 py-1.5 border border-secondary-gray-blue rounded-full text-sm text-secondary-gray-blue hover:bg-secondary-gray-blue hover:text-white cursor-pointer'>
            Open maps
          </button>
        </div>
      </div>

      {/* Date & Time Section */}
      {/* <div className='space-y-2'>
        <h2 className='text-xl font-bold'>Date & Time</h2>
        <div className='flex items-start'>
          <Calendar className='w-5 h-5 text-gray-500 mr-2 mt-0.5' />
          <div>
            <p className='text-gray-700'>Monday, March 14, 2023</p>
          </div>
        </div>
        <div className='flex items-start'>
          <Clock className='w-5 h-5 text-gray-500 mr-2 mt-0.5' />
          <div>
            <p className='text-gray-700'>7:30 PM - 9:30 PM</p>
            <p className='text-sm text-gray-600'>
              Arrive 15 minutes before start time
            </p>
          </div>
        </div>
      </div> */}

      {/* Tags */}
      {/* <div className='flex flex-wrap gap-2'>
        <span className='px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm'>
          Football
        </span>
        <span className='px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm'>
          Relay
        </span>
        <span className='px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm'>
          Female
        </span>
        <span className='px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm'>
          Age: Below 25
        </span>
        <div className='flex items-center'>
          <span className='mr-2 w-3 h-3 bg-green-400 rounded-full'></span>
          <span className='text-sm text-gray-700'>Beginner</span>
        </div>
      </div> */}

      {/* Good to Know Section */}
      <div className='pb-5 border-b py-6 md:py-10 lg:py-[60px]'>
        <h2 className='text-[32px] font-bold text-tertiary-night-black mb-5 md:mb-8 lg:mb-10'>
          Good to know
        </h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
          {/* Highlights */}
          <div className='p-4 text-white rounded-lg bg-secondary-terra-cotta md:col-span-1 md:p-6'>
            <h3 className='mb-3 md:mb-4 text-lg md:text-2xl font-[700]'>
              Highlights
            </h3>
            <ul className='space-y-2 text-sm font-light md:text-lg'>
              <li className='flex gap-2 items-center'>
                <Calendar className='size-4.5 mt-0.5  shrink-0' />
                <span>Mon, 2 Dec</span>
              </li>
              <li className='flex gap-2 items-center'>
                <Clock className='size-4.5 mt-0.5  shrink-0' />
                <span>7:30 AM - 8:30 AM</span>
              </li>
              <li className='flex gap-2 items-center'>
                <Clock className='size-4.5  shrink-0' />
                <span>Arrive 15 min before start</span>
              </li>
              <li className='flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='19'
                  viewBox='0 0 18 19'
                  fill='none'
                  className='size-4.5  shrink-0'
                >
                  <path
                    d='M9.44242 11.3646C10.0613 11.3646 10.6547 11.1188 11.0923 10.6812C11.5299 10.2436 11.7758 9.65009 11.7758 9.03125C11.7758 8.41241 11.5299 7.81892 11.0923 7.38133C10.6547 6.94375 10.0613 6.69792 9.44242 6.69792C8.82358 6.69792 8.23009 6.94375 7.7925 7.38133C7.35492 7.81892 7.10909 8.41241 7.10909 9.03125C7.10909 9.65009 7.35492 10.2436 7.7925 10.6812C8.23009 11.1188 8.82358 11.3646 9.44242 11.3646ZM7.10909 16.0312V13.6979H11.7758V16.0312H7.10909ZM7.10909 4.36458V2.03125H11.7758V4.36458H7.10909Z'
                    stroke='white'
                    strokeWidth='0.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M4 9.03125H14.8889M5.55556 16.0312C5.143 16.0312 4.74733 15.8674 4.45561 15.5756C4.16389 15.2839 4 14.8883 4 14.4757L4 3.58681C4 3.17425 4.16389 2.77858 4.45561 2.48686C4.74733 2.19514 5.143 2.03125 5.55556 2.03125H13.3333C13.7459 2.03125 14.1416 2.19514 14.4333 2.48686C14.725 2.77858 14.8889 3.17425 14.8889 3.58681V14.4757C14.8889 14.8883 14.725 15.2839 14.4333 15.5756C14.1416 15.8674 13.7459 16.0312 13.3333 16.0312H5.55556Z'
                    stroke='white'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <span>Venue booked</span>
              </li>
            </ul>
          </div>

          {/* Refund Policy */}
          <div className='p-4 text-white rounded-lg bg-secondary-pure-green md:p-6 md:col-span-2'>
            <h3 className='mb-3 md:mb-4 text-lg md:text-2xl font-[700]'>
              Refund & cancellation policy
            </h3>
            <ul className='pl-1 space-y-1 text-sm font-light md:text-lg'>
              <li>• Full refund if host cancels the game</li>
              <li>• Full refund if you cancel 24+ hours in advance</li>
              <li>• Full refund if game is cancelled due to low attendance</li>
            </ul>
            <div className='flex justify-end pb-8 mt-3 md:mt-4'>
              <button className='font-light'>Learn more</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hosted By Section */}
      <div className='pb-5  py-6 md:py-10 lg:py-[60px]'>
        <h2 className='text-[32px] font-bold text-tertiary-night-black mb-5 md:mb-8 lg:mb-10'>
          Hosted by
        </h2>
        <div className='flex gap-1 items-center p-4 text-white rounded-lg bg-secondary-gray-blue md:p-6 md:w-3/5'>
          <div className='flex-shrink-0 mr-4'>
            <div className='overflow-hidden bg-gray-300 rounded-full size-14 md:size-24'>
              <Image
                src='/user_image.png'
                alt='Host'
                width={200}
                height={200}
                className='object-cover size-14 md:size-24'
              />
            </div>
          </div>
          <div className='flex-grow'>
            <h3 className='font-[700] text-lg md:text-2xl'>
              {eventData.host.name}
            </h3>
            <div className='text-sm font-light md:text-base'>
              <span>{eventData.host.activities} activities hosted</span>
              <div className='flex items-center'>
                <span>{eventData.host.rating} host rating</span>
              </div>
            </div>
          </div>
          <div className='flex gap-2 items-center md:gap-4'>
            <button className='px-4 md:px-8 py-1.5 md:py-2.5 bg-[#F5FDCD] text-tertiary-night-black rounded-full text-sm md:text-base'>
              Message
            </button>
            <button className='px-4 md:px-8 py-1.5 md:py-2.5 border border-[#F5FDCD] text-[#F5FDCD] rounded-full text-sm md:text-base'>
              View profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
