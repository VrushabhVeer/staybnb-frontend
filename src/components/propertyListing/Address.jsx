import React, { useState } from "react";
import { Link } from "react-router-dom";

const Address = () => {
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = () => {
    const address = {
      houseNumber,
      street,
      landmark,
      city,
      pinCode,
      state,
    };

    console.log(address)
  };

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-10 mb-20">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Where your place located?
        </h1>
      </div>

      <form className="mt-8">
        <div className="mb-4">
          <input
            type="text"
            id="house"
            placeholder="House,flat,building, etc"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            required
            className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="street"
            placeholder="Street address"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
            className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="landmark"
            placeholder="Landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            required
            className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="number"
            id="pincode"
            placeholder="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            required
            className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-8">
          <input
            type="text"
            id="state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="w-full px-4 py-3 mt-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <Link to="/uploadphotos">
          <button
            onClick={handleSubmit}
            className="px-10 py-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wide font-medium rounded-md"
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Address;