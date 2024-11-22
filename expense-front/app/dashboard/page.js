"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Plus, TrendingUp } from "lucide-react";
import Page2 from "../page";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "@/components/header";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-3 mt-10 gap-5 mx-auto px-10 bg-slate-100">
        <HomeBody />
      </div>
    </>
  );
}

export function HomeBody() {
  return (
    <>
      <Card className="bg-teal-400 my-10" >
        <CardHeader>
          <CardTitle>Geld</CardTitle>
          <CardDescription>Cash</CardDescription>
          <CardDescription>10,000,00</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      {/* //* chart */}
      <Card className=" my-10" >
        <CardHeader>
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <Card className=" my-10" >
        <CardHeader>
          <CardTitle>Bar Chart - Multiple</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
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
  );
}
