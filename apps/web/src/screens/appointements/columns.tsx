import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/utils/FormatDate";
import { ArrowUpDown, EyeIcon, MoreHorizontal, PencilIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { transformDate } from "./data-table";

export const columns = [
  {
    id: "name",
    accessorKey: "patient.user.name",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "date",
    accessorKey: "date",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Appointment Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }: { row: any }) => {
      return formatDate(row?.original?.date);
    },
    filter: {
      type: "text",
      transform: (value: string) => transformDate(value),
    },
  },

  {
    accessorKey: "status",

    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }: { row: any }) => {
      const navigate = useNavigate();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {row?.original?.status == "DONE" || (
              <DropdownMenuItem
                className="space-x-2"
                onClick={() => {
                  navigate(
                    `/consultation/${row?.original.patientId}/${row?.original.id}`
                  );
                }}
              >
                <span>Create Consultation</span> <PencilIcon size={20} />
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              className="space-x-2"
              onClick={() => {
                navigate(`/patient/${row?.original.patientId}`);
              }}
            >
              <span>Examinate</span> <EyeIcon size={20} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
