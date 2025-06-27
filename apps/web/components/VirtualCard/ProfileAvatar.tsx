'use client';

import { Avatar, Badge, Button } from '@heroui/react';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { uploadImage } from '@/actions/uploadImage';
import { useAvatarStore } from '@/lib/stores/VirtualCard/useAvatarStore';

export default function ProfileAvatar() {
  const { avatarUrl, setAvatarUrl } = useAvatarStore();
  const [avatarImageUploading, setAvatarImageUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validImageDimensions = async (file: File) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    URL.revokeObjectURL(img.src);
    if (img.width > 600 || img.height > 600) {
      return false;
    }

    if (img.width !== img.height) {
      return false;
    }

    return true;
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.size > 1024 * 1024) {
      alert('File size exceeds 1MB');
      event.target.value = '';
      return;
    }
    const isValid = await validImageDimensions(file);
    if (!isValid) {
      alert('Images must be a square and cannot exceed 600x600px');
      event.target.value = '';
      return;
    }

    setAvatarImageUploading(true);
    const imageUrl = await uploadImage('avatar', file);
    setAvatarImageUploading(false);
    if (!imageUrl) {
      alert('Failed to upload image');
      event.target.value = '';
      return;
    }

    setAvatarUrl(imageUrl);
  };

  const buttonClass = avatarImageUploading ? 'hidden' : 'w-5 h-5';

  return (
    <div className='flex gap-4 py-4'>
      <Badge
        showOutline
        classNames={{
          badge: buttonClass,
        }}
        color='primary'
        content={
          <Button
            isIconOnly
            className='p-0 text-primary-foreground'
            radius='full'
            size='sm'
            variant='light'
            onPress={handleAvatarClick}
          >
            <Icon icon='solar:pen-2-linear' />
          </Button>
        }
        placement='bottom-right'
        shape='circle'
      >
        <Avatar className='h-14 w-14' src={avatarUrl} />
      </Badge>
      <input
        type='file'
        ref={fileInputRef}
        onChange={handleFileChange}
        accept='image/*'
        className='hidden'
        name='avatar'
        data-default-url='https://nnqgrjflsafxzt35.public.blob.vercel-storage.com/avatar/avatar-LMlRtQVFkwtjwRDKgXo7XuagbmoZyt.png'
      />
    </div>
  );
}
