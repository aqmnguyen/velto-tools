import { create } from 'zustand';
import { User } from '@/lib/types/user';

type SessionState = {
  user: User | null;
  setUser: (user: User) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
