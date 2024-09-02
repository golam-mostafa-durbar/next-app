import Image from "@/components/image";

const ImagesPage = () => {
  return (
    <div className="p-8 flex flex-col space-y-8">
      <h1 className="text-center text-xl font-semibold">Images Collection</h1>
      <div style={{ position: "relative", width: "560px", height: "340px" }}>
        <Image
          path="free-images_VIjS9SSzJY.avif"
          alt="default"
          // width={960}
          // height={540}
          transformation={[
            // {
            //   rt: 90,
            // },
            {
              height: 340,
              width: 560,
              // quality: 100,
              // cropMode: "extract",
              // x: 2000,
              // y: 2000,
            },
            // { raw: "l-text,i-Imagekit,fs-50,l-end" },
          ]}
          loading="lazy"
          lqip={{ active: true, quality: 20 }}
        />
      </div>
    </div>
  );
};

export default ImagesPage;
