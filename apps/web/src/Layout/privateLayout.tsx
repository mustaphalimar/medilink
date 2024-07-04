import Sidebar from "@/components/ui/sidebar";
import TopBar from "@/components/ui/topbar";
import { getUser } from "@/features/user/userSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useSelector(getUser);

  return (
    <div className="flex ">
      <div className="max-w-[380px]">
        <Sidebar isOpen={isOpen} />
      </div>
      <div className="w-full  bg-white min-h-[100vh]  space-y-10">
        <TopBar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
