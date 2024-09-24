import axios from "axios";
import {palavra} from "../types/palavra";
import {smeqSubmit} from "../types/smeq";

const api = axios.create({
    baseURL: "http://localhost:4466/",
    withCredentials: true,
});

export const getPalavras = (): Promise<palavra[]> => api.get("/palavra").then((response) => response.data);
export const createSmeq = (data : smeqSubmit) => api.post("/smeq", data);

export default api;