"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { generateRandomToken } from "@/lib/generateToken";
import { setCookieWithMinutes, setCookieWithDays } from "@/lib/cookie";

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = await generateRandomToken();

    // setCookieWithDays("test-token", token, 7);
    setCookieWithMinutes("test-token", token, 2);

    return router.push("/");
  };

  return (
    <div className="w-full flex justify-center py-12">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 bg-slate-400 shadow-lg rounded-lg p-7 flex flex-col gap-y-4"
      >
        <h1 className="text-center text-2xl text-white font-semibold mb-4">
          Login
        </h1>
        <input
          required
          type="username"
          name="username"
          placeholder="enter your name"
          value={user.username}
          onChange={handleChange}
          className="outline-none border-none px-4 py-1.5 rounded-md"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="enter password"
          value={user.password}
          onChange={handleChange}
          className="outline-none border-none px-4 py-1.5 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded w-max cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
