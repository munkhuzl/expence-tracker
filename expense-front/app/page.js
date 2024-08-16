"use client";

import { useEffect, useState } from "react";

export default function Home() {
  let [categories, setCategories] = useState([]);

  function loadList() {
    fetch("http://localhost:4000/categories/list")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  useEffect(() => {
    loadList();
  }, []);

  function createNew() {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories/create?name=${name}`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        loadList();
      });
  }

  function Delete(name) {
    if(confirm("Are u sure?"))
      {name.splice(name,1);
    render();
      }
  }
  return (
    <main>
      <div>
        <button onClick={createNew}>Add new</button>
        {categories.map((category) => (
          <div key={category.id}>
            {category.name}
            <button >Edit</button>
            <button onClick={Delete} method="POST" className="btn btn-primary" formAction="/categories/delete">Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}
