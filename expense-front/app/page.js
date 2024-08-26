"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [categories, setCategories] = useState([]);

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

  function handDelete(id) {
    fetch(`http://localhost:4000/categories/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 404) {
        alert("Category not found");
      }
      loadList();
    });
  }

  function createNew() {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }

  return (
    <main className="bg-slate-50 flex grid-cols-2">
      <div className="flex grid-cols-2 mb-20 w-1/2">
        <div className="mx-auto p-10">
          <Button onClick={createNew}>Add new</Button>
          {categories.map((category) => (
            <div key={category.name}>
              {category.name}
              <Button className="ml-10">Edit</Button>
              <Button className="ml-3" onClick={() => handDelete(category.id)}>
                Delete
              </Button>
            </div>
          ))}
          <div className="bg-slate-50 mx-auto mt-16">
            <h1 className="font-bold">Welcome Back</h1>
            <p className="">Welcome back, Please enter your details</p>
            <Input
              placeholder="Enter your email"
              type="email"
              className="mb-5 mt-4"
            ></Input>
            <Input
              placeholder="Enter your password"
              type="password"
              className="mb-5"
            ></Input>
            <Button className="mx-auto">Log in</Button>
          </div>
        </div>
        <div className="bg-blue-900"></div>
      </div>
      <div className="bg-blue-600 w-1/2"></div>
    </main>
  );
}
