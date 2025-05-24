'use client';

import {
  DatePicker,
  Input,
  Autocomplete,
  AutocompleteItem,
  Button,
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { parseDateTime } from '@internationalized/date';
import { useState } from 'react';
import dayjs from 'dayjs';

export default function CalenderForm({
  id = 'calender-form',
}: {
  id?: string;
}) {
  const timezones = Intl.supportedValuesOf('timeZone').map((timezone) => ({
    label: timezone,
    key: timezone,
    description: timezone.replace(/[^a-zA-Z0-9\s]/g, ' '),
  }));

  const [startDate, setStartDate] = useState(
    parseDateTime(dayjs().format('YYYY-MM-DDTHH:mm:ss'))
  );
  const [endDate, setEndDate] = useState(
    parseDateTime(dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ss'))
  );
  const [isEndDateInvalid, setIsEndDateInvalid] = useState(false);

  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className='flex w-full flex-col items-center gap-4 px-8'>
      <form id={id} className='flex w-full flex-col gap-4'>
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
              // hideTimeZone={true}
              className='w-full'
              granularity='second'
              label='Start date & time'
              value={startDate}
              name='startDate'
              onChange={(value) => value && setStartDate(value)}
            />
            <DatePicker
              // hideTimeZone={true}
              className='w-full'
              granularity='second'
              label='End date & time'
              value={endDate}
              name='endDate'
              onChange={(value) => {
                if (!value) return;
                if (value.compare(startDate) <= 0) {
                  setIsEndDateInvalid(true);
                } else {
                  setIsEndDateInvalid(false);
                  setEndDate(value);
                }
                return;
              }}
              isInvalid={isEndDateInvalid}
              errorMessage='End date must be after start date'
            />

            <Autocomplete
              className='mt-2 w-full'
              defaultItems={timezones}
              label='Timezone'
              defaultSelectedKey={currentTimezone}
              name='timezone'
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

/**
 * Generates a Google Calendar link from the form data
 * @param id - The id of the form
 * @returns The Google Calendar link
 * Sample output:
 * https://calendar.google.com/calendar/u/0/r/eventedit?text=Coffee+Catchup&dates=20250524T202412/20250524T222412&details=Just+a+general+chin+wag&location=The+Ned,+27+Poultry,+London+EC2R+8AJ&ctz=Europe/London
 */
export function GenerateGoogleCalendarLink(id: string): string | void {
  const form = document.getElementById(id);
  if (!form || !(form instanceof HTMLFormElement)) {
    console.log(`No valid form found with id ${id}`);
    return;
  }
  const formData = new FormData(form);

  const title = formData.get('title') || 'New Event';
  const details = formData.get('details') || '';
  const location = formData.get('location') || '';
  const startDate = formData.get('startDate');
  const endDate = formData.get('endDate');
  const timezone =
    formData.get('timezone') ||
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (!startDate || !endDate) {
    console.log('Start date and end date are required');
    return;
  }

  // Convert the dates to the format Google Calendar expects (YYYYMMDDTHHmmssZ)
  const formatDateForGoogle = (date: string) => {
    return dayjs(date).format('YYYYMMDDTHHmmss');
  };

  const googleStartDate = formatDateForGoogle(startDate.toString());
  const googleEndDate = formatDateForGoogle(endDate.toString());

  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title.toString(),
    dates: `${googleStartDate}/${googleEndDate}`,
    details: details.toString(),
    location: location.toString(),
    ctz: timezone.toString(),
  });

  const calendarUrl = `${baseUrl}?${params.toString()}`;
  window.open(calendarUrl, '_blank');
  return calendarUrl;
}

export function GoogleCalendarButton() {
  return (
    <Button
      className='bg-default-100'
      isIconOnly={true}
      size='sm'
      onPress={() => GenerateGoogleCalendarLink('calender-form')}
    >
      <Icon className='text-default-600' icon='mdi:google' width={16} />
    </Button>
  );
}
