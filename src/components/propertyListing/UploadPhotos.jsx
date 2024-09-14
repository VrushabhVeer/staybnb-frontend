import React, { useState } from "react";
import { Link } from "react-router-dom";
import remove from "../../assets/icons/remove.png";
import Image from "../common/Image";
import { useDispatch } from "react-redux";
import { setUploadPhotos } from "../../redux/dataSlice";

const UploadPhotos = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const dispatch = useDispatch();
  const maxFiles = 6;

  // Handler for file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // If the total selected files exceed the max limit
    if (selectedFiles.length + files.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} photos.`);
      return;
    }

    setSelectedFiles((prevFiles) =>
      [...prevFiles, ...files].slice(0, maxFiles)
    ); // Ensure total selected files don't exceed the limit
  };

  // Handler for removing a selected photo
  const handleRemovePhoto = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  const handleSubmit = () => {
    dispatch(setUploadPhotos(selectedFiles));
  };

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-10 mb-20">
      <h1 className="text-2xl md:text-3xl font-bold">Upload Photos</h1>

      <div className="mt-10">
        {/* File input for selecting multiple images */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
          disabled={selectedFiles.length >= maxFiles} // Disable input if 6 photos are selected
        />

        {/* Display a message if photo limit is reached */}
        {selectedFiles.length >= maxFiles && (
          <p className="text-red-500 text-sm mt-2">
            You have reached the maximum limit of {maxFiles} photos.
          </p>
        )}

        {/* Preview of selected images */}
        {selectedFiles.length > 0 && (
          <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedFiles.map((file, index) => {
              const fileURL = URL.createObjectURL(file); // Create object URL for preview
              return (
                <div key={index} className="relative w-full">
                  <img
                    src={fileURL}
                    alt={`preview ${index}`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <button
                    className="absolute top-1 right-1"
                    onClick={() => handleRemovePhoto(index)}
                  >
                    <Image className="w-7" src={remove} alt="delete-image" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Link to="/publish">
        <button
          onClick={handleSubmit}
          className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8"
          disabled={selectedFiles.length === 0}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default UploadPhotos;
