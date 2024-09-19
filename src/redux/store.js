import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["data/setUploadPhotos"], // Ignore the action for non-serializable data
        ignoredPaths: ["data.uploadPhotos"], // Ignore this specific path
      },
    }),
});
export default store;
