import Heading from "@/components/ui/heading";

import { useSelector } from "react-redux";
import { getUser } from "@/features/user/userSlice";
import { useQuery } from "react-query";
import axios from "axios";
import RequestsTable from "./RequestsTable";

const RequestsScreen = () => {
  const user = useSelector(getUser);
  const { data, isLoading } = useQuery("getRequests", async () => {
    try {
      return await axios(
        `http://localhost:4000/appointments/my-appointments/${user?.user?.doctor?.id}`
      );
    } catch (error: any) {
      throw new Error(error);
    }
  });

  return (
    <div>
      <Heading
        title="Appointements Requests"
        description="Manage Current Appointements Requests"
      />

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
        <RequestsTable data={data?.data} />
      </div>
    </div>
  );
};

export default RequestsScreen;
