const isDev = process.env.NODE_ENV === "development"
export const apiUrl = isDev ? "http://localhost:3000/api" : process.env.REMIX_PUBLIC_API_URL
export const serverUrl = isDev ? "http://localhost:3000" : process.env.REMIX_PUBLIC_SERVER_URL