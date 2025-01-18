"use client";

import { Syringe, Plus } from "lucide-react";

import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import SearchInput from "./search-input";

const Navbar = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900 border-b" : "bg-white";

  return (
    <div
      className={`relative w-full h-[94px] ${bgColor} overflow-hidden flex justify-between items-center px-6`}
    >
      <header className="flex items-center gap-2 left-10 top-8">
        <div className="size-11 rounded-lg bg-red-500 flex items-center justify-center">
          <Syringe className="text-white text-xl" />
        </div>

        <h1 className="font-semibold text-2xl font-poppins">
          BloodLine<span className="font-normal"> - BSL</span>
        </h1>
      </header>

      <SearchInput />

      <div className="flex items-center gap-3">
        <ModeToggle />

        <Button className="h-10">
          <Plus className="text-lg" />
          <span>New Donor</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
