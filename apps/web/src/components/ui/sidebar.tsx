import {
  Calendar,
  CalendarCheck,
  CircleUser,
  FileStack,
  Home,
  UserRoundCog,
  Users,
} from "lucide-react";
import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

interface navLinkProps {
  to: string;
  children: ReactNode;
}

const SideLink = ({ to, children }: navLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `transition-all flex space-x-3 px-4 py-3 font-medium  hover:bg-primary hover:text-white rounded-md ${isActive && "bg-primary text-white"}`;
      }}
    >
      {children}
    </NavLink>
  );
};

interface SideBarTypes {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SideBarTypes) => {
  return (
    <aside className={`w-full  px-4 py-6 relative border-r h-full shadow-md`}>
      {isOpen ? (
        <div className="mx-4 text-primary pb-4 ">
          <Link to={"/"}>
            <h1 className="text-5xl font-extrabold ">MediLink.</h1>
          </Link>
        </div>
      ) : (
        <div className="text-center text-primary pb-4">
          <Link to={"/"}>
            <h1 className="text-5xl font-extrabold ">M</h1>
          </Link>
        </div>
      )}

      <nav className=" flex flex-col space-y-3 mt-5">
        <SideLink to="/">
          <Home />
          {isOpen && <span>Overview</span>}
        </SideLink>
        <SideLink to="/today-appointments">
          <CalendarCheck /> {isOpen && <span>Today's Patients</span>}
        </SideLink>
        <SideLink to="/patients">
          <Users /> {isOpen && <span>My Patients</span>}
        </SideLink>
        <SideLink to="/appointments">
          <Calendar /> {isOpen && <span>Appointements</span>}
        </SideLink>
        <SideLink to="/admins">
          <UserRoundCog /> {isOpen && <span>Admins</span>}
        </SideLink>
        <SideLink to="/requests">
          <FileStack /> {isOpen && <span>Requests</span>}
        </SideLink>
        <SideLink to="/myprofile">
          <CircleUser /> {isOpen && <span>My Profile</span>}
        </SideLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
