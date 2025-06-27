'use client';

import jsbarcode from 'jsbarcode';
import { useEffect, useRef } from 'react';
import { BarcodeFormat } from '@/lib/types/barcode';

export default function BarcodeGenerator({
  code = '',
  format = 'code128',
}: {
  code: string;
  format: BarcodeFormat;
}) {
  const barcodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!barcodeRef.current) return;

    jsbarcode(barcodeRef.current, code, { format });
  }, [code, format]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <svg ref={barcodeRef} />
    </div>
  );
}
