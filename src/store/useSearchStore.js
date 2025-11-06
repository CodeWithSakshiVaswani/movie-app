import { create } from "zustand";

export const useSearchStore = create((set) => ({
    searchQuery: "",
    selectedGenre: "action",
    setSearchQuery: (query) => set({ searchQuery: query }),
    setSelectedGenre: (genre) => set({ selectedGenre: genre }),
}));
