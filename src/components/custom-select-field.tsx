"use client";

import Image from "next/image";
import { useState } from "react";

import SelectModal from "./select-modal";
import arrowDownSvg from "@/assets/arrow-down.svg";

interface ICustomSelectFieldProps {
  label: string;
}

const CustomSelectField = ({ label }: ICustomSelectFieldProps) => {
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleOpen = (type: string | undefined) => {
    setType(type || "");
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full relative">
      <label className="absolute left-3 -top-2.5 text-gray-500 text-sm pointer-events-none bg-white px-1.5">
        {label}
      </label>

      <div
        className="w-full px-4 pt-3 pb-2 border rounded-md border-gray-300 flex justify-between gap-4"
        onClick={() => handleOpen(label)}
      >
        <p>{selectedItem}</p>
        <Image src={arrowDownSvg} alt="arrowDownSvg" height={24} width={24} />
      </div>

      {type === label && open && (
        <div className="absolute inset-0 top-14 left-0 z-20">
          <SelectModal
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            onClose={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CustomSelectField;
