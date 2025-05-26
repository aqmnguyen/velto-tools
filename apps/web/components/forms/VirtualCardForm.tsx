'use client';

import type { CardProps } from '@heroui/react';

import React from 'react';
import { Button, Avatar, Badge, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function Component(props: CardProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <div className='flex w-full flex-col items-center gap-4 px-8'>
      <p className='text-large'>Account Details</p>
      <div className='flex gap-4 py-4'>
        <Badge
          showOutline
          classNames={{
            badge: 'w-5 h-5',
          }}
          color='primary'
          content={
            <Button
              isIconOnly
              className='p-0 text-primary-foreground'
              radius='full'
              size='sm'
              variant='light'
            >
              <Icon icon='solar:pen-2-linear' />
            </Button>
          }
          placement='bottom-right'
          shape='circle'
        >
          <Avatar
            className='h-14 w-14'
            src='https://i.pravatar.cc/150?u=a04258114e29026708c'
          />
        </Badge>
        <div className='flex flex-col items-start justify-center'>
          <p className='font-medium'>
            {firstName} {lastName}
          </p>
          <span className='text-small text-default-500'>{jobTitle}</span>
        </div>
      </div>
      <p className='text-small text-default-400'>
        The photo will be used for your profile, and will be visible to other
        users of the platform.
      </p>
      <form className='w-full' onSubmit={handleSubmit} id='vcard-form'>
        <div className='flex w-full flex-col gap-6'>
          <div className='grid grid-cols-2 gap-6'>
            {/* First Name */}
            <Input
              isRequired
              label='First Name'
              placeholder='Enter first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* Last Name */}
            <Input
              isRequired
              label='Last Name'
              placeholder='Enter last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* Email */}
          <Input
            isRequired
            label='Email'
            placeholder='Enter email'
            type='email'
          />
          <div className='grid grid-cols-2 gap-6'>
            {/* Phone Number */}
            <Input
              isRequired
              label='Phone Number'
              placeholder='Enter phone number'
              type='number'
            />
            <Input
              isRequired
              label='Fax Number'
              placeholder='Enter fax number'
              type='number'
            />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <Input
              isRequired
              label='Company'
              placeholder='Enter company name'
            />

            <Input
              isRequired
              label='Job Title'
              placeholder='Enter job title'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>

          <Input isRequired label='Street' placeholder='Enter street' />
          <div className='grid grid-cols-2 gap-6'>
            <Input isRequired label='City' placeholder='Enter city' />
            <Input isRequired label='Zip Code' placeholder='Enter zip code' />
          </div>
          <Input isRequired label='State' placeholder='Enter state' />
          <Input isRequired label='Country' placeholder='Enter country' />

          {/* Country */}
          {/* <Autocomplete
              isRequired
              defaultItems={countries}
              label="Country"
              labelPlacement="outside"
              placeholder="Select country"
              showScrollIndicators={false}
            >
              {(item) => (
                <AutocompleteItem
                  key={item.code}
                  startContent={
                    <Avatar
                      alt="Country Flag"
                      className="h-6 w-6"
                      src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                    />
                  }
                >
                  {item.name}
                </AutocompleteItem>
              )}
            </Autocomplete> */}
        </div>

        <div className='mt-6 flex w-full justify-center gap-2'>
          <Button
            color='primary'
            type='submit'
            form='vcard-form'
            className='w-full'
          >
            Generate vCard
          </Button>
        </div>
      </form>
    </div>
  );
}
