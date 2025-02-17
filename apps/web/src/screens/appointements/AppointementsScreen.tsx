import Heading from "@/components/ui/heading";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { TableSkeleton } from "@/components/ui/TableSkeleton";
import { useSelector } from "react-redux";
import { getUser } from "@/features/user/userSlice";
import { useQuery } from "react-query";
import axios from "axios";

const AppointementsScreen = () => {
  const user = useSelector(getUser);
  const { data, isLoading } = useQuery("getRequestsScheduled", async () => {
    try {
      return await axios(
        `http://localhost:4000/appointments/my-appointments/scheduled-done/${user?.user?.doctor?.id}`
      );
    } catch (error: any) {
      throw new Error(error);
    }
  });
  return (
    <div>
      <Heading title="Appointments" description="Manage Appointements" />

      <div className="mt-10 space-y-6 ">
        {/* <div className="grid w-full max-w-sm items-center gap-1.5 relative">
      <Input
        type="text"
        id="search"
        placeholder="Search Admins "
        className="pr-8"
      />
      <Search className="absolute right-2 text-gray-500" size={18} />
    </div> */}
        {isLoading ? (
          <TableSkeleton />
        ) : (
          // <TodaysPatientTable data={data?.data} />
          <DataTable columns={columns} data={data?.data} />
        )}
      </div>
    </div>
  );
};

export default AppointementsScreen;
