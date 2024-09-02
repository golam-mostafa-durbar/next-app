"use client";

import useGetData from "@/hooks/useGetData";

const SinglePost = ({ params }: { params: { id: string } }) => {
  const { data, isError, isLoading } = useGetData(
    `posts/${params.id}`,
    `post-${params.id}`,
    0,
    !!params.id
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="flex flex-col gap-6 p-12">
      <h1 className="text-2xl font-semibold">Post Details:</h1>
      <div
        key={data.id}
        className="bg-gray-400 text-white p-4 flex flex-col space-y-3 rounded cursor-pointer"
      >
        <h2>Id: {data.id}</h2>
        <p className="flex-1">Title: {data.title}</p>
        <div>
          <span>Description: </span>
          <span dangerouslySetInnerHTML={{ __html: data.body }}></span>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
