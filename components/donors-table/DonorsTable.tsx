import {
  getSortedRowModel,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Skeleton } from "../ui/skeleton";
import { Donor } from "@/data/donors-data";
import { columns } from "./donor-columns";
import { DataTable } from "./data-table";

export type PaginationType = {
  pageIndex: number;
  pageSize: number;
};

export default function DonorTable({ donors }: { donors: Donor[] | null }) {
  const table = useReactTable({
    data: donors || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  // when the donors is leading, show the skeleton
  if (!donors) {
    return <SkeletonTable />;
  }

  // otherwise show the data
  return (
    <div className="px-6 mt-10">
      <DataTable columns={columns} table={table} />
    </div>
  );
}

function SkeletonTable() {
  return (
    <div className="space-y-4 p-9">
      <div className="border rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {[
                "Select",
                "Full Name",
                "Blood Group",
                "Gender",
                "Location",
                "Contact",
                "Last Donated",
                "Actions",
              ].map((header, idx) => (
                <th key={idx} className="p-3 text-left">
                  <Skeleton className="h-4 w-3/4" />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }).map((_, rowIdx) => (
              <tr key={rowIdx} className="border-t">
                {Array.from({ length: 8 }).map((_, colIdx) => (
                  <td key={colIdx} className="p-3">
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
