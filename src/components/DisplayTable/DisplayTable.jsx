import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";

import { selectFilter } from "../../Redux/searchSlice";
const columns = [
  {
    header: "Planet Name",
    accessorKey: "pl_name",
  },
  {
    header: "Discovery Method",
    accessorKey: "discoverymethod",
  },
  {
    header: "Discovery Year",
    accessorKey: "disc_year",
  },
  {
    header: "Discovery Facility",
    accessorKey: "disc_facility",
  },
  {
    header: "Host Name",
    accessorKey: "hostname",
  },
];

const DisplayTable = () => {
  const filteredData = useSelector(selectFilter);
  const [sorting, setSorting] = useState([]);

  const data = useMemo(() => filteredData, []);

  const table = useReactTable({
    data,
    columns,

    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),

    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <>
      {filteredData.length !== 0 ? (
        <table className="border border-black border-collapse w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-white even:bg-gray-400">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-black border-collapse even:bg-gray-400"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {{ asc: "⬆️", desc: "⬇️" } [header.column.getIsSorted()]}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr className=" odd:bg-gray-200 border-2 ">
                {row.getVisibleCells().map((cell) => (
                  <td className="border border-black border-collapse odd:bg-gray-200">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default DisplayTable;
