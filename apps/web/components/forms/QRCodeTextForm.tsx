'use client';

import { Input } from '@heroui/react';
import { useState } from 'react';
import QRCodeGenerator from '@/components/QRCode/QRCodeGenerator';

export default function QRCodeTextForm() {
  const [text, setText] = useState('Hello, world!');

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-3'>
          <Input
            isRequired
            placeholder='Enter text'
            name='text'
            aria-label='Text'
            label='Text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='col-span-2'>
          <QRCodeGenerator data={text} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
