import { Button } from "@/components/ui/button";
import { CalendarCheck, EyeIcon, Trash } from "lucide-react";
import DataTable, { TableRow } from "react-data-table-component";
import { toast } from "sonner";
import PatientExaminate from "../todaysPatient/PatientExaminate";

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
      return (
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            size={"sm"}
            className="space-x-2"
            onClick={() => toast.success("Appointment has been scheduled")}
          >
            <span>Schedule</span> <CalendarCheck size={20} />
          </Button>

          <Button
            size={"sm"}
            variant={"destructive"}
            className="space-x-2"
            onClick={() => toast.info("Appointment has been cancelled")}
          >
            <span>Cancel</span> <Trash size={20} />
          </Button>

          <PatientExaminate />
        </div>
      );
    },
    sortable: true,
  },
];

type requestTable = {
  data: any;
};
function RequestsTable({ data }: requestTable) {
  return <DataTable columns={columns} data={data} responsive={true} />;
}

export default RequestsTable;
