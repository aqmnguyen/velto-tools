import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function GoogleAuth() {
  'use server';
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  if (data.url) {
    redirect(data.url);
  }

  if (error) {
    console.log(error);
  }
}
