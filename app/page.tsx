import EvenSection from '@/components/sections/Event/EvenSection';
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
    <div className=''>
      <Banner images={imageList} />
      <EvenSection />
    </div>
  );
}
