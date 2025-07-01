import IconComponent from '@/components/Icon';
import { Divider } from '@heroui/react';
import BarcodeForm from '@/components/Forms/BarcodeForm';

export const metadata = {
  title: 'Velto Tools - Attachment Generator',
  description: 'Generate a Barcode in various formats.',
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
