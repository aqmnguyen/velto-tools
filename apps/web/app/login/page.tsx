import { GoogleAuth } from '@/utils/supabase/googleAuth';
import IconButton from '@/components/IconButton';

export const metadata = {
  title: 'Velto Tools - Login',
};

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
        {/* Logo Here */}
        <p className='text-xl font-medium'>Welcome Back</p>
        <p className='text-small text-default-500'>
          Log in to your account to continue
        </p>
      </div>
      <div className='mt-2 flex w-full max-w-sm flex-col gap-4 rounded-large px-8 py-6'>
        <div className='flex flex-col gap-2'>
          <form action={GoogleAuth}>
            <IconButton
              icon='flat-color-icons:google'
              className='w-full'
              variant='bordered'
              type='submit'
            >
              Continue with Google
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
}
