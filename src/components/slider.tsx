"use client";

import { useRef } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface ISliderProps {
  data: any;
  sliderId: string;
}

const Slider = ({ data, sliderId }: ISliderProps) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative">
      {/* Previous Button */}
      <div className="absolute top-1/2 left-0 z-10 ml-4">
        <button
          ref={prevRef}
          className={`custom-prev-${sliderId} text-white bg-black/50 p-2 rounded-full hover:bg-black/70`}
        >
          <AiOutlineLeft className="text-2xl" />
        </button>
      </div>

      {/* Next Button */}
      <div className="absolute top-1/2 right-0 z-10 mr-4">
        <button
          ref={nextRef}
          className={`custom-next-${sliderId} text-white bg-black/50 p-2 rounded-full hover:bg-black/70`}
        >
          <AiOutlineRight className="text-2xl" />
        </button>
      </div>

      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            const navigationOptions = swiper.params.navigation as {
              prevEl?: HTMLElement | null;
              nextEl?: HTMLElement | null;
            };
            navigationOptions.prevEl = prevRef.current;
            navigationOptions.nextEl = nextRef.current;
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        {data.map((image: any) => (
          <SwiperSlide key={Math.random() * 101}>
            <div className="w-full h-[260px] relative">
              <Image src={image} alt="Image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
