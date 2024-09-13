import axios from "axios";
import {palavra} from "../types/palavra";

const api = axios.create({
    baseURL: "http://localhost:4466/",
    withCredentials: true,
});

export const getPalavras = (): Promise<palavra[]> => api.get("/palavra").then((response) => response.data);

export default api;