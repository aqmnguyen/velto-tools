import { Divider } from '@heroui/react';
import IconComponent from '@/components/Icon';
import QRCodeTabs from '@/components/QRCode/QRCodeTabs';

export const metadata = {
  title:
    'QR Code Generator - Create QR Codes for URLs, Wifi Networks & More | Velto Tools',
  description:
    'Free online QR code generator. Create QR codes for URLs, Wifi networks, and more. Download as PNG, SVG, or PDF. Perfect for inventory, retail, and business applications.',
  openGraph: {
    title:
      'QR Code Generator - Create QR Codes for URLs, Wifi Networks & More | Velto Tools',
    description:
      'Free online QR code generator. Create QR codes for URLs, Wifi networks, and more. Download as PNG, SVG, or PDF.',
    type: 'website',
    url: 'https://www.velto-tools.com/qrcode',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Code Generator - Create QR Codes for URLs, Wifi Networks & More',
    description:
      'Free online QR code generator. Create QR codes for URLs, Wifi networks, and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'QR code generator',
    'QR code creator',
    'QR code reader',
    'QR code scanner',
    'QR code generator online',
    'QR code generator free',
    'QR code generator tool',
    'QR code generator app',
    'QR code generator website',
    'QR code generator software',
    'QR code generator online free',
    'QR code generator online tool',
    'QR code generator online app',
    'QR code generator online website',
    'QR code generator online software',
  ],
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
