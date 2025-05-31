'use client';

import React from 'react';
import { Button, Input } from '@heroui/react';
import { useState } from 'react';
import ProfileAvatar from '@/components/VirtualCard/ProfileAvatar';

export default function VirtualCardForm() {
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
    <div className='flex w-full px-8'>
      <form
        className='flex w-full flex-col items-center gap-4'
        onSubmit={handleSubmit}
        id='vcard-form'
      >
        <ProfileAvatar />

        <div className='flex'>
          <div className='flex flex-col items-start justify-center'>
            <p className='font-medium'>
              {firstName} {lastName}
            </p>
            <span className='text-small text-default-500'>{jobTitle}</span>
          </div>
        </div>

        <p className='text-small text-default-400'>
          The photo will be used for your virtual card and will be visible to
          others.
        </p>

        <div className='flex w-full flex-col gap-6'>
          <div className='grid grid-cols-2 gap-6'>
            {/* First Name */}
            <Input
              isRequired
              label='First Name'
              placeholder='Enter first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              name='firstName'
            />
            {/* Last Name */}
            <Input
              isRequired
              label='Last Name'
              placeholder='Enter last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              name='lastName'
            />
          </div>
          {/* Email */}
          <Input
            label='Email'
            placeholder='Enter email'
            type='email'
            name='email'
          />
          <div className='grid grid-cols-2 gap-6'>
            {/* Phone Number */}
            <Input
              isRequired
              label='Phone Number'
              placeholder='Enter phone number'
              type='number'
              name='phoneNumber'
            />
            <Input
              label='Fax Number'
              placeholder='Enter fax number'
              type='number'
              name='faxNumber'
            />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <Input
              label='Company'
              placeholder='Enter company name'
              name='company'
            />

            <Input
              label='Job Title'
              placeholder='Enter job title'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              name='jobTitle'
            />
          </div>

          <Input label='Street' placeholder='Enter street' name='street' />
          <div className='grid grid-cols-2 gap-6'>
            <Input label='City' placeholder='Enter city' name='city' />
            <Input
              label='Zip Code'
              placeholder='Enter zip code'
              name='zipCode'
            />
          </div>
          <Input label='State' placeholder='Enter state' name='state' />
          <Input label='Country' placeholder='Enter country' name='country' />
        </div>

        <div className='mt-2 flex w-full justify-center gap-2'>
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
