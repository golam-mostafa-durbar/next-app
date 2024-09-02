"use client";

import React from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = (props: any) => {
  return (
    <div>
      <IKImage urlEndpoint={urlEndpoint} {...props} />
    </div>
  );
};

export default Image;
