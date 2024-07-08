import { TypographyH3 } from "@/Typography/TypographyH3";
import { TypographySmall } from "@/Typography/TypographySmall";
import { BarChartsConsultation } from "@/components/charts/BarChartConsultation";
import { BarChartsComponents } from "@/components/charts/BarCharts";
import { PieGenderCharts } from "@/components/charts/PieGenderChart";
import DisplayCard from "@/components/ui/displayCard";
import { getUser } from "@/features/user/userSlice";
import { Briefcase, Calendar, User, Video } from "lucide-react";
import { useSelector } from "react-redux";

const OverviewScreen = () => {
  const { user } = useSelector(getUser);
  return (
    <div>
      <div className="pb-6">
        <TypographyH3>Welcome, Dr.{user?.doctor?.name}</TypographyH3>
        <TypographySmall>Have a nice day at work</TypographySmall>
      </div>

      <div className="flex gap-10 w-full flex-wrap">
        <DisplayCard
          Icon={<Calendar />}
          styling="bg-[#7A6EFE]"
          title="Appointments"
          count="24.4k"
          key={"ho"}
        />

        <DisplayCard
          Icon={<User />}
          styling="bg-[#FF5363]"
          title="Total Patient"
          count="166.3k"
          key={"ho"}
        />

        <DisplayCard
          Icon={<Briefcase />}
          styling="bg-[#FFA901]"
          title="Clinic Consulting"
          count="53.6k"
          key={"ho"}
        />

        {/* <DisplayCard
          Icon={<Video />}
          styling="bg-[#24A8FA]"
          title="Video Consulting"
          count="28.0k"
          key={"ho"}
        /> */}
      </div>
      <div className="py-20 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-20">
        <BarChartsComponents />
        <PieGenderCharts />

        <BarChartsConsultation />
      </div>
    </div>
  );
};

export default OverviewScreen;
