import { Calendar, Home, Users } from "lucide-react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface navLinkProps {
  to: string;
  children: ReactNode;
}

const SideLink = ({ to, children }: navLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `transition-all flex space-x-3 text-gray-600 px-4 py-3 font-medium  hover:bg-black hover:text-white rounded-md ${isActive && "bg-black text-white"}`;
      }}
    >
      {children}
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-full  bg-white px-4 py-6">
      <h1 className="font-bold text-3xl ">MedLink.</h1>
      <nav className="text-black flex flex-col space-y-3 mt-5">
        <SideLink to="/">
          <Home /> <span>Home</span>
        </SideLink>
        <SideLink to="/patients">
          <Users /> <span>My Patients</span>
        </SideLink>
        <SideLink to="/appointements">
          <Calendar /> <span>Appointements</span>
        </SideLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
