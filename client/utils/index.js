import axios from 'axios';

const API_URL = "http://localhost:8800";

export const API = axios.create({
    baseURL: API_URL,
    responseType: "json",
});

export const apiRequest = async (method, url, data = null, params = null) => {
    try{

    } catch (error) {
        console.error(error);
    }
}