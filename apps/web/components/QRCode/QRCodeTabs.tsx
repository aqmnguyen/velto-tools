'use client';

import { Tab, Tabs, Card, CardBody } from '@heroui/react';
import IconComponent from '@/components/Icon';
import QRCodeSiteForm from '@/components/forms/QRCodeSiteForm';

export default function QRCodeTabs() {
  return (
    <>
      <Tabs
        classNames={{
          base: 'w-full',
          tabList: 'mx-4 mt-6 text-medium w-full justify-center',
          tabContent: 'text-small',
        }}
        size='lg'
      >
        <Tab
          key='website-qr-code'
          textValue='Website URL'
          title={
            <div className='flex items-center gap-1.5'>
              <IconComponent className='mb-0' icon='mdi:web-asset' width={20} />
              <p>Website URL</p>
            </div>
          }
        >
          <Card className='w-full p-2 shadow-none rounded-none outline-none'>
            <CardBody>
              <QRCodeSiteForm />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key='static-text-qr-code'
          textValue='Static Text'
          title={
            <div className='flex items-center gap-1.5'>
              <IconComponent
                className='mb-0'
                icon='mdi:text-recognition'
                width={20}
              />
              <p>Static Text</p>
            </div>
          }
        >
          <Card className='w-full p-2 shadow-none rounded-none outline-none'>
            <CardBody>
              <div className='max-w-xl p-2'>Static Text</div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key='wifi-qr-code'
          textValue='Wifi Network'
          title={
            <div className='flex items-center gap-1.5'>
              <IconComponent className='mb-0' icon='mdi:wifi-cog' width={20} />
              <p>Wifi Network</p>
            </div>
          }
        >
          <Card className='w-full p-2 shadow-none rounded-none outline-none'>
            <CardBody>
              <div className='max-w-xl p-2'>Wifi Network</div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  );
}
