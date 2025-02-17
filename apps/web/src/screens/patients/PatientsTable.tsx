import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import DataTable, { TableRow } from "react-data-table-component";
import PatientExaminate from "../todaysPatient/PatientExaminate";
import { useNavigate } from "react-router-dom";

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
      const navigate = useNavigate();
      return (
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => {
              navigate(`/patient/${row?.id}`);
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

type patientTable = {
  data: any;
};

function PatientsTable({ data }: patientTable) {
  return <DataTable columns={columns} data={data} />;
}

export default PatientsTable;
