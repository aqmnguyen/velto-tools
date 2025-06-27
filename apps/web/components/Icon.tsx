'use client';
import { Icon } from '@iconify/react';
import { IconProps } from '@/lib/types/icon';

export default function IconComponent({ className, icon, width }: IconProps) {
  return <Icon className={className} icon={icon} width={width} />;
}
