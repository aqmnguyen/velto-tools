'use client';

import { Button } from '@heroui/react';
import QRCodeStyling from 'qr-code-styling';
import { useEffect, useRef } from 'react';

export default function QRCodeGenerator({
  data = '',
  width = 300,
  height = 300,
}: {
  data: string;
  width: number;
  height: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!containerRef.current || !data) return;

    // Clear the container first
    containerRef.current.innerHTML = '';

    // Create new QR code instance
    qrCodeRef.current = new QRCodeStyling({
      width,
      height,
      data,
      dotsOptions: {
        color: '#000000',
      },
      backgroundOptions: {
        color: '#FFFFFF',
      },
    });

    // Append the QR code to the container
    qrCodeRef.current.append(containerRef.current);

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      qrCodeRef.current = null;
    };
  }, [data, width, height]);

  return data ? (
    <div className='items-center justify-center'>
      <div
        ref={containerRef}
        className='max-w-full h-auto mx-auto flex justify-center items-center'
      />
      <Button
        color='primary'
        className='mt-6 w-full mx-auto'
        onPress={() => qrCodeRef.current?.download()}
      >
        Download
      </Button>
    </div>
  ) : null;
}
