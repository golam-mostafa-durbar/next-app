"use client";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchApi = async (
  url: string,
  method = "GET",
  body?: any,
  contentType = "application/json"
) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method,
      body,
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": contentType,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Unauthorize", { cause: response.status });
      }
      throw new Error(`HTTP error! status: ${response?.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(`Error fetching from ${url}:`, error);
    throw error;
  }
};
