import Image from "next/image";

import { Image1, Image2, Image3, Image4 } from "@/lib/images";

const ImagePage = () => {
  return (
    <div className="p-7 flex flex-col gap-3">
      <h1 className="text-center text-2xl font-bold mb-5">
        Responsive Image Gallery
      </h1>

      {/* imgage styling  */}
      <h2 className="font-semibold text-lg">Image Styling</h2>
      <div className="bg-slate-200 w-full">
        <Image
          src={Image1}
          alt="Image"
          placeholder="blur"
          className="w-full h-[280px]"
        />
      </div>

      {/* local pattern - multiple row */}
      <h2 className="font-semibold text-lg mt-4">
        Local Pattern - Multiple Row
      </h2>
      <div className="flex flex-wrap gap-4 justify-between">
        <Image
          src={Image1}
          alt="Image1"
          placeholder="blur"
          className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-auto"
        />
        <Image
          src={Image2}
          alt="Image2"
          placeholder="blur"
          className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-auto"
        />
        <Image
          src={Image3}
          alt="Image3"
          placeholder="blur"
          className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-auto"
        />
        <Image
          src={Image4}
          alt="Image4"
          placeholder="blur"
          className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-auto"
        />
      </div>

      {/* remote pattern - multiple row */}
      <h2 className="font-semibold text-lg mt-4">
        Remote Pattern - Multiple Row
      </h2>
      <div className="w-full flex flex-wrap gap-4 justify-between">
        <div className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-[220px] relative">
          <Image src={Image1} alt="Image1" fill placeholder="blur" />
        </div>
        <div className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-[220px] relative">
          <Image src={Image2} alt="Image2" fill placeholder="blur" />
        </div>
        <div className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-[220px] relative">
          <Image src={Image3} alt="Image3" fill placeholder="blur" />
        </div>
        <div className="w-full sm:w-[calc(50%-.67rem)] lg:w-[calc(25%-1rem)] h-[220px] relative">
          <Image src={Image4} alt="Image4" fill placeholder="blur" />
        </div>
      </div>

      {/* single row - using flex */}
      <h2 className="font-semibold text-lg mt-4">Single Row - Flex</h2>
      <div className="flex justify-between">
        <Image
          src={Image1}
          alt="Image1"
          className="w-[calc(25%-1rem)] h-auto"
        />
        <Image
          src={Image2}
          alt="Image2"
          className="w-[calc(25%-1rem)] h-auto"
        />
        <Image
          src={Image3}
          alt="Image3"
          className="w-[calc(25%-1rem)] h-auto"
        />
        <Image
          src={Image4}
          alt="Image4"
          className="w-[calc(25%-1rem)] h-auto"
        />
      </div>

      {/* single row - using grid */}
      <h2 className="font-semibold text-lg mt-4">Single Row - Grid</h2>
      <div className="grid grid-cols-4 gap-[1.33rem]">
        <Image src={Image1} alt="Image1" className="w-full h-auto" />
        <Image src={Image2} alt="Image2" className="w-full h-auto" />
        <Image src={Image3} alt="Image3" className="w-full h-auto" />
        <Image src={Image4} alt="Image4" className="w-full h-auto" />
      </div>

      <h2 className="font-semibold text-lg mt-4">Single Image</h2>
      <Image src={Image2} alt="Image1" className="w-full h-auto" />
    </div>
  );
};

export default ImagePage;
