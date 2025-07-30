import { User as SupabaseUser } from '@supabase/supabase-js';

export type User = SupabaseUser | null;

export type UserMetadata = {
  full_name: string;
  avatar_url: string;
};
