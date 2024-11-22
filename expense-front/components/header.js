"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = ()=>{

    return(
<div className="mx-auto h-8 w-full bg-slate-200 flex justify-between items-center p-10">
            <div className="flex ml-5 mx-auto my-auto">
              <Image
                src="/public/logo.png"
                className="mr-5"
                width={50}
                height={50}
                alt="key"
              />
              <Link className="font-bold mr-5 font-sm" href="/dashboard">Dashboard</Link>
              <Link className="" href="/record">Records</Link>
            </div>
            <div className="flex justify-between  mr-5">
              <Button className="flex bg-blue-500 rounded-full  font-sm text-white">
                <Plus className="text-sm"/>
                Record
              </Button>
              <img src="/expense-front/public/logo.png" alt="" width={16} height={16} className="ml-5 mr-5 object-fill rounded-full my-auto" />
    
            </div>
          </div>
)
}