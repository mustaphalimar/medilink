import DataTable, { TableRow } from "react-data-table-component";

const columns: any = [
  {
    name: "Email",
    selector: (row: TableRow) => row.title,
    sortable: true,
  },
  {
    name: "Password",
    selector: (row: TableRow) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "janedoe@text.com",
    year: "something",
  },
  {
    id: 2,
    title: "johnsnow@now.com",
    year: "something",
  },
];

function RequestsTable() {
  return <DataTable columns={columns} data={data} />;
}

export default RequestsTable;
