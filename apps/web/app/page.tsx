import { Divider } from '@heroui/react';
import IconComponent from '@/components/Icon';
import CalendarForm, {
  GoogleCalendarButton,
  GenerateICSAttachmentButton,
} from '@/components/Forms/CalendarForm';

export const metadata = {
  title: 'Velto Tools - Attachment Generator',
  description: 'Create calendar invites in ICS or GCal format based on inputs.',
  openGraph: {
    title: 'Velto Tools - Attachment Generator',
    description:
      'Create calendar invites in ICS or GCal format based on inputs.',
    type: 'website',
    url: 'https://www.velto-tools.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velto Tools - Attachment Generator',
    description:
      'Create calendar invites in ICS or GCal format based on inputs.',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'calendar invite generator',
    'calendar invite generator online',
    'calendar invite generator free',
    'calendar invite generator tool',
    'calendar invite generator app',
    'calendar invite generator website',
    'calendar invite generator software',
  ],
};

export default function Home() {
  return (
    <>
      <div
        id='add-to-calendar'
        className='flex w-full flex-col items-center px-8'
      >
        <IconComponent
          className='mb-3 text-success-500'
          icon='mdi:calendar-outline'
          width={56}
        />
        <p className='mb-2 text-base font-medium'>
          Create a Calendar Invitation
        </p>
        <p className='text-center text-small text-default-500'>
          You can download an ICS file or generate a GCal link based on your
          inputs below
        </p>
      </div>
      <Divider className='w-full bg-default-200' />
      <CalendarForm id='calendar-form' />
      <Divider className='w-full bg-default-100' />
      <div className='flex flex-col items-center gap-2'>
        <p className='text-small text-default-500'>Add to calendar</p>
        <div className='flex items-center gap-2'>
          <GoogleCalendarButton />
          <GenerateICSAttachmentButton />
        </div>
      </div>
    </>
  );
}
