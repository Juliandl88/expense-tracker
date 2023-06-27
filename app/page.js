"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([
    { name: "Coffe", price: 4.95 },
    { name: "Movie", price: 24.85 },
    { name: "Candy", price: 1.55 },
  ]);

  const [total, setTotal] = useState(0);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4 sm:p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm ">
        <h1 className="p-4 text-4xl text-center">Expense Tracker</h1>
        <div className="p-4 rounded-lg bg-slate-800">
          <form className="grid items-center grid-cols-6 text-black">
            <input
              type="text"
              placeholder="Enter Item"
              className="col-span-3 p-3 border"
            />
            <input
              type="number"
              placeholder="Enter $"
              className="col-span-3 p-3 mx-3 border"
            />
            <button
              type="submit"
              className='p-3 text-xl text-white bg-slate-950 hover:bg-slate-900'
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li key={id} className="flex justify-between w-full my-4">
                <div>
                  <span>{item.name}</span>
                  <span>%{item.price}</span>
                </div>
                <button>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
