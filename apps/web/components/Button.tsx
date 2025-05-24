'use client';
import { Button } from '@heroui/react';

export default function ButtonComponent({
  className,
  isIconOnly,
  size,
  children,
}: {
  className: string;
  isIconOnly: boolean;
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}) {
  return (
    <Button className={className} size={size} isIconOnly={isIconOnly}>
      {children}
    </Button>
  );
}
