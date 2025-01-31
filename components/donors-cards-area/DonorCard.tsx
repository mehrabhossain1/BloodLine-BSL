import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { UpdateDonor } from "./DonorsCardArea";

export default function DonorCard({
  singleDonor,
}: {
  singleDonor: UpdateDonor;
}) {
  console.log("singleDonor", singleDonor);
  // function to render the gender
  function renderGender(gender: "Female" | "Male") {
    if (gender === "Male") {
      return <FaMale className="text-xl text-primary" />;
    } else {
      return <FaFemale className="text-xl text-primary" />;
    }
  }

  return (
    <Card className={`max-w-xs rounded-lg p-6 shadow-none poppins`}>
      <div className="flex gap-4 justify-between items-start">
        <div className="flex items-center gap-4">
          {/* placeholder circle instead of image */}
          <div className="h-11 w-11 rounded-full bg-primary/15 flex-shrink-0 flex items-center justify-center">
            {renderGender(singleDonor.gender)}
          </div>

          <div className="flex-1">
            <p className="text-lg font-semibold hover:text-primary cursor-pointer">
              {singleDonor.fullName}
            </p>

            <Badge className="text-[11px] font-normal bg-primary/20 shadow-none text-primary hover:bg-primary/20 select-none">
              {singleDonor.bloodGroup}
            </Badge>
          </div>
        </div>
      </div>

      <ul className="text-sm text-gray-600 mt-7 flex flex-col gap-3">
        <li className="relative pl-5 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2">
          <span className="font-semibold">Contact : </span>
          <span>{singleDonor.contact}</span>
        </li>
        <li className="relative pl-5 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2">
          <span className="font-semibold">Last Donated : </span>
          <span>{singleDonor.lastDonated}</span>
        </li>
      </ul>
    </Card>
  );
}
