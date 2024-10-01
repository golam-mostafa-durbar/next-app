"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";
import { Image1, Image2, Image3, Image4 } from "@/lib/images";

const images = [Image1, Image2, Image3, Image4];

const PlayPage = () => {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-2xl font-semibold text-center pt-6">Swiper Slider</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image: any) => (
          <SwiperSlide key={Math.random() * 101}>
            <div className="w-full h-[360px] relative">
              <Image src={image} alt="Image" />
              <div className=" absolute inset-0 z-20 flex items-center justify-center">
                <p className="text-white text-2xl font-bold text-shadow">
                  This is a Swiper Slider to show the collection of Images.
                </p>

                {/* <div className="bg-black p-2 rounded">
                  <h2 className="text-white text-2xl font-bold">
                    This is a Swiper Slider to show the collection of Images.
                  </h2>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlayPage;
