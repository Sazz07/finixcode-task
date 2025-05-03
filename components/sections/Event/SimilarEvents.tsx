'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useRef, Suspense } from 'react'; // Add Suspense import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { similarEvents } from '@/lib/constant';

function SimilarEventsContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab');
  const swiperRef = useRef<SwiperType | undefined>(undefined);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  if (!activeTab || activeTab === 'info') {
    return (
      <div className='p-4 md:p-10 font-satoshi'>
        <div className='flex justify-between items-center'>
          <h2 className='text-[32px] font-bold text-tertiary-night-black mb-5 md:mb-8 lg:mb-10'>
            Other events you may like
          </h2>
          <div className='flex gap-2 items-center md:gap-4'>
            <button
              onClick={handlePrev}
              className='p-3 rounded-full cursor-pointer bg-light-yellow'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
                className='size-6'
              >
                <path
                  d='M15 18.0312L9 12.0312L15 6.03125'
                  stroke='#4A4A4A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className='p-3 rounded-full cursor-pointer bg-light-yellow'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
                className='size-6'
              >
                <path
                  d='M9 6.03125L15 12.0313L9 18.0312'
                  stroke='#4A4A4A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 16 },
          }}
          className='mt-4'
        >
          {similarEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <div className='overflow-hidden bg-white border rounded-4xl'>
                <div className='relative'>
                  <Swiper
                    pagination={{
                      clickable: true,
                      bulletActiveClass:
                        'swiper-pagination-bullet-active !bg-white',
                      bulletClass: 'swiper-pagination-bullet !bg-white/50',
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className='overflow-hidden w-full h-[116px]'
                  >
                    {event.images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={img}
                          alt={`Event image ${index + 1}`}
                          width={500}
                          height={500}
                          className='object-cover w-full h-[116px]'
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <button className='absolute top-5 right-5 z-10'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='30'
                      height='31'
                      viewBox='0 0 30 31'
                      fill='none'
                    >
                      <g filter='url(#filter0_d_2118_141)'>
                        <path
                          d='M6.03781 7.60654C3.98756 9.65679 3.98756 12.9809 6.03781 15.0312L15.0002 23.9935L23.9624 15.0312C26.0127 12.9809 26.0127 9.65679 23.9624 7.60654C21.9122 5.55628 18.5881 5.55628 16.5378 7.60654L15.0002 9.14429L13.4624 7.60654C11.4122 5.55628 8.08806 5.55628 6.03781 7.60654Z'
                          fill='#4A4A4A'
                        />
                        <path
                          d='M6.03781 7.60654C3.98756 9.65679 3.98756 12.9809 6.03781 15.0312L15.0002 23.9935L23.9624 15.0312C26.0127 12.9809 26.0127 9.65679 23.9624 7.60654C21.9122 5.55628 18.5881 5.55628 16.5378 7.60654L15.0002 9.14429L13.4624 7.60654C11.4122 5.55628 8.08806 5.55628 6.03781 7.60654Z'
                          stroke='white'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <filter
                          id='filter0_d_2118_141'
                          x='1.50012'
                          y='4.31885'
                          width='27'
                          height='23.9246'
                          filterUnits='userSpaceOnUse'
                          colorInterpolationFilters='sRGB'
                        >
                          <feFlood
                            floodOpacity='0'
                            result='BackgroundImageFix'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dy='1.25' />
                          <feGaussianBlur stdDeviation='1.25' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_2118_141'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect1_dropShadow_2118_141'
                            result='shape'
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className='p-4'>
                  <div className='flex justify-between items-center mb-1'>
                    <div className='flex gap-1 items-center text-gray-body'>
                      {event.categories.map((category, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2.5 py-1 rounded-full ${
                            index === 0 ? 'bg-[#D9F2E6]' : 'bg-[#EFEDFF]'
                          }`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className=''>
                      <span className='flex items-center text-xs gap-1.5'>
                        <Image
                          src={'/icons/difficulty_advance.png'}
                          alt='difficulty_advance_image'
                          width={100}
                          height={100}
                          className='size-5'
                        />
                        {event.difficulty}
                      </span>
                    </div>
                  </div>
                  <h3 className='text-lg font-medium md:text-2xl text-secondary-pure-green'>
                    {event.title}
                  </h3>
                  <div className='flex items-center mb-2 text-sm text-tertiary-night-black'>
                    <span>{event.date}</span>
                  </div>
                  <div className='flex gap-1 items-center text-sm text-tertiary-night-black'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='19'
                      viewBox='0 0 18 19'
                      fill='none'
                      className='size-[17.5px]'
                    >
                      <path
                        d='M8.7498 16.8231C8.57966 16.8231 8.43382 16.7745 8.3123 16.6772C8.19077 16.58 8.09962 16.4524 8.03886 16.2944C7.80796 15.6139 7.51629 14.9759 7.16386 14.3804C6.82358 13.7849 6.34355 13.0861 5.72375 12.284C5.10396 11.4819 4.59962 10.7163 4.21073 9.98714C3.834 9.25798 3.64563 8.3769 3.64563 7.34391C3.64563 5.92204 4.13782 4.71891 5.12219 3.73454C6.11872 2.73801 7.32792 2.23975 8.7498 2.23975C10.1717 2.23975 11.3748 2.73801 12.3592 3.73454C13.3557 4.71891 13.854 5.92204 13.854 7.34391C13.854 8.44982 13.6413 9.37343 13.2159 10.1147C12.8027 10.8439 12.3227 11.567 11.7758 12.284C11.1196 13.159 10.6213 13.8882 10.281 14.4715C9.95292 15.0427 9.67948 15.6503 9.46073 16.2944C9.39997 16.4646 9.30275 16.5983 9.16907 16.6955C9.04754 16.7805 8.90778 16.8231 8.7498 16.8231ZM8.7498 9.16683C9.26021 9.16683 9.69164 8.99061 10.0441 8.63818C10.3965 8.28575 10.5727 7.85433 10.5727 7.34391C10.5727 6.8335 10.3965 6.40207 10.0441 6.04964C9.69164 5.69721 9.26021 5.521 8.7498 5.521C8.23938 5.521 7.80796 5.69721 7.45553 6.04964C7.10309 6.40207 6.92688 6.8335 6.92688 7.34391C6.92688 7.85433 7.10309 8.28575 7.45553 8.63818C7.80796 8.99061 8.23938 9.16683 8.7498 9.16683Z'
                        fill='#FF0000'
                      />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className='mt-4 md:mt-7'>
                    <p className='text-[#AA3333] text-sm flex justify-end'>
                      {event.spotsLeft} spots left
                    </p>

                    <div className='flex justify-between items-center'>
                      <span className='text-sm text-tertiary-night-black'>
                        {event.attending} attending
                      </span>

                      <div className='flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='27'
                          height='27'
                          viewBox='0 0 27 27'
                          fill='none'
                          className='size-[26px]'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M13.6668 22.1314C18.6926 22.1314 22.7668 18.0572 22.7668 13.0314C22.7668 8.00561 18.6926 3.9314 13.6668 3.9314C8.64101 3.9314 4.5668 8.00561 4.5668 13.0314C4.5668 18.0572 8.64101 22.1314 13.6668 22.1314ZM10.2543 6.2064C9.62608 6.2064 9.1168 6.71567 9.1168 7.3439C9.1168 7.97212 9.62608 8.4814 10.2543 8.4814C10.8825 8.4814 11.3918 8.99067 11.3918 9.6189V10.7564H10.2543C9.62608 10.7564 9.1168 11.2657 9.1168 11.8939C9.1168 12.5221 9.62608 13.0314 10.2543 13.0314H11.3918V16.4439C11.3918 18.3286 12.9196 19.8564 14.8043 19.8564C16.689 19.8564 18.2168 18.3286 18.2168 16.4439V15.3064C18.2168 14.6782 17.7075 14.1689 17.0793 14.1689C16.4511 14.1689 15.9418 14.6782 15.9418 15.3064V16.4439C15.9418 17.0721 15.4325 17.5814 14.8043 17.5814C14.1761 17.5814 13.6668 17.0721 13.6668 16.4439V13.0314H17.0793C17.7075 13.0314 18.2168 12.5221 18.2168 11.8939C18.2168 11.2657 17.7075 10.7564 17.0793 10.7564H13.6668V9.6189C13.6668 7.73422 12.139 6.2064 10.2543 6.2064Z'
                            fill='#171717'
                          />
                        </svg>
                        <span className='text-lg font-medium md:text-2xl'>
                          {event.price}
                        </span>
                        <span className='text-sm md:text-lg text-[#808080]'>
                          /person
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}

function SimilarEvents() {
  return (
    <Suspense
      fallback={<div className='p-4 md:p-10'>Loading similar events...</div>}
    >
      <SimilarEventsContent />
    </Suspense>
  );
}

export default SimilarEvents;
