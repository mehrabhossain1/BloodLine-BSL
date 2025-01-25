"use client";

import useDonorDataStore from "@/hooks/useDonorDataStore";
import { useSelectedGenderStore } from "@/hooks/useGenderStore";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { GitPullRequestDraft } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

export function GenderDropDown() {
  const [open, setOpen] = React.useState(false);

  const { donors } = useDonorDataStore();

  function renderGenderNumbers(gender: string) {
    const numberMaleDonor = donors
      ? donors?.filter((donor) => donor.gender === "Male").length
      : 0;

    const numberFemaleDonor = donors ? donors.length - numberMaleDonor : 0;

    if (gender === "Male") {
      return numberMaleDonor;
    } else {
      return numberFemaleDonor;
    }
  }

  // selectedGenders array to store the selected genders
  const { selectedGenders, setSelectedGenders } = useSelectedGenderStore();

  console.log("selectedGenders", selectedGenders);

  // function to add the genders selected in the selectedGenders array
  function toggleGenders(gender: string) {
    // first, we will see the gender is already in the array, to avoid duplicate
    const isGenderIncluded = selectedGenders.includes(gender);

    // if it is the case
    if (isGenderIncluded) {
      // delete the gender by using the filter function
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      // otherwise, we will add the gender clicked on in the array
      setSelectedGenders([...selectedGenders, gender]);
    }
  }

  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="h-10">
            <GitPullRequestDraft />
            Genders
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-44 poppins" side="bottom" align="end">
          <Command className="p-1">
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No gender found.
              </CommandEmpty>

              <CommandGroup>
                {genders.map((gender) => (
                  <CommandItem
                    key={gender.value}
                    onSelect={() => toggleGenders(gender.value)}
                    className="h-9"
                  >
                    <Checkbox
                      checked={selectedGenders.includes(gender.value)}
                      className="size-4 rounded-[4px]"
                    />
                    <div
                      className={`flex items-center justify-between w-full gap-1 p-1 rounded-lg px-3 text-[14px]`}
                    >
                      <span>{gender.label}</span>
                      <span className="font-bold text-primary">
                        {renderGenderNumbers(gender.value)}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>

            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button
                onClick={() => setSelectedGenders([])}
                variant={"ghost"}
                className="text-[12px] mb-1"
              >
                Clear Filters
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
