'use client';

import { Input, Select, SelectItem } from '@heroui/react';
import { useEffect, useState } from 'react';
import QRCodeGenerator from '@/components/QRCode/QRCodeGenerator';

export default function QRCodeWifiForm() {
  const [ssid, setSsid] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [security, setSecurity] = useState<string>('WPA/WPA2');
  const [data, setData] = useState<string>('');

  useEffect(() => {
    if (security !== 'No Password') {
      if (ssid && security && password) {
        setData(`WIFI:S:${ssid};T:${security};P:${password};;`);
      } else {
        setData('');
      }
    } else {
      if (ssid) {
        setData(`WIFI:S:${ssid};;`);
      } else {
        setData('');
      }
    }
  }, [ssid, password, security]);

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-3 flex flex-col gap-6'>
          <Input
            isRequired
            label='SSID'
            name='ssid'
            placeholder='Enter SSID'
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
          />
          <Input
            isRequired
            label='Password'
            name='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={security === 'No Password'}
          />
          <Select
            isRequired
            label='Encryption'
            className='security-select'
            placeholder='Select security type'
            selectedKeys={[security]}
            onSelectionChange={(keys) =>
              setSecurity(Array.from(keys)[0] as string)
            }
          >
            <SelectItem key='WPA/WPA2'>WPA/WPA2</SelectItem>
            <SelectItem key='WPA3'>WPA3</SelectItem>
            <SelectItem key='WEP'>WEP</SelectItem>
            <SelectItem key='No Password'>No Password</SelectItem>
          </Select>
        </div>
        <div className='col-span-2'>
          <QRCodeGenerator type='wifi' data={data} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
