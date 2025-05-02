import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});
