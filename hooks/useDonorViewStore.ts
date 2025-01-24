import { create } from "zustand";

export type CurrentViewOption = "grid" | "list";

type DonorViewStore = {
  currentView: CurrentViewOption;
  setCurrentView: (currentViewProp: CurrentViewOption) => void;
};

export const useDonorViewStore = create<DonorViewStore>((set) => {
  return {
    //
    currentView: "list",
    //
    setCurrentView: (currentViewProp) => {
      set({ currentView: currentViewProp });
    },
  };
});
