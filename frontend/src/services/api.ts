import axios from "axios";
import {palavra} from "../types/palavra";
import {smeqSubmit} from "../types/smeq";
import {tamSubmit} from "../types/tam";

const api = axios.create({
    baseURL: "http://localhost:4466/",
    withCredentials: true,
});

export const getPalavras = (): Promise<palavra[]> => api.get("/palavra").then((response) => response.data);
export const createSmeq = (data : smeqSubmit) => api.post("/smeq", data);
export const createTAM = (data: tamSubmit) => api.post("/tam",data);

export default api;