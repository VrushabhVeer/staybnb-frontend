import React from "react";
import { Link } from "react-router-dom";

const UploadPhotos = () => {
    return (
        <div>
            <Link to="/publish">
                <button className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md mt-8">
                    Next
                </button>
            </Link>
        </div>
    );
};

export default UploadPhotos;
