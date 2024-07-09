import { TypographyH3 } from "@/Typography/TypographyH3";
import { TypographySmall } from "@/Typography/TypographySmall";
import { getStats } from "@/api/api";
import { BarChartsConsultation } from "@/components/charts/BarChartConsultation";
import { BarChartsComponents } from "@/components/charts/BarCharts";
import { PieGenderCharts } from "@/components/charts/PieGenderChart";
import DisplayCard from "@/components/ui/displayCard";
import { getUser } from "@/features/user/userSlice";
import { Briefcase, Calendar, User, Video } from "lucide-react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const OverviewScreen = () => {
  const { user } = useSelector(getUser);

  const { data } = useQuery("getStats", () => getStats(user?.doctor?.id));

  const stats = data?.data;

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
          count={stats?.appointments?.totalApp}
          key={"ho"}
        />

        <DisplayCard
          Icon={<User />}
          styling="bg-[#FF5363]"
          title="Total Patient"
          count={stats?.patients[0]?.total + stats?.patients[1]?.total}
          key={"ho"}
        />

        <DisplayCard
          Icon={<Briefcase />}
          styling="bg-[#FFA901]"
          title="Total Consulting"
          count={stats?.consultations?.totalApp}
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
        {stats && (
          <>
            <BarChartsComponents appointments={stats?.appointments?.appStats} />
            <PieGenderCharts patients={stats?.patients} />

            <BarChartsConsultation
              consultation={stats?.consultations?.consStats}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default OverviewScreen;
