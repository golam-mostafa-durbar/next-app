"use client";

import Link from "next/link";
import React, { useState } from "react";

import useGetData from "@/hooks/useGetData";
import useDeleteData from "@/hooks/useDeleteData";

const Posts = () => {
  const [postId, setPostId] = useState("");

  const { data, isError, isLoading } = useGetData("posts", "posts", 0);

  const {
    data: cData,
    isError: cError,
    isLoading: cLoading,
  } = useGetData(`posts/${postId}/comments`, `postId-${postId}`, 0, !!postId);

  const { mutate } = useDeleteData("posts", "posts");

  const handlePostDelete = (e: any, id: any) => {
    e.stopPropagation();

    mutate(id);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="flex flex-col gap-6 p-12">
      <h1 className="text-2xl font-semibold">Posts:</h1>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.length > 0 &&
          data.slice(0, 8).map((post: any) => (
            <div
              key={post.id}
              className="bg-gray-400 text-white p-4 flex flex-col space-y-3 rounded cursor-pointer"
              onClick={() => setPostId(post.id)}
            >
              <h2>Id: {post.id}</h2>
              <p className="flex-1">Title: {post.title}</p>

              <div className="flex gap-x-6">
                <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm w-max cursor-pointer">
                  <Link href={`/posts/${post.id.toString()}`}>View</Link>
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded text-sm w-max cursor-pointer"
                  onClick={(e) => handlePostDelete(e, post.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      <h1 className="text-2xl font-semibold">Comments:</h1>
      {postId && cLoading && <p>Loading...</p>}
      {postId && cError && <p>Something went wrong!</p>}
      <div className="w-full grid grid-cols-4 gap-6">
        {cData?.length > 0 &&
          cData.map((comment: any) => (
            <div
              key={comment.id}
              className="bg-gray-400 text-white p-4 space-y-3 rounded cursor-pointer"
            >
              <h2>Id: {comment.id}</h2>
              <p>Name: {comment.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Posts;
