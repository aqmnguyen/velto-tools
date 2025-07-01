import { Divider } from '@heroui/react';
import IconComponent from '@/components/Icon';
import VirtualCardForm from '@/components/Forms/VirtualCardForm';

export const metadata = {
  title:
    'Virtual Business Card Generator - Create vCard for Yourself or Another Person | Velto Tools',
  description:
    'Free online virtual business card generator. Create a virtual business card (vCard / vcf) for yourself or another person. Download as PNG, SVG, or PDF.',
  openGraph: {
    title:
      'Virtual Business Card Generator - Create vCard for Yourself or Another Person | Velto Tools',
    description:
      'Free online virtual business card generator. Create a virtual business card (vCard / vcf) for yourself or another person. Download as PNG, SVG, or PDF.',
    type: 'website',
    url: 'https://www.velto-tools.com/vcard',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Virtual Business Card Generator - Create vCard for Yourself or Another Person',
    description:
      'Free online virtual business card generator. Create a virtual business card (vCard / vcf) for yourself or another person.',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'virtual business card generator',
    'vcard generator',
    'vcf generator',
    'vcard generator online',
    'vcf generator online',
    'vcard generator free',
    'vcf generator free',
    'vcard generator tool',
    'vcf generator tool',
    'vcard generator app',
    'vcf generator app',
    'vcard generator website',
    'vcf generator website',
    'vcard generator software',
    'vcf generator software',
  ],
};

export default function VCard() {
  return (
    <>
      <div id='vcard' className='flex w-full flex-col items-center px-8'>
        <IconComponent
          className='mb-3 text-success-500'
          icon='mdi:card-account-details-outline'
          width={56}
        />
        <p className='mb-2 text-base font-medium'>
          Create a Virtual Contact Card
        </p>
        <p className='text-center text-small text-default-500'>
          You can create and download a Virtual Contact Card (vCard / vcf) for
          yourself or another person.
        </p>
      </div>
      <Divider className='w-full bg-default-200' />
      <VirtualCardForm />
    </>
  );
}
