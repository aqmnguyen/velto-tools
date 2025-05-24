'use client';

import { DateRangePicker, Input, Select, SelectItem } from '@heroui/react';
import { parseAbsoluteToLocal } from '@internationalized/date';

export default function CalenderForm() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const timezones = Intl.supportedValuesOf('timeZone').map((timezone) => ({
    label: timezone,
    key: timezone,
  }));

  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className='flex w-full flex-col items-center gap-4 px-8'>
      <form className='flex w-full flex-col gap-4'>
        <div className='flex w-full flex-col gap-1'>
          <p className='text-small font-medium' aria-label='title'>
            Title
          </p>
          <Input
            className='w-full'
            placeholder='☕️ Coffee catchup!'
            size='sm'
            name='title'
            aria-label='title'
          />
        </div>
        <div className='flex w-full flex-col gap-1'>
          <p className='text-small font-medium' aria-label='details'>
            Details
          </p>
          <Input
            className='w-full'
            placeholder=''
            size='sm'
            name='details'
            aria-label='details'
          />
        </div>
        <div className='flex w-full flex-col gap-1'>
          <p className='text-small font-medium'>When</p>

          <div className='flex w-full flex-col gap-2'>
            <DateRangePicker
              hideTimeZone={true}
              className='w-full'
              defaultValue={{
                start: parseAbsoluteToLocal(today.toISOString()),
                end: parseAbsoluteToLocal(tomorrow.toISOString()),
              }}
              label='Date & Time'
              labelPlacement='outside'
              aria-label='date-range-picker'
            />
            <Select
              className='mt-2 w-full'
              items={timezones}
              label='Timezone'
              defaultSelectedKeys={[currentTimezone]}
            >
              {(timezone) => <SelectItem>{timezone.label}</SelectItem>}
            </Select>
          </div>
        </div>
        <div className='flex w-full flex-col gap-1'>
          <p className='text-small font-medium text-default-foreground'>
            Location
          </p>
          <Input
            className='w-full'
            placeholder='The Ned, 27 Poultry, London EC2R 8AJ'
            size='sm'
            name='location'
            aria-label='location'
          />
        </div>
      </form>
    </div>
  );
}
