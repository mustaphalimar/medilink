import Heading from "@/components/ui/heading";
import AdminForm from "./AdminForm";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { getUser } from "@/features/user/userSlice";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getAdmins } from "@/api/api";
import { TableSkeleton } from "@/components/ui/TableSkeleton";

const AdminsScreen = () => {
  const user = useSelector(getUser);
  const { data, isLoading, refetch } = useQuery(
    `getAdmins${user?.user?.doctor?.id}`,
    () => getAdmins(user?.user?.doctor?.id)
  );

  return (
    <div>
      <Heading title="Admins " description="Manage your admins" />
      <div className="my-4">
        <AdminForm refetch={refetch} />
      </div>

      <div className="mt-10 space-y-6 ">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <DataTable columns={columns(refetch)} data={data?.data} />
        )}
      </div>
    </div>
  );
};

export default AdminsScreen;
