import axios from "axios";

export const BASE_URL = "https://e-commersitebackend.onrender.com/shop"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg2MGQ3ZmJhMzBhYmE4ZDg4NDY4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDE5Mzc1OCwiZXhwIjoxNjY0MzY2NTU4fQ.skZUYtaHZv9C8O9xRtYN736c6gHlSY3-yMaX1mtQa2s"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});