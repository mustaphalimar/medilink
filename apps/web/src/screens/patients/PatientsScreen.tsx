import Heading from "@/components/ui/heading";
import PatientsTable from "./PatientsTable";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUser } from "@/features/user/userSlice";
import { TableSkeleton } from "@/components/ui/TableSkeleton";

const PatientsScreen = () => {
  const user = useSelector(getUser);
  const { data, isLoading } = useQuery("getPatients", async () => {
    try {
      return await axios(
        `http://localhost:4000/doctor/my-patients/${user?.user?.doctor?.id}`
      );
    } catch (error: any) {
      throw new Error(error);
    }
  });

  return (
    <div>
      <Heading title="My Patients " description="Manage your patients" />
      <div className="mt-10 space-y-6 ">
        <div className="grid w-full max-w-sm items-center gap-1.5 relative">
          <Input
            type="text"
            id="search"
            placeholder="Search Patients "
            className="pr-8"
          />
          <Search className="absolute right-2 text-gray-500" size={18} />
        </div>
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <PatientsTable data={data?.data[0]?.patients} />
        )}
      </div>
    </div>
  );
};

export default PatientsScreen;
