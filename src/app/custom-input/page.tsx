import InputField from "@/components/input-field";

const CustomInput = () => {
  return (
    <div className="w-full p-8 flex flex-col items-center gap-8">
      <h1 className="text-xl font-bold">Custom Input Field</h1>

      <form className="w-1/5 flex flex-col gap-8">
        <InputField label="Input Type 1" />
        <InputField label="Input Type 2" />
      </form>
    </div>
  );
};

export default CustomInput;
