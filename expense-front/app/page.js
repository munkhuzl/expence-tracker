"use client";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import {
  Circle,
  CircleUser,
  Clock,
  Home,
  House,
  Icon,
  Volume,
  Wallpaper,
  ChevronDown,
  HomeIcon,
  Gift,
  FolderOpenDot,
  Wine,
  CarTaxiFront,
  Shirt,
  CalendarIcon,
  Check,
  HouseIcon,
} from "lucide-react";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
// import Page3 from "./page3/page";
import HomebodySelect from "@/components/selector";
import { Header } from "@/components/header";
import { AsideBar } from "@/components/asideBar";

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

export default function HomePage() {
  const [open, setOpen] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [name, setName] = useState([]);
  const [icon, setIcon] = useState("home");
  const [color, setColor] = useState("blue");
  const [editingCategory, setEditingCategory] = useState([]);
  const [transactions, setTransaction] = useState([]);

  function loadList() {
    fetch(`http://localhost:4000/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }
  useEffect(() => {
    loadList();
  }, []);

  function reset() {
    setName("");
    setColor("blue");
    setIcon("home");
  }

  function createNew() {
    setLoading(true);
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({ name: name, color: color, icon: icon }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      loadList();
      reset();
    });
  }
  function updateCategory() {
    setLoading(true);
    fetch(`http://localhost:4000/categories/${editingCategory.id}`, {
      method: "Put",
      body: JSON.stringify({ name: name, color: color, icon: icon }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      loadList();
      setOpen(false);
      reset();
    });
  }
  function handDelete(id) {
    fetch(`http://localhost:4000/categories/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
      reset();
    });
  }
  useEffect(() => {
    if (editingCategory) {
      setOpen(true);
      setName(editingCategory.name);
      setIcon(editingCategory.icon);
      setColor(editingCategory.color);
      reset();
    }
  }, [editingCategory]);

  function createNewTransaction() {
    setTransaction(true);
    fetch(`http://localhost:4000/transactions`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        type: type,
        note: note,
        payee: payee,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      reset();
    });
  }

  return (
    <main className="">
      <div className="flex gap-10">
   <AsideBar/>
        <div className="mt-14 rounded-sm border-black mb-2 pb-2 w-1/2 ">
          <h1 className="font-bold my-4">Today </h1>
          {transactions.map((trans) => (
          <div className="bg-green-500 h-[400px] w-full grid grid-rows-3 gap-6">  
            <div className="gap-2 bg-blue-600">{trans.name} today</div>
            <div className="gap-2 bg-blue-600">{trans.amount} mmn</div>
            <div className="gap-2 bg-blue-800">{trans.note}</div>
            <Button variant="secondary">{createNewTransaction}</Button>
          </div>
                ) )}

          {/* <div className="grid grid-cols-3 bg-slate-">
            {transactions.map((transaction) => (
              <div
                key={category.id}
                className="flex font-bold gap-2 jusjify-between"
              >
                {transaction.name}
                <div>{transaction.note}</div>
                <div>{transaction.amount}</div>
                <categoryIcon iconName={category.icon} color={category.color} />
                <div className="grid grid-cols-6 gap-2 bg-white">
                  {categoryIcons.map(({ name, Icon }) => (
                    <div
                      key={name}
                      onClick={() => setIcon(name)}
                      className={`flex items-center justify-center w-8 h-8 ${
                        icon === name ? "bg-blue-200" : ""
                      }`}
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
          {/* <HomebodySelect /> */}
        </div>
      </div>
    </main>
  );
}

export function CategoryIcon({ iconName, color }) {
  const iconObject = categoryIcons.find((item) => item.name === iconName);
  const colorObject = categoryColors.find((item) => item.name === color);
  if (!iconObject) {
    return <House />;
  }

  let hexColor;
  if (!colorObject) {
    hexColor = "#000";
  } else {
    hexColor = colorObject.value;
  }
  const { Icon } = iconObject;

  return <Icon style={{ color: hexColor }} />;
}

export function DatePicker() {
  const [date, setDate] = useState("");

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
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
