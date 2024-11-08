"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import useGetAllUser from "@/hooks/user_data/useGetAllUser";
import { Copy, EditIcon } from "lucide-react";

// import gettAllRoles from "@/hooks/user_data/useGetAllRole";
// import { roleList } from "@/data/roles";
// import useGetAllSTS from "@/hooks/dataQuery/useGetAllSTS";

// import useVehicleList from "@/hooks/vehicles/useVehiclesData";
// import useVehicleListForSTS from "@/hooks/vehicles/useGetVeicleForSTS";
// import { DeleteVehicleModalForSTS } from "../modals/DeleteVehicleModalForSTS";
// import { STSVehicleRelease } from "../modals/STSVehicleReleaseModal";
// import useUpcomingVehicle from "@/hooks/landFillDashboard/useUpcomingVehiclesList";
// import { LandfillVehicleEntryModal } from "../modals/LandFillVehicleEntryModal";
// import { getCookie } from "@/lib/cookieFunctions";
// import { landfillId } from "@/data/cookieNames";
import formatTimestamp from "@/lib/formatTimestamp";
import useGetAllMeals from "@/utils/getAllMealsHook";



interface MealContextType {
    data: MealDetailsTypes[];
  }

type MealDetailsTypes = {
  date: string;
  sharifLunch: string;
  sharifLunchCount: number;
  sharifDinner: string;
  sharifDinnerCount: number;
  
  zahidLunch: string;
  zahidLunchCount: number;
  zahidDinner: string;
  zahidDinnerCount: number;

  yasinLunch: string;
  yasinLunchCount: number;
  yasinDinner: string;
  yasinDinnerCount: number;

  tamjidLunch:string;
  tamjidLunchCount: number;
  tamjidDinner:string;
  tamjidDinnerCount: number;

  towhidLunch: string;
  towhidLunchCount:number;
  towhidDinner: string;
  towhidDinnerCount: number;
}


export const columns: ColumnDef<MealDetailsTypes>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {/* {row.getValue("date")} */}
        <div className="text-center font-medium">
        {formatTimestamp(row.getValue("date".toLocaleString()),'default')}
      </div>
      </div>
    ),
  },
  {
    accessorKey: "sharifDinner",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Sharif
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("sharifDinner")}
      </div>
    ),
  },
  {
    accessorKey: "zahidDinner",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Zahid
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("zahidDinner")}
      </div>
    ),
  },
  {
    accessorKey: "yasinDinner",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
           Yasin
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("yasinDinner")}
      </div>
    ),
  },
  {
    accessorKey: "tamjidDinner",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tamjid
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("tamjidDinner")}</div>
    ),
  },
  {
    accessorKey: "towhidDinner",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Towhid
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("towhidDinner")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
    //   const sts: Vehicle = row.original;

      return (
        <div>
          {/* <DeleteVehicleModalForSTS vehicleInfo={sts} />
          <STSVehicleRelease vehicleInfo={sts} /> */}
          {/* <LandfillVehicleEntryModal vehicleInfo={sts} /> */}
        </div>
      );
    },
  },
];
//function starts from here

const DinnerMealShow: React.FC<MealContextType> = ({ data }) => {
 
//   const { vehicleList, UpcomingVehicle } = useUpcomingVehicle();
const {mealsList, getMealDetails} = useGetAllMeals();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 4,
      },
    },
  });
  return (
    <>
      <div className="flex justify-center font-bold text-2xl">
        Dinner Details
      </div>
      <div className="flex items-center pb-4 gap-4">
        <Input
          placeholder="Search by Date.."
          value={
            (table.getColumn("date")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("date")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-white">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {data.length} entries
        </div>
        <div className="space-x-2 text-white ">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default DinnerMealShow;