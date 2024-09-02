"use server";

import { randomBytes } from "crypto";

export const generateRandomToken = () => {
  const token = randomBytes(16).toString("hex");
  return token;
};
