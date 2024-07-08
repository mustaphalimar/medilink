import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, PhoneCall } from "lucide-react";
import PersonalInformation from "./PersonalInformation";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "@/features/user/userSlice";
import { useQuery } from "react-query";
import { getSignleUser } from "@/api/api";
import { formatDate } from "@/utils/FormatDate";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(getUser);

  // console.log(user);

  const { data, isLoading, refetch } = useQuery(
    `getUser${user?.id}`,
    () => getSignleUser(user?.id),
    {
      onSuccess: (data) => {
        if (data?.data) {
          dispatch(setUser(data?.data));
        }
      },
    }
  );

  let dateJoined = formatDate(user?.doctor?.createdAt)
    .split(",")[0]
    .split(" ")
    .slice(0, 2)
    .join(" ");

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
            <h3 className="scroll-m-20 text-3xl capitalize font-semibold tracking-tight">
              Dr.{user?.doctor?.name}
            </h3>
            <p className="text-neutral-600">{user?.doctor?.speciality}</p>
          </div>
          <div className=" text-sm flex items-center space-x-4">
            <p className="flex items-center space-x-2 text-neutral-500">
              <PhoneCall size={18} />{" "}
              <span>+212 {user?.doctor?.phoneNumber}</span>
            </p>
            <p className="flex items-center space-x-2 text-neutral-500">
              <MapPin size={18} /> <span>{user?.doctor?.address}</span>
            </p>
            <p className="flex items-center space-x-2 text-neutral-500">
              <Calendar size={18} /> <span>Joined {dateJoined}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <PersonalInformation refetchUser={refetch} />
      </div>
    </div>
  );
};

export default ProfileScreen;
