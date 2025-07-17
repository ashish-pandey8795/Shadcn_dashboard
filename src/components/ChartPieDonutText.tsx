


// "use client"

// import * as React from "react"
// import { TrendingUp } from "lucide-react"
// import { Label, Pie, PieChart } from "recharts"

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

// export const description = "A donut chart with text"

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 190, fill: "var(--color-other)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "var(--chart-1)",
//   },
//   safari: {
//     label: "Safari",
//     color: "var(--chart-1)",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "var(--chart-1)",
//   },
//   edge: {
//     label: "Edge",
//     color: "var(--chart-1)",
//   },
//   other: {
//     label: "Other",
//     color: "var(--chart-1)",
//   },
// } satisfies ChartConfig

// export function ChartPieDonutText() {
//   const totalVisitors = React.useMemo(() => {
//     return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
//   }, [])

//   return (
//     <Card className="flex flex-col">
//       <CardHeader className="items-center pb-0">
//         <CardTitle>Pie Chart - Donut with Text</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent className="flex-1 pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[250px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               data={chartData}
//               dataKey="visitors"
//               nameKey="browser"
//               innerRadius={60}
//               strokeWidth={5}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-3xl font-bold"
//                         >
//                           {totalVisitors.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground"
//                         >
//                           Visitors
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 leading-none font-medium">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="text-muted-foreground leading-none">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }



"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

// Set gradient fill IDs
const chartData = [
  { browser: "chrome", visitors: 275, fill: "url(#gradient-chrome)" },
  { browser: "safari", visitors: 200, fill: "url(#gradient-safari)" },
  { browser: "firefox", visitors: 287, fill: "url(#gradient-firefox)" },
  { browser: "edge", visitors: 173, fill: "url(#gradient-edge)" },
  { browser: "other", visitors: 190, fill: "url(#gradient-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-1)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-1)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-1)",
  },
  other: {
    label: "Other",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartPieDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle >Pie Chart - Donut with Text</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            {/* Gradient Definitions */}
         <defs>
  <linearGradient id="gradient-chrome" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stopColor="var(--color-chrome)" stopOpacity="0.1" />
    <stop offset="100%" stopColor="var(--color-chrome)" stopOpacity="0.2" />
  </linearGradient>

  <linearGradient id="gradient-safari" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stopColor="var(--color-safari)" stopOpacity="0.3" />
    <stop offset="100%" stopColor="var(--color-safari)" stopOpacity="0.4" />
  </linearGradient>

  <linearGradient id="gradient-firefox" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stopColor="var(--color-firefox)" stopOpacity="0.5" />
    <stop offset="100%" stopColor="var(--color-firefox)" stopOpacity="0.6" />
  </linearGradient>

  <linearGradient id="gradient-edge" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stopColor="var(--color-edge)" stopOpacity="0.7" />
    <stop offset="100%" stopColor="var(--color-edge)" stopOpacity="0.8" />
  </linearGradient>

  <linearGradient id="gradient-other" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stopColor="var(--color-other)" stopOpacity="0.9" />
    <stop offset="100%" stopColor="var(--color-other)" stopOpacity="1" />
  </linearGradient>
</defs>


            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
