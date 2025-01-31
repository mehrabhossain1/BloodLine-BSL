"use client";

import {
  ColumnDef,
  flexRender,
  Table as ReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Donor } from "@/data/donors-data";
import { useTheme } from "next-themes";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  table: ReactTable<Donor>;
}

export function DataTable<TData extends Donor, TValue>({
  columns,
  table,
}: DataTableProps<TData, TValue>) {
  //
  const { theme } = useTheme();

  // function to handle the change of the colors in light and dark mode
  function darkColorSwitcher(i: number) {
    // if theme is light
    if (theme === "light") {
      // check if the index is even or odd
      if (i % 2 === 0) {
        // if it is odd
        return "bg-white hover:bg-gray-100";
      } else {
        // if it is even
        return "bg-gray-50 hover:bg-gray-100";
      }
    } else {
      // otherwise set the bg as transparent
      return "bg-transparent";
    }
  }

  return (
    <div className="rounded-md border poppins">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="py-3" key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="py-3">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, i) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className={`group border-none transition-colors py-4 ${darkColorSwitcher(
                  i
                )}`}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
