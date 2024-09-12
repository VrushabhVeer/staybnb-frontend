import React from "react";
import Image from "./Image";

const OptionCard = ({ src, alt, label, onSelect }) => {
  return (
    <div onClick={onSelect} className="p-5 border border-gray-300 hover:border-gray-500 rounded-md flex items-center justify-center cursor-pointer">
      <div className="flex flex-col items-center text-center">
        <Image className="w-10" src={src} alt={alt} />
        <p className="mt-3 font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default OptionCard;