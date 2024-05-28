import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import DataTable, { TableRow } from "react-data-table-component";
import PatientExaminate from "../todaysPatient/PatientExaminate";

const columns: any = [
  {
    name: "Full Name",
    selector: (row: TableRow) => row?.user?.name,
    sortable: true,
  },
  {
    name: "Height",
    selector: (row: TableRow) => row?.height,
    sortable: true,
  },
  {
    name: "Actions",
    selector: (row: TableRow) => {
      return (
        <div className="flex items-center space-x-2">
          <PatientExaminate id={row?.id} />
        </div>
      );
    },
  },
];

type patientTable = {
  data: any;
};

function PatientsTable({ data }: patientTable) {
  return <DataTable columns={columns} data={data} />;
}

export default PatientsTable;
