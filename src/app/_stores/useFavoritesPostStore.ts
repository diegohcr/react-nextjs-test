import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PostFavoritesState = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const useFavoritesPostStore = create<PostFavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id: number) => {
        set((state) => {
          const isFavorited = state.favorites.includes(id);
          return {
            favorites: isFavorited
              ? state.favorites.filter((favId) => favId !== id)
              : [...state.favorites, id],
          };
        });
      },
    }),
    {
      name: '@next-test-favorites-storage',
    },
  ),
);
