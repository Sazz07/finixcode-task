import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type LogoProps = {
  imgClassName?: string;
  href?: string;
};

export default function Logo({ imgClassName, href }: LogoProps) {
  const logoContent = (
    <div className='flex justify-center items-center'>
      <Image
        src={'/logo.svg'}
        alt='logo'
        width={25}
        height={34}
        className={cn(imgClassName)}
      />
    </div>
  );

  if (href) {
    return <Link href={href}>{logoContent}</Link>;
  }

  return logoContent;
}
