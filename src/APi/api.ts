import axios from "axios";
const stage = "dev";
const url = {
  prod: "https://api.ax.com/api/v1",
  dev: "http://localhost:4000/api/v1/",
};
const BASE_URL = url[stage];

export const Instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
