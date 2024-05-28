import { Button } from "@/components/ui/button";
import { CalendarCheck, EyeIcon, Trash } from "lucide-react";
import DataTable, { TableRow } from "react-data-table-component";
import { toast } from "sonner";
import PatientExaminate from "../todaysPatient/PatientExaminate";
import { useMutation } from "react-query";
import axios from "axios";
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

type requestTable = {
  data: any;
  refetch: any;
};
function RequestsTable({ data, refetch }: requestTable) {
  const columns: any = [
    {
      name: "Appointment Time",

      selector: (row: TableRow) => {
        const dateObj = new Date(row?.date);
        // Step 2: Format the date using toLocaleString
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          // second: "2-digit",
          // timeZoneName: "short", // This includes the time zone
        };

        const formattedDate = dateObj.toLocaleString("en-US", options);

        return formattedDate;
      },
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: TableRow) => {
        return (
          <Button
            size={"sm"}
            variant={"outline"}
            className="text-orange-400 hover:text-orange-600"
          >
            {row?.status}
          </Button>
        );
      },
    },

    {
      name: "Actions",
      grow: 2,

      selector: (row: TableRow) => {
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
                scheduleAppointment?.mutate(row?.id);
              }}
            >
              <span>Schedule</span> <CalendarCheck size={20} />
            </Button>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  size={"sm"}
                  variant={"destructive"}
                  className="space-x-2"
                >
                  <span>Cancel</span> <Trash size={20} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the appointment and remove it from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      cancelAppointment?.mutate(row?.id);
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <PatientExaminate id={row?.patientId} />
          </div>
        );
      },
      sortable: true,
    },
  ];

  return <DataTable columns={columns} data={data} responsive={true} striped />;
}

export default RequestsTable;
