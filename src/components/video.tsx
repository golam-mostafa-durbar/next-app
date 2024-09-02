"use client";

import React from "react";
import { IKVideo } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = (props: any) => {
  return (
    <div>
      <IKVideo urlEndpoint={urlEndpoint} {...props} />
    </div>
  );
};

export default Video;
