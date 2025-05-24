'use client';
import { Icon } from '@iconify/react';

export default function IconComponent({
  className,
  icon,
  width,
}: {
  className: string;
  icon: string;
  width: number;
}) {
  return <Icon className={className} icon={icon} width={width} />;
}
