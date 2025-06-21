'use client';

import { Input } from '@heroui/react';
import { useState } from 'react';
import QRCodeGenerator from '@/components/QRCode/QRCodeGenerator';

export default function QRCodeSiteForm() {
  const [url, setUrl] = useState('https://www.google.com');

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex-1'>
          <Input
            isRequired
            placeholder='Enter URL'
            name='url'
            aria-label='URL'
            label='URL'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className='flex-1'>
          <QRCodeGenerator data={url} width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
