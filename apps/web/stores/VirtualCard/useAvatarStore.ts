import { create } from 'zustand';

interface AvatarState {
  avatarUrl: string;
  setAvatarUrl: (url: string) => void;
}

const DEFAULT_AVATAR =
  'https://nnqgrjflsafxzt35.public.blob.vercel-storage.com/avatar/avatar-LMlRtQVFkwtjwRDKgXo7XuagbmoZyt.png';

export const useAvatarStore = create<AvatarState>((set) => ({
  avatarUrl: DEFAULT_AVATAR,
  setAvatarUrl: (url: string) => set({ avatarUrl: url }),
}));
