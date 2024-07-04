import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AdminsTable from "./AdminsTable";
import AdminForm from "./AdminForm";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { data } from "./data";

const AdminsScreen = () => {
  return (
    <div>
      <Heading title="Admins " description="Manage your admins" />
      <div className="my-4">
        <AdminForm />
      </div>

      <div className="mt-10 space-y-6 ">
        {/* <AdminsTable /> */}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AdminsScreen;
