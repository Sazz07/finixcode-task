import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] p-4 text-center'>
      <h1 className='mb-4 text-4xl font-bold text-tertiary-night-black'>
        404 - Page Not Found
      </h1>
      <p className='mb-8 text-lg text-gray-body'>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href='/'
        className='px-6 py-3 font-medium rounded-full transition-colors bg-primary-jithbo hover:bg-secondary-pure-green'
      >
        Return to Home
      </Link>
    </div>
  );
}
