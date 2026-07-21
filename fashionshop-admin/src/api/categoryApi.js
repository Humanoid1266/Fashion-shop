import axios from "axios";

const pub = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000"}/api/v1`,
  headers: { Accept: "application/json" },
});

export const getCategories = () => pub.get("/categories");
