import { create } from 'zustand';
import { AvatarState } from '@/lib/types/avatar';

const DEFAULT_AVATAR =
  'https://nnqgrjflsafxzt35.public.blob.vercel-storage.com/avatar/avatar-LMlRtQVFkwtjwRDKgXo7XuagbmoZyt.png';

export const useAvatarStore = create<AvatarState>((set) => ({
  avatarUrl: DEFAULT_AVATAR,
  setAvatarUrl: (url: string) => set({ avatarUrl: url }),
}));
