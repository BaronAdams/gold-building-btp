import axios from "axios"

const isDev = process.env.NODE_ENV === "development"

export const GBApi = axios.create({
    baseURL: isDev ? "http://localhost:3000/api" : process.env.REMIX_PUBLIC_API_URL,
    withCredentials: true
})