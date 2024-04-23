import { TypographyH5 } from "@/Typography/TypographyH5";
import { TypographySmall } from "@/Typography/TypographySmall";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

const TopBar = () => {
  return (
    <div className="flex w-full justify-end ">
      <div className="flex items-center justify-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Admin</AvatarFallback>
        </Avatar>
        <div>
          <TypographyH5>MohamedAmine</TypographyH5>
          <TypographySmall>Cardiologist</TypographySmall>
        </div>
        <div>
          <ChevronDown className="text-sm cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
