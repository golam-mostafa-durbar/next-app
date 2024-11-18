"use client";

import CustomSelectField from "./custom-select-field";

const RecommendationForm = () => {
  return (
    <div className="w-full py-4 px-12 grid grid-cols-2 gap-8">
      <CustomSelectField label="Country" />
      <CustomSelectField label="Services" />
      <CustomSelectField label="Staffs" />
      <CustomSelectField label="Staff Types" />
    </div>
  );
};

export default RecommendationForm;
