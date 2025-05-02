import Banner from '@/components/shared/Banner';

const imageList = [
  '/slide1.jpg',
  '/slide1.jpg',
  '/slide1.jpg',
  '/slide1.jpg',
  '/slide1.jpg',
];

export default function Home() {
  return (
    <div className='text-primary-jithbo'>
      <Banner images={imageList} />
    </div>
  );
}
