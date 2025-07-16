"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with a legend"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartAreaLegend() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Area Chart - Legend</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
      <AreaChart
  accessibilityLayer
  data={chartData}
  margin={{ left: 12, right: 12 }}
>
  {/* Gradient Opacity Definitions */}
  <defs>
    <linearGradient id="gradient-mobile" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity="0.4" />
      <stop offset="100%" stopColor="var(--color-mobile)" stopOpacity="0.05" />
    </linearGradient>
    <linearGradient id="gradient-desktop" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity="0.4" />
      <stop offset="100%" stopColor="var(--color-desktop)" stopOpacity="0.05" />
    </linearGradient>
  </defs>

  <CartesianGrid vertical={false} />

  <XAxis
    dataKey="month"
    tickLine={false}
    axisLine={false}
    tickMargin={8}
    tickFormatter={(value) => value.slice(0, 3)}
  />

  <ChartTooltip
    cursor={false}
    content={<ChartTooltipContent indicator="line" />}
  />

  <Area
    dataKey="mobile"
    type="natural"
    stroke="var(--color-mobile)"
    fill="url(#gradient-mobile)"
    stackId="a"
  />
  <Area
    dataKey="desktop"
    type="natural"
    stroke="var(--color-desktop)"
    fill="url(#gradient-desktop)"
    stackId="a"
  />

  <ChartLegend content={<ChartLegendContent />} />
</AreaChart>

        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
