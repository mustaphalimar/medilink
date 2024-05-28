import Heading from "@/components/ui/heading";

import { useSelector } from "react-redux";
import { getUser } from "@/features/user/userSlice";
import { useQuery } from "react-query";
import axios from "axios";
import RequestsTable from "./RequestsTable";
import { TableSkeleton } from "@/components/ui/TableSkeleton";

const RequestsScreen = () => {
  const user = useSelector(getUser);
  const { data, isLoading, refetch } = useQuery(
    "getRequestsPending",
    async () => {
      try {
        return await axios(
          `http://localhost:4000/appointments/my-appointments/${user?.user?.doctor?.id}`
        );
      } catch (error: any) {
        throw new Error(error);
      }
    }
  );

  return (
    <div>
      <Heading
        title="Appointements Requests"
        description="Manage Current Appointements Requests"
      />

      <div className="mt-10 space-y-6 ">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <RequestsTable data={data?.data} refetch={refetch} />
        )}
      </div>
    </div>
  );
};

export default RequestsScreen;
