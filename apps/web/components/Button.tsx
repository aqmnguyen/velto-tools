'use client';
import { Button } from '@heroui/react';
import { ButtonProps } from '@/lib/types/button';

export default function ButtonComponent({
  className,
  isIconOnly,
  size,
  children,
  onPress,
}: ButtonProps) {
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
