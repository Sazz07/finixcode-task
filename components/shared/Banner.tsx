'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

type BannerProps = {
  images: string[];
};

const Banner = ({ images }: BannerProps) => {
  const mainImages = images.slice(0, 3);
  const remainingCount = images.length - mainImages.length;

  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
      {/* Carousel on the left */}
      <div className='overflow-hidden relative h-[420px] rounded-xl sm:col-span-2'>
        <Swiper
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
            bulletClass: 'swiper-pagination-bullet !bg-white/50',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className='overflow-hidden w-full h-full rounded-xl'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className='object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right stacked images */}
      <div className='flex flex-col gap-3 h-[420px]'>
        <div className='overflow-hidden relative flex-1 w-full rounded-xl'>
          <Image
            src={images[1] || '/placeholder.jpg'}
            alt='Side Image 1'
            fill
            className='object-cover object-center'
          />
        </div>
        <div className='overflow-hidden relative flex-1 w-full rounded-xl'>
          <Image
            src={images[2] || '/placeholder.jpg'}
            alt='Side Image 2'
            fill
            className='object-cover'
          />
          {remainingCount > 0 && (
            <div className='flex absolute inset-0 justify-center items-center text-3xl font-medium text-white bg-black/40'>
              +{remainingCount} photos
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
