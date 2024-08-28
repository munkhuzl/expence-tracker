"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DayPicker } from "react-day-picker";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Circle, CircleUser, Clock, Home, House, Icon, Volume, Wallpaper, ChevronDown, HomeIcon, Gift, FolderOpenDot, Wine, CarTaxiFront, Shirt, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { format } from "date-fns"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"

const categoryColors = [
  {
    name: "blue",
    value: "#0166FF",
  },
  {
    name: "sky",
    value: "#3D85C6",
  },
  {
    name: "green",
    value: "#16a34a",
  },
  {
    name: "yellow",
    value: "#fde047",
  },
  {
    name: "orange",
    value: "#fde047",
  },
  {
    name: "purple",
    value: "#a855f7",
  },
  {
    name: "red",
    value: "#991b1b",
  },
];
const categoryIcons = [

  {
    name: "sky",
    Icon: Home,
  },
  {
    name: "circle",
    Icon: CircleUser,
  },
  {
    name: "volume",
    Icon: Volume,
  },
  {
    name: "clock",
    Icon: Clock,
  },
  {
    name: "circle",
    Icon: CircleUser,
  },
  {
    name: "circle",
    Icon: CircleUser,
  },
  {
    name: "volume",
    Icon: Volume,
  },
  {
    name: "volume",
    Icon: Volume,
  },
  {
    name: "clock",
    Icon: Clock,
  },
  {
    name: "walpaper",
    Icon: Wallpaper,
  },
  {
    name: "house",
    Icon: House,
  },
  {
    name: "sky",
    Icon: Home,
  },
  {
    name: "circle",
    Icon: CircleUser,
  },
  {
    name: "volume",
    Icon: Volume,
  },
  {
    name: "clock",
    Icon: Clock,
  },
  {
    name: "walpaper",
    Icon: Wallpaper,
  },
  {
    name: "volume",
    Icon: Volume,
  },
  {
    name: "clock",
    Icon: Clock,
  },
  {
    name: "walpaper",
    Icon: Wallpaper,
  },
  {
    name: "circle",
    Icon: CircleUser,
  },
  {
    name: "volume",
    Icon: Volume,
  },
  {
    name: "clock",
    Icon: Clock,
  },
];

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);




  return (
    <>
      <Dialog>

        <Card className="w-[792px] mx-auto mt-[200px] ">
          <CardContent>
            <CardTitle className="my-4 text-xl">Add record</CardTitle>
            <hr></hr>
            <form className=" flex grid-cols-2 mb-4 gap-3">
              <div className="m-4 w-1/2 ">
                <Button variant="secondary" className="w-1/2 rounded-full">Expense</Button>
                <Button className="secondary mb-3 w-1/2 rounded-full">Income</Button>
                <br></br>
                <Label placeholder="Amount" type="Amout">Amount </Label>
                <Input placeholder="Amount 
                 ₮000.00"
                  className="my-2 mb-2 "></Input>
                Category
                <div className="bg-slate-50 w-[220px]">  
                
                <Select className="bg-white w-[356px]">
                  <SelectTrigger className=" w-full bg-white">
                    <SelectValue placeholder="Choose category" />
                  </SelectTrigger>
                  <SelectContent>
                  <Addcategory2 />
                    <SelectGroup>
            
                 
              
                      <SelectItem className="flex gap-2">
                        <HomeIcon className="text-blue-500"></HomeIcon> Home
                      </SelectItem >
                      <SelectItem className="flex gap-2">
                        <Gift className="text-pink-500" />
                        Gift
                      </SelectItem >
                      <SelectItem className="flex gap-2">
                        <FolderOpenDot className="text-orange-300" />
                        Food</SelectItem>
                      <SelectItem className="flex gap-2">
                        <Wine className="text-red-500" />
                        Drink  </SelectItem >
                      <SelectItem className="flex gap-2">
                        <CarTaxiFront className="text-yellow-500" />
                        Taxi  </SelectItem >
                      <SelectItem className="flex gap-2">
                        <Shirt className="text-purple-500" />
                        Shopping  </SelectItem >
                    </SelectGroup>
                  </SelectContent>
                </Select>
                </div>
                {/* Date picker */}
                <Label placeholder="Amount" type="Amout">Amount </Label>
                <div className="flex gap-2 mt-2">
                <DatePicker />  
                <DatePicker />
                </div>
             

              </div>
              <div className="mt-4 w-1/2">
                <Label htmlFor="Payee" className="mt-2">
                  Payee
                </Label>
                <Textarea placeholder="Type your message here."></Textarea>
                <Label htmlFor="Note">Note</Label>
                <Textarea placeholder="Type your message here."></Textarea>
              </div>
            </form>
          </CardContent>
        </Card>
      </Dialog>
    </>
  );
}
export function Addcategory2() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <>
      <Dialog>
        <DialogTrigger asChildr>
          <Button variant="secondary" onClick={() => setOpen(true)}>Add new category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add record</DialogTitle>
            <hr className="mt-2"></hr>
          </DialogHeader>
          <div className="flex gap-1">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">
                  <House />
                  <ChevronDown className="ml-2 h-4 w-4 " />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid grid-cols-6 gap-2 bg-green-400" >
                  {categoryIcons.map(({ name, Icon }) => (
                    <div key={name} className="w-8 h-8 m-1">
                      <Icon />
                    </div>
                  ))}
                </div>
                <hr></hr>
                <div className="grid grid-cols-7 bg-white" >
                  {categoryColors.map(({ name, value }) => (
                    <div key={name} className="h-7 w-7 mt-3 rounded-full text-center m-2 " style={{ backgroundColor: value }}>
                    </div>
                  ))}
                </div>
                <hr></hr>
              </PopoverContent>
            </Popover>
            <Input placeholder="Name">

            </Input>
          </div>

          <div className="flex"></div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full rounded-full bg-green-400 hover:bg-green-900"
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function DatePicker() {
  const [date, setDate] = useState()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className={"bg-white border rounded-lg w-1/2"}
        />
      </PopoverContent>
    </Popover>)

}