import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, PhoneCall } from "lucide-react";
import PersonalInformation from "./PersonalInformation";

const ProfileScreen = () => {
  return (
    <div>
      <div className="h-[200px] w-full bg-neutral-100 rounded-lg" />
      <div className="-mt-10 flex items-end space-x-8 px-10">
        <div className="bg-white p-2 rounded-full">
          <Avatar className="w-36 h-36 ">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Profile Picture</AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              Dr.MohamedAmine Azirgui
            </h3>
            <p className="text-neutral-600">Cardiologist</p>
          </div>
          <div className=" text-sm flex items-center space-x-4">
            <p className="flex items-center space-x-2 text-neutral-500">
              <PhoneCall size={18} /> <span>+212 622002200</span>
            </p>
            <p className="flex items-center space-x-2 text-neutral-500">
              <MapPin size={18} />{" "}
              <span>avenue Hassan II, 3°et., Grand Casablanca</span>
            </p>
            <p className="flex items-center space-x-2 text-neutral-500">
              <Calendar size={18} /> <span>Joined April 2024</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <PersonalInformation />
      </div>
    </div>
  );
};

export default ProfileScreen;
