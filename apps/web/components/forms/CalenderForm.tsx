'use client';

import {
  DatePicker,
  Input,
  Autocomplete,
  AutocompleteItem,
} from '@heroui/react';
import { parseAbsoluteToLocal } from '@internationalized/date';
import { useState } from 'react';

export default function CalenderForm({ id = 'calender-form' }: { id: string }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const timezones = Intl.supportedValuesOf('timeZone').map((timezone) => ({
    label: timezone,
    key: timezone,
    description: timezone.replace(/[^a-zA-Z0-9\s]/g, ' '),
  }));

  const [startDate, setStartDate] = useState(
    parseAbsoluteToLocal(today.toISOString())
  );
  const [endDate, setEndDate] = useState(
    parseAbsoluteToLocal(tomorrow.toISOString())
  );

  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div id={id} className='flex w-full flex-col items-center gap-4 px-8'>
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
            <DatePicker
              hideTimeZone={true}
              className='w-full'
              granularity='second'
              label='Start date & time'
              value={startDate}
              onChange={(value) => value && setStartDate(value)}
            />
            <DatePicker
              hideTimeZone={true}
              className='w-full'
              granularity='second'
              label='End date & time'
              value={endDate}
              onChange={(value) => {
                if (value) {
                  setEndDate(value);
                }
              }}
              isInvalid={endDate.compare(startDate) <= 0}
              errorMessage='End date must be after start date'
            />

            <Autocomplete
              className='mt-2 w-full'
              defaultItems={timezones}
              label='Timezone'
              defaultSelectedKey={currentTimezone}
            >
              {(timezones) => (
                <AutocompleteItem key={timezones.key}>
                  {timezones.label}
                </AutocompleteItem>
              )}
            </Autocomplete>
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
