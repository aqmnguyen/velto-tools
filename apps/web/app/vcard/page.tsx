import styles from '@/styles/page.module.css';
import { Divider } from '@heroui/react';
import IconComponent from '@/components/Icon';
import VirtualCardForm from '@/components/forms/VirtualCardForm';

export const metadata = {
  title: 'Velto Tools - Attachment Generator',
  description:
    'Create a virtual business card (vcard / vcf) for yourself or another person.',
};

export default function VCard() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className='flex w-[550px] flex-col items-center gap-5 rounded-large bg-default-50 py-8 shadow-small'>
          <div className='flex w-full flex-col items-center px-8'>
            <IconComponent
              className='mb-3 text-success-500'
              icon='mdi:card-account-details-outline'
              width={56}
            />
            <p className='mb-2 text-base font-medium'>
              Create a Virtual Contact Card
            </p>
            <p className='text-center text-small text-default-500'>
              You can create and download a Virtual Contact Card (vCard / vcf)
              for yourself or another person.
            </p>
          </div>
          <Divider className='w-full bg-default-200' />
          <VirtualCardForm />
        </div>
      </main>
    </div>
  );
}
