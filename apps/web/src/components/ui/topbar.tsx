import { TypographyH5 } from "@/Typography/TypographyH5";
import { TypographySmall } from "@/Typography/TypographySmall";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, DoorOpen, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { destroyUser } from "@/features/user/userSlice";
import { Link } from "react-router-dom";

interface SideBarTypes {
  isOpen: boolean;
  setIsOpen: (p: boolean) => void;
  user: any;
}

const TopBar = ({ isOpen, setIsOpen, user }: SideBarTypes) => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full items-center justify-between border-b pt-4 py-1 px-10 shadow-sm">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Admin</AvatarFallback>
        </Avatar>
        <div>
          <TypographyH5>{user?.name}</TypographyH5>
          <TypographySmall>Cardiologist</TypographySmall>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ChevronDown className="text-sm cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/myprofile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="space-x-2 cursor-pointer"
                onClick={() => {
                  dispatch(destroyUser());
                }}
              >
                <span>Logout</span> <DoorOpen />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
