import Sidebar from "@/components/ui/sidebar";
import TopBar from "@/components/ui/topbar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="flex ">
      <div className="max-w-[380px]">
        <Sidebar />
      </div>
      <div className="w-full bg-gray-50 min-h-[100vh] p-4 px-10 space-y-10">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;
