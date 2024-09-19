import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Stays from "../pages/Stays";
import PropertyListing from "../pages/PropertyListing";
import Publish from "../components/propertyListing/Publish";
import CompleteListing from "../components/propertyListing/CompleteListing";
import PropertyCategory from "../components/propertyListing/PropertyCategory";
import PropertyType from "../components/propertyListing/PropertyType";
import Amenities from "../components/propertyListing/Amenities";
import UploadPhotos from "../components/propertyListing/UploadPhotos";
import Address from "../components/propertyListing/Address";
import NotFound from "../pages/NotFound";
import PropertyDetails from "../pages/PropertyDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/stays" element={<Stays />} />
      <Route path="/property_details" element={<PropertyDetails />} />
      <Route path="/propertylisting" element={<PropertyListing />} />
      <Route path="/property_category" element={<PropertyCategory />} />
      <Route path="/property_type" element={<PropertyType />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/address" element={<Address />} />
      <Route path="/uploadphotos" element={<UploadPhotos />} />
      <Route path="/publish" element={<Publish />} />
      <Route path="/completelisting" element={<CompleteListing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
