'use client';

import { HeroUIProvider } from '@heroui/react';
import { useSessionStore } from '@/lib/stores/User/userSessionStore';
import { User } from '@/lib/types/user';
import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export function Providers({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) {
  const setUser = useSessionStore((state) => state.setUser);
  const supabase = createClient();

  useEffect(() => {
    setUser(user);
  }, [user]); // Remove setUser from dependencies

  // Optional: keep Zustand in sync with Supabase auth state changes
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return <HeroUIProvider>{children}</HeroUIProvider>;
}
