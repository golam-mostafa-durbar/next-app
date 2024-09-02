"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Test useEffect rendering...");
  }, []);

  return (
    <div className="flex flex-col space-y-6 items-center my-12">
      <h1 className="text-2xl font-semibold">Welcome to the Next App</h1>

      <div className="flex gap-x-6">
        <button
          className="bg-gray-500 text-white rounded px-4 py-1"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 text-white rounded px-4 py-1"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>

      <p>Count: {count}</p>
    </div>
  );
}
