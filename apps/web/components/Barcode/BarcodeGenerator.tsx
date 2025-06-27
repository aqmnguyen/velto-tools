'use client';

import jsbarcode from 'jsbarcode';
import { useEffect, useRef, useState } from 'react';
import { BarcodeFormat } from '@/lib/types/barcode';

export default function BarcodeGenerator({
  code,
  format,
}: {
  code: string;
  format: BarcodeFormat;
}) {
  const barcodeRef = useRef<SVGSVGElement>(null);
  const [validCode, setValidCode] = useState<boolean>(true);

  useEffect(() => {
    if (!barcodeRef.current) return;
    console.log(code, format);
    try {
      jsbarcode(barcodeRef.current, code, {
        format,
        valid: (valid) => {
          console.log(valid);
          setValidCode(valid);
        },
      });
    } catch {
      setValidCode(false);
    }
  }, [code, format]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <svg
        ref={barcodeRef}
        className={`w-full h-full ${validCode ? 'block' : 'hidden'}`}
      />
      {(!code || !format || !validCode) && (
        <div className='flex flex-col items-center justify-center mt-2'>
          <p className='text-sm text-red-500'>
            {!code || !format ? 'Please enter a code and select a format' : ''}
          </p>
          <p className='text-sm text-red-500'>
            {!validCode && code && format
              ? `Invalid code ${code} for format ${format}`
              : ''}
          </p>
        </div>
      )}
    </div>
  );
}
