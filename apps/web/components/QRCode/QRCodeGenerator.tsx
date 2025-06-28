'use client';

import { Button } from '@heroui/react';
import QRCodeStyling from 'qr-code-styling';
import { useEffect, useRef } from 'react';
import { QRCodeGeneratorProps } from '@/lib/types/qrcode';
import posthog from 'posthog-js';

export default function QRCodeGenerator({
  type,
  data = '',
  width = 300,
  height = 300,
}: QRCodeGeneratorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!containerRef.current || !data) return;

    const container = containerRef.current;

    // Clear the container first
    container.innerHTML = '';

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
    qrCodeRef.current.append(container);

    // Cleanup function
    return () => {
      container.innerHTML = '';
      qrCodeRef.current = null;
    };
  }, [data, width, height]);

  const handleDownload = () => {
    posthog.capture('qr_code_downloaded', {
      qr_type: type,
      qr_data: data,
    });
    qrCodeRef.current?.download();
  };

  return data ? (
    <div className='flex flex-col items-center justify-center'>
      <div ref={containerRef} style={{ maxWidth: '100%', height: 'auto' }} />
      <Button
        color='primary'
        className='mt-6 w-full max-w-xs'
        onPress={handleDownload}
      >
        Download
      </Button>
    </div>
  ) : null;
}
