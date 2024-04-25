import DataTable, { TableRow } from "react-data-table-component";

const columns: any = [
  {
    name: "Full Name",
    selector: (row: TableRow) => row.title,
    sortable: true,
  },
  {
    name: "Birth Year",
    selector: (row: TableRow) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

function PatientsTable() {
  return <DataTable columns={columns} data={data} />;
}

export default PatientsTable;
