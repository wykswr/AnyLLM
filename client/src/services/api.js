import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const wsURL = "ws://localhost:8000/chat";

export const getModels = async () => {
    const response = await api.get("/models");
    return response.data;
}