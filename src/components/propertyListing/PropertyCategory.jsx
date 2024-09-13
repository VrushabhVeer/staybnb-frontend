import React, { useState } from "react";
import OptionCard from "../../components/common/OptionCard";
import { placeTypes } from "../../utils/data";
import { Link } from "react-router-dom";

const PropertyCategory = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-10 mb-20">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Which of these best describes your place?
        </h1>
        <p className="mt-2 text-blue-600">
          {selectedItem ? `${selectedItem}` : "No selection made yet"}
        </p>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {placeTypes.map(({ src, alt, label }, index) => (
          <OptionCard
            key={index}
            src={src}
            alt={alt}
            label={label}
            onSelect={() => handleSelect(label)}
          />
        ))}
      </div>

      <Link to="/property_type">
        <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8">
          Next
        </button>
      </Link>
    </div>
  );
};

export default PropertyCategory;
