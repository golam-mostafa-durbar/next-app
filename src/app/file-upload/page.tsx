import Upload from "@/components/upload";

const FileUploadPage = () => {
  return (
    <div className="p-8 flex flex-col space-y-8">
      <h1 className="text-center text-xl font-semibold">Image Uploading</h1>
      <div style={{ position: "relative", width: "960px", height: "540px" }}>
        <Upload />
      </div>
    </div>
  );
};

export default FileUploadPage;
