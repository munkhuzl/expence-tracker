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
    <main className="">
      <div className="flex grid-cols-2 mb-20">
        <div className="mx-auto">
          <Button onClick={createNew}>Add new</Button>
          {categories.map((category) => (
            <div key={category.name}>
              {category.name}
              <Button>Edit</Button>
              <Button
                onClick={() => handDelete(category.id)}
              >
                Delete
              </Button>
            </div>
          ))}

          <div className="bg-stone-50 mx-auto">
            <h1>
              Welcome Back
              <p>Welcome back, Please enter your details</p>
            </h1>
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
            <Button className="mx">Log in</Button>
          </div>
          <div className="bg-blue-600"></div>
        </div>
      </div>
    </main>
  );
}
