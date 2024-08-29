
"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"
import { BarChart, TrendingUp } from "lucide-react"
import { Button } from "react-day-picker"

export default function Page3() {
    return (
        <>
            <NavigationMenu className="mx-auto h-10 w-full bg-slate-200 flex items-center ">
                <NavigationMenuList className="flex justify-between ">
                    <NavigationMenuItem className="flex ">
                        <NavigationMenuTrigger className="">Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="">Records</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>

                        <NavigationMenuTrigger className="">Profile</NavigationMenuTrigger>


                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="grid grid-cols-3 mt-10 gap-5 mx-auto p-10">
                <HomeBody />
                <HomeBody />
                <HomeBody />
            </div>

        </>
    )
}
const cardContent = [
    {
        CardTitle: "Geld",
        CardDescription: "Cash",
        CardContent: "10,000,00"
    },
    {
        CardTitle: "Your Income",
        CardDescription: "Cash",
        CardContent: "10,000,00"
    },
    {
        CardTitle: "Geld",
        CardDescription: "Cash",
        CardContent: "10,000,00"
    },
]
import {
    // ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "@/components/ui/chart"
import { Bar, CartesianGrid, XAxis } from "recharts"

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
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies chartConfig;
  


export function HomeBody() {

    return (
        <>
            <Card className="bg-teal-400">
                <CardHeader>
                    <CardTitle>Geld</CardTitle>
                    <CardDescription>Cash</CardDescription>
                    <CardDescription>10,000,00</CardDescription>
                </CardHeader>
                <CardContent >
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            {/* //* chart */}
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart - Multiple</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <ChartContainer config={chartConfig}> */}
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dashed" />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                        </BarChart>
                    {/* </ChartContainer> */}
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                    </div>
                    <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}