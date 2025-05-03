'use client';

import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Suspense } from 'react'; // Add Suspense import

import { cn } from '@/lib/utils';

// Create a client component that uses useSearchParams
const TabsWithQueryContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
    queryParam?: string;
    defaultValue?: string;
  }
>(({ className, queryParam = 'tab', defaultValue, ...props }, ref) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab = searchParams.get(queryParam) || defaultValue;

  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryParam, value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <TabsPrimitive.Root
      ref={ref}
      className={className}
      defaultValue={activeTab}
      value={activeTab}
      onValueChange={handleValueChange}
      {...props}
    />
  );
});

TabsWithQueryContent.displayName = 'TabsWithQueryContent';

// Create a wrapper component that uses Suspense
const TabsWithQuery = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
    queryParam?: string;
    defaultValue?: string;
  }
>(({ ...props }, ref) => {
  return (
    <Suspense fallback={<div>Loading tabs...</div>}>
      <TabsWithQueryContent ref={ref} {...props} />
    </Suspense>
  );
});

TabsWithQuery.displayName = 'TabsWithQuery';

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex w-full border-b border-deep-light-gray-stroke',
      className
    )}
    {...props}
  />
));
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex-1 flex items-center justify-center whitespace-nowrap px-1 py-4 text-2xl ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative data-[state=active]:text-secondary-terra-cotta data-[state=inactive]:text-tertiary-night-black data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-secondary-terra-cotta data-[state=active]:after:content-[''] cursor-pointer text-center",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';

export {
  TabsWithQuery,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsWithQuery as Tabs,
};
