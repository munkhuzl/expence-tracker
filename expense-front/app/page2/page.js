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

export default function Page() {
  return (
    <>
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
              <Label htmlFor="category">
                Category
              </Label>
              <Input></Input>
              <div className="bg-slate-50 w-[220px]">
                <DropdownMenu placeholder="Find or choose category">
                  <DropdownMenuTrigger> Tap</DropdownMenuTrigger>
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
            </div>
            <div className="mt-4 w-1/2">
            <Label htmlFor="Payee" className="mt-2" >
                Payee
              </Label>
              <Input placeholder="Write here" className="mb-3"></Input>
              <Label htmlFor="Note" >
                Note
              </Label>
              <Input placeholder="Write here" className="mb-3"></Input>
            </div>



          </form>
        </CardContent>
      </Card>



    </>
  )
}
