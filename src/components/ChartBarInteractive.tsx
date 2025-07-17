// "use client"

// import { TrendingUp } from "lucide-react"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"

// export const description = "A multiple bar chart"

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "var(--chart-2)",
//   },
// } satisfies ChartConfig

// export function ChartBarInteractive() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Bar Chart - Multiple</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig} className="h-[235px] w-full">
//           <BarChart accessibilityLayer data={chartData}>
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="month"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dashed" />}
//             />
//             <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
//             <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 leading-none font-medium">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="text-muted-foreground leading-none">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }

// "use client";

// import { TrendingUp } from "lucide-react";
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A multiple bar chart";

// const chartData = [
//   { date: "01 Jan 2024", desktop: 120, mobile: 80, tablet: 40 },
//   { date: "15 Jan 2024", desktop: 186, mobile: 95, tablet: 55 },
//   { date: "01 Feb 2024", desktop: 200, mobile: 130, tablet: 70 },
//   { date: "15 Feb 2024", desktop: 305, mobile: 200, tablet: 90 },
//   { date: "01 Mar 2024", desktop: 190, mobile: 90, tablet: 60 },
//   { date: "15 Mar 2024", desktop: 237, mobile: 120, tablet: 72 },
//   { date: "01 Apr 2024", desktop: 73, mobile: 150, tablet: 45 },
//   { date: "15 Apr 2024", desktop: 110, mobile: 190, tablet: 85 },
//   { date: "01 May 2024", desktop: 180, mobile: 100, tablet: 55 },
//   { date: "15 May 2024", desktop: 209, mobile: 130, tablet: 75 },
//   { date: "01 Jun 2024", desktop: 165, mobile: 115, tablet: 62 },
//   { date: "15 Jun 2024", desktop: 214, mobile: 140, tablet: 88 },
//   { date: "01 Jul 2024", desktop: 195, mobile: 122, tablet: 65 },
//   { date: "15 Jul 2024", desktop: 230, mobile: 160, tablet: 92 },
//   { date: "01 Aug 2024", desktop: 175, mobile: 135, tablet: 58 },
//   { date: "15 Aug 2024", desktop: 220, mobile: 170, tablet: 95 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "var(--chart-2)",
//   },
// } satisfies ChartConfig;

// export function ChartBarInteractive() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Bar Chart - Multiple</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig} className="h-[235px] w-full">
//           <BarChart accessibilityLayer data={chartData}>
// <defs>
//   <linearGradient id="gradient-desktop" x1="0" y1="0" x2="0" y2="1">
//     <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="1" />
//     <stop
//       offset="100%"
//       stopColor="var(--chart-1)"
//       stopOpacity="0.1"
//     />
//   </linearGradient>
//   <linearGradient id="gradient-mobile" x1="0" y1="0" x2="0" y2="1">
//     <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="1" />
//     <stop
//       offset="100%"
//       stopColor="var(--chart-1)"
//       stopOpacity="0.1"
//     />
//   </linearGradient>
//   <linearGradient id="gradient-tablet" x1="0" y1="0" x2="0" y2="1">
//     <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="1" />
//     <stop
//       offset="100%"
//       stopColor="var(--chart-1)"
//       stopOpacity="0.1"
//     />
//   </linearGradient>
// </defs>

//             <CartesianGrid
//               strokeDasharray="3 3"
//               vertical={false}
//               horizontal={true}
//             />
//             <XAxis
//               dataKey="date"
//               tickLine={false}
//               tickMargin={10}
//               axisLine={false}
//               tickFormatter={(value) => value.slice(0, 6)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dashed" />}
//             />
//             <Bar dataKey="desktop" fill="url(#gradient-desktop)" radius={4} />
//             <Bar dataKey="mobile" fill="url(#gradient-mobile)" radius={4} />
//             <Bar dataKey="tablet" fill="url(#gradient-tablet)" radius={4} />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col items-start gap-2 text-sm">
//         <div className="flex gap-2 leading-none font-medium">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="text-muted-foreground leading-none">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// "use client"

// import * as React from "react"
// // import { TrendingUp } from "lucide-react"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   // CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"

// export const description = "A multiple bar chart"

// const chartData = [
//   { date: "01 Jan 2024", desktop: 120, mobile: 80 },
//   { date: "15 Jan 2024", desktop: 186, mobile: 95 },
//   { date: "01 Feb 2024", desktop: 200, mobile: 130},
//   { date: "15 Feb 2024", desktop: 305, mobile: 200 },
//   { date: "01 Mar 2024", desktop: 190, mobile: 90 },
//   { date: "15 Mar 2024", desktop: 237, mobile: 120},
//   { date: "01 Apr 2024", desktop: 73, mobile: 150},
//   { date: "15 Apr 2024", desktop: 110, mobile: 190 },
//   { date: "01 May 2024", desktop: 180, mobile: 100 },
//   { date: "15 May 2024", desktop: 209, mobile: 130 },
//   { date: "01 Jun 2024", desktop: 165, mobile: 115 },
//   { date: "15 Jun 2024", desktop: 214, mobile: 140},
//   { date: "01 Jul 2024", desktop: 195, mobile: 122 },
//   { date: "15 Jul 2024", desktop: 230, mobile: 160},
//   { date: "01 Aug 2024", desktop: 175, mobile: 135 },
//   { date: "15 Aug 2024", desktop: 220, mobile: 170 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "var(--chart-1)",
//   },
// } satisfies ChartConfig

// export function ChartBarInteractive() {
//   const [activeChart, setActiveChart] =
//     React.useState<keyof typeof chartConfig>("desktop")

//   const total = React.useMemo(() => {
//     return {
//       desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
//       mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
//     }
//   }, [])

//   return (
//     <Card>
//       <CardHeader className="flex flex-col sm:flex-row items-stretch border-b !p-0">
//         <div className="flex-1 px-6 pt-4 pb-3 sm:py-6">
//           <CardTitle>Bar Chart - Multiple</CardTitle>
//           <CardDescription>January - August 2024</CardDescription>
//         </div>
//         <div className="flex">
//           {(["desktop", "mobile"] as const).map((key) => (
//             <button
//               key={key}
//               data-active={activeChart === key}
//               className="data-[active=true]:bg-muted/50 flex-1 px-6 py-4 text-left text-sm even:border-l border-t sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
//               onClick={() => setActiveChart(key)}
//             >
//               <div className="text-muted-foreground text-xs">
//                 {chartConfig[key].label}
//               </div>
//               <div className="text-lg font-bold sm:text-3xl">
//                 {total[key].toLocaleString()}
//               </div>
//             </button>
//           ))}
//         </div>
//       </CardHeader>

//       <CardContent>
//         <ChartContainer config={chartConfig} className="h-[235px] w-full">
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis
//               dataKey="date"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={10}
//               tickFormatter={(value) => value.slice(0, 6)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="dashed" />}
//             />
//             <Bar
//               dataKey={activeChart}
//               fill={chartConfig[activeChart].color}
//               radius={[4, 4, 0, 0]}
//               barSize={10}
//             />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>

//     </Card>
//   )
// }

"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
  { date: "01 Jan 2024", desktop: 250, mobile: 80 },
  { date: "15 Jan 2024", desktop: 126, mobile: 95 },
  { date: "20 Jan 2024", desktop: 80, mobile: 100 },
  { date: "30 Jan 2024", desktop: 200, mobile: 100 },

  { date: "01 Feb 2024", desktop: 300, mobile: 130 },
  { date: "15 Feb 2024", desktop: 250, mobile: 200 },
  { date: "22 Feb 2024", desktop: 160, mobile: 110 },
  { date: "28 Feb 2024", desktop: 160, mobile: 110 },

  { date: "01 Mar 2024", desktop: 190, mobile: 90 },
  { date: "15 Mar 2024", desktop: 237, mobile: 120 },
  { date: "20 Mar 2024", desktop: 210, mobile: 105 },
  { date: "30 Mar 2024", desktop: 210, mobile: 105 },

  { date: "01 Apr 2024", desktop: 73, mobile: 150 },
  { date: "15 Apr 2024", desktop: 110, mobile: 190 },
  { date: "20 Apr 2024", desktop: 140, mobile: 170 },
  { date: "30 Apr 2024", desktop: 140, mobile: 170 },

  { date: "01 May 2024", desktop: 180, mobile: 100 },
  { date: "15 May 2024", desktop: 209, mobile: 130 },
  { date: "20 May 2024", desktop: 190, mobile: 115 },
  { date: "30 May 2024", desktop: 190, mobile: 115 },

  { date: "01 Jun 2024", desktop: 165, mobile: 115 },
  { date: "15 Jun 2024", desktop: 214, mobile: 140 },
  { date: "20 Jun 2024", desktop: 170, mobile: 105 },
  { date: "30 Jun 2024", desktop: 170, mobile: 105 },

  { date: "01 Jul 2024", desktop: 195, mobile: 122 },
  { date: "15 Jul 2024", desktop: 230, mobile: 160 },
  { date: "20 Jul 2024", desktop: 210, mobile: 145 },
  { date: "30 Jul 2024", desktop: 210, mobile: 145 },

  { date: "01 Aug 2024", desktop: 175, mobile: 135 },
  { date: "15 Aug 2024", desktop: 220, mobile: 170 },
  { date: "20 Aug 2024", desktop: 200, mobile: 150 },
  { date: "30 Aug 2024", desktop: 200, mobile: 150 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "url(#gradient-desktop)",
  },
  mobile: {
    label: "Mobile",
    color: "url(#gradient-mobile)",
  },
} satisfies ChartConfig;

export function ChartBarInteractive() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop");

  const total = React.useMemo(() => {
    return {
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    };
  }, []);

  return (
    <Card className="px-0 py-0">
      <CardHeader className="flex flex-col sm:flex-row items-stretch border-b !p-0">
        <div className="flex-1 px-6 pt-4 pb-3 sm:py-6">
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CardDescription>January - August 2024</CardDescription>
        </div>
        <div className="flex">
          {(["desktop", "mobile"] as const).map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className="data-[active=true]:bg-muted/50 flex-1 px-6 py-4 text-left text-sm even:border-l border-t sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
              onClick={() => setActiveChart(key)}
            >
              <div className="text-muted-foreground text-xs">
                {chartConfig[key].label}
              </div>
              <div className="text-lg font-bold sm:text-3xl">
                {total[key].toLocaleString()}
              </div>
            </button>
          ))}
          <button className="data-[active=true]:bg-muted/50 flex-1 px-6 py-4 text-left text-sm even:border-l border-t sm:border-t-0 sm:border-l sm:px-8 sm:py-6">
            <div className="text-muted-foreground text-xs">error</div>
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[285px] w-full">
          <BarChart data={chartData}>
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradient-desktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="1" />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.1"
                />
              </linearGradient>
              <linearGradient id="gradient-mobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="1" />
                <stop
                  offset="100%"
                  stopColor="var(--chart-1)"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey={activeChart}
              fill={chartConfig[activeChart].color}
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
