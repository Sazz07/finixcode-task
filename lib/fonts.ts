import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/satoshi/Satoshi-Light.otf',
      weight: '300',
      style: 'light',
    },

    {
      path: '../public/fonts/satoshi/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-Bold.otf',
      weight: '800',
      style: 'bold',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-BlackItalic.otf',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});
