'use client';

import { useEffect, useState } from "react";

export default function Home() {

  const [categories, setCategories] = useState([]);
  
  function loadList(){ƒ
    fetch("http://localhost:4000/categories/list")
    .then((res)=> res.json())
    .then((data) => {
    setCategories(data);
    });
  }

  useEffect(() => {
    loadList();
  }, []);

  function createNew(){
    const name= propmt("Name...");
    fetch(`http://localhost:4000/categories/create?nme=${name}`)
    .then((res) => res.json())
    .then(()=>{
      loadList();
    });
  }

  return (
    <main>
      <button onClick={createNew}>Add new</button>
      {articles.map((article) => (
        <div key={article.id}>{article.title}</div>
      ))}      
    </main>
  );
}
