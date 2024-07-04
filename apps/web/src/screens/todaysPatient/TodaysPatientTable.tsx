import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon } from "lucide-react";
import DataTable, { TableRow } from "react-data-table-component";
import PatientExaminate from "./PatientExaminate";
import { useNavigate } from "react-router-dom";

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
      const navigate = useNavigate();
      return (
        <div className="flex items-center space-x-2">
          {/* <ConsultationForm />
           */}
          <Button
            onClick={() => {
              navigate(`/consultation/${row?.patientId}/${row?.id}`);
            }}
            size={"sm"}
            className="space-x-2 bg-blue-500 hover:bg-blue-700"
          >
            <span>Create Consultation</span> <PencilIcon size={20} />
          </Button>

          <Button
            onClick={() => {
              navigate(`/patient/${row?.patientId}`);
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

type requestTable = {
  data: any;
};
function TodaysPatientTable({ data }: requestTable) {
  return <DataTable columns={columns} data={data} responsive={true} />;
}

export default TodaysPatientTable;
