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
// import { format } from "date-fns"

import { cn } from "@/lib/utils";
// import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import Page3 from "./page3/page";
import e from "cors";
import { set } from "react-hook-form";

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

export default function Page2() {
  const [open, setOpen] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [name, setName] = useState([]);
  const [icon, setIcon] = useState("home");
  const [color, setColor] = useState("blue");
  const [editingCategory, setEditingCategory]= useState([]);

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

  function reset(){
    setName('');
    setColor('blue');
    setIcon('home');
  }

  function createNew() {
    setLoading(true);
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({ name: name, color: color, icon: icon }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })

      .then(() => {
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
  })
    .then(() => {
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
  useEffect(()=> {
    if (editingCategory){
    
      setOpen(true);
      setName(editingCategory.name);
      setIcon(editingCategory.icon);
      setColor(editingCategory.color);
        reset();
    }
  },[editingCategory])

  return (
    <main>
      <Page3 />
      <div className="w-[402px] mt-14 ml-10 rounded-sm border-black border-2 gap-6 ">
        <div className=" grid-cols-2 mb-20 ">
          <div className="mx-auto p-10">
            {" "}
            <h1 className="font-bold mb-5">Records</h1>
            <Input placeholder="search" className="mb-5"></Input>
            <div className="mt-14 rounded-sm border-black border-1 mb-2 pb-2">
              {categories.map((category) => (
                <div key={category.name} className="flex gap-2">
                  <CalendarIcon
                    iconName={category.icon}
                    color={category.color}
                  />
                  {category.name}
                  
                  <Button onClick={() => setEditingCategory(category)}>
                    Edit
                  </Button>
                  <Button onClick={() => handDelete(category.id)}>
                    Delete
                  </Button>
                </div>
              ))}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" onClick={() => setOpen(true)}>
                  Add new category
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[780]">
                <hr></hr>
                <form className=" flex grid-cols-2 mb-4 gap-3">
                  <div className="m-4 w-1/2 ">
                    <Button className="w-1/2 bg-blue-500 rounded-full">
                      Expense
                    </Button>
                    <Button className="bg-green-500 mb-3 w-1/2 rounded-full">
                      Income
                    </Button>
                    <br></br>
                    <Label placeholder="Amount" type="Amout">
                      Amount{" "}
                    </Label>
                    <Input
                      placeholder="Amount 
                ₮000.00"
                      className="my-3 mb-2  "
                    ></Input>
                    Category
                    <Select className="w-[356px]">
                      <SelectTrigger className=" w-full bg-white">
                        <SelectValue placeholder="Find or choose category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border rounded-md m-2 p-3">
                        <SelectGroup>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="secondary"
                                onClick={() => setOpen(true)}
                              >
                                Add new category
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                <DialogTitle>Add Category</DialogTitle>
                                <hr className="mt-2"></hr>
                              </DialogHeader>
                              <div className="flex gap-1">
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button variant="secondary">
                                      <CategoryIcon
                                        iconName={icon}
                                        color={color}
                                      />
                                      <ChevronDown className="ml-2 h-4 w-4 " />
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-80">
                                    <div className="grid grid-cols-6 gap-2 bg-white">
                                      {categoryIcons.map(({ name, icon }) => (
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
                                    <hr></hr>
                                    <div className="grid grid-cols-7 bg-white">
                                      {categoryColors.map(({ name, value }) => (
                                        <div
                                          key={name}
                                          onClick={() => setColor(name)}
                                          className="h-7 w-7 mt-3 text-white flex rounded-full justify-center items-center m-2 "
                                          style={{ backgroundColor: value }}
                                        >
                                          {color === name && (
                                            <Check className="w-4 h-4" />
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                    <hr></hr>
                                  </PopoverContent>
                                </Popover>
                                <Input
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  className="col-span-3"
                                  placeholder="Name"
                                ></Input>
                              </div>
                              <div className="flex"></div>
                              <DialogFooter>
                                <Button
                                  type="submit"
                                  className="w-full rounded-full bg-green-400 hover:bg-green-900"
                                  onClick={createNew}
                                >
                                  Add
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>

                          <SelectItem className="flex gap-2">
                            <HomeIcon className="text-blue-500"></HomeIcon> Home
                            <ChevronDown className=" h-4 w-4 " />
                          </SelectItem>
                          <SelectItem className="flex gap-2">
                            <Gift className="text-pink-500" />
                            Gift
                          </SelectItem>
                          <SelectItem className="flex gap-2">
                            <FolderOpenDot className="text-orange-300" />
                            Food
                          </SelectItem>
                          <SelectItem className="flex gap-2">
                            <Wine className="text-red-500" />
                            Drink{" "}
                          </SelectItem>
                          <SelectItem className="flex gap-2">
                            <CarTaxiFront className="text-yellow-500" />
                            Taxi{" "}
                          </SelectItem>
                          <SelectItem className="flex gap-2">
                            <Shirt className="text-purple-500" />
                            Shopping{" "}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Label placeholder="Amount" type="Amout">
                      Amount{" "}
                    </Label>
                    <div className="flex gap-2 mt-2">
                      <DatePicker className="bg-slate-300" />
                      <DatePicker />
                    </div>
                    <Button className="bg-green-500 w-full rounded-full mt-5">
                      Add record
                    </Button>
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
                <DialogFooter>
                  {editingCategory ? (
                    <Button onClick={createNew}>Save changes</Button>
                  ) : (
                    <Button onClick={updateCategory}>Save changes</Button>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </main>
  );
}

function CategoryIcon({ iconName, color }) {
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
  const [Icon] = iconObject;

  return <Icon style={{ color: hexColor }} />;
}

export function DatePicker() {
  const [date, setDate] = useState();

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
      <PopoverContent className="w-auto p-0 bg-white" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className={"b border rounded-lg w-1/2"}
        />
      </PopoverContent>
    </Popover>
  );
}

export function newCategory() {}
