"use client";

import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

import { PersonStanding } from "lucide-react";

import { CheckedState } from "@radix-ui/react-checkbox";
import { Donor } from "@/data/donors-data";

export const columns: ColumnDef<Donor>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="pl-4">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value: CheckedState) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="pl-4">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    header: "Full Name",
    accessorKey: "fullName",

    cell: ({ row }) => {
      // access to the name row
      const fullName = row.original.fullName;
      // access to the gender
      const gender = row.original.gender;
      // based on the gender store the icon
      const genderIcon =
        gender === "Male" ? (
          <PersonStanding className="text-lg text-primary" />
        ) : (
          <PersonStanding className="text-lg text-secondary" />
        );

      //
      return (
        <div className="flex items-center gap-3">
          {/* icon box */}
          <div className="size-7 rounded-sm bg-primary/25 flex items-center justify-center">
            {genderIcon}
          </div>
          <span>{fullName}</span>
        </div>
      );
    },
  },

  {
    header: "Blood Group",
    accessorKey: "bloodGroup",

    cell: ({ row }) => (
      <Badge className="bg-primary/15 text-primary font-medium hover:text-white shadow-none">
        {row.getValue("bloodGroup")}
      </Badge>
    ),
  },

  {
    header: "Gender",
    accessorKey: "gender",
  },

  {
    header: "Location",
    accessorKey: "location",
  },

  {
    header: "Contact",
    accessorKey: "contact",
  },

  {
    header: "Last Donated",
    accessorKey: "lastDonated",
  },

  {
    accessorKey: "actions",
    header: "",

    id: "actions",
  },
];
