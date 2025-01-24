import {
  CurrentViewOption,
  useDonorViewStore,
} from "@/hooks/useDonorViewStore";
import { List, LayoutGrid } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function SummaryAndButtonsArea() {
  return (
    <div className="poppins w-full items-center mt-10 flex justify-between px-6">
      {/* Total Donors */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">Donors List</span>
          {/* This is for handling the selection of the items in the table */}
        </div>
      </div>

      {/* Status section */}
      <div className="flex items-center gap-4">
        <IconToggle />

        {/* Status badge */}

        {/* <GenderDropDown /> */}
      </div>
    </div>
  );
}

function IconToggle() {
  const { currentView, setCurrentView } = useDonorViewStore();

  const handleToggle = (value: CurrentViewOption) => {
    // prevent the value to be empty, and unselect the toggle
    if (value.trim() === "") return;
    //
    setCurrentView(value);
  };

  return (
    <ToggleGroup
      type="single"
      value={currentView}
      onValueChange={handleToggle}
      className="flex gap-2"
    >
      <ToggleGroupItem value="list">
        <List
          className={`${
            currentView === "list" ? "text-primary" : "text-gray-500"
          }`}
        />
      </ToggleGroupItem>

      <ToggleGroupItem value="grid" aria-label="Toggle grid">
        <LayoutGrid
          className={`${
            currentView === "grid" ? "text-primary" : "text-gray-500"
          }`}
        />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default SummaryAndButtonsArea;
