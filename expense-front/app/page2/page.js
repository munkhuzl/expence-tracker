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
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { House, Icon } from "lucide-react";

const categoryColors =[
  {
    name: "blue",
    value: "#0166FF"
  },
  {
    name: "sky",
    value: "#3D85C6"
  },
]
const categoryIcons =[
  {
    name: "house",
    Icon: House,
  },
  // {
  //   name: "sky",
  //   Icon:,
  // },
]
export default function Page() {
  return (
    <>
      <Dialog>
        <Card className="w-[792px] mx-auto mt-[200px] " >
          <CardContent >
            <CardTitle className="m-4">Add record</CardTitle>
            <hr></hr>
            <form className=" flex grid-cols-2 mb-4">
              <div className="m-4 w-1/2 ">
                <Button variant="secondary">Expense</Button>
                <Button className="secondary mb-3">Income</Button>
                <br></br>
                <Label htmlFor="amount">Amount</Label>
                <Input placeholder="Amount" className="my-2 "></Input>
                <Label htmlFor="category " className="mb-2">
                  Category
                  <div className="bg-slate-50 w-[220px]">
                    <DropdownMenu placeholder="Find or choose category" className="">
                      <DropdownMenuTrigger className="flex justify-end" > Tap</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Home</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Gift</DropdownMenuItem>
                        <DropdownMenuItem>Food</DropdownMenuItem>
                        <DropdownMenuItem>Drink</DropdownMenuItem>
                        <DropdownMenuItem>Taxi</DropdownMenuItem>
                        <DropdownMenuItem>Shopping</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </Label>
                <Input></Input>
              </div>
              <div className="mt-4 w-1/2">
                <Label htmlFor="Payee" className="mt-2" >
                  Payee
                </Label>
                <Textarea placeholder="Type your message here."></Textarea>
                <Label htmlFor="Note" >
                  Note
                </Label>
                <Textarea placeholder="Type your message here."></Textarea>
              </div>
            </form>
          </CardContent>
        </Card>
      </Dialog>

      <Addcategory2 />

    </>
  )
}
export function Addcategory2() {
  return (
    <>
      <Dialog open={true}>
        <DialogTrigger asChild>
          <Button variant="primary" style="mx-auto">Add</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add record</DialogTitle>
            <hr className="mt-2"></hr>
          </DialogHeader>
          <Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary" >
                  <House /> 
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-88">
                <div>
                <div className="grid grid-cols-6">
                            {categoryIcon.map(({name, Icon})=>
                            <div key={name}>
                              <Icon/>
                              </div>
                            )};
                          </div>
                </div>
           
              </PopoverContent>
            </Popover>
          </Button>
          <div className="flex">

          </div>



          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>


    </>
  )
}
