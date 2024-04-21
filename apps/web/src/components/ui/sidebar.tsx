import { Home, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full bg-gray-200 h-[100vh]">
      <h1 className="font-bold text-3xl ">MEDLINK</h1>
      <nav className="text-black flex flex-col space-y-4 ">
        <ol className="flex space-x-3">
          <Home /> <span>Home</span>
        </ol>

        <ol className="flex space-x-3">
          <Users /> <span>Users</span>
        </ol>
      </nav>
    </aside>
  );
};

export default Sidebar;
