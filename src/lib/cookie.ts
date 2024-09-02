// "use client";
"use server";

// import Cookies from "js-cookie";
import { cookies } from "next/headers";

export const setCookieWithMinutes = (
  name: string,
  value: string,
  minutes: number
) => {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + minutes * 60000); // 60000 ms per minute

  // Cookies.set(name, value, { expires: expiresAt });
  cookies().set(name, value, { expires: expiresAt });
};

export const setCookieWithDays = (
  name: string,
  value: string,
  days: number
) => {
  // Cookies.set(name, value, { expires: days });
  cookies().set(name, value, { expires: days });
};

export const getCookie = (name: string) => {
  // return Cookies.get(name)?.value;
  return cookies().get(name)?.value;
};
