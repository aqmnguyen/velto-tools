import { Divider } from '@heroui/react';
import IconComponent from '@/components/Icon';
import QRCodeTabs from '@/components/QRCode/QRCodeTabs';

export const metadata = {
  title: 'Velto Tools - Attachment Generator',
  description: 'Generate a QR code for URLs, Wifi networks, and more.',
};

export default function QRCode() {
  return (
    <>
      <div id='qrcode' className='flex w-full flex-col items-center px-8'>
        <IconComponent
          className='mb-3 text-success-500'
          icon='mdi:qrcode-scan'
          width={56}
        />
        <p className='mb-2 text-base font-medium'>Generate a QR Code</p>
        <p className='text-center text-small text-default-500'>
          You can generate a QR code for URLs, Wifi networks, and more.
        </p>
      </div>
      <Divider className='w-full bg-default-200' />

      <div className='flex w-full flex-col items-center gap-2'>
        <div className='w-full items-center gap-2'>
          <QRCodeTabs />
        </div>
      </div>
    </>
  );
}
