import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/FormatDate";
import axios from "axios";
import { ArrowUpDown, CalendarCheck, EyeIcon, Trash } from "lucide-react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
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

export const columns = (refetch: any) => [
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
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: any }) => {
      return (
        <Button
          size={"sm"}
          variant={"outline"}
          className="text-orange-400 hover:text-orange-600"
        >
          {row?.original?.status}
        </Button>
      );
    },
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: { row: any }) => {
      const navigate = useNavigate();
      const scheduleAppointment = useMutation(
        "ScheduleAppointment",
        async (id) => {
          try {
            return await axios(
              `http://localhost:4000/appointments/scheduled/${id}`,
              {
                method: "PATCH",
              }
            );
          } catch (error: any) {
            throw new Error(error);
          }
        },
        {
          onSuccess: () => {
            toast.success("Appointment has been scheduled");
            refetch();
          },
        }
      );

      const cancelAppointment = useMutation(
        "CancelAppointment",
        async (id) => {
          try {
            return await axios(`http://localhost:4000/appointments/${id}`, {
              method: "DELETE",
            });
          } catch (error: any) {
            throw new Error(error);
          }
        },
        {
          onSuccess: () => {
            toast.info("Appointment has been cancelled");
            refetch();
          },
        }
      );
      return (
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            size={"sm"}
            className="space-x-2"
            onClick={() => {
              scheduleAppointment?.mutate(row?.original?.id);
            }}
          >
            <span>Schedule</span> <CalendarCheck size={20} />
          </Button>

          <AlertDialog>
            <AlertDialogTrigger>
              <Button size={"sm"} variant={"destructive"} className="space-x-2">
                <span>Cancel</span> <Trash size={20} />
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
                    cancelAppointment?.mutate(row?.original?.id);
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            onClick={() => {
              navigate(`/patient/${row?.original.patientId}`);
            }}
            variant={"outline"}
            size={"sm"}
            className="space-x-2"
          >
            <span>Examinate</span> <EyeIcon size={20} />
          </Button>
        </div>
      );
    },
  },
];
