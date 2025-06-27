import { Divider } from '@heroui/react';
import IconComponent from '@/components/Icon';
import CalenderForm, {
  GoogleCalendarButton,
  GenerateICSAttachmentButton,
} from '@/components/Forms/CalenderForm';

export const metadata = {
  title: 'Velto Tools - Attachment Generator',
  description: 'Create calender invites in ICS or GCal format based on inputs.',
};

export default function Home() {
  return (
    <>
      <div className='flex w-full flex-col items-center px-8'>
        <IconComponent
          className='mb-3 text-success-500'
          icon='mdi:calendar-outline'
          width={56}
        />
        <p className='mb-2 text-base font-medium'>
          Create a Calender Invitation
        </p>
        <p className='text-center text-small text-default-500'>
          You can download an ICS file or generate a GCal link based on your
          inputs below
        </p>
      </div>
      <Divider className='w-full bg-default-200' />
      <CalenderForm id='calender-form' />
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
