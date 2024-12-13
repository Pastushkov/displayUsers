import axios from "axios";
import { API_HOST } from "../environmentVars";

export const api = axios.create({
  baseURL: `${API_HOST}`,
  headers: {
    "Content-Type": "application/json",
  },
});
