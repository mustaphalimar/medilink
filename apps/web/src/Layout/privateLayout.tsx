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
    <div className="flex h-[100vh] overflow-hidden">
      <div className="max-w-[380px]">
        <Sidebar isOpen={isOpen} />
      </div>
      <div className="flex flex-col w-full h-full ">
        <div className="flex-shrink-0">
          <TopBar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="flex-grow overflow-auto px-10 py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
