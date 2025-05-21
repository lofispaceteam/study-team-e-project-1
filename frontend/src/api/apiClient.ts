import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://run.mocky.io",
  timeout: 10000,
});
