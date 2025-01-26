import useDonorDataStore from "@/hooks/useDonorDataStore";
import { useSelectedGroupsStore } from "@/hooks/useSelectedGroups";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { GitPullRequestDraft } from "lucide-react";

const groups = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

export function GroupsDropDown() {
  const [open, setOpen] = React.useState(false);

  const { selectedGroups, setSelectedGroups } = useSelectedGroupsStore();

  const { donors } = useDonorDataStore();

  function updateSelectedGroups(group: string) {
    const isGroupInculded = selectedGroups.includes(group);

    if (isGroupInculded) {
      setSelectedGroups(selectedGroups.filter((d) => d !== group));
    } else {
      setSelectedGroups([...selectedGroups, group]);
    }
  }

  function calculateGroupsNumbers(value: string) {
    if (groups) {
      switch (value) {
        case "A+":
          return donors?.filter((donor) => donor.bloodGroup === "A+").length;

        case "A-":
          return donors?.filter((donor) => donor.bloodGroup === "A-").length;

        case "B+":
          return donors?.filter((donor) => donor.bloodGroup === "B+").length;

        case "B-":
          return donors?.filter((donor) => donor.bloodGroup === "B-").length;

        case "AB+":
          return donors?.filter((donor) => donor.bloodGroup === "AB+").length;

        case "AB-":
          return donors?.filter((donor) => donor.bloodGroup === "AB-").length;

        case "O+":
          return donors?.filter((donor) => donor.bloodGroup === "O+").length;

        case "O-":
          return donors?.filter((donor) => donor.bloodGroup === "O-").length;
      }
    }
    return 0;
  }

  return (
    <div className="flex items-center space-x-4 poppins">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"outline"} className="h-10">
            <GitPullRequestDraft />
            Blood Groups
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-0 w-44 poppins" side="bottom" align="end">
          <Command className="p-1">
            <CommandList>
              <CommandEmpty className="text-slate-500 text-sm text-center p-5">
                No blood group found.
              </CommandEmpty>

              <CommandGroup>
                {groups.map((group) => (
                  <CommandItem
                    key={group.value}
                    onSelect={() => updateSelectedGroups(group.value)}
                    className="h-9"
                  >
                    <Checkbox
                      checked={selectedGroups.includes(group.value)}
                      className="size-4 rounded-[4px]"
                    />
                    <div
                      className={`flex items-center justify-between w-full gap-1 p-1 rounded-lg px-3 text-[14px]`}
                    >
                      <span>{group.label}</span>
                      <span className="font-bold text-primary">
                        {calculateGroupsNumbers(group.value)}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>

            <div className="flex flex-col gap-2 text-[23px]">
              <Separator />
              <Button
                onClick={() => setSelectedGroups([])}
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
