"use client";

import React, { useState } from "react";

const InputField = ({ label }: { label: string }) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      {label === "Input Type 1" ? (
        <div className="w-full relative">
          <label
            htmlFor={label}
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm transition-all pointer-events-none bg-white px-1 ${
              focused ? "top-0 -translate-y-0 text-blue-500 text-xs" : ""
            }`}
          >
            {label}
          </label>

          <input
            id={label}
            type="text"
            className="w-full px-3 pt-5 pb-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onFocus={() => setFocused(true)}
            onBlur={(e) => setFocused(!!e.target.value)}
          />
        </div>
      ) : (
        <div className="w-full relative">
          <label
            htmlFor={label}
            className={`absolute left-3 -top-2.5 text-gray-500 text-sm pointer-events-none bg-white px-1.5`}
          >
            {label}
          </label>

          <input
            id={label}
            type="text"
            className="w-full px-4 pt-3.5 pb-2.5 border rounded-md border-gray-300 focus:outline-none"
          />
        </div>
      )}
    </>
  );
};

export default InputField;
