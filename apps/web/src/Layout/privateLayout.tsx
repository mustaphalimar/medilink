import Sidebar from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="flex">
      <div className="min-w-[250px]">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;
