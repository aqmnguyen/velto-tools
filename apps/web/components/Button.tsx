'use client';
import { Button } from '@heroui/react';

export default function ButtonComponent({
  className,
  isIconOnly,
  size,
  children,
  onPress,
}: {
  className: string;
  isIconOnly: boolean;
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <Button
      className={className}
      size={size}
      isIconOnly={isIconOnly}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
