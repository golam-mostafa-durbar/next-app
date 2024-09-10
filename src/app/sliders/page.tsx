import Slider from "@/components/slider";

import Image1 from "@/assets/image-1.jpg";
import Image2 from "@/assets/image-2.jpg";
import Image3 from "@/assets/image-3.jpg";
import Image4 from "@/assets/image-4.jpg";

const slider1Images = [Image1, Image2];
const slider2Images = [Image3, Image4];

const SlidersPage = () => {
  return (
    <div className="flex flex-col space-y-8 p-6">
      <h1 className="text-2xl font-semibold text-center">Swiper Slider</h1>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Slider 1: </h2>
        <Slider data={slider1Images} sliderId="slider1" />
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-medium">Slider 2: </h2>
        <Slider data={slider2Images} sliderId="slider2" />
      </div>
    </div>
  );
};

export default SlidersPage;