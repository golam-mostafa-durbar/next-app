import Image from "@/components/image";

export const getData = async () => {
  const url = "http://admin.guardsbe.com/api/v1/frontend-configuration";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

const ImagesPage = async () => {
  const data = await getData();

  return (
    <div className="w-full ">
      {data.data?.[0]?.carousels?.slice(0, 1)?.map((item: any) => (
        <div
          key={item?.id}
          className="w-full max-h-[calc(100dvh-4rem)] aspect-video relative"
        >
          <Image
            src={item?.image1}
            alt="image"
            fill
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full lg:w-1/3 p-4 sm:p-8 lg:px-12 text-white flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">This is a Demo Image</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet minus architecto dolorum culpa voluptates nemo!
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="p-8 flex flex-col space-y-8">
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
      </div> */}
    </div>
  );
};

export default ImagesPage;
