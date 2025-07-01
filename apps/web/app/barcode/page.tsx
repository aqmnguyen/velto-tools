import IconComponent from '@/components/Icon';
import { Divider } from '@heroui/react';
import BarcodeForm from '@/components/Forms/BarcodeForm';

export const metadata = {
  title:
    'Barcode Generator - Create QR Codes, Code 128, EAN-13 & More | Velto Tools',
  description:
    'Free online barcode generator. Create QR codes, Code 128, EAN-13, UPC-A, and other barcode formats instantly. Download as PNG, SVG, or PDF. Perfect for inventory, retail, and business applications.',
  openGraph: {
    title:
      'Barcode Generator - Create QR Codes, Code 128, EAN-13 & More | Velto Tools',
    description:
      'Free online barcode generator. Create QR codes, Code 128, EAN-13, UPC-A, and other barcode formats instantly. Download as PNG, SVG, or PDF.',
    type: 'website',
    url: 'https://www.velto-tools.com/barcode',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barcode Generator - Create QR Codes, Code 128, EAN-13 & More',
    description:
      'Free online barcode generator. Create QR codes, Code 128, EAN-13, UPC-A, and other barcode formats instantly.',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'barcode generator',
    'QR code generator',
    'Code 128',
    'EAN-13',
    'UPC-A',
    'barcode creator',
    'free barcode tool',
    'online barcode maker',
    'inventory barcodes',
    'retail barcodes',
  ],
};

export default function BarcodePage() {
  return (
    <>
      <div id='barcode' className='flex w-full flex-col items-center px-8'>
        <IconComponent
          className='mb-3 text-success-500'
          icon='mdi:barcode-scan'
          width={56}
        />
        <p className='mb-2 text-base font-medium'>Generate a Barcode</p>
        <p className='text-center text-small text-default-500'>
          You can generate a Barcode in various formats.
        </p>
      </div>
      <Divider className='w-full bg-default-200' />

      <div className='flex w-full flex-col items-center gap-2'>
        <BarcodeForm />
      </div>
    </>
  );
}
