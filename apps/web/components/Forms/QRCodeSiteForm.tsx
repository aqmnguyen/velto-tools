'use client';

import { useState, ChangeEvent } from 'react';
import { Input } from '@heroui/react';
import QRCodeGenerator from '@/components/QRCode/QRCodeGenerator';

export default function QRCodeSiteForm() {
  const [url, setUrl] = useState<string>('https://www.google.com');

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUrl(e.target.value);
  };

  return (
    <div id='qr-code-site-form' className='flex w-full flex-col gap-4'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
        <div className='col-span-1 md:col-span-3'>
          <Input
            isRequired
            placeholder='Enter URL'
            name='url'
            aria-label='URL'
            label='URL'
            value={url}
            onChange={handleUrlChange}
          />
        </div>
        <div className='col-span-1 md:col-span-2 flex justify-center'>
          <QRCodeGenerator type='website' data={url} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
