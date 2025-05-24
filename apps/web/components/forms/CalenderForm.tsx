'use client';

import { DatePicker, Input } from '@heroui/react';
import { parseAbsoluteToLocal } from '@internationalized/date';
import type { DateValue } from '@heroui/react';

export default function CalenderForm() {
  const today = new Date();
  return (
    <div className='flex w-full flex-col items-center gap-4 px-8'>
      <div className='flex w-full flex-col gap-1'>
        <p className='text-small font-medium'>Title</p>
        <Input
          className='w-full'
          placeholder='☕️ Coffee catchup!'
          size='sm'
          name='title'
        />
      </div>
      <div className='flex w-full flex-col gap-1'>
        <p className='text-small font-medium'>Details</p>
        <Input className='w-full' placeholder='' size='sm' name='details' />
      </div>
      <div className='flex w-full flex-col gap-1'>
        <p className='text-small font-medium'>When</p>

        <DatePicker
          className='max-w-xs'
          defaultValue={
            parseAbsoluteToLocal(today.toISOString()) as unknown as DateValue
          }
          label='Zoned Date Time'
          labelPlacement='outside'
        />
        {/* Friday, December 27, 2024
                <br />
                6:30 PM - 7:00 PM (Argentina Standard Time) */}
      </div>
      <div className='flex w-full flex-col gap-1'>
        <p className='text-small font-medium text-default-foreground'>
          Location
        </p>
        {/* Location */}
      </div>
    </div>
  );
}
