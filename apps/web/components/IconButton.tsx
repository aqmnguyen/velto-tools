'use client';

import { Icon } from '@iconify/react';
import { Button } from '@heroui/react';

export default function IconButton({
  icon,
  className,
  variant,
  type,
  children,
}: {
  icon: string;
  className: string;
  variant:
    | 'flat'
    | 'solid'
    | 'bordered'
    | 'light'
    | 'faded'
    | 'shadow'
    | 'ghost';
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}) {
  return (
    <Button
      startContent={<Icon icon={icon} width={24} />}
      variant={variant}
      className={className}
      type={type}
    >
      {children}
    </Button>
  );
}
