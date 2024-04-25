import { TypographyH1 } from "@/Typography/TypographyH1";
import { Calendar, ChevronLeft, ChevronRight, Home, Users } from "lucide-react";
import { ReactNode, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`w-full bg-white px-4 py-6 relative`}>
      <div
        className="absolute -right-2 top-5 bg-black text-white rounded-full cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </div>
      {isOpen ? (
        <div className="mx-4">
          <TypographyH1>MedLink.</TypographyH1>
        </div>
      ) : (
        <TypographyH1>.</TypographyH1>
      )}

      <nav className="text-black flex flex-col space-y-3 mt-5">
        <SideLink to="/">
          <Home /> {isOpen && <span>Overview</span>}
        </SideLink>
        <SideLink to="/patients">
          <Users /> {isOpen && <span>My Patients</span>}
        </SideLink>
        <SideLink to="/appointements">
          <Calendar /> {isOpen && <span>Appointements</span>}
        </SideLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
