"use client";

import { Button } from "../ui/button";

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { BiFirstPage, BiLastPage } from "react-icons/bi";

import { useTheme } from "next-themes";
import PaginationSelection from "./PaginationSelection";

export default function PaginationArea() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black border-t" : "bg-white";

  return (
    <div
      className={`relative border w-full h-[84px] overflow-hidden flex justify-between items-center px-6 ${bgColor} poppins`}
    >
      <PaginationSelection />

      <div className="flex gap-6 items-center">
        <span className="text-sm text-gray-500">Page 1 to 3</span>

        <div className="flex items-center justify-end space-x-2">
          {/* first page btn */}
          <Button variant={"outline"} className="size-9 w-12" size="sm">
            <BiFirstPage />
          </Button>

          {/* previous page btn */}
          <Button variant="outline" className="size-9 w-12" size="sm">
            <GrFormPrevious />
          </Button>

          {/* next page btn */}
          <Button variant="outline" className="size-9 w-12" size="sm">
            <GrFormNext />
          </Button>

          {/* last page btn */}
          <Button variant="outline" className="size-9 w-12" size="sm">
            <BiLastPage />
          </Button>
        </div>
      </div>
    </div>
  );
}
