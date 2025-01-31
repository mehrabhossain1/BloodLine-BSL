import { Donor } from "@/data/donors-data";

import { useState } from "react";
import DonorCard from "./DonorCard";

export type UpdateDonor = Donor & { donorIndex: number };

export default function DonorCardArea({ donors }: { donors: Donor[] | null }) {
  const [updatedDonors] = useState<UpdateDonor[]>(() => {
    if (donors) {
      return donors.map((donor, index) => ({
        ...donor,
        donorIndex: index,
      }));
    }

    return [];
  });

  if (!donors) {
    return <p>Loading...</p>;
  }

  return (
    <div className="px-6 pb-5">
      <div className="grid grid-cols-4 mt-11 mb-8 gap-4">
        {updatedDonors.map((singleDonor, index) => (
          <DonorCard key={index} singleDonor={singleDonor} />
        ))}
      </div>
    </div>
  );
}
