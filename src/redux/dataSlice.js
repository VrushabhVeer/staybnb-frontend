import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyCategory: "",
  propertyType: "",
  amenities: [],
  address: {
    houseNumber: "",
    street: "",
    landmark: "",
    city: "",
    pinCode: "",
    state: "",
  },
  uploadPhotos: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPropertyCategory: (state, action) => {
      state.propertyCategory = action.payload;
    },
    setPropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    setAmenities: (state, action) => {
      state.amenities = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setUploadPhotos: (state, action) => {
      state.uploadPhotos = action.payload;
    },
  },
});

export const {
  setPropertyCategory,
  setPropertyType,
  setAmenities,
  setAddress,
  setUploadPhotos,
} = dataSlice.actions;
export default dataSlice.reducer;
