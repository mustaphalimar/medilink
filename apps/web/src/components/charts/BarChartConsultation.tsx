"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", consultation: 186 },
  { month: "February", consultation: 305 },
  { month: "March", consultation: 237 },
  { month: "April", consultation: 73 },
  { month: "May", consultation: 209 },
  { month: "June", consultation: 214 },
];

const chartConfig = {
  consultation: {
    label: "Consultation",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarChartsConsultation({ consultation }: { consultation: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consultations</CardTitle>
        <CardDescription>
          {consultation &&
            `${consultation[5]?.month} - ${consultation[0]?.month} 2024`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={consultation}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="total" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="total" fill="var(--color-consultation)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total consultation made for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
