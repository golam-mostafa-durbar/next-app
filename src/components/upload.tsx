"use client";

import React, { useRef } from "react";
import { ImageKitProvider, IKUpload } from "imagekitio-next";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Upload = () => {
  const ikUploadRef = useRef<HTMLInputElement>(null);

  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/upload-auth");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error: any) {
      throw new Error(`Authentication request failed: ${error?.message}`);
    }
  };

  const onError = (err: any) => {
    console.log("Error", err);
  };

  const onSuccess = (res: any) => {
    console.log("Success", res);
  };

  const onUploadProgress = (progress: any) => {
    console.log("Progress: ", progress);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Upload an Image</h2>
        <IKUpload
          useUniqueFileName
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={onUploadProgress}
          style={{ display: "none" }}
          ref={ikUploadRef}
        />
        <button
          onClick={() => ikUploadRef.current?.click()}
          className="bg-gray-500 text-white px-6 py-2 cursor-pointer rounded"
        >
          Custom Upload Button
        </button>
      </div>
    </ImageKitProvider>
  );
};

export default Upload;
