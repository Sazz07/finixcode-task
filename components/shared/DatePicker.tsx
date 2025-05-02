import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';

const DatePicker = () => {
  const [date, setDate] = useState<Date>();
  return (
    <div className='relative w-full md:w-64'>
      <Popover>
        <PopoverTrigger
          asChild
          className='pr-1.5 pl-3 cursor-pointer md:shadow-md'
        >
          <Button
            variant='outline'
            className={cn(
              'w-full py-6 justify-between rounded-full',
              !date && 'text-muted-foreground'
            )}
          >
            {date ? format(date, 'PPP') : 'Select date'}
            <div className='flex items-center justify-center rounded-full size-10 bg-primary-jithbo'>
              <CalendarIcon className='text-black size-[21px]' />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
