'use client';

import { Input, Select, SelectItem } from '@heroui/react';
import { useState } from 'react';
import BarcodeGenerator from '@/components/Barcode/BarcodeGenerator';
import { BarcodeFormat } from '@/lib/types/barcode';

export default function BarcodeForm() {
  const [format, setFormat] = useState<BarcodeFormat>('code128');
  const [code, setCode] = useState<string>('1234567890');

  return (
    <div className='flex w-full px-8'>
      <div className='flex w-full flex-col items-center gap-4'>
        <div className='flex w-full flex-col gap-6'>
          <div className='grid grid-cols-2 gap-6'>
            <Select
              label='Format'
              placeholder='Select a format'
              aria-label='Select a format'
              defaultSelectedKeys={['code128']}
              value={format}
              onChange={(e) => setFormat(e.target.value as BarcodeFormat)}
            >
              <SelectItem key='code128'>Code 128</SelectItem>
              <SelectItem key='code39'>Code 39</SelectItem>
              <SelectItem key='ean13'>EAN-13</SelectItem>
              <SelectItem key='ean8'>EAN-8</SelectItem>
              <SelectItem key='upc_a'>UPC-A</SelectItem>
              <SelectItem key='upc_e'>UPC-E</SelectItem>
            </Select>

            <Input
              isRequired
              label='Code'
              placeholder='Enter a code'
              aria-label='Enter a code'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </div>

        <div className='mt-4 flex w-full justify-center'>
          <BarcodeGenerator code={code} format={format} />
        </div>
      </div>
    </div>
  );
}
