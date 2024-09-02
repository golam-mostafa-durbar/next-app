import Video from "@/components/video";

const VideosPage = () => {
  const videoPath = "";

  return (
    <div className="p-8 flex flex-col space-y-8">
      <h1 className="text-center text-xl font-semibold">Videos Collection</h1>
      <div style={{ position: "relative", width: "960px", height: "540px" }}>
        <Video
          path={videoPath}
          transformation={[{ height: 500, width: 300 }]}
          controls={true}
        />
      </div>
    </div>
  );
};

export default VideosPage;
