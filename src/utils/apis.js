import axios from "axios";
import { BASE_URL } from "./data";

const api = axios.create({
  baseURL: BASE_URL,
});

export const addProperty = (payload) =>
  api.post("/properties/create", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getAllProperties = () => {
  return api.get("/properties");
};
