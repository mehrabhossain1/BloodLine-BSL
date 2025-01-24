import { create } from "zustand";
import { donors } from "@/data/donors-data";
import { Donor } from "@/data/donors-data";

interface DonorDataStore {
  donors: Donor[] | null;
  setDonors: (donorsProp: Donor[] | null) => void;
  fetchDonors: () => Promise<void>;
  addDonor: (newDonor: Donor) => Promise<void>;
}

const useDonorDataStore = create<DonorDataStore>((set, get) => ({
  donors: null,
  setDonors: (donorsProp) => set({ donors: donorsProp }),
  fetchDonors: async () => {
    try {
      const data = await new Promise<Donor[]>((resolve) => {
        setTimeout(() => {
          resolve(donors);
        }, 690);
      });

      set({ donors: data });
    } catch (error) {
      console.error("Failed to fetch donors", error);
    }
  },
  addDonor: async (newDonor) => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          const currentDonors = get().donors || [];
          const updateDonors = [...currentDonors, newDonor];
          set({ donors: updateDonors });
          resolve();
        }, 450);
      });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useDonorDataStore;
