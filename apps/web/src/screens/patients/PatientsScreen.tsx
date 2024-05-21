import Heading from "@/components/ui/heading";
import PatientsTable from "./PatientsTable";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const PatientsScreen = () => {
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
        <PatientsTable />
      </div>
    </div>
  );
};

export default PatientsScreen;
