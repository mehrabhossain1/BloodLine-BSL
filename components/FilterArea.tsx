import { useSelectedGenderStore } from "@/hooks/useGenderStore";
import { useSelectedGroupsStore } from "@/hooks/useSelectedGroups";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export default function FilterArea() {
  const { selectedGroups, setSelectedGroups } = useSelectedGroupsStore();

  const { selectedGenders, setSelectedGenders } = useSelectedGenderStore();

  // function to reset the states above
  function resetFiltersFunction() {
    setSelectedGroups([]);
    setSelectedGenders([]);
  }

  return (
    <div className="flex gap-3 px-6 mt-3">
      {/* functional components */}
      <FilteredGenders />
      <FilteredGroups />

      {/* show the reset button only one of the state are filled */}
      {(selectedGroups.length > 0 || selectedGenders.length > 0) && (
        <Button
          onClick={resetFiltersFunction}
          variant={"ghost"}
          className="p-1 px-2"
        >
          <span>Reset</span>
          <X />
        </Button>
      )}
    </div>
  );
}

function FilteredGenders() {
  const { selectedGenders } = useSelectedGenderStore();
  //
  return (
    <>
      {selectedGenders.length > 0 && (
        <div
          key={selectedGenders.length}
          className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm"
        >
          <span className="text-gray-600">Gender</span>
          <Separator orientation="vertical" />

          {/* show the filtered genders based on what was selected */}
          <>
            {selectedGenders.map((gender, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Badge variant={"secondary"}>{gender}</Badge>
              </div>
            ))}
          </>
        </div>
      )}
    </>
  );
}

function FilteredGroups() {
  const { selectedGroups } = useSelectedGroupsStore();

  function ShowLessThanTwoItem() {
    // if the selected groups is less than two
    if (selectedGroups.length <= 2) {
      return (
        <>
          {selectedGroups.map((group, index) => (
            <div key={index} className="flex gap-2 items-center">
              <Badge variant={"secondary"}>{group}</Badge>
            </div>
          ))}
        </>
      );
    }

    return <Badge variant={"secondary"}>3 Selected</Badge>;
  }

  return (
    <>
      {selectedGroups.length > 0 && (
        <div
          key={selectedGroups.length}
          className="border-dashed border rounded-sm p-1 flex gap-2 items-center px-2 text-sm"
        >
          <span className="text-gray-600">Blood Groups</span>
          <Separator orientation="vertical" />

          {/* if the use selected less than 2 items */}
          <ShowLessThanTwoItem />
        </div>
      )}
    </>
  );
}
