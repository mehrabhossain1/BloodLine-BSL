import { create } from "zustand";

interface FilterStoreInterface {
  selectedGroups: string[];
  setSelectedGroups: (groups: string[]) => void;
}

export const useSelectedGroupsStore = create<FilterStoreInterface>((set) => ({
  selectedGroups: [],
  setSelectedGroups: (groups) => set({ selectedGroups: groups }),
}));
