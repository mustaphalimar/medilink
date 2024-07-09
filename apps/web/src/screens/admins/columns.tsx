import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowUpDown, Trash } from "lucide-react";
import { useMutation } from "react-query";
import { deleteAdmin } from "@/api/api";
import AdminFormEdit from "./AdminFormEdit";

export const columns = (refetch: any) => [
  {
    id: "name",
    accessorKey: "user.name",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "email",
    accessorKey: "user.email",
    header: ({ column }: { column: any }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: { row: any }) => {
      const id = row?.original?.id;
      const adminDelete = useMutation(
        `deleteAdmin${id}`,
        async (id: string) => deleteAdmin(id),
        {
          onSuccess: () => {
            toast.info("Admin has been deleted");
            refetch();
          },
        }
      );
      return (
        <div className="flex items-center gap-2 flex-wrap">
          <AdminFormEdit adminData={row?.original} refetch={refetch} />

          <AlertDialog>
            <AlertDialogTrigger>
              <Button size={"sm"} variant={"destructive"} className="space-x-2">
                <span>Delete</span> <Trash size={20} />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  appointment and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    adminDelete?.mutate(id);
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
