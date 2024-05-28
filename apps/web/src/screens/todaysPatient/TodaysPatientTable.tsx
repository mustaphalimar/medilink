import { Button } from "@/components/ui/button";
import { CalendarCheck, EyeIcon, PencilIcon } from "lucide-react";
import DataTable, { TableRow } from "react-data-table-component";
import ConsultationForm from "./ConsultationForm";
import PatientExaminate from "./PatientExaminate";

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
        weekday: "long",

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
    selector: (row: TableRow) => row.status,
    sortable: true,
  },
  {
    name: "Patient Height & Weight",
    selector: (row: TableRow) =>
      `${row?.patient?.height}cm | ${row?.patient?.weight}kg`,
    sortable: true,
  },
  {
    grow: 2,
    name: "Actions",
    selector: (row: TableRow) => {
      return (
        <div className="flex items-center space-x-2">
          <ConsultationForm />

          <PatientExaminate id={row?.patientId} />
        </div>
      );
    },
  },
];

type requestTable = {
  data: any;
};
function TodaysPatientTable({ data }: requestTable) {
  return <DataTable columns={columns} data={data} responsive={true} />;
}

export default TodaysPatientTable;
