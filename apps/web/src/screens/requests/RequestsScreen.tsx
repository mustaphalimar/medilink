import Heading from "@/components/ui/heading";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AdminsTable from "./RequestsTable";
import { useSelector } from "react-redux";
import { getUser } from "@/features/user/userSlice";
import { useQuery } from "react-query";
import axios from "axios";

const RequestsScreen = () => {
  const user = useSelector(getUser);
  const { data, isLoading } = useQuery("getRequests", async () => {
    try {
      return await axios(
        `http://localhost:4000/appointments/my-appointments/${user?.doctor?.id}`
      );
    } catch (error: any) {
      throw new Error(error);
    }
  });

  console.log(data);
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
        <AdminsTable />
      </div>
    </div>
  );
};

export default RequestsScreen;
