'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export function ThemeDebug() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Only show if debugSystemTheme query param is true
  const shouldShow = searchParams.get('debugSystemTheme') === 'true';
  if (!shouldShow) return null;

  return (
    <div className='fixed top-4 right-4 bg-black text-white p-2 text-xs z-50'>
      <div>Theme: {theme}</div>
      <div>System: {systemTheme}</div>
      <div>Resolved: {resolvedTheme}</div>
      <div>
        HTML class:{' '}
        {typeof window !== 'undefined'
          ? document.documentElement.className
          : 'N/A'}
      </div>
    </div>
  );
}
