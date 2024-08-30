
"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"
import { BarChart, Plus, TrendingUp } from "lucide-react"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from 'next/image'
import { ChartContainer } from "@/components/ui/chart"
import { Bar, CartesianGrid } from "recharts"

export default function Page3() {
    return (
        <>

            <div className="mx-auto h-12 w-full bg-white flex justify-between items-center p-">
                <div className="flex ml-5">
                    <img src="./public/Vector.png" className="mr-5" />
                    <div className="font-bold mr-5 font-sm">Dashboard</div>
                    <div className="">Records</div>

                </div>
                <div className="flex justify-between">
                    <div className="flex bg-blue-500 rounded-full p-1 font-sm text-white" >
                        <Plus />
                        Record
                    </div>
                    <div className="h-8 w-8 bg-blue-500 rounded-full  ml-5 mr-5 ">
                   </div>
                </div>

            </div>
            <div className="grid grid-cols-3 mt-10 gap-5 mx-auto px-10 bg-slate-100">
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
            <Card>
                <CardHeader>
                    <CardTitle>Bar Chart - Multiple</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>

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


